import { loadData } from './firebase.js';

beforeLoading();

async function initPage() {
    try {
        /*
            seats: 직관 정보
        */

        const seats = await loadData(`seats`);

        render(seats || {});
    } catch (error) {
        console.error('데이터 불러오기 실패', error);
        window.showLoadError?.('데이터를 불러오지 못했습니다.');
    }

    afterLoading();
}

initPage();

function openSafeExternalUrl(url) {
    if (typeof url === 'string' && /^https?:\/\//i.test(url.trim())) {
        window.open(url.trim(), '_blank', 'noopener,noreferrer');
    }
}

function render(seats) {
    // 마우스 올리거나 클릭하면 버튼 생성
    $('#selectStadium > .stadium-card').on('mouseenter click', function (e) {
        if ($(e.target).is('button')) return;
        if ($(this).find('button').length) return;

        $('#selectStadium > .stadium-card').css('cursor', 'pointer');
        $('#selectStadium > .stadium-card > div > img').css('display', 'inline');
        $('#selectStadium > .stadium-card > div > button').remove();
        $(this).css('cursor', 'auto');
        $(this).find('div > img').css('display', 'none');

        $(this).find('div').append('<button glass="true" transl="y" style="pointer-events:none;">관중석 시야</button><button glass="true" transl="y" style="pointer-events:none;">주변 맛집</button>');
        setTimeout(() => $(this).find('button').css('pointer-events', 'auto'), 100);

        let stadium = $(this).closest('.stadium-card').find('p').clone().find('span').remove().end().html().replace(/<br\s*\/?>/gi, ' ').trim();
        let stadiumId = $(this).closest('.stadium-card').attr('id');

        // 관중석 시야 미지원 경기장
        if (stadium == '광양축구전용구장' || stadium == '천안종합운동장 주경기장' || stadium == '청주종합경기장' || stadium == '이순신종합운동장') {
            $(this).find('div > button:nth-of-type(1)').css('opacity', 0.3).attr('class', 'noHover');
        }

        // 주변 맛집 미지원 경기장
        if (stadium == '김포솔터축구장' || stadium == '구덕운동장' || stadium == '안산와~스타디움' || stadium == '이순신종합운동장' || stadium == '창원축구센터 주경기장' || stadium == '화성종합경기타운 주경기장' || stadium == '수원종합운동장 주경기장' || stadium == '대구iM뱅크파크' || stadium == '용인미르스타디움' || stadium == '파주스타디움' || stadium == '김해종합운동장') {
            $(this).find('div > button:nth-of-type(2)').css('opacity', 0.3).attr('class', 'noHover');
        }

        // 버튼 클릭하면 페이지 이동
        $(this).find('div > button:nth-of-type(1)').off('click').on('click', function() {
            if ($(this).css('opacity') == 1) window.location.href = `./seats/${stadiumId}`;
            else alert(`${stadium}은 비지정석 제도로 운영되어 관중석 시야 기능이 지원되지 않습니다.`);
        });
        $(this).find('div > button:nth-of-type(2)').off('click').on('click', function() {
            if ($(this).css('opacity') == 1) window.location.href = `./fnb/${stadiumId}`;
            else alert(`${stadium} 주변 맛집 기능은 준비 중입니다.`);
        });
    });

    $('#selectStadium > .stadium-card').on('mouseleave', function () {
        $(this).css('cursor', 'pointer');
        $(this).find('div > img').css('display', 'inline');
        $(this).find('div > button').remove();
    });

    // 관중석 시야
    $('#seats > path, #seats > g, #seats > polygon, #seats > rect').off('click').on('click', function() {
        let stadium = window.location.pathname.split('/').pop().replace('.html', '');
        let zone = $(this).attr('id');

        let data = seats?.[stadium]?.[zone];

        if (data != undefined && data['table'] != undefined) {
            $('#zonesPopUp').css('display', 'block');
            $('#zonesPopUp > p').html(zone + '구역<span><img src="../files/x.svg"></span>');
            $('#zonesPopUp > table').empty().append(data['table']);

            const $rows = $('#zonesPopUp > table tr');
            for (let i = 1; i <= $rows.length; i++) {
                const $row = $rows.eq(i - 1);
                const $cells = $row.children('td');
                for (let j = 1; j <= $cells.length; j++) {
                    const $cell = $cells.eq($cells.length - j);
                    let num = $cell.text();

                    // i: 열, num: 좌석 번호
                    if (!num.includes('열')) {
                        if (num == '') $cell.css('border', 'none');
                        else if (data[i]?.[num] != undefined) $cell.css({'background': '#000060c0', 'color': '#faf6f5', 'font-weight': '900', 'cursor': 'pointer', 'border-color': '#faf6f5'}).attr('class', `y ${i}_${num}`);
                    }
                }
            }

            $('#zonesPopUp .y').off('click').on('click', function() {
                let parts = $(this).attr('class').replace('y ', '').split('_');
                let row = parts[0];
                let num = parts[1];
                let img = data?.[row]?.[num];
                if (!img) return;

                $('#seatsPopUp, #seatsPopUpBG').css({'opacity': 1, 'pointer-events': 'auto'});

                $('#seatsPopUp > p').html(`${zone}구역 ${row}열 ${num}<span><img src="../files/x.svg"></span>`);
                $('#seatsPopUp > img').attr('src', `../files/stadium/${img}`);
                
                $('#seatsPopUp > p > span, #seatsPopUpBG').off('click').on('click', function() {
                    $('#seatsPopUp, #seatsPopUpBG').css({'opacity': 0, 'pointer-events': 'none'});
                    $('#seatsPopUp > img').removeAttr('src');
                });
            });

            $('#zonesPopUp > p > span').off('click').on('click', function() {
                $('#zonesPopUp').css('display', 'none');
            });
        } else {
            alert('준비 중입니다.');
        }
    });

    // 주변 맛집 불러오기
    if ($('#addFnb').length) {
        let stadium = window.location.pathname.split('/').pop().replace('.html', '');

        let food = seats?.[stadium]?.['fnb']?.['food'] || {};
        let cafe = seats?.[stadium]?.['fnb']?.['cafe'] || {};

        const naverIcon = 'https://play-lh.googleusercontent.com/BaWUhtRONqb2Tt0ESjnaEH9KiaAUnOlFJqGzGUYN6oPsEEpZhPwQeHZhuGcM1Y8g1Io=w480-h960-rw';
        const kakaoIcon = 'https://play-lh.googleusercontent.com/pPTTNz433EYFurg2j__bFU5ONdMoU_bs_-yS2JLZriua3iHrksGP6XBPF5VtDPlpGcW4=w480-h960-rw';

        const appendPlaceCards = ($container, placeMap) => {
            Object.keys(placeMap).forEach((name) => {
                const info = placeMap[name] || [];
                const $card = $('<div glass="true"></div>');
                const $p = $('<p></p>').text(name);
                $p.append($('<span></span>').text(info[0] ?? ''));
                $p.append($('<span></span>').text(info[1] ?? ''));

                const $btnWrap = $('<div></div>');
                const $naverImg = $('<img glass="true">').attr('src', naverIcon).on('click', () => openSafeExternalUrl(info[2]));
                const $kakaoImg = $('<img glass="true">').attr('src', kakaoIcon).on('click', () => openSafeExternalUrl(info[3]));
                $btnWrap.append($naverImg, $kakaoImg);

                $card.append($p, $btnWrap);
                $container.append($card);
            });
        };

        appendPlaceCards($('#food'), food);
        appendPlaceCards($('#cafe'), cafe);
    }
}
