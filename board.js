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
let postAuthorUid = null;

// --- 헬퍼 함수 ---
function escapeHtml(text) {
    return String(text ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function linkify(text) {
    if (!text) return '';
    const escaped = escapeHtml(text);
    const urlRegex = /(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|(\bwww\.[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    let linkedText = escaped.replace(urlRegex, function (url, urlWithProtocol, urlWithoutProtocol) {
        const fullUrl = urlWithoutProtocol ? 'https://' + urlWithoutProtocol : urlWithProtocol;
        return `<a href="${fullUrl}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
    const specialRegex = /\b(sefc\.info)\b(?![^<]*>|[^<>]*<\/a>)/ig;
    linkedText = linkedText.replace(specialRegex, function (match) {
        return `<a href="https://${match}" target="_blank" rel="noopener noreferrer">${match}</a>`;
    });
    return linkedText.replace(/\r?\n/g, '<br>');
}

function formatDate(timestamp) {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    if ($(window).width() < 768) return `${hours}:${minutes}`;
    else return `${year}.${month}.${day}. ${hours}:${minutes}`;
}

// --- jQuery가 준비되면 코드 실행 ---
$(document).ready(function () {
    if (typeof beforeLoading === 'function') beforeLoading();

    let resolveAuthReady;
    const authReadyPromise = new Promise(resolve => {
        resolveAuthReady = resolve;
    });

    // --- 모든 페이지 공통 로직 ---
    auth.onAuthStateChanged(async user => {
        currentUser = user;
        if (user) {
            // --- 로그인 상태 ---
            $('#login-btn').addClass('hidden');
            $('#user-info').removeClass('hidden');
            $('#open-write-page-btn').removeClass('hidden');

            if ($('#comment-form').length > 0) {
                $('#comment-form').removeClass('hidden');
            }

            if (unsubscribeUserProfile) unsubscribeUserProfile();
            unsubscribeUserProfile = db.collection('users').doc(user.uid).onSnapshot(doc => {
                const name = doc.exists && doc.data().displayName ? doc.data().displayName : user.displayName;
                $('#user-name').text(name);
            });

            try {
                const adminDoc = await db.collection('admins').doc(user.uid).get();
                isAdmin = adminDoc.exists;
            } catch (err) {
                console.error("관리자 확인 오류:", err);
                isAdmin = false;
            }
        } else {
            // --- 로그아웃 상태 ---
            $('#login-btn').removeClass('hidden');
            $('#user-info').addClass('hidden');
            $('#open-write-page-btn').addClass('hidden');

            if ($('#comment-form').length > 0) {
                $('#comment-form').addClass('hidden');
            }

            isAdmin = false;
        }

        resolveAuthReady();

        if ($('#posts-container').length > 0) {
            $('#posts-container').trigger('custom:render');
        }
        if ($('#post-detail-container').length > 0) {
            $('#post-detail-container').trigger('custom:render-detail');
        }
        if ($('#comments-list').length > 0) {
            $('#comments-list').trigger('custom:render-comments');
        }
    });

    $('#logout-btn').on('click', () => {
        if (confirm('정말 로그아웃하시겠습니까?')) {
            auth.signOut().catch(e => console.error("로그아웃 오류:", e));
        }
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
        let currentFilterUid = null;

        $(document).on('click', '#back-to-list-from-filter', function () {
            window.location.href = '/board';
        });

        async function fetchPosts(direction = 'initial') {
            let query;
            const urlParams = new URLSearchParams(window.location.search);
            const filterUid = urlParams.get('uid');
            currentFilterUid = filterUid;
            let baseQuery = db.collection('posts');

            if (filterUid) {
                baseQuery = baseQuery.where('uid', '==', filterUid);
                db.collection('users').doc(filterUid).get().then(doc => {
                    const name = doc.exists && doc.data().displayName ? doc.data().displayName : '알 수 없는 사용자';
                    $('#board-header').html(`<p>${escapeHtml(name)} 님의 게시물 목록</p><button id="back-to-list-from-filter" glass="true">전체 목록 보기</button>`);
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
                updatePaginationButtons(snapshot, filterUid);
                window.scrollTo(0, 0);
            } catch (error) {
                console.error("게시물 로딩 오류:", error);
                if (error.code === "failed-precondition") {
                    const indexUrl = error.message.match(/https:\/\/[^\s]+/);
                    if (indexUrl) {
                        $('#posts-container').html(`<p>데이터베이스 색인이 필요합니다. <a href="${escapeHtml(indexUrl[0])}" target="_blank" rel="noopener noreferrer">여기</a>를 클릭해서 색인을 생성한 후, 몇 분 뒤에 페이지를 새로고침해주세요.</p>`);
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
                const postTitle = escapeHtml(post.title || "(제목 없음)");
                const postAuthor = escapeHtml(post.author || "");
                const viewCount = post.viewCount || 0;

                const $postElement = $(`
                    <a href="/board/view?id=${encodeURIComponent(post.id)}" class="post-item-link">
                        <div class="post">
                            <p>${postTitle}</p>
                            <div>
                                <p>${postAuthor}</p>
                                <p>${postDate}</p>
                                <p>조회수 ${viewCount}</p>
                            </div>
                        </div>
                    </a>`);

                if (post.author === "SEFCiNFO") {
                    $postElement.find('.post').addClass('admin-post');
                }

                $('#posts-container').append($postElement);
            });
        }

        function updatePaginationButtons(snapshot, filterUid) {
            $('#page-number').text(currentPage);
            $('#prev-btn').prop('disabled', currentPage === 1);
            if (snapshot.docs.length < pageSize || !lastVisibleDoc) {
                $('#next-btn').prop('disabled', true);
            } else {
                let nextBaseQuery = db.collection('posts');
                if (filterUid) {
                    nextBaseQuery = nextBaseQuery.where('uid', '==', filterUid);
                }
                nextBaseQuery.orderBy('timestamp', 'desc').startAfter(lastVisibleDoc).limit(1).get().then(snap => {
                    $('#next-btn').prop('disabled', snap.empty);
                }).catch(() => {
                    $('#next-btn').prop('disabled', true);
                });
            }
        }

        $('#next-btn').on('click', () => fetchPosts('next'));
        $('#prev-btn').on('click', () => fetchPosts('prev'));

        $('#posts-container').on('custom:render', function () {
            renderPostList();
        });

        fetchPosts();
    }

    // ✅ 2. 상세보기 페이지 (view.html) 전용 코드
    if ($('#post-detail-container').length > 0) {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');
        let loadedPost = null;
        let loadedComments = [];
        let commentsLoaded = false;

        function renderPostDetail() {
            if (!loadedPost) return;
            const post = loadedPost;
            const postDate = formatDate(post.timestamp);
            const linkedContent = linkify(post.content || "");
            const viewCount = post.viewCount || 0;

            let buttonsHTML = '';
            if (currentUser && (isAdmin || currentUser.uid === post.uid)) {
                buttonsHTML = `
                <div class="post-actions">
                    <button class="post-edit-btn" data-id="${escapeHtml(postId)}" glass='true'>수정</button>
                    <button class="post-delete-btn" data-id="${escapeHtml(postId)}" glass='true'>삭제</button>
                </div>
            `;
            }

            if (post.author === "SEFCiNFO") {
                $('#post-detail-container').addClass('admin-post');
            } else {
                $('#post-detail-container').removeClass('admin-post');
            }

            const finalHTML = `
            <p>${escapeHtml(post.title || "(제목 없음)")}</p>
            <div class="post-meta">${escapeHtml(post.author || "")}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${postDate}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;조회수 ${viewCount}</div>
            ${buttonsHTML}
            <div class="post-content-body">${linkedContent}</div>`;

            $('#post-detail-container').html(finalHTML);
        }

        function renderComments() {
            if (!commentsLoaded) return;
            $('#comments-title').html(`댓글 <span>${loadedComments.length}</span>`);

            const $commentsList = $('#comments-list');
            $commentsList.empty();
            if (loadedComments.length === 0) {
                $commentsList.html('<p>아직 댓글이 없습니다.</p>');
                return;
            }
            loadedComments.forEach(({ id: commentId, data: comment }) => {
                const commentDate = formatDate(comment.timestamp);
                let deleteBtnHTML = '';
                if (currentUser && (isAdmin || currentUser.uid === comment.uid)) {
                    deleteBtnHTML = `<button class="comment-delete-btn" data-comment-id="${escapeHtml(commentId)}" glass='true'>삭제</button>`;
                }

                const linkedCommentText = linkify(comment.text || "");

                const $commentElement = $(`
                    <div class="comment-item">
                        <div>
                            <div class="comment-header">
                                <span class="comment-author">${escapeHtml(comment.author || "")}</span>
                                <span class="comment-date">${commentDate}</span>
                            </div>
                            <p class="comment-text">${linkedCommentText}</p>
                        </div>
                        ${deleteBtnHTML}
                    </div>
                `);

                if (comment.author === "SEFCiNFO") {
                    $commentElement.addClass('admin-comment');
                }

                if (postAuthorUid && comment.uid === postAuthorUid) {
                    $commentElement.addClass('author-comment');
                }

                $commentsList.append($commentElement);
            });
        }

        $('#post-detail-container').on('custom:render-detail', renderPostDetail);
        $('#comments-list').on('custom:render-comments', renderComments);

        if (postId) {
            const postRef = db.collection('posts').doc(postId);

            Promise.all([authReadyPromise, postRef.get()]).then(([, doc]) => {
                if (doc.exists) {
                    loadedPost = doc.data();
                    postAuthorUid = loadedPost.uid;

                    renderPostDetail();
                    renderComments();

                    postRef.update({
                        viewCount: firebase.firestore.FieldValue.increment(1)
                    }).catch(() => {});
                } else {
                    $('#post-detail-container').html('<p>게시물을 찾을 수 없습니다.</p>');
                }
            }).catch(error => {
                console.error("게시물 로딩 오류:", error);
                $('#post-detail-container').html('<p>게시물을 불러오는 데 오류가 발생했습니다.</p>');
            });

            const commentsCollectionRef = db.collection('posts').doc(postId).collection('comments');
            const commentsQuery = commentsCollectionRef.orderBy('timestamp', 'asc');

            commentsQuery.onSnapshot(snapshot => {
                commentsLoaded = true;
                loadedComments = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
                renderComments();
            });

            $('#comment-form').on('submit', async function (event) {
                event.preventDefault();
                if (!currentUser) { alert("로그인 후 댓글을 작성할 수 있습니다."); return; }
                const text = $('#comment-input').val().trim();
                if (text === '') return;

                try {
                    const userDoc = await db.collection('users').doc(currentUser.uid).get();
                    const authorName = userDoc.exists && userDoc.data().displayName ? userDoc.data().displayName : currentUser.displayName;

                    await commentsCollectionRef.add({
                        uid: currentUser.uid,
                        author: authorName,
                        text: text,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    });
                    $('#comment-input').val('');
                } catch (error) {
                    console.error("댓글 작성 오류:", error);
                }
            });

            $('#comments-list').on('click', '.comment-delete-btn', function () {
                const commentId = $(this).data('comment-id');
                if (confirm('정말 이 댓글을 삭제하시겠습니까?')) {
                    commentsCollectionRef.doc(commentId).delete().catch(error => console.error("댓글 삭제 오류:", error));
                }
            });

            $('#back-to-list-btn').on('click', function () {
                window.location.href = '/board';
            });
        }

        $('#post-detail-container').on('click', '.post-edit-btn', function () {
            const targetId = $(this).data('id');
            window.location.href = `/board/write?editId=${encodeURIComponent(targetId)}`;
        });

        $('#post-detail-container').on('click', '.post-delete-btn', function () {
            const targetId = $(this).data('id');
            if (confirm('정말 이 글을 삭제하시겠습니까?')) {
                db.collection('posts').doc(targetId).delete().then(() => {
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
            $('#write-form').prev('h2').text('글 수정');
            $('#post-save-btn').text('수정 완료');

            Promise.all([authReadyPromise, db.collection('posts').doc(editId).get()]).then(([, doc]) => {
                if (doc.exists) {
                    const post = doc.data();
                    if (!currentUser || (currentUser.uid !== post.uid && !isAdmin)) {
                        alert("수정할 권한이 없습니다.");
                        window.location.href = '/board';
                        return;
                    }
                    $('#post-title-input').val(post.title);
                    $('#post-content-input').val(post.content);
                } else {
                    alert("존재하지 않는 게시물입니다.");
                    window.location.href = '/board';
                }
            }).catch(error => {
                console.error("게시물 불러오기 오류:", error);
                alert("게시물을 불러오지 못했습니다.");
                window.location.href = '/board';
            });
        }

        $('#cancel-write-btn').on('click', function () {
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
                if (editId) {
                    await db.collection('posts').doc(editId).update({
                        title: title,
                        content: content,
                        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                    window.location.href = `/board/view?id=${encodeURIComponent(editId)}`;
                } else {
                    const userDoc = await db.collection('users').doc(currentUser.uid).get();
                    const authorName = userDoc.exists && userDoc.data().displayName ? userDoc.data().displayName : currentUser.displayName;

                    const newPostRef = await db.collection('posts').add({
                        uid: currentUser.uid,
                        author: authorName,
                        title: title,
                        content: content,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        viewCount: 0
                    });

                    const newPostId = newPostRef.id;
                    window.location.href = `/board/view?id=${encodeURIComponent(newPostId)}`;
                }
            } catch (error) {
                console.error("글 작성/수정 오류:", error);
                alert(editId ? '글 수정에 실패했습니다.' : '글 등록에 실패했습니다.');
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
        if (!currentUser) return;
        const originalName = $('#profile-name-input').val().trim();
        if (originalName.length < 4 || originalName.length > 16) {
            alert('닉네임은 4자 이상 16자 이하로 입력해주세요.');
            return;
        }
        const nameRegex = /^[a-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+$/;
        if (!nameRegex.test(originalName)) {
            alert('닉네임은 영문 소문자, 한글, 숫자만 사용할 수 있습니다 (특수문자, 공백, 대문자 불가).');
            return;
        }
        const newNameLower = originalName.toLowerCase();
        try {
            const usersRef = db.collection('users');
            const querySnapshot = await usersRef.where('displayName_lowercase', '==', newNameLower).get();
            let isDuplicate = false;
            querySnapshot.forEach(doc => { if (doc.id !== currentUser.uid) isDuplicate = true; });
            if (isDuplicate) { alert('이미 사용 중인 닉네임입니다.'); return; }
            await db.collection('users').doc(currentUser.uid).set({ displayName: originalName, displayName_lowercase: newNameLower }, { merge: true });
            const postsQuery = db.collection('posts').where('uid', '==', currentUser.uid);
            const postsSnapshot = await postsQuery.get();
            const batch = db.batch();
            postsSnapshot.forEach(doc => { batch.update(doc.ref, { author: originalName }); });
            await batch.commit();
            alert('프로필이 저장되었습니다.');
            $('#profile-modal').addClass('hidden');
            location.reload();
        } catch (error) {
            console.error("프로필 저장 중 오류:", error);
        }
    });
    $(window).on('keydown', (event) => {
        if (event.key === 'Escape' && $('#profile-modal').is(':visible')) {
            $('#profile-modal').addClass('hidden');
        }
    });

    if (typeof afterLoading === 'function') afterLoading();
});
