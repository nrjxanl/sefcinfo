import { loadData } from './firebase.js';

beforeLoading();

async function initPage() {
    try {
        /*
            chants: 응원가(가사)
        */

        const chants = await loadData('chants');

        render(chants);
    } catch (error) {
        console.error('데이터 불러오기 실패', error);
    }

    afterLoading();
}

initPage();

function render(chants) {
    let type = 'team';

    // 응원가 목록 불러오기
    $('#chantsList > button:nth-of-type(1)').click(function() {
        type = 'team';

        $('#chantsList > button').css({'background': 'none', 'color': '#05090a'});
        $(this).css({'background': '#000060c0', 'color': '#faf6f5'});

        $('#chantsList > div').remove();

        for (let i = 0; i < Object.keys(chants['team']).length; i++) {
            const name = Object.keys(chants['team'])[i].replace(/^[0-9]+_/, '');

            $('#chantsList').append(`<div glass = 'true'>${name}</div>`);
        }
    });

    $('#chantsList > button:nth-of-type(2)').click(function() {
        type = 'players';

        $('#chantsList > button').css({'background': 'none', 'color': '#05090a'});
        $(this).css({'background': '#000060c0', 'color': '#faf6f5'});

        $('#chantsList > div').remove();

        for (let i = 0; i < Object.keys(chants['players']).length; i++) {
            const name = Object.keys(chants['players'])[i].replace(/^[0-9]+_/, '');

            $('#chantsList').append(`<div glass = 'true'>${name}</div>`);
        }
    });

    $('#chantsList > button:nth-of-type(1)').trigger('click');

    // 플레이어 열기 모션
    let startY = 0;
    let startTime = 0;
    let currHeight;

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

        if (distance > 50 && duration < 300) {
            currHeight = openPlayer();
        }

        startY = 0;
    });

    // 플레이어 닫기 버튼
    $('#closePlayer').click(function() {
        closePlayer(currHeight);
    });

    // 응원가 클릭하면 재생
    let name, idx;

    $('#chantsList').on('click', 'div', function() {
        name = $(this).text().replaceAll(' ', '_');
        idx = $('#chantsList > div').index(this) + 1;

        playChant(chants, name, type, idx);
    });

    // 재생 등 컨트롤
    $('#chantsPause').on('click', function() {
        if (audio.paused) {
            audio.play();
            $('#chantsPause > img:nth-of-type(1)').css('display', 'none');
            $('#chantsPause > img:nth-of-type(2)').css('display', 'block');
        } else {
            audio.pause();
            $('#chantsPause > img:nth-of-type(1)').css('display', 'block');
            $('#chantsPause > img:nth-of-type(2)').css('display', 'none');
        }
    });

    $(document).on('keydown', function(e) {
        if (e.code === 'Space' || e.key === ' ' || e.keyCode === 32) {
            e.preventDefault();

            if (audio.paused) {
                audio.play();
                $('#chantsPause > img:nth-of-type(1)').css('display', 'none');
                $('#chantsPause > img:nth-of-type(2)').css('display', 'block');
            } else {
            audio.pause();
                $('#chantsPause > img:nth-of-type(1)').css('display', 'block');
                $('#chantsPause > img:nth-of-type(2)').css('display', 'none');
            }
        }
    });

    $('#chantsPrev').on('click', function() {
        if (idx != 1) idx--;
        else idx = $('#chantsList > div').length;
        
        name = $(`#chantsList > div:nth-of-type(${idx})`).text().replaceAll(' ', '_');

        playChant(chants, name, type, idx);
    });

    $('#chantsNext').on('click', function() {
        if (idx != $('#chantsList > div').length) idx++;
        else idx = 1;
        
        name = $(`#chantsList > div:nth-of-type(${idx})`).text().replaceAll(' ', '_');

        playChant(chants, name, type, idx);
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

function playChant(chants, name, type, idx) {
    let pct;

    // m4a 파일 불러오기
    $('#audio').attr('src', `./files/chants/${name}.m4a`);

    // 메타데이터 불러오기
    $('#audio').on('loadedmetadata', function() {
        if (audio.duration && isFinite(audio.duration)) {
            $('#progressBar > input').attr('max', audio.duration);
            console.log(`${name}, ${audio.duration}s`);
        }
    });

    // 제목 표시
    $('#chantsPlayer > p').text(name.replaceAll('_', ' ')).css('font-weight', 600);

    // 자막 표시
    $('#lyricBox').empty();

    const lyricsArr = chants[type][`${idx.toString().padStart(2, '0')}_${name.replaceAll('_', ' ')}`];

    const time = Object.keys(lyricsArr);
    const lyrics = Object.values(lyricsArr);

    for (let i = 0; i < lyrics.length; i++) {
        $('#lyricBox').append(`<p>${lyrics[i]}</p>`);
    }

    let currIdx = -1;

    // 시간 실시간 업데이트
    $('#audio').off('timeupdate').on('timeupdate', function() {
        const curr = audio.currentTime;
        const dur = audio.duration;

        if (dur && isFinite(dur)) {
            pct = (curr / dur) * 100;

            $('#progressBar > input').val(curr);

            updatePct(pct);
        }

        // 실시간 가사
        let activeIdx = -1; // 현재 가사 index

        for (let i = 0; i < lyrics.length; i++) {
            if (curr >= Number(time[i].replace(':', '.'))) activeIdx = i;
            else break;
        }

        if (activeIdx != currIdx) {
            $(`#lyricBox > p`).css({'font-size': '20px', 'font-weight': '300'});
            $(`#lyricBox > p:nth-of-type(${activeIdx + 1})`).css({'font-size': '24px', 'font-weight': '600'});

            $(`#lyricBox > p:nth-of-type(${activeIdx + 1})`)[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    // 자막 클릭하면 시간 이동
    $('#lyricBox > p').on('click', function() {
        let idx = $(this).index();
        let t = Number(time[idx].replace(':', '.'));
        let pct = (t / audio.duration) * 100;

        if (isFinite(t)) {
            audio.currentTime = t;

            audio.play();
        }

        if (audio.duration) updatePct(pct);
    });

    // 재생 바 기능 구현
    $('#progressBar > input').on('input', function() {
        const val = Number($(this).val());

        if (isFinite(val)) {
            audio.currentTime = val;

            const pct = (val / audio.duration) * 100;

            if (audio.duration) updatePct(pct);
        }
    });

    // 자동 재생
    $('#audio')[0].play();
    $('#chantsPause > img:nth-of-type(1)').css('display', 'none');
    $('#chantsPause > img:nth-of-type(2)').css('display', 'block');

    // 재생 종료 시
    $('#audio').off('ended').on('ended', function() {
        $('#chantsPause > img:nth-of-type(1)').css('display', 'block');
        $('#chantsPause > img:nth-of-type(2)').css('display', 'none');
    });
}

function updatePct(pct) {
    if (isFinite(pct)) {
        $('#progressBar > div:nth-of-type(2)').css('width', `${pct}%`);
        $('#progressBar > div:nth-of-type(3)').css('left', `${pct + 5}%`);
    }
}