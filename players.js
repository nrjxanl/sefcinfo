import { loadData } from './firebase.js';

let teamType = (window.location.href.split('?')[1] == 'A' || window.location.href.split('?')[1] == 'U18' || window.location.href.split('?')[1] == 'U15') ? window.location.href.split('?')[1] : 'A';

beforeLoading();

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
    // 버튼 역할 지정
    $('.playerButton > button:nth-of-type(1)').click(() => teamA(dataA, playerA, playerNum));
    $('.playerButton > button:nth-of-type(2)').click(() => teamU18(dataU18, playerU18, playerNum));
    $('.playerButton > button:nth-of-type(3)').click(() => teamU15(dataU15, playerU15, playerNum));
    
    // 기본 함수 실행
    switch(teamType) {
        case 'A':
            teamA(dataA, playerA, playerNum);
            break;
        case 'U18':
            teamU18(dataU18, playerU18, playerNum);
            break;
        case 'U15':
            teamU15(dataU15, playerU15, playerNum);
            break;
        default:
            teamA(dataA, playerA, playerNum);
    }
}

// 선수단 불러오기
function loadPlayers(data, player, playerNum, teamType) {
    // url 설정
    window.history.replaceState({}, "", `${window.location.href.split("?")[0]}?${teamType}`);

    // html 비우기
    $('[id^="player"] > div > div:nth-of-type(2n)').empty();

    // 현재 선수 명단 초기화
    let playerListGK = {};
    let playerListDF = {};
    let playerListMF = {};
    let playerListFW = {};

    let playerKeys = Object.keys(player);

    const year = new Date().getFullYear();

    for (let i = 0; i < playerKeys.length; i++) {
        if (player[playerKeys[i]]['sefc'] == 'O') {
            try {
                let id = playerKeys[i];
                let name = player[id]['name'];
                let pos = player[id]['pos'];
                let num;

                try {
                    num = playerNum[year][id][1];
                } catch (error) {
                    num = '--';
                }

                switch (pos) {
                    case '골키퍼':
                        playerListGK[id] = [name, num, pos];
                        break;
                    case '수비수':
                        playerListDF[id] = [name, num, pos];
                        break;
                    case '미드필더':
                        playerListMF[id] = [name, num, pos];
                        break;
                    case '공격수':
                        playerListFW[id] = [name, num, pos];
                        break;
                }
            } catch (error) {}
        }
    }

    let playerList = [
        playerListGK,
        playerListDF,
        playerListMF,
        playerListFW
    ];

    // 등번호순으로 정렬된 id 배열 생성
    let sortedKeys = [
        Object.keys(playerListGK),
        Object.keys(playerListDF),
        Object.keys(playerListMF),
        Object.keys(playerListFW)
    ];

    for (let i = 0; i < 4; i++) {
        let currKeys = sortedKeys[i];
        let currList = playerList[i];

        currKeys.sort((a, b) => {
            let numA = currList[a][1];
            let numB = currList[b][1];

            if (isNaN(numA)) numA = 999;
            if (isNaN(numB)) numB = 999;

            return numA - numB;
        })
    }

    // 선수 목록 삽입
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < sortedKeys[i].length; j++) {
            let id = sortedKeys[i][j];
            let name = playerList[i][id][0].replace(/[0-9]/g, '');
            let num = playerList[i][id][1];

            $(`#player${teamType} > div > div:nth-of-type(${2 * i + 2})`).append(`<div class = ${id} glass = 'true'><p>${num}</p><p transl = 'y'>${name}</p><p>0</p><p>0</p><p>0</p><p>0</p><p>0</p><p>0</p></div>`);
        }
    }

    // 선수 기록 추가
    let playerData = {};

    const pos = ['GK', 'DF', 'MF', 'FW', 'SUB'];
    const matchId = Object.keys(data).filter((id) => id.substring(0, 4) == year);

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

    $('[id^="player"] > div > div > div').each(function () {
        let id = $(this).attr('class');

        // 선수 스탯 추가
        if (playerData[id] != undefined) {
            for (let i = 3; i < 8; i++) {
                if (i < 6) $(this).find(`p:nth-of-type(${i})`).text(playerData[id][i - 3]);
                else $(this).find(`p:nth-of-type(${i + 1})`).text(playerData[id][i - 3]);
            }

            $(this).find('p:nth-of-type(6)').text(playerData[id][1] + playerData[id][2]);
        }

        // 유스 선수 기록 일부 숨김 처리
        if (teamType != 'A') $(this).find('p:nth-of-type(n+3):nth-of-type(-n+4)').css('display', 'none');

        // 클릭 시 선수 세부 정보 창으로 이동
        $(this).click(function () {
            if (id.length >= 8) {
                window.location.href = `./player?${id}`;
            }
        })
    })
}

// 팀 선택
function teamA(data, player, playerNum) {
    teamType = 'A';
    
    $('.playerButton > button').css({ 'color': '#05090a', 'background': '#faf6f540' });
    $('.playerButton > button:nth-of-type(1)').css({'color': '#faf6f5', 'background': '#000060c0'});

    $('[id^="player"]').css('display', 'none');
    $('#playerA').css('display', 'block');

    loadPlayers(data, player, playerNum, teamType);
}

function teamU18(data, player, playerNum) {
    teamType = 'U18';

    $('.playerButton > button').css({ 'color': '#05090a', 'background': '#faf6f540' });
    $('.playerButton > button:nth-of-type(2)').css({'color': '#faf6f5', 'background': '#000060c0'});

    $('[id^="player"]').css('display', 'none');
    $('#playerU18').css('display', 'block');

    loadPlayers(data, player, playerNum, teamType);
}

function teamU15(data, player, playerNum) {
    teamType = 'U15';

    $('.playerButton > button').css({ 'color': '#05090a', 'background': '#faf6f540' });
    $('.playerButton > button:nth-of-type(3)').css({'color': '#faf6f5', 'background': '#000060c0'});

    $('[id^="player"]').css('display', 'none');
    $('#playerU15').css('display', 'block');

    loadPlayers(data, player, playerNum, teamType);
}