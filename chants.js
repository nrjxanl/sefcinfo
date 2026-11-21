import { loadData } from './firebase.js';

beforeLoading();

async function initPage() {
    try {
        /*
            chants: 응원가(가사)
        */

        const chants = await loadData('chants');

        render(chants || {});
    } catch (error) {
        console.error('데이터 불러오기 실패', error);
        window.showLoadError?.('데이터를 불러오지 못했습니다.');
    }

    afterLoading();
}

initPage();

function render(chants) {
    const audioEl = document.getElementById('audio');
    let type = 'team';
    let name = '';
    let idx = -1;

    // 오디오 재생/일시정지 상태와 버튼 아이콘 동기화
    $('#audio').off('play.sync pause.sync ended.sync')
        .on('play.sync', function () {
            $('#chantsPause > img:nth-of-type(1)').css('display', 'none');
            $('#chantsPause > img:nth-of-type(2)').css('display', 'block');
        })
        .on('pause.sync ended.sync', function () {
            $('#chantsPause > img:nth-of-type(1)').css('display', 'block');
            $('#chantsPause > img:nth-of-type(2)').css('display', 'none');
        });

    const renderList = (listType) => {
        $('#chantsList > div').remove();
        const listObj = chants?.[listType] || {};
        const keys = Object.keys(listObj);

        for (let i = 0; i < keys.length; i++) {
            const rawKey = keys[i];
            const displayName = rawKey.replace(/^[0-9]+_/, '');

            const $item = $(`<div glass='true'></div>`).text(displayName).attr('data-key', rawKey);
            $('#chantsList').append($item);
        }
    };

    // 응원가 목록 불러오기
    $('#chantsList > button:nth-of-type(1)').click(function() {
        type = 'team';
        idx = -1;

        $('#chantsList > button').css({'background': 'none', 'color': '#05090a'});
        $(this).css({'background': '#000060c0', 'color': '#faf6f5'});

        renderList('team');
    });

    $('#chantsList > button:nth-of-type(2)').click(function() {
        type = 'players';
        idx = -1;

        $('#chantsList > button').css({'background': 'none', 'color': '#05090a'});
        $(this).css({'background': '#000060c0', 'color': '#faf6f5'});

        renderList('players');
    });

    $('#chantsList > button:nth-of-type(1)').trigger('click');

    // 플레이어 열기 모션
    let startY = 0;
    let startTime = 0;
    let currHeight;
    let isOpen = false;

    $('#pullupHandle').on('touchstart', function(e) {
        startY = e.originalEvent.touches[0].clientY;
        startTime = new Date().getTime();
    });

    $('#pullupHandle').on('touchend', function(e) {
        if (!startY) return;

        const endY = e.originalEvent.changedTouches[0].clientY;
        const endTime = new Date().getTime();

        const distance = startY - endY;
        const duration = endTime - startTime;

        if (distance > 50 && duration < 300 && !isOpen) {
            isOpen = true;
            currHeight = openPlayer();
        }

        startY = 0;
    });

    // 플레이어 닫기 버튼
    $('#closePlayer').click(function() {
        if (isOpen) {
            isOpen = false;
            closePlayer(currHeight);
        }
    });

    // 응원가 클릭하면 재생
    $('#chantsList').on('click', 'div', function() {
        const rawKey = $(this).attr('data-key');
        name = $(this).text().replaceAll(' ', '_');
        idx = $('#chantsList > div').index(this) + 1;

        playChant(audioEl, chants, name, type, rawKey);
    });

    // 재생 등 컨트롤
    $('#chantsPause').on('click', function() {
        if (!audioEl || !audioEl.getAttribute('src')) return;
        if (audioEl.paused) {
            audioEl.play().catch(() => {});
        } else {
            audioEl.pause();
        }
    });

    $(document).on('keydown', function(e) {
        if (e.code === 'Space' || e.key === ' ' || e.keyCode === 32) {
            const target = e.target;
            if (target && (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'].includes(target.tagName) || target.isContentEditable)) {
                return;
            }
            if (!audioEl || !audioEl.getAttribute('src')) return;

            e.preventDefault();

            if (audioEl.paused) {
                audioEl.play().catch(() => {});
            } else {
                audioEl.pause();
            }
        }
    });

    $('#chantsPrev').on('click', function() {
        const len = $('#chantsList > div').length;
        if (len === 0) return;

        if (!Number.isInteger(idx) || idx < 1 || idx > len) idx = len;
        else if (idx > 1) idx--;
        else idx = len;
        
        const $item = $(`#chantsList > div:nth-of-type(${idx})`);
        const rawKey = $item.attr('data-key');
        name = $item.text().replaceAll(' ', '_');

        playChant(audioEl, chants, name, type, rawKey);
    });

    $('#chantsNext').on('click', function() {
        const len = $('#chantsList > div').length;
        if (len === 0) return;

        if (!Number.isInteger(idx) || idx < 1 || idx > len) idx = 1;
        else if (idx < len) idx++;
        else idx = 1;
        
        const $item = $(`#chantsList > div:nth-of-type(${idx})`);
        const rawKey = $item.attr('data-key');
        name = $item.text().replaceAll(' ', '_');

        playChant(audioEl, chants, name, type, rawKey);
    });
}

function openPlayer() {
    let currHeight = $('#chantsPlayer').height();

    $('header > div > img').css('filter', 'brightness(0) invert(1) sepia(0.1)');

    $('#chantsPlayer').animate({'height': '100vh'}, 300);
    $('#chantsPlayer > p').animate({'margin-bottom': '40px', 'font-size': '24px'}, 300);
    $('#chantsControl').animate({'margin-top': '40px'}, 300);
    $('#chantsControl > button').animate({'width': '23vw', 'height': '23vw', 'margin': '0 3vw'}, 300);
    $('#chantsControl > button > img').animate({'height': '6vw'}, 300);

    $('#closePlayer').fadeIn(300);
    $('#lyricBox').fadeIn(300).css('bottom', `${$('#chantsPlayer').height() + 100 + (0.13 * $(window).width())}px`);

    return currHeight;
}

function closePlayer(currHeight) {
    $('header > div > img').css('filter', 'none');

    $('#chantsPlayer').animate({'height': currHeight}, 300);
    $('#chantsPlayer > p').animate({'margin-bottom': '20px', 'font-size': '20px'}, 300);
    $('#chantsControl').animate({'margin-top': '20px'}, 300);
    $('#chantsControl > button').animate({'width': '10vw', 'height': '10vw', 'margin': '0 5vw'}, 300);
    $('#chantsControl > button > img').animate({'height': '3vw'}, 300);

    $('#closePlayer').fadeOut(300);
    $('#lyricBox').fadeOut(300);
}

function playChant(audioEl, chants, name, type, rawKey) {
    if (!audioEl) return;

    // m4a 파일 불러오기
    $('#audio').attr('src', `./files/chants/${name}.m4a`);

    // 메타데이터 불러오기
    $('#audio').off('loadedmetadata').on('loadedmetadata', function() {
        if (audioEl.duration && isFinite(audioEl.duration)) {
            $('#progressBar > input').attr('max', audioEl.duration);
            console.log(`${name}, ${audioEl.duration}s`);
        }
    });

    // 제목 표시
    $('#chantsPlayer > p').text(name.replaceAll('_', ' ')).css('font-weight', 600);

    // 자막 표시
    $('#lyricBox').empty();

    const lyricsArr = chants?.[type]?.[rawKey] || {};

    const time = Object.keys(lyricsArr);
    const lyrics = Object.values(lyricsArr);

    for (let i = 0; i < lyrics.length; i++) {
        $('#lyricBox').append($('<p></p>').text(lyrics[i]));
    }

    let currIdx = -1;

    // 시간 실시간 업데이트
    $('#audio').off('timeupdate').on('timeupdate', function() {
        const curr = audioEl.currentTime;
        const dur = audioEl.duration;

        if (dur && isFinite(dur)) {
            const pct = (curr / dur) * 100;

            $('#progressBar > input').val(curr);

            updatePct(pct);
        }

        // 실시간 가사
        let activeIdx = -1; // 현재 가사 index

        for (let i = 0; i < lyrics.length; i++) {
            if (curr >= Number(time[i].replace(':', '.'))) activeIdx = i;
            else break;
        }

        if (activeIdx !== currIdx) {
            currIdx = activeIdx;

            if ($(window).width() < 768) $(`#lyricBox > p`).css({'font-size': '20px', 'font-weight': '300'});
            else $(`#lyricBox > p`).css({'font-size': '16px', 'font-weight': '300'});

            if (activeIdx >= 0) {
                const $activeLine = $(`#lyricBox > p:nth-of-type(${activeIdx + 1})`);
                if ($(window).width() < 768) $activeLine.css({'font-size': '24px', 'font-weight': '600'});
                else $activeLine.css({'font-size': '18px', 'font-weight': '600'});

                $activeLine[0]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    // 자막 클릭하면 시간 이동
    $('#lyricBox > p').off('click').on('click', function() {
        let lineIdx = $(this).index();
        let t = Number(String(time[lineIdx] ?? '').replace(':', '.'));

        if (isFinite(t)) {
            audioEl.currentTime = t;
            audioEl.play().catch(() => {});
        }

        if (audioEl.duration && isFinite(audioEl.duration)) {
            updatePct((t / audioEl.duration) * 100);
        }
    });

    // 재생 바 기능 구현
    $('#progressBar > input').off('input').on('input', function() {
        const val = Number($(this).val());

        if (isFinite(val)) {
            audioEl.currentTime = val;

            if (audioEl.duration && isFinite(audioEl.duration)) {
                updatePct((val / audioEl.duration) * 100);
            }
        }
    });

    // 자동 재생
    audioEl.play().catch(() => {});
}

function updatePct(pct) {
    if (isFinite(pct)) {
        const clamped = Math.max(0, Math.min(100, pct));
        $('#progressBar > div:nth-of-type(2)').css('width', `${clamped}%`);
        $('#progressBar > div:nth-of-type(3)').css('left', `calc(${clamped + 5}% - ${(clamped * 0.04).toFixed(2)}px)`);
    }
}
