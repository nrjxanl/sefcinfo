// --- Firebase 설정 ---

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



// --- HTML 요소 가져오기 ---

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

const submitBtn = postForm.querySelector('button[type="submit"]');



// --- 전역 '상태(State)' 변수 ---

let currentUser = null;

let isAdmin = false;

let postsCache = [];

let unsubscribeUserProfile = null;

let isFirstLoad = true;

const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;



// --- 헬퍼 함수 (Helper Functions) ---



/** 문자열 내 URL을 <a> 태그로 변환 */

function linkify(text) {

    if (!text) return '';

    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|(\bwww\.[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

    let linkedText = text.replace(urlRegex, function (url, urlWithProtocol, protocol, urlWithoutProtocol) {

        const fullUrl = urlWithoutProtocol ? 'http://' + urlWithoutProtocol : urlWithProtocol;

        return `<a href="${fullUrl}" target="_blank" rel="noopener noreferrer">${url}</a>`;

    });

    const specialRegex = /\b(sefc\.info)\b(?![^<]*>|[^<>]*<\/a>)/ig;

    linkedText = linkedText.replace(specialRegex, function (match) {

        return `<a href="http://${match}" target="_blank" rel="noopener noreferrer">${match}</a>`;

    });

    return linkedText;

}



/** Firebase Timestamp를 "YY.MM.DD. HH:mm" 형식으로 변환 */

function formatDate(timestamp) {

    if (!timestamp) return '';

    const date = timestamp.toDate();

    const year = date.getFullYear().toString().slice(-2);

    const month = String(date.getMonth() + 1).padStart(2, '0');

    const day = String(date.getDate()).padStart(2, '0');

    const hours = String(date.getHours()).padStart(2, '0');

    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}.${month}.${day}. ${hours}:${minutes}`;

}



/** 텍스트 입력창 레이아웃 업데이트 */

function updateTextareaLayout() {

    postContent.style.height = 'auto';

    postContent.style.height = postContent.scrollHeight + 'px';

    postsContainer.style.marginBottom = (postContent.scrollHeight + 100) + 'px';

}



/** 모든 화면 그리기를 총괄하는 함수 */

function render() {

    const isLoggedIn = !!currentUser;

    loginBtn.classList.toggle('hidden', isLoggedIn);

    userInfoDiv.classList.toggle('hidden', !isLoggedIn);

    postForm.classList.toggle('hidden', !isLoggedIn);



    postsContainer.innerHTML = '';

    if (postsCache.length === 0) {

        postsContainer.innerHTML = '<p>최근 48시간 내에 작성된 게시물이 없습니다.</p>';

    } else {

        postsCache.forEach(post => {

            const postElement = document.createElement('div');

            let postClasses = ['post'];

            if (currentUser && currentUser.uid === post.uid) postClasses.push('my-post');

            else postClasses.push('other-post');

            if (post.author === "SEFCiNFO") postClasses.push('admin-post');

            postElement.className = postClasses.join(' ');

            postElement.setAttribute('tabindex', '0');



            let deleteBtnHTML = '';

            if (currentUser && (isAdmin || currentUser.uid === post.uid)) {

                deleteBtnHTML = `<button class="post-delete-btn" data-id="${post.id}">삭제</button>`;

            }

            const postDate = post.timestamp ? formatDate(post.timestamp) : '';

            const linkedContent = linkify((post.content || "").replace(/\n/g, '<br>'));

            postElement.innerHTML = `

                <div>

                    <a href="?uid=${post.uid}" class="post-author-link">

                        <div class="post-header"><span class="post-author-name">${post.author}</span></div>

                    </a>

                    <p class="post-content">${linkedContent}</p>

                    <div class="post-date">${postDate}</div>

                </div>

                ${deleteBtnHTML}`;

            postsContainer.appendChild(postElement);

        });

    }



    const urlParams = new URLSearchParams(window.location.search);

    const filterUid = urlParams.get('uid');

    if (filterUid) {

        db.collection('users').doc(filterUid).get().then(doc => {

            const name = doc.exists && doc.data().displayName ? doc.data().displayName : '알 수 없는 사용자';

            boardHeader.innerHTML = `<p>${name} 님의 채팅 목록</p><a href="/chat" glass='true'>전체 채팅 보기</a>`;

        });

    } else {

         boardHeader.innerHTML = '';

    }

}



// --- 이벤트 리스너 ---

loginBtn.addEventListener('click', () => auth.signInWithPopup(googleProvider).catch(e => console.error(e)));

logoutBtn.addEventListener('click', () => auth.signOut().catch(e => console.error(e)));

submitBtn.addEventListener('mousedown', (event) => { if (isMobile) event.preventDefault(); });

submitBtn.addEventListener('click', async (event) => {

    event.preventDefault();

    const content = postContent.value.trim();

    if (content === '' || !currentUser) return;

    submitBtn.disabled = true;

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

        updateTextareaLayout();

        postContent.focus();

    } catch (error) {

        console.error("글 작성 오류:", error);

    } finally {

        submitBtn.disabled = false;

    }

});

postsContainer.addEventListener('click', (e) => { const deleteBtn = e.target.closest('.post-delete-btn'); if (deleteBtn) { const postId = deleteBtn.getAttribute('data-id'); if (confirm('정말 이 글을 삭제하시겠습니까? 삭제 후에는 글을 복구할 수 없습니다.')) { db.collection('posts').doc(postId).delete().catch(e => console.error("삭제 오류: ", e)); } } });

editProfileBtn.addEventListener('click', async () => { if (!currentUser) return; const userDoc = await db.collection('users').doc(currentUser.uid).get(); const customName = userDoc.exists && userDoc.data().displayName ? userDoc.data().displayName : currentUser.displayName; profileNameInput.value = customName; profileModal.classList.remove('hidden'); });

profileModal.addEventListener('click', (event) => { if (event.target === profileModal) profileModal.classList.add('hidden'); });

profileSaveBtn.addEventListener('click', async () => {

    const newName = profileNameInput.value.trim().toLowerCase();

    if (!currentUser) return;

    if (newName.length < 4 || newName.length > 16) { alert('닉네임은 4자 이상 16자 이하로 입력해주세요.'); return; }

    const nameRegex = /^[a-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+$/;

    if (!nameRegex.test(newName)) { alert('닉네임은 영문 소문자, 한글, 숫자만 사용할 수 있습니다 (특수문자, 공백, 대문자 불가).'); return; }

    try {

        const usersRef = db.collection('users');

        const querySnapshot = await usersRef.where('displayName_lowercase', '==', newName).get();

        let isDuplicate = false;

        querySnapshot.forEach(doc => { if (doc.id !== currentUser.uid) isDuplicate = true; });

        if (isDuplicate) { alert('이미 사용 중인 닉네임입니다.'); return; }

        const originalName = profileNameInput.value.trim();

        await db.collection('users').doc(currentUser.uid).set({ displayName: originalName, displayName_lowercase: newName }, { merge: true });

        const postsQuery = db.collection('posts').where('uid', '==', currentUser.uid);

        const postsSnapshot = await postsQuery.get();

        const batch = db.batch();

        postsSnapshot.forEach(doc => { batch.update(doc.ref, { author: originalName }); });

        await batch.commit();

        alert('프로필이 저장되었습니다.');

        profileModal.classList.add('hidden');

    } catch (error) {

        console.error("프로필 저장 중 오류:", error);

    }

});

window.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !profileModal.classList.contains('hidden')) profileModal.classList.add('hidden'); });

postContent.addEventListener('input', () => {

    updateTextareaLayout();

    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

});

postContent.addEventListener('keydown', (event) => {

    if (!isMobile && event.key === 'Enter' && !event.shiftKey) {

        event.preventDefault();

        submitBtn.dispatchEvent(new Event('mousedown', { bubbles: true }));

        submitBtn.click();

    }

});



// --- 메인 로직 실행 ---



function main() {

    const urlParams = new URLSearchParams(window.location.search);

    const filterUid = urlParams.get('uid');

    const twentyFourHoursAgo = new Date(Date.now() - 48 * 60 * 60 * 1000);



    let postsQuery = db.collection('posts').where('timestamp', '>=', twentyFourHoursAgo).orderBy('timestamp', 'asc');

    if (filterUid) {

        postsQuery = postsQuery.where('uid', '==', filterUid);

    }



    postsQuery.onSnapshot(snapshot => {

        postsCache = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        render();

        if (isFirstLoad && postsCache.length > 0) {

            updateTextareaLayout();

            window.scrollTo(0, document.body.scrollHeight);

            isFirstLoad = false;

        } else if (!isFirstLoad) {

            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

        }

    }, error => {

        console.error("게시물 로딩 오류:", error);

        postsContainer.innerHTML = "<p>게시물을 불러오는 데 실패했습니다.</p>";

    });



    auth.onAuthStateChanged(async (user) => {

        if (unsubscribeUserProfile) unsubscribeUserProfile();

        if (user) {

            currentUser = user;

            const adminDoc = await db.collection('admins').doc(user.uid).get();

            isAdmin = adminDoc.exists;

            unsubscribeUserProfile = db.collection('users').doc(user.uid).onSnapshot(doc => {

                const customName = doc.exists && doc.data().displayName ? doc.data().displayName : currentUser.displayName;

                userName.textContent = customName;

            });

        } else {

            currentUser = null;

            isAdmin = false;

        }

        render();

    });

}



$(document).ready(function () {

    // y = new Date().getFullYear();

    // m = new Date().getMonth() + 1;

    // d = new Date().getDate();

    // nextMatch = $(".nextMatchId").text();

    // if (Number(nextMatch.substring(0, 4)) == y && Number(nextMatch.substring(4, 6)) == m && Number(nextMatch.substring(6, 8)) == d) main();

    main(); // chat() 대신 main()을 호출하도록 수정

});