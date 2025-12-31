import { loadData } from './firebase.js';

let teamType = (window.location.href.split('?')[2] == 'A' || window.location.href.split('?')[2] == 'U18' || window.location.href.split('?')[2] == 'U15') ? window.location.href.split('?')[2] : 'A';
let currSortIdx = 3;

async function initPage() {
    try {
        /*
            dataA: A팀 전체 데이터
            dataU18: U-18 전체 데이터
            dataU15: U-15 전체 데이터

            playerA: A팀 선수 데이터
            playerU18: U18 선수 데이터
            playerU15: U15 선수 데이터

            playerNum: 선수 등번호
        */

        const [dataA, dataU18, dataU15, playerA, playerU18, playerU15, playerNum] = await Promise.all([
            loadData('dataA'),
            loadData('dataU18'),
            loadData('dataU15'),
            loadData('playerA'),
            loadData('playerU18'),
            loadData('playerU15'),
            loadData('playerNum'),
        ]);

        render(dataA, dataU18, dataU15, playerA, playerU18, playerU15, playerNum);
    } catch (error) {
        console.error('데이터 불러오기 실패', error);
    }

    afterLoading();
}

initPage();

function render(dataA, dataU18, dataU15, playerA, playerU18, playerU15, playerNum) {
    let year;
    const currYear = new Date().getFullYear();

    // 현재 팀 데이터 가져오기
    const getCurrentData = () => {
        if(teamType == 'A') return dataA;
        if(teamType == 'U18') return dataU18;
        if(teamType == 'U15') return dataU15;
    }

    const getCurrentPlayer = () => {
        if(teamType == 'A') return playerA;
        if(teamType == 'U18') return playerU18;
        if(teamType == 'U15') return playerU15;
    }

    // 버튼 역할 지정
    $('.statsButton > button:nth-of-type(1)').click(() => teamA(dataA, year, playerA, playerNum));
    $('.statsButton > button:nth-of-type(2)').click(() => teamU18(dataU18, year, playerU18, playerNum));
    $('.statsButton > button:nth-of-type(3)').click(() => teamU15(dataU15, year, playerU15, playerNum));

    // 연도 선언
    try {
        if (window.location.href.split('?')[1].length == 4) {
            if ((window.location.href.split('?')[1] >= 2015) && (window.location.href.split('?')[1] <= currYear)) {
                year = window.location.href.split('?')[1];
            } else {
                year = currYear;
            }
        } else if (window.location.href.split('?')[1] == 'alltime') {
            year = 0;
        }
    } catch (error) {
        year = currYear;
    }

    for (let i = currYear; i >= 2015; i--) {
        $('.statsSeason > select').append(`<option value='${i}'>${i}</option>`);
    }

    // 기본 함수 실행
    switch (teamType) {
        case 'A':
            teamA(dataA, year, playerA, playerNum);
            break;
        case 'U18':
            teamU18(dataU18, year, playerU18, playerNum);
            break;
        case 'U15':
            teamU15(dataU15, year, playerU15, playerNum);
            break;
        default: ;
    }

    // 버튼 제어
    $('.statsSeason > select').on('change', function() {
        year = $(this).val();
    
        setYear(getCurrentData(), year, getCurrentPlayer(), playerNum, teamType);
    });

    $('.statsSeason > p:nth-of-type(1)').click(function() {
        if (!(year == 2015)) year--;

        setYear(getCurrentData(), year, getCurrentPlayer(), playerNum, teamType);
    });

    $('.statsSeason > p:nth-of-type(2)').click(function() {
        if (!(year == currYear)) year++;

        setYear(getCurrentData(), year, getCurrentPlayer(), playerNum, teamType);
    });

    $('.statsSeason > p:nth-of-type(3)').click(function() {
        year = currYear;

        setYear(getCurrentData(), year, getCurrentPlayer(), playerNum, teamType);
    });

    $('.statsSeason > p:nth-of-type(4)').click(function() {
        // 통산 기록은 year == 0으로 설정
        year = (year ==  0) ? currYear : 0;

        setYear(getCurrentData(), year, getCurrentPlayer(), playerNum, teamType);
    });

    // 표 정렬
    $('#stats > .stats > table > thead > tr > th').click(function() {
        let idx = $(this).index();
        currSortIdx = idx + 1;

        sort(currSortIdx);
    })
}

// 스탯 계산
function loadStats(data, year, player, playerNum, teamType) {
    // 표 비우기
    $('#stats > .stats > table > tbody').empty();
    $('#stats > .stats > table > thead > tr > th, #stats > .stats > table > tbody > tr > tr').css('display', 'table-cell');

    // 선수 기록 추가
    let playerData = {};

    const pos = ['GK', 'DF', 'MF', 'FW', 'SUB'];
    const matchId = (year == 0) ? Object.keys(data) : Object.keys(data).filter((id) => id.substring(0, 4) == year);

    for (let i = 0; i < matchId.length; i++) {
        let matchData = data[matchId[i]];

        for (let j = 0; j < 5; j++) {
            let posLength = matchData[pos[j]] != undefined ? matchData[pos[j]].length : 0;

            for (let k = 0; k < posLength; k++) {
                const id = matchData[pos[j]][k][0];
                const stat = matchData[pos[j]][k][1];

                const app = /[\d-]/.test(stat) ? 1 : 0;
                const g = stat.split('g').length - 1;
                const a = stat.split('a').length - 1;
                const y = stat.split('y').length - 1;
                const r = stat.split('r').length - 1;

                if (playerData[id] == undefined) {
                    playerData[id] = [app, g, a, y, r];
                } else {
                    playerData[id][0] += app;
                    playerData[id][1] += g;
                    playerData[id][2] += a;
                    playerData[id][3] += y;
                    playerData[id][4] += r;
                }
            }
        }
    }

    const playerKeys = Object.keys(playerData);

    for (let i = 0; i < playerKeys.length; i++) {
        let id = playerKeys[i];

        let num = (year == 0)
            ? (playerNum[new Date().getFullYear()] && playerNum[new Date().getFullYear()][id] != undefined ? playerNum[new Date().getFullYear()][id][1] : '-')
            : (playerNum[year] && playerNum[year][id] != undefined ? playerNum[year][id][1] : '-'); let name = player[id]['name'].replace(/[0-9]/g, '');
        
        let app = playerData[id][0];
        let g = playerData[id][1];
        let a = playerData[id][2];
        let y = playerData[id][3];
        let r = playerData[id][4];

        $('#stats > .stats > table > tbody').append(`<tr class = '${id}'><td>${num}</td><td transl = 'y'>${name}</td><td>${app}</td><td>${g}</td><td>${a}</td><td>${g + a}</td><td>${y}</td><td>${r}</td></tr>`);

        if (year == 0) {
            if (num == '-') $(`#stats > .stats > table > tbody > tr:nth-of-type(${i + 1})`).css('opacity', '.7');
        }
    }

    // 유스 기록 도움, 공격포인트 숨기기
    if (teamType != 'A') {
        $('#stats > .stats > table > thead > tr > th:nth-of-type(n+4):nth-of-type(-n+5)').css('display', 'none');
        $('#stats > .stats > table > tbody > tr > td:nth-of-type(n+5):nth-of-type(-n+6)').css('display', 'none');
    }

    // 통산 기록 css
    if (year == 0) {
        $('.statsSeason > select').empty().append('<option selected transl="y">통산</option>').prop('disabled', true);
        $('.statsSeason > p:nth-of-type(n+1):nth-of-type(-n+2)').css('display', 'none');
        $('.statsSeason > p:nth-of-type(4)').text('연도별');

        window.history.replaceState({}, '', `${window.location.href.split("?")[0]}?alltime?${teamType}`);
    } else {
        $('.statsSeason > select').empty().prop('disabled', false);
        for (let i = new Date().getFullYear(); i >= 2015; i--) {
            $('.statsSeason > select').append(`<option value = '${i}'>${i}</option>`);
        }
        $('.statsSeason > select').val(year);
        $('.statsSeason > p:nth-of-type(n+1):nth-of-type(-n+2)').css('display', 'block');
        $('.statsSeason > p:nth-of-type(4)').text('통산');
    }

    // 득점 순 기본 정렬
    sort(currSortIdx);
}

// 표 정렬
function sort(idx) {
    const table = $('#stats > .stats > table');
    const rows = table.find('tbody > tr').get();

    rows.sort(function(a, b) {
        let A = $(a).children('td').eq(idx).text();
        let B = $(b).children('td').eq(idx).text();

        if (idx == 1) return A.localeCompare(B);

        let comparison = Number(B) - Number(A);

        if (A == B) {
            let nameA = $(a).children('td').eq(1).text();
            let nameB = $(b).children('td').eq(1).text();

            return nameA.localeCompare(nameB);
        }

        return comparison;
    });

    $.each(rows, function (_, row) {
        table.children('tbody').append(row);
    });

    $('#stats th, #stats td:nth-of-type(n + 3)').css('font-weight', '600');
    $(`#stats th:nth-of-type(${idx})`).css('font-weight', '900');
    $(`#stats td:nth-of-type(${idx + 1})`).css('font-weight', '900');
}

// 연도 설정
function setYear(data, year, player, playerNum, teamType) {
    $(`option[value='${year}']`).prop('selected', true);

    // url 설정
    window.history.replaceState({}, '', `${window.location.href.split("?")[0]}?${year}?${teamType}`);

    // 일정 불러오기
    loadStats(data, year, player, playerNum, teamType);
}


// 팀 선택
function teamA(data, year, player, playerNum) {
    teamType = 'A';
    
    $('.statsButton > button').css({ 'color': '#05090a', 'background': '#faf6f540' });
    $('.statsButton > button:nth-of-type(1)').css({'color': '#faf6f5', 'background': '#000060c0'});

    setYear(data, year, player, playerNum, teamType);
}

function teamU18(data, year, player, playerNum) {
    teamType = 'U18';

    $('.statsButton > button').css({ 'color': '#05090a', 'background': '#faf6f540' });
    $('.statsButton > button:nth-of-type(2)').css({'color': '#faf6f5', 'background': '#000060c0'});

    setYear(data, year, player, playerNum, teamType);
}

function teamU15(data, year, player, playerNum) {
    teamType = 'U15';

    $('.statsButton > button').css({ 'color': '#05090a', 'background': '#faf6f540' });
    $('.statsButton > button:nth-of-type(3)').css({'color': '#faf6f5', 'background': '#000060c0'});

    setYear(data, year, player, playerNum, teamType);
}