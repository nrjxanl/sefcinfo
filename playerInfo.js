import { loadData } from './firebase.js';

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
        window.showLoadError?.('데이터를 불러오지 못했습니다.');
    }

    afterLoading();
}

initPage();

function render(dataA, dataU18, dataU15, playerA, playerU18, playerU15, playerNum) {
    const rawId = (window.location.href.split('?')[1] || '').split('&')[0].split('#')[0];
    const id = rawId.trim();
    const teamType = ['A', 'U18', 'U15'];

    // 선수 정보 순차 탐색 (무한 루프 방지)
    const playerPools = {
        A: playerA || {},
        U18: playerU18 || {},
        U15: playerU15 || {}
    };

    let player = null;
    for (const t of teamType) {
        if (id && playerPools[t][id]) {
            player = playerPools[t];
            break;
        }
    }

    if (!player) {
        window.showLoadError?.('선수 정보를 찾을 수 없습니다.');
        return;
    }

    playerInfo(id, player, playerNum || {});

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
                loadStat(id, dataA || {}, playerData, type);
                break;
            case 'U18':
                loadStat(id, dataU18 || {}, playerData, type);
                break;
            case 'U15':
                loadStat(id, dataU15 || {}, playerData, type);
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
        if ($('#playedSEFC').css('display') !== 'none') {
            $('#playedSEFCU18, #playedSEFCU15').css('margin-left', '0');
        } else if ($('#playedSEFCU18').css('display') !== 'none') {
            $('#playedSEFCU15').css('margin-left', '0');
        }
    }

    // 유스 기록 있을 경우 '통산 기록' 텍스트 변경
    if ($('#playedSEFCU18').css('display') != 'none' || $('#playedSEFCU15').css('display') != 'none') {
        $('#playedSEFC > p:nth-of-type(1)').text('A팀 통산 기록');
    }

    // 모두 보기 버튼 기능
    $('[id^=playedSEFC] > p:nth-of-type(2)').click(function() {
        let tType = this.parentNode.id.replace('playedSEFC', '');
        
        $('#playedMatchBG').css('display', 'block').animate({ opacity: '1' }, 300);
        $(`#playedMatch${tType}`).animate({ bottom: '0' }, 300);

        $('body').css({ 'overflow': 'hidden' });
    });

    $('#playedMatchBG').click(function () {
        $('#playedMatchBG').animate({ opacity: '0' }, 300, function () {
            $('#playedMatchBG').css('display', 'none');
        });

        $('[id^=playedMatch]').animate({ bottom: '-100vh' }, 300);

        $('body').css({ 'overflow': '' });
    });
}

function playerInfo(id, player, playerNum) {
    const info = player[id] || {};
    const now = new Date();
    const currYear = now.getFullYear();

    const rawBd = String(info['bd'] || '');
    const hasBd = rawBd.length === 8 && /^\d{8}$/.test(rawBd);
    const bd = hasBd ? `${rawBd.substring(2, 4)}.${rawBd.substring(4, 6)}.${rawBd.substring(6, 8)}.` : '...';
    const height = info['height'] || '';
    let num = (playerNum?.[currYear]?.[id] != undefined) ? playerNum[currYear][id][1] : '';
    const name = String(info['name'] || '').replace(/[0-9]/g, '');
    const natl = info['natl'] || '';
    const pos = info['pos'] || '';
    const sns = info['sns'] || '';
    const isSefc = (info['sefc'] == 'O') ? true : false;

    const age = hasBd
        ? (currYear - parseInt(rawBd.substring(0, 4), 10) - (((now.getMonth() + 1) * 100 + now.getDate()) < parseInt(rawBd.substring(4, 8), 10) ? 1 : 0))
        : NaN;
    
    // 준프로 등번호
    if (currYear == 2026 && name == "양승민") num = 25;

    $('#playerProfile > div:nth-of-type(1) > p').text(pos);

    if (isSefc) $('#playerProfile > div:nth-of-type(2) > p').html(`<span>${num}</span>${name}`);
    else $('#playerProfile > div:nth-of-type(2) > p').html(`${name}`);

    if (natl) $('#playerProfile > div:nth-of-type(2) > div > img').attr('src', `./files/${natl}.svg`);

    if (sns != '') $('#playerSNS').attr('href', `https://www.instagram.com/${sns}`);
    else {
        $('#playerSNS').attr('onclick', 'return false').find('div').css('cursor', 'default');
        $('#playerSNS > div > img').css('opacity', '.5');
    }
    
    $('#playerInfo > div:nth-of-type(1) > p:nth-of-type(2)').text(natl || '-');
    $('#playerInfo > div:nth-of-type(2) > p:nth-of-type(2)').text(`${(height != '') ? (height + '㎝') : '-'}`);

    $('#playerInfo > div:nth-of-type(3) > p:nth-of-type(1)').text(hasBd ? bd : '나이');
    $('#playerInfo > div:nth-of-type(3) > p:nth-of-type(2)').text(`${hasBd ? (age + '세') : '-'}`);

    // 페이지명
    $('title').text(hasBd ? `SEFCiNFO - ${name}(${bd})` : `SEFCiNFO - ${name}`);
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
        const dataKeys = Object.keys(data).filter((key) => key.substring(0, 4) == year).sort();

        for (let i = 0; i < dataKeys.length; i++) {
            const matchId = dataKeys[i];
            const matchData = data[matchId];

            for (let j = 0; j < 5; j++) {
                let posLength = matchData[pos[j]] != undefined ? matchData[pos[j]].length : 0;

                for (let k = 0; k < posLength; k++) {
                    if (id == matchData[pos[j]][k][0]) {
                        // 스탯 배열에 저장
                        const stat = String(matchData[pos[j]][k][1] ?? '');

                        const app = (/[\d-]/.test(stat)) ? 1 : 0;
                        const appWithRating = (/\d/.test(stat)) ? 1 : 0;
                        const g = stat.split('g').length - 1;
                        const a = stat.split('a').length - 1;
                        const y = stat.split('y').length - 1;
                        const r = stat.split('r').length - 1;
                        const o = stat.split('o').length - 1;
                        const ratingRaw = stat.replace(/[a-z]/g, '').replace('-', '').trim();
                        const rating = ratingRaw !== '' ? Number(ratingRaw) : null;
                        const ratingAdd = (rating !== null && !isNaN(rating)) ? rating : 0;

                        if (playerData[teamType][year] == undefined) {
                            playerData[teamType][year] = [app, appWithRating, g, a, y, r, ratingAdd];
                        } else {
                            playerData[teamType][year][0] += app;
                            playerData[teamType][year][1] += appWithRating;
                            playerData[teamType][year][2] += g;
                            playerData[teamType][year][3] += a;
                            playerData[teamType][year][4] += y;
                            playerData[teamType][year][5] += r;
                            playerData[teamType][year][6] += ratingAdd;
                        }

                        // 각 경기 페이지에 표시
                        if (app != 0) {
                            const opp = matchData['home'][0] == '서울E' ? matchData['away'][1] : matchData['home'][1];
                            const comp = matchData['comp'][1];
                            const date = `${matchId.substring(0, 4)}.${matchId.substring(4, 6)}.${matchId.substring(6, 8)}.`;
                            const ratingText = (rating !== null && !isNaN(rating)) ? rating.toFixed(1) : '-';

                            $(`#playedMatch${teamType.replace('A', '')} > div`).prepend(`<div class='${matchId}'><p></p><div><img src="./files/${opp}_s.png"></div><div><img src="./files/${comp}_s.png"></div><p>${date}</p><p>${pos[j]}</p><p></p><p>${ratingText}</p></div>`);

                            // 스탯 아이콘 표시
                            const $iconSlot = $(`#playedMatch${teamType.replace('A', '')} > div > div:nth-of-type(1) > p:nth-of-type(4)`);
                            for (let cnt = 0; cnt < g; cnt++) {
                                $iconSlot.append('<img src="./files/goal.svg">');
                            }
                            for (let cnt = 0; cnt < a; cnt++) {
                                $iconSlot.append('<img src="./files/assist.svg">');
                            }
                            for (let cnt = 0; cnt < y; cnt++) {
                                $iconSlot.append('<img src="./files/yc.svg">');
                            }
                            for (let cnt = 0; cnt < r; cnt++) {
                                $iconSlot.append('<img src="./files/rc.svg">');
                            }
                            for (let cnt = 0; cnt < o; cnt++) {
                                $iconSlot.append('<img src="./files/og.svg">');
                            }

                            // 평점 칸 배색
                            if (rating === null || isNaN(rating)) $(`#playedMatch${teamType.replace('A', '')} > div > div:nth-of-type(1) > p:nth-of-type(5)`).css('background', '#00006040');
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
                let y = parseInt(yearText, 10) + 2000;

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
    });

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
        $(`#playedSEFC${teamType.replace('A', '')} > div > div:nth-of-type(2) > p:nth-of-type(2)`).text(playerData[teamType]['total'][2]);
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
    });
}
