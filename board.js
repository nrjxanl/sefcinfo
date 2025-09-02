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

// --- 전역 변수 ---
let currentUser = null;
let isAdmin = false;
let unsubscribeUserProfile = null;

// --- 헬퍼 함수 ---
function linkify(text) {
    if (!text) return '';
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|(\bwww\.[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig; let linkedText = text.replace(urlRegex, function (url, urlWithProtocol, protocol, urlWithoutProtocol) {
        const fullUrl = urlWithoutProtocol ? 'http://' + urlWithoutProtocol : urlWithProtocol;
        return `<a href="${fullUrl}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
    const specialRegex = /\b(sefc\.info)\b(?![^<]*>|[^<>]*<\/a>)/ig;
    linkedText = linkedText.replace(specialRegex, function (match) {
        return `<a href="http://${match}" target="_blank" rel="noopener noreferrer">${match}</a>`;
    });
    return linkedText;
}

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

// --- jQuery가 준비되면 코드 실행 ---
$(document).ready(function () {

    // --- 모든 페이지 공통 로직 ---
    auth.onAuthStateChanged(user => {
        currentUser = user;
        if (user) {
            // --- 로그인 상태 ---
            $('#login-btn').addClass('hidden');
            $('#user-info').removeClass('hidden');
            $('#open-write-page-btn').removeClass('hidden'); // ✅ 여기가 수정된 부분입니다!

            if (unsubscribeUserProfile) unsubscribeUserProfile();
            unsubscribeUserProfile = db.collection('users').doc(user.uid).onSnapshot(doc => {
                const name = doc.exists && doc.data().displayName ? doc.data().displayName : user.displayName;
                $('#user-name').text(name);
            });
            db.collection('admins').doc(user.uid).get().then(doc => {
                isAdmin = doc.exists;
                // 로그인/관리자 상태가 확정된 후, 목록 UI를 다시 그려서 삭제 버튼 등을 갱신
                if ($('#posts-container').length > 0) {
                    $('#posts-container').trigger('custom:render');
                }
            });
        } else {
            // --- 로그아웃 상태 ---
            $('#login-btn').removeClass('hidden');
            $('#user-info').addClass('hidden');
            $('#open-write-page-btn').addClass('hidden'); // ✅ 여기가 수정된 부분입니다!
            isAdmin = false;
            // 로그아웃 시 목록 UI 갱신
            if ($('#posts-container').length > 0) {
                $('#posts-container').trigger('custom:render');
            }
        }
    });

    $('#logout-btn').on('click', () => {
        // 1. 사용자에게 확인 창을 띄웁니다.
        if (confirm('정말 로그아웃하시겠습니까?')) {
            // 2. 사용자가 '확인'을 눌렀을 경우에만 로그아웃을 실행합니다.
            auth.signOut().catch(e => console.error("로그아웃 오류:", e));
        }
        // 3. '취소'를 누르면 아무 일도 일어나지 않습니다.
    });
    $('#login-btn').on('click', () => auth.signInWithPopup(googleProvider));

    $('#open-write-page-btn').on('click', function () {
        window.location.href = '/board/write';
    });

    // === 페이지별 로직 분기 ===

    // ✅ 1. 목록 페이지 (board.html) 전용 코드
    if ($('#posts-container').length > 0) {
        const pageSize = 10;
        let firstVisibleDoc = null;
        let lastVisibleDoc = null;
        let currentPage = 1;
        let postsCache = [];

        async function fetchPosts(direction = 'initial') {
            let query;
            const urlParams = new URLSearchParams(window.location.search);
            const filterUid = urlParams.get('uid');
            let baseQuery = db.collection('posts');

            if (filterUid) {
                baseQuery = baseQuery.where('uid', '==', filterUid);
                db.collection('users').doc(filterUid).get().then(doc => {
                    const name = doc.exists && doc.data().displayName ? doc.data().displayName : '알 수 없는 사용자';
                    $('#board-header').html(`<p>${name} 님의 게시물 목록</p><button id="back-to-list-from-filter" glass="true">전체 목록 보기</button>`);
                });
            } else {
                $('#board-header').empty();
            }

            const orderedQuery = baseQuery.orderBy('timestamp', 'desc');

            if (direction === 'next' && lastVisibleDoc) query = orderedQuery.startAfter(lastVisibleDoc).limit(pageSize);
            else if (direction === 'prev' && firstVisibleDoc) query = orderedQuery.endBefore(firstVisibleDoc).limitToLast(pageSize);
            else { query = orderedQuery.limit(pageSize); currentPage = 1; }

            try {
                const snapshot = await query.get();
                if (!snapshot.empty) {
                    postsCache = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    firstVisibleDoc = snapshot.docs[0];
                    lastVisibleDoc = snapshot.docs[snapshot.docs.length - 1];
                    if (direction === 'next') currentPage++;
                    if (direction === 'prev') currentPage--;
                } else if (direction !== 'initial') {
                    alert(direction === 'next' ? '마지막 페이지입니다.' : '첫 페이지입니다.');
                    return;
                } else {
                    postsCache = [];
                }
                renderPostList();
                updatePaginationButtons(snapshot);
                window.scrollTo(0, 0);
            } catch (error) {
                console.error("게시물 로딩 오류:", error);
                if (error.code === "failed-precondition") {
                    const indexUrl = error.message.match(/https:\/\/.*/);
                    if (indexUrl) {
                        $('#posts-container').html(`<p>데이터베이스 색인이 필요합니다. <a href="${indexUrl[0]}" target="_blank">여기</a>를 클릭해서 색인을 생성한 후, 몇 분 뒤에 페이지를 새로고침해주세요.</p>`);
                    }
                } else {
                    $('#posts-container').html("<p>게시물을 불러오는 데 실패했습니다.</p>");
                }
            }
        }

        function renderPostList() {
            $('#posts-container').empty();
            if (postsCache.length === 0) {
                $('#posts-container').html('<p>게시물이 없습니다.</p>');
                return;
            }
            postsCache.forEach(post => {
                const postDate = formatDate(post.timestamp);
                const postTitle = post.title || "(제목 없음)";
                const viewCount = post.viewCount || 0;

                // ✅ renderPostList 함수는 목록만 그리므로 상세보기 링크를 a 태그로 감싸야 합니다.
                const $postElement = $(`
                    <a href="/board/view?id=${post.id}" class="post-item-link">
                        <div class="post">
                            <p>${postTitle}</p>
                            <p>${post.author}</p>
                            <p>${postDate}</p>
                            <p>조회수 ${viewCount}</p>
                        </div>
                    </a>`);
                $('#posts-container').append($postElement);
            });
        }

        function updatePaginationButtons(snapshot) {
            $('#page-number').text(currentPage);
            $('#prev-btn').prop('disabled', currentPage === 1);
            // ✅ 다음 페이지 유무를 더 정확하게 판단하는 로직
            if (snapshot.docs.length < pageSize) {
                $('#next-btn').prop('disabled', true);
            } else {
                db.collection('posts').orderBy('timestamp', 'desc').startAfter(lastVisibleDoc).limit(1).get().then(snap => {
                    $('#next-btn').prop('disabled', snap.empty);
                });
            }
        }

        $('#next-btn').on('click', () => fetchPosts('next'));
        $('#prev-btn').on('click', () => fetchPosts('prev'));

        // custom:render 이벤트가 발생하면 renderPostList 함수를 실행
        $('#posts-container').on('custom:render', function () {
            renderPostList();
        });

        fetchPosts(); // 첫 페이지 로드
    }

    // ✅ 2. 상세보기 페이지 (view.html) 전용 코드
    if ($('#post-detail-container').length > 0) {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');

        if (postId) {
            const postRef = db.collection('posts').doc(postId);

            postRef.get().then(doc => {
                if (doc.exists) {
                    const post = doc.data();

                    // 1. 필요한 모든 정보를 변수에 미리 준비합니다.
                    const postDate = formatDate(post.timestamp);
                    const linkedContent = linkify((post.content || "").replace(/\n/g, '<br>'));
                    const viewCount = post.viewCount || 0;

                    // 2. 버튼 HTML을 만들지 여부를 먼저 결정합니다.
                    let buttonsHTML = '';
                    if (currentUser && (isAdmin || currentUser.uid === post.uid)) {
                        buttonsHTML = `
                        <div class="post-actions">
                            <button class="post-edit-btn" data-id="${postId}" glass='true'>수정</button>
                            <button class="post-delete-btn" data-id="${postId}" glass='true'>삭제</button>
                        </div>
                    `;
                    }

                    // 3. 모든 정보를 조합하여 최종 HTML을 완성합니다.
                    const finalHTML = `
                    <p>${post.title || "(제목 없음)"}</p>
                    <div class="post-meta">${post.author}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${postDate}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;조회수 ${viewCount}</div>
                    ${buttonsHTML} 
                    <div class="post-content-body">${linkedContent}</div>`;

                    // 4. 완성된 HTML을 단 한 번만 화면에 그립니다.
                    $('#post-detail-container').html(finalHTML);

                    // 5. 조회수 업데이트는 화면이 그려진 후에 조용히 실행합니다.
                    postRef.update({
                        viewCount: firebase.firestore.FieldValue.increment(1)
                    }).catch(err => { });

                } else {
                    $('#post-detail-container').html('<p>게시물을 찾을 수 없습니다.</p>');
                }
            }).catch(error => {
                console.error("게시물 로딩 오류:", error);
                $('#post-detail-container').html('<p>게시물을 불러오는 데 오류가 발생했습니다.</p>');
            });
        }

        // --- 이벤트 리스너들은 여기에 그대로 둡니다 ---
        $('#post-detail-container').on('click', '.post-edit-btn', function () {
            const postId = $(this).data('id');
            window.location.href = `/board/write?editId=${postId}`;
        });

        $('#post-detail-container').on('click', '.post-delete-btn', function () {
            const postId = $(this).data('id');
            if (confirm('정말 이 글을 삭제하시겠습니까?')) {
                db.collection('posts').doc(postId).delete().then(() => {
                    alert('게시물이 삭제되었습니다.');
                    window.location.href = '/board';
                }).catch(e => console.error("삭제 오류:", e));
            }
        });
    }

    // ✅ 3. 글쓰기 페이지 (write.html) 전용 코드
    if ($('#write-form').length > 0) {
        const urlParams = new URLSearchParams(window.location.search);
        const editId = urlParams.get('editId');

        // --- 수정 모드 로직 ---
        if (editId) {
            // 1. 페이지 제목 변경
            $('#write-form').prev('h2').text('글 수정');
            $('#post-save-btn').text('수정 완료');

            // 2. 기존 글 데이터를 불러와서 폼에 채워넣기
            db.collection('posts').doc(editId).get().then(doc => {
                if (doc.exists) {
                    const post = doc.data();
                    // 권한 확인: 본인 또는 관리자만 수정 가능
                    auth.onAuthStateChanged(user => {
                        if (!user || (user.uid !== post.uid && !isAdmin)) {
                            alert("수정할 권한이 없습니다.");
                            window.location.href = '/board.html';
                        }
                    });
                    $('#post-title-input').val(post.title);
                    $('#post-content-input').val(post.content);
                } else {
                    alert("존재하지 않는 게시물입니다.");
                    window.location.href = '/board.html';
                }
            });
        }

        $('#cancel-write-btn').on('click', function () {
            // 사용자가 실수로 누르는 것을 방지하기 위해 확인 창을 띄우는 것이 좋습니다.
            if (confirm('작성을 취소하시겠습니까? 변경 사항이 저장되지 않습니다.')) {
                window.location.href = '/board';
            }
        });

        // --- 폼 제출 이벤트 리스너 ---
        $('#write-form').on('submit', async function (event) {
            event.preventDefault();
            if (!currentUser) return;
            const title = $('#post-title-input').val().trim();
            const content = $('#post-content-input').val().trim();
            if (title === '' || content === '') {
                alert('제목과 내용을 모두 입력해주세요.');
                return;
            }

            $('#post-save-btn').prop('disabled', true);
            try {
                const userDoc = await db.collection('users').doc(currentUser.uid).get();
                const authorName = userDoc.exists && userDoc.data().displayName ? userDoc.data().displayName : currentUser.displayName;

                // --- ✅ 여기가 핵심입니다 ---
                // 1. add() 메소드는 방금 생성된 문서의 참조(reference)를 반환합니다.
                const newPostRef = await db.collection('posts').add({
                    uid: currentUser.uid,
                    author: authorName,
                    title: title,
                    content: content,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    viewCount: 0
                });

                // 2. newPostRef에서 방금 생성된 문서의 고유 ID를 가져옵니다.
                const newPostId = newPostRef.id;

                alert('글이 성공적으로 등록되었습니다.');

                // 3. 목록 페이지 대신, 방금 만든 글의 상세보기 페이지로 이동합니다.
                window.location.href = `/board/view?id=${newPostId}`;
                // --- ---

            } catch (error) {
                console.error("글 작성 오류:", error);
                alert('글 등록에 실패했습니다.');
                $('#post-save-btn').prop('disabled', false);
            }
        });
    }

    // ✅ 4. 프로필 수정 관련 로직 (board.html 공통)
    $('#edit-profile-btn').on('click', async () => {
        if (!currentUser) return;
        const userDoc = await db.collection('users').doc(currentUser.uid).get();
        const customName = userDoc.exists && userDoc.data().displayName ? userDoc.data().displayName : currentUser.displayName;
        $('#profile-name-input').val(customName);
        $('#profile-modal').removeClass('hidden');
    });
    $('#profile-modal').on('click', function (event) {
        if (event.target === this) {
            $(this).addClass('hidden');
        }
    });
    $('#profile-save-btn').on('click', async () => {
        const newName = $('#profile-name-input').val().trim().toLowerCase();
        if (!currentUser) return;
        if (newName.length < 4 || newName.length > 16) { alert('닉네임은 4자 이상 16자 이하로 입력해주세요.'); return; }
        const nameRegex = /^[a-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+$/;
        if (!nameRegex.test(newName)) { alert('닉네임은 영문, 한글, 숫자만 사용할 수 있습니다 (특수문자, 공백, 대문자 불가).'); return; }
        try {
            const usersRef = db.collection('users');
            const querySnapshot = await usersRef.where('displayName_lowercase', '==', newName).get();
            let isDuplicate = false;
            querySnapshot.forEach(doc => { if (doc.id !== currentUser.uid) isDuplicate = true; });
            if (isDuplicate) { alert('이미 사용 중인 닉네임입니다.'); return; }
            const originalName = $('#profile-name-input').val().trim();
            await db.collection('users').doc(currentUser.uid).set({ displayName: originalName, displayName_lowercase: newName }, { merge: true });
            const postsQuery = db.collection('posts').where('uid', '==', currentUser.uid);
            const postsSnapshot = await postsQuery.get();
            const batch = db.batch();
            postsSnapshot.forEach(doc => { batch.update(doc.ref, { author: originalName }); });
            await batch.commit();
            alert('프로필이 저장되었습니다.');
            $('#profile-modal').addClass('hidden');
        } catch (error) {
            console.error("프로필 저장 중 오류:", error);
        }
    });
    $(window).on('keydown', (event) => {
        if (event.key === 'Escape' && $('#profile-modal').is(':visible')) {
            $('#profile-modal').addClass('hidden');
        }
    });
});