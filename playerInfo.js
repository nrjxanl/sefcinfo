import { loadData } from './firebase.js';

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
    const id = window.location.href.split('?')[1];
    const teamType = ['A', 'U18', 'U15'];
    
    const playerKeysA = Object.keys(playerA);
    const playerKeysU18 = Object.keys(playerU18);
    const playerKeysU15 = Object.keys(playerU15);

    // 선수 정보 표시
    let player, playerType;

    loop: while (true) {
        for (let i = 0; i < playerKeysA.length; i++) {
            if (playerKeysA[i] == id) {
                player = playerA;
                playerType = 'A';
                break loop;
            }
        }
        for (let i = 0; i < playerKeysU18.length; i++) {
            if (playerKeysU18[i] == id) {
                player = playerU18;
                playerType = 'U18';
                break loop;
            }
        }
        for (let i = 0; i < playerKeysU15.length; i++) {
            if (playerKeysU15[i] == id) {
                player = playerU15;
                playerType = 'U15';
                break loop;
            }
        }
    }

    playerInfo(id, player, playerNum);

    // 선수 스탯 찾아서 저장
    let playerData = {
        'A': {
            'total': [0, 0, 0, 0, 0, 0, 0]
        },
        'U18': {
            'total': [0, 0, 0, 0, 0, 0, 0]
        },
        'U15': {
            'total': [0, 0, 0, 0, 0, 0, 0]
        }
    };

    for (let i = 0; i < 3; i++) {
        let type = teamType[i];

        switch (type) {
            case 'A':
                loadStat(id, dataA, playerData, type);
                break;
            case 'U18':
                loadStat(id, dataU18, playerData, type);
                break;
            case 'U15':
                loadStat(id, dataU15, playerData, type);
                break;
            default: ;
        }
    }

    // 경기 누르면 경기 정보 페이지로 이동
    $('[id^=playedMatch] > div > div').click(function() {
        let matchId = $(this).attr('class');

        localStorage.setItem(matchId, 'matchLineup');
        window.location.href = `./match?${matchId}`;
    });

    // PC 버전 margin 수정
    if ($(window).width() >= 768) {
        if ($('#playedSEFC').length) {
            $('#playedSEFCU18, #playedSEFCU15').css('margin-left', '0');
        } else if ($('#playedSEFCU18').length) {
            $('#playedSEFCU15').css('margin-left', '0');
        }
    }

    // 유스 기록 있을 경우 '통산 기록' 텍스트 변경
    if ($('#playedSEFCU18').css('display') != 'none' || $('#playedSEFCU15').css('display') != 'none') {
        $('#playedSEFC > p:nth-of-type(1)').text('A팀 통산 기록');
    }

    // 모두 보기 버튼 기능
    let click = 0;
    $('[id^=playedSEFC] > p:nth-of-type(2)').click(function() {
        let teamType = this.parentNode.id.replace('playedSEFC', '');
        
        $('#playedMatchBG').css('display', 'block').animate({ opacity: '1' }, 300);
        $(`#playedMatch${teamType}`).animate({ bottom: '0' }, 300);

        $('body').css({ 'overflow': 'hidden' })

        click = 1;
    });

    $('#playedMatchBG').click(function () {
        $('#playedMatchBG').animate({ opacity: '0' }, 300, function () {
            $('#playedMatchBG').css('display', 'none')
        })

        $('[id^=playedMatch]').animate({ bottom: '-100vh' }, 300)

        $('body').css({ 'overflow': 'scroll' })

        click = 0
    })
}

function playerInfo(id, player, playerNum) {

    const bd = `${player[id]['bd'].substring(2, 4)}.${player[id]['bd'].substring(4, 6)}.${player[id]['bd'].substring(6, 8)}.`;
    const height = player[id]['height'];
    const num = (playerNum[new Date().getFullYear()][id] != undefined) ? playerNum[new Date().getFullYear()][id][1] : '-';
    const name = player[id]['name'].replace(/[0-9]/g, '');
    const natl = player[id]['natl'];
    const pos = player[id]['pos'];
    const sns = player[id]['sns'];
    const isSefc = (player[id]['sefc'] == 'O') ? true : false;

    const age = new Date().getFullYear() - parseInt(player[id]['bd'].substring(0, 4)) - (((new Date().getMonth() + 1) * 100 + new Date().getDate()) < parseInt(player[id]['bd'].substring(4, 8)) ? 1 : 0);
    
    $('#playerProfile > div:nth-of-type(1) > p').text(pos);

    if (isSefc) $('#playerProfile > div:nth-of-type(2) > p').html(`<span>${num}</span>${name}`);
    else $('#playerProfile > div:nth-of-type(2) > p').html(`<span>-</span>${name}`);

    $('#playerProfile > div:nth-of-type(2) > div > img').attr('src', `./files/${natl}.svg`);

    if (sns != '') $('#playerSNS').attr('href', `https://www.instagram.com/${sns}`);
    else {
        $('#playerSNS').attr('onclick', 'return false').find('div').css('cursor', 'default');
        $('#playerSNS > div > img').css('opacity', '.5');
    }
    
    $('#playerInfo > div:nth-of-type(1) > p:nth-of-type(2)').text(natl);
    $('#playerInfo > div:nth-of-type(2) > p:nth-of-type(2)').text(`${height}㎝`);

    $('#playerInfo > div:nth-of-type(3) > p:nth-of-type(1)').text(bd);
    $('#playerInfo > div:nth-of-type(3) > p:nth-of-type(2)').text(`${age}세`);

    // 페이지명
    $('title').text(`SEFCiNFO - ${name}(${bd})`);
}

function loadStat(id, data, playerData, teamType) {
    const currYear = new Date().getFullYear();
    const pos = ['GK', 'DF', 'MF', 'FW', 'SUB'];

    const colors = [
        { l: 8.5, c: "#374df5c0" },
        { l: 7.5, c: "#00adc4c0" },
        { l: 6.5, c: "#00c424c0" },
        { l: 6.0, c: "#d9af00c0" },
        { l: 5.0, c: "#ed7e07c0" },
        { l: 0.0, c: "#dc0c00c0" }
    ];

    for (let year = 2015; year <= currYear; year++) {
        const dataKeys = Object.keys(data).filter((id) => id.substring(0, 4) == year);

        for (let i = 0; i < dataKeys.length; i++) {
            const matchId = dataKeys[i];
            const matchData = data[matchId];

            for (let j = 0; j < 5; j++) {
                let posLength = matchData[pos[j]] != undefined ? matchData[pos[j]].length : 0;

                for (let k = 0; k < posLength; k++) {
                    let app, appWithRating, g, a, y, r, rating;

                    if (id == matchData[pos[j]][k][0]) {
                        // 스탯 배열에 저장
                        const stat = matchData[pos[j]][k][1];

                        app = (/[\d-]/.test(stat)) ? 1 : 0;
                        appWithRating = (/\d/.test(stat)) ? 1 : 0;
                        g = stat.split('g').length - 1;
                        a = stat.split('a').length - 1;
                        y = stat.split('y').length - 1;
                        r = stat.split('r').length - 1;
                        rating = Number(stat.replace(/[a-z]/g, '').replace('-', ''));

                        if (playerData[teamType][year]  == undefined) {
                            playerData[teamType][year] = [app, appWithRating, g, a, y, r, rating];
                        } else {
                            playerData[teamType][year][0] += app;
                            playerData[teamType][year][1] += appWithRating;
                            playerData[teamType][year][2] += g;
                            playerData[teamType][year][3] += a;
                            playerData[teamType][year][4] += y;
                            playerData[teamType][year][5] += r;
                            playerData[teamType][year][6] += rating;
                        }

                        // 각 경기 페이지에 표시
                        if (app != 0) {
                            const opp = matchData['home'][0] == '서울E' ? matchData['away'][1] : matchData['home'][1];
                            const comp = matchData['comp'][1];
                            const date = `${matchId.substring(0, 4)}.${matchId.substring(4, 6)}.${matchId.substring(6, 8)}.`;

                            $(`#playedMatch${teamType.replace('A', '')} > div`).prepend(`<div class = '${matchId}'><p></p><div><img src = ./files/${opp}_s.png></div><div><img src = ./files/${comp}_s.png></div><p>${date}</p><p>${pos[j]}</p><p></p><p>${rating != '' ? rating.toFixed(1) : '-'}</p></div>`);

                            // 스탯 아이콘 표시
                            for (let i = 0; i < g; i++) {
                                $(`#playedMatch${teamType.replace('A', '')} > div > div:nth-of-type(1) > p:nth-of-type(4)`).append('<img src = "./files/goal.svg">');
                            }
                            for (let i = 0; i < a; i++) {
                                $(`#playedMatch${teamType.replace('A', '')} > div > div:nth-of-type(1) > p:nth-of-type(4)`).append('<img src = "./files/assist.svg">');
                            }
                            for (let i = 0; i < y; i++) {
                                $(`#playedMatch${teamType.replace('A', '')} > div > div:nth-of-type(1) > p:nth-of-type(4)`).append('<img src = "./files/yc.svg">');
                            }
                            for (let i = 0; i < r; i++) {
                                $(`#playedMatch${teamType.replace('A', '')} > div > div:nth-of-type(1) > p:nth-of-type(4)`).append('<img src = "./files/rc.svg">');
                            }

                            // 평점 칸 배색
                            if (rating == '') $(`#playedMatch${teamType.replace('A', '')} > div > div:nth-of-type(1) > p:nth-of-type(5)`).css('background', '#00006040');
                            else {
                                const matchColor = colors.find(rule => rating >= rule.l);
                                if (matchColor) $(`#playedMatch${teamType.replace('A', '')} > div > div:nth-of-type(1) > p:nth-of-type(5)`).css('background', matchColor.c);
                            }
                        }
                    }
                }
            }
        }

        // 통산 기록 합산
        for (let i = 0; i < 7; i++) {
            if (playerData[teamType][year] != undefined) playerData[teamType]['total'][i] += playerData[teamType][year][i];
        }

        // 시즌별 기록 표시
        if (playerData[teamType][year] != undefined && playerData[teamType][year][0] != 0) {

            let avgRating = playerData[teamType][year][1] > 0
                ? (playerData[teamType][year][6] / playerData[teamType][year][1]).toFixed(1)
                : '-';

            let newHtml = `<div><p>${teamType}</p><p>'${year % 1000}</p><p>${playerData[teamType][year][0]}</p><p>${playerData[teamType][year][2]}</p><p>${teamType == 'A' ? playerData[teamType][year][3] : '-'}</p><p>${playerData[teamType][year][4]}</p><p>${playerData[teamType][year][5]}</p><p>${avgRating}</p></div>`;

            let inserted = false;

            $('#statsBySeason > div').each(function () {
                let yearText = $(this).find('p:nth-of-type(2)').text().replace("'", "");
                let y = parseInt(yearText) + 2000;

                if (year > y) {
                    $(this).before(newHtml);
                    inserted = true;
                    return false;
                }
            });

            if (!inserted) {
                $('#statsBySeason').append(newHtml);
            }
        }
    }

        // 몇 번째 경기인지 표시
        const total = playerData[teamType]['total'][0];

        $(`#playedMatch${teamType.replace('A', '')} > div > div`).each(function (idx) {
            $(`#playedMatch${teamType.replace('A', '')} > div > div:nth-of-type(${idx + 1}) > p:nth-of-type(1)`).text(total - idx);
        })

    // 통산 기록 표시
    if (playerData[teamType]['total'][0] == 0) $(`#playedSEFC${teamType.replace('A', '')}`).css('display', 'none');

    if (teamType == 'A') {
        $(`#playedSEFC > div > div:nth-of-type(1) > p:nth-of-type(2)`).text(playerData['A']['total'][0]);
        $(`#playedSEFC > div > div:nth-of-type(2) > p:nth-of-type(2)`).text(playerData['A']['total'][2]);
        $(`#playedSEFC > div > div:nth-of-type(3) > p:nth-of-type(2)`).text(playerData['A']['total'][3]);
        $(`#playedSEFC > div > div:nth-of-type(4) > p:nth-of-type(2)`).text(playerData['A']['total'][4]);
        $(`#playedSEFC > div > div:nth-of-type(5) > p:nth-of-type(2)`).text(playerData['A']['total'][5]);
        $(`#playedSEFC > div > div:nth-of-type(6) > p:nth-of-type(2)`).text((playerData['A']['total'][1] != 0) ? (playerData['A']['total'][6] / playerData['A']['total'][1]).toFixed(1) : '-');
    } else {
        $(`#playedSEFC${teamType.replace('A', '')} > div > div:nth-of-type(1) > p:nth-of-type(2)`).text(playerData[teamType]['total'][0]);
        $(`#playedSEFC${teamType.replace('A', '')} > div > div:nth-of-type(2) > p:nth-of-type(2)`).text(playerData[teamType]['total'][3]);
        $(`#playedSEFC${teamType.replace('A', '')} > div > div:nth-of-type(3) > p:nth-of-type(2)`).text(playerData[teamType]['total'][4]);
        $(`#playedSEFC${teamType.replace('A', '')} > div > div:nth-of-type(4) > p:nth-of-type(2)`).text(playerData[teamType]['total'][5]);
    }

    // 시즌별 기록 칸에서 올해 기록에 볼드 처리
    let y = new Date().getFullYear() % 1000;

    $('#statsBySeason > div').each(function(idx) {
        if (idx != 0) {
            if ($(this).find('p:nth-of-type(2)').text().replace("'", '') == y) {
                $(this).find('p').css('font-weight', '900');
            }
        }
    })
}