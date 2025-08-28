const firebaseConfig = {
    apiKey: "AIzaSyAQzQ8YuS3zNq2Dp40vHNNiFaQI6Yjl0wE",
    authDomain: "sefcinfo.firebaseapp.com",
    projectId: "sefcinfo",
    storageBucket: "sefcinfo.firebasestorage.app",
    messagingSenderId: "745959737246",
    appId: "1:745959737246:web:97eca4876e73113b98f88f",
    measurementId: "G-BEHCWWHSR0"
};

// --- Firebase 초기화 ---
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// --- HTML 요소 가져오기 (이전과 동일) ---
const boardHeader = document.getElementById('board-header');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const userInfoDiv = document.getElementById('user-info');
const userName = document.getElementById('user-name');
const postForm = document.getElementById('post-form');
const postContent = document.getElementById('post-content');
const postsContainer = document.getElementById('posts-container');
const editProfileBtn = document.getElementById('edit-profile-btn');
const profileModal = document.getElementById('profile-modal');
const profileNameInput = document.getElementById('profile-name-input');
const profileSaveBtn = document.getElementById('profile-save-btn');

// --- 전역 '상태(State)' 변수 ---
let currentUser = null;
let isAdmin = false;
let postsCache = [];
let unsubscribeUserProfile = null;
let isFirstLoad = true

// --- 핵심 로직 ---
const urlParams = new URLSearchParams(window.location.search);
const filterUid = urlParams.get('uid');

// 1. 게시물 실시간 감시 시작 (데이터만 가져와서 상태 변수 업데이트)
const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

let postsQuery = db.collection('posts').where('timestamp', '>=', twentyFourHoursAgo).orderBy('timestamp', 'asc');
if (filterUid) {
    postsQuery = postsQuery.where('uid', '==', filterUid);
}

postsQuery.onSnapshot(snapshot => {
    postsCache = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    render(); // 데이터가 변경될 때마다 화면 전체를 다시 그림

    if (isFirstLoad && postsCache.length > 0) {

        // --- 텍스트 입력창 높이 및 여백 계산 ---
        postContent.style.height = 'auto';
        postContent.style.height = postContent.scrollHeight + 'px';

        postsContainer.style.marginBottom = (postContent.scrollHeight + 100) + 'px';

        // 페이지 전체를 맨 아래로 스크롤
        window.scrollTo(0, document.body.scrollHeight);

        isFirstLoad = false; // 스위치를 꺼서 다시는 이 코드가 실행되지 않도록 함
    } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
}, error => {
    console.error("게시물 로딩 오류:", error);
    postsContainer.innerHTML = "<p>게시물을 불러오는 데 실패했습니다.</p>";
});

// 2. 인증 상태 감시 시작 (상태 변수만 업데이트)
auth.onAuthStateChanged(async (user) => {
    if (unsubscribeUserProfile) unsubscribeUserProfile();

    if (user) {
        currentUser = user;
        const adminDoc = await db.collection('admins').doc(user.uid).get();
        isAdmin = adminDoc.exists;

        // 사용자 프로필 실시간 감시
        unsubscribeUserProfile = db.collection('users').doc(user.uid).onSnapshot(doc => {
            const customName = doc.exists && doc.data().displayName ? doc.data().displayName : currentUser.displayName;
            userName.textContent = customName; // 프로필 이름은 즉시 업데이트
        });
    } else {
        currentUser = null;
        isAdmin = false;
    }
    render(); // 인증 상태가 변경될 때마다 화면 전체를 다시 그림
});

// 3. ✅ 모든 화면 그리기를 총괄하는 단 하나의 함수!
function render() {
    // 3-1. 로그인/UI 상태 업데이트
    const isLoggedIn = !!currentUser;
    loginBtn.classList.toggle('hidden', isLoggedIn);
    userInfoDiv.classList.toggle('hidden', !isLoggedIn);
    postForm.classList.toggle('hidden', !isLoggedIn);

    // 3-2. 게시물 목록 그리기
    postsContainer.innerHTML = '';
    if (postsCache.length === 0) {
        postsContainer.innerHTML = '<p>아직 게시물이 없습니다.</p>';
    } else {
        postsCache.forEach(post => {
            const postElement = document.createElement('div');

            // 1. 기본 클래스는 'post'로 설정합니다.
            let postClasses = ['post'];

            // 2. 만약 로그인했고, 글 작성자가 '나' 자신이라면 'my-post' 클래스를 추가합니다.
            if (currentUser && currentUser.uid === post.uid) {
                postClasses.push('my-post');
            } else {
                // 3. 그 외의 모든 경우(로그아웃했거나, 다른 사람의 글)는 'other-post' 클래스를 추가합니다.
                postClasses.push('other-post');
            }

            // 만약 글의 작성자(author) 이름이 "SEFCiNFO" 라면,
            if (post.author === "SEFCiNFO") {
                // 'admin-post' 라는 특별한 클래스를 추가합니다.
                postClasses.push('admin-post');
            }

            // 4. 배열로 만든 클래스들을 실제 엘리먼트의 className으로 설정합니다.
            postElement.className = postClasses.join(' ');

            let deleteBtnHTML = '';
            if (currentUser && (isAdmin || currentUser.uid === post.uid)) {
                deleteBtnHTML = `<button class="post-delete-btn" data-id="${post.id}">삭제</button>`;
            }

            const postDate = post.timestamp ? post.timestamp.toDate().toLocaleString('ko-KR') : '';

            postElement.innerHTML = `
        <div>
            <a href="?uid=${post.uid}" class="post-author-link">
                <div class="post-header">
                    <span class="post-author-name">${post.author}</span>
                </div>
            </a>
            <p class="post-content">${(post.content || "").replace(/\n/g, '<br>')}</p>
            <div class="post-date">${postDate}</div>
        </div>
        ${deleteBtnHTML}`;
            postsContainer.appendChild(postElement);
        });
    }

    // 3-3. 게시판 헤더 업데이트
    if (filterUid) {
        db.collection('users').doc(filterUid).get().then(doc => {
            const name = doc.exists && doc.data().displayName ? doc.data().displayName : '알 수 없는 사용자';
            boardHeader.innerHTML = `<p>${name} 님의 글 목록</p><a href="/forum" glass='true'>전체 글 보기</a>`;
        });
    } else {
        boardHeader.innerHTML = `<p>전체 글 목록</p>`;
    }
}


// --- 이벤트 리스너 (이전과 동일) ---
// (이하 모든 이벤트 리스너 코드는 이전 버전과 동일하게 유지됩니다. 
//  아래 코드를 그대로 사용하시거나, 이전 버전에서 복사해서 사용하세요.)
loginBtn.addEventListener('click', () => auth.signInWithPopup(googleProvider).catch(e => console.error(e)));
logoutBtn.addEventListener('click', () => auth.signOut().catch(e => console.error(e)));

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const content = postContent.value.trim();
    if (content === '' || !currentUser) return;

    try {
        const userDoc = await db.collection('users').doc(currentUser.uid).get();
        const authorName = userDoc.exists && userDoc.data().displayName ? userDoc.data().displayName : currentUser.displayName;

        await db.collection('posts').add({
            uid: currentUser.uid,
            author: authorName,
            content: content,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        postContent.value = '';
        postContent.style.height = 'auto';
        
        postContent.focus(); // 전송 후에도 텍스트 입력창에 포커스를 유지

    } catch (error) {
        console.error("글 작성 오류: ", error);
        alert("글 작성에 실패했습니다. 콘솔을 확인하세요.");
    }
});

postsContainer.addEventListener('click', (e) => { const deleteBtn = e.target.closest('.post-delete-btn'); if (deleteBtn) { const postId = deleteBtn.getAttribute('data-id'); if (confirm('정말 이 글을 삭제하시겠습니까? 삭제 후에는 글을 복구할 수 없습니다.')) { db.collection('posts').doc(postId).delete().catch(e => console.error("삭제 오류: ", e)); } } });
editProfileBtn.addEventListener('click', async () => { if (!currentUser) return; const userDoc = await db.collection('users').doc(currentUser.uid).get(); const customName = userDoc.exists && userDoc.data().displayName ? userDoc.data().displayName : currentUser.displayName; profileNameInput.value = customName; profileModal.classList.remove('hidden'); });
profileModal.addEventListener('click', (event) => {
    if (event.target === profileModal) {
        profileModal.classList.add('hidden');
    }
});
profileSaveBtn.addEventListener('click', async () => {
    // 1. ✅ 사용자가 입력한 값을 소문자로 변환해서 newName 변수에 저장
    const newName = profileNameInput.value.trim().toLowerCase();
    
    if (!currentUser) return;

    // --- 닉네임 유효성 검사 (기존과 동일) ---
    if (newName.length < 4 || newName.length > 16) {
        alert('닉네임은 4자 이상 16자 이하로 입력해주세요.');
        return;
    }
    const nameRegex = /^[a-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+$/; // ✅ 정규식도 소문자만 허용하도록 변경 (a-z)
    if (!nameRegex.test(newName)) {
        alert('닉네임은 영문 소문자, 한글, 숫자만 사용할 수 있습니다 (특수문자, 공백, 대문자 불가).');
        return;
    }

    try {
        // --- 2. 닉네임 중복 확인 (비교 대상도 소문자) ---
        const usersRef = db.collection('users');
        // ✅ newName 자체가 소문자이므로, 데이터베이스에 저장된 소문자 닉네임과 바로 비교 가능
        const querySnapshot = await usersRef.where('displayName_lowercase', '==', newName).get();

        let isDuplicate = false;
        querySnapshot.forEach(doc => {
            if (doc.id !== currentUser.uid) {
                isDuplicate = true;
            }
        });

        if (isDuplicate) {
            alert('이미 사용 중인 닉네임입니다. 다른 닉네임을 입력해주세요.');
            return;
        }

        // --- 3. 프로필 저장 및 이전 게시물 업데이트 ---
        // ✅ 사용자가 입력한 원래 이름과, 검색용 소문자 이름을 둘 다 저장
        const originalName = profileNameInput.value.trim(); 
        await db.collection('users').doc(currentUser.uid).set({ 
            displayName: originalName, // 화면에 보여줄 이름
            displayName_lowercase: newName // 검색 및 중복 확인용 소문자 이름
        }, { merge: true });

        // ✅ 게시물에는 화면에 보여줄 원래 이름을 저장
        const postsQuery = db.collection('posts').where('uid', '==', currentUser.uid);
        const postsSnapshot = await postsQuery.get();
        const batch = db.batch();
        postsSnapshot.forEach(doc => {
            batch.update(doc.ref, { author: originalName });
        });
        await batch.commit();

        alert('프로필이 저장되었습니다.');
        profileModal.classList.add('hidden');

    } catch (error) {
        console.error("프로필 저장 중 오류 발생: ", error);
        alert("오류가 발생했습니다. 콘솔을 확인해주세요.");
    }
});
window.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !profileModal.classList.contains('hidden')) { profileModal.classList.add('hidden'); } });
profileNameInput.addEventListener('keydown', (event) => { if (event.key === 'Enter') { event.preventDefault(); profileSaveBtn.click(); } });
// --- 글쓰기 창 자동 높이 조절 ---
postContent.addEventListener('input', () => {
    postContent.addEventListener('input', () => {
        updateTextareaLayout(); // 레이아웃 업데이트 함수 호출
        // 페이지 전체를 맨 아래로 부드럽게 스크롤
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
});

function updateTextareaLayout() {
    // 1. 높이를 잠시 auto로 되돌려서 스크롤 높이를 정확히 계산
    postContent.style.height = 'auto';
    // 2. 스크롤 영역을 포함한 실제 컨텐츠 높이를 textarea의 높이로 설정
    postContent.style.height = postContent.scrollHeight + 'px';
    // 3. postsContainer의 하단 여백도 새로운 높이에 맞춰서 다시 계산
    postsContainer.style.marginBottom = (postContent.scrollHeight + 100) + 'px';
}

postContent.addEventListener('keydown', (event) => {
    // 만약 눌린 키가 'Enter'이고, 동시에 Shift 키는 눌리지 않았다면
    if (event.key === 'Enter' && !event.shiftKey) {
        // 1. Enter 키의 기본 동작(줄바꿈)을 막습니다.
        event.preventDefault();
        
        // 2. 전송 버튼을 강제로 클릭합니다.
        // HTML에 있는 전송 버튼의 id를 가져와야 합니다.
        // 제공해주신 HTML 코드 SVG의 id는 sendButton 이지만, 버튼 자체의 id가 필요합니다.
        // form의 submit 버튼은 하나이므로 아래와 같이 선택할 수 있습니다.
        postForm.querySelector('button[type="submit"]').click();
    }
    // Shift + Enter를 누르면 이 조건문이 실행되지 않으므로, 원래 기능대로 줄바꿈이 됩니다.
});