import { loadData } from './firebase.js';

beforeLoading();

async function initPage() {
    try {
        /*
            seats: 직관 정보
        */

        const seats = await loadData(`seats`);

        render(seats);
    } catch (error) {
        console.error('데이터 불러오기 실패', error);
    }

    afterLoading();
}

initPage();

function render(seats) {
    // 마우스 올리거나 클릭하면 버튼 생성
    $('#selectStadium > a').on('mouseenter click', function (e) {
        if ($(e.target).is('button')) return;
        if ($(this).find('button').length) return;

        $('#selectStadium > a').css('cursor', 'pointer');
        $('#selectStadium > a > div > img').css('display', 'inline');
        $('#selectStadium > a > div > button').remove();
        $(this).css('cursor', 'auto');
        $(this).find('div > img').css('display', 'none');

        $(this).find('div').append('<button glass="true" transl="y" style="pointer-events:none;">관중석 시야</button><button glass="true" transl="y" style="pointer-events:none;">주변 맛집</button>');
        setTimeout(() => $(this).find('button').css('pointer-events', 'auto'), 100);

        let stadium = $(this).closest('a').find('p').contents().filter(function () {
            return this.nodeType == 3;
        }).text().trim();

        let stadiumId = $(this).closest('a').attr('id');

        // 관중석 시야 미지원 경기장
        if (stadium == '광양축구전용구장' || stadium == '천안종합운동장 주경기장' || stadium == '청주종합경기장' || stadium == '이순신종합운동장') {
            $(this).find('div > button:nth-of-type(1)').css('opacity', 0.3).attr('class', 'noHover');
        };

        // 주변 맛집 미지원 경기장
        if (stadium == '김포솔터축구장' || stadium == '구덕운동장' || stadium == '안산와~스타디움' || stadium == '이순신종합운동장' || stadium == '창원축구센터 주경기장' || stadium == '천안종합운동장 주경기장' || stadium == '화성종합경기타운 주경기장' || stadium == '수원종합운동장 주경기장' || stadium == '대구iM뱅크파크' || stadium == '용인미르스타디움' || stadium == '파주스타디움' || stadium == '김해종합운동장') {
            $(this).find('div > button:nth-of-type(2)').css('opacity', 0.3).attr('class', 'noHover');
        };

        // 버튼 클릭하면 페이지 이동
        $('#selectStadium > a > div > button:nth-of-type(1)').click(function() {
            if ($(this).css('opacity') == 1) window.location.href = `./seats/${stadiumId}`;
            else alert(`${stadium}은 비지정석 제도로 운영되어 관중석 시야 기능이 지원되지 않습니다.`);
        });
        $('#selectStadium > a > div > button:nth-of-type(2)').click(function() {
            if ($(this).css('opacity') == 1) window.location.href = `./fnb/${stadiumId}`;
            else alert(`${stadium} 주변 맛집 기능은 준비 중입니다.`);
        });
    });

    $('#selectStadium > a').on('mouseleave', function () {
        $(this).css('cursor', 'pointer');
        $(this).find('div > img').css('display', 'inline');
        $(this).find('div > button').remove();
    });

    // 관중석 시야
    $('#seats > path, #seats > g').click(function() {
        let stadium = window.location.pathname.split('/').pop().replace('.html', '');
        let zone = $(this).attr('id');

        let data = seats[stadium][zone];

        if (data != undefined && data['table'] != undefined) {
            $('#zonesPopUp').css('display', 'block');
            $('#zonesPopUp > p').html(zone + '구역<span><img src="../files/x.svg"></span>');
            $('#zonesPopUp > table').empty().append(data['table']);

            for (let i = 1; i <= $('#zonesPopUp > table > tr').length; i++) {
                for (let j = 1; j <= $(`#zonesPopUp > table > tr:nth-of-type(${i}) > td`).length; j++) {
                    let num = $(`#zonesPopUp > table > tr:nth-of-type(${i}) > td:nth-last-of-type(${j})`).text();

                    // i: 열, num: 좌석 번호

                    if (!num.includes('열')) {
                        if (num == '') $(`#zonesPopUp > table > tr:nth-of-type(${i}) > td:nth-last-of-type(${j})`).css('border', 'none');
                        else if (data[i]?.[num] != undefined) $(`#zonesPopUp > table > tr:nth-of-type(${i}) > td:nth-last-of-type(${j})`).css({'background': '#000060c0', 'color': '#faf6f5', 'font-weight': '900', 'cursor': 'pointer', 'border-color': '#faf6f5'}).attr('class', `y ${i}_${num}`);
                    }
                }
            }
        } else alert('준비 중입니다.');

        $('.y').click(function() {
            let row = $(this).attr('class').replace('y ', '').split('_')[0];
            let num = $(this).attr('class').replace('y ', '').split('_')[1];
            let img = data[row][num];

            $('#seatsPopUp, #seatsPopUpBG').css({'opacity': 1, 'pointer-events': 'auto'});

            $('#seatsPopUp > p').html(`${zone}구역 ${row}열 ${num}<span><img src="../files/x.svg"></span>`);
            $('#seatsPopUp > img').attr('src', `../files/stadium/${img}`);
            
            $('#seatsPopUp > p > span, #seatsPopUpBG').click(function() {
                $('#seatsPopUp, #seatsPopUpBG').css({'opacity': 0, 'pointer-events': 'none'});
            });
        });

        $('#zonesPopUp > p > span').click(function() {
            $('#zonesPopUp').css('display', 'none');
        });
    });

    // 주변 맛집 불러오기
    if ($('#addFnb').length) {
        let stadium = window.location.pathname.split('/').pop().replace('.html', '');

        let food = seats[stadium]['fnb']['food'];
        let cafe = seats[stadium]['fnb']['cafe'];

        for (let i = 0; i < Object.keys(food).length; i++) {
            let name = Object.keys(food)[i];
            
            $('#food').append(`<div glass='true'><p>${name}<span>${food[name][0]}</span><span>${food[name][1]}</span></p><div><img onclick='window.open("${food[name][2]}")' src='https://play-lh.googleusercontent.com/BaWUhtRONqb2Tt0ESjnaEH9KiaAUnOlFJqGzGUYN6oPsEEpZhPwQeHZhuGcM1Y8g1Io=w480-h960-rw' glass='true'><img onclick='window.open("${food[name][3]}")' src='https://play-lh.googleusercontent.com/pPTTNz433EYFurg2j__bFU5ONdMoU_bs_-yS2JLZriua3iHrksGP6XBPF5VtDPlpGcW4=w480-h960-rw' glass='true'></div></div>`);
        }

        for (let i = 0; i < Object.keys(cafe).length; i++) {
            let name = Object.keys(cafe)[i];
            
            $('#cafe').append(`<div glass='true'><p>${name}<span>${cafe[name][0]}</span><span>${cafe[name][1]}</span></p><div><img onclick='window.open("${cafe[name][2]}")' src='https://play-lh.googleusercontent.com/BaWUhtRONqb2Tt0ESjnaEH9KiaAUnOlFJqGzGUYN6oPsEEpZhPwQeHZhuGcM1Y8g1Io=w480-h960-rw' glass='true'><img onclick='window.open("${cafe[name][3]}")' src='https://play-lh.googleusercontent.com/pPTTNz433EYFurg2j__bFU5ONdMoU_bs_-yS2JLZriua3iHrksGP6XBPF5VtDPlpGcW4=w480-h960-rw' glass='true'></div></div>`);
        }
    }
}