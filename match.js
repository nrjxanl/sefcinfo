import { loadData } from './firebase.js';

const TEAM_NAME_MAPPER = {
    'ansanpolice': 'ansanmugunghwa',
    'daejeoncitizen': 'daejeonhana',
    'goyanghifc': 'goyangzaicro',
    'jejuutd': 'jejusk',
    'ulsanhyundai': 'ulsanhd'
};

function normalizeTeamCode(rawCode) {
    const stripped = String(rawCode || '').replace(/[0-9]/g, '');
    return TEAM_NAME_MAPPER[stripped] || stripped;
}

const rawMatchQuery = (window.location.href.split('?')[1] || '').split('&')[0].split('#')[0];
const matchIdMatch = rawMatchQuery.match(/\d{9}/);
const matchId = matchIdMatch ? matchIdMatch[0] : '';
const teamType = matchId
    ? ((matchId.substring(8, 9) == '0') ? 'A' : (matchId.substring(8, 9) == '8') ? 'U18' : 'U15')
    : 'A';

beforeLoading();

async function initPage() {
    if (!matchId) {
        window.showLoadError?.('경기 정보를 찾을 수 없습니다.');
        afterLoading();
        return;
    }

    try {
        /*
            data: 전체 데이터
            matchData: 경기 데이터
            num: 선수 등번호
            h2h: 상대 전적
        */

        const [data, num, h2h] = await Promise.all([
            loadData(`data${teamType}`),
            loadData('playerNum'),
            loadData(`h2h${teamType}`)
        ]);

        const matchData = data?.[matchId];

        if (!matchData) {
            window.showLoadError?.('경기 정보를 찾을 수 없습니다.');
            afterLoading();
            return;
        }

        render(data, matchData, num || {}, h2h || {});
    } catch (error) {
        console.error('데이터 불러오기 실패', error);
        window.showLoadError?.('데이터를 불러오지 못했습니다.');
    }

    afterLoading();
}

initPage();

function render(data, matchData, num, h2h) {
    const year = parseInt(matchId.substring(0, 4), 10);
    const month = parseInt(matchId.substring(4, 6), 10);
    const date = parseInt(matchId.substring(6, 8), 10);
    const day = "일월화수목금토"[new Date(year, month - 1, date).getDay()];

    const homeArr = matchData['home'] || ['', ''];
    const awayArr = matchData['away'] || ['', ''];
    const compArr = matchData['comp'] || ['', ''];

    // 페이지명
    $('title').text(`SEFCiNFO - ${homeArr[0]} vs ${awayArr[0]}(${year}.${month}.${date}.(${day}))`);
    
    // 대회 정보
    $('#matchScore > div:nth-of-type(1) > img').attr('src', `./files/${compArr[1]}_s.png`);
    $('#matchScore > div:nth-of-type(1) > p').text(`${compArr[0]} ${matchData['round'] || ''}`);

    // 홈 팀 정보
    $('#matchScore > div:nth-of-type(2) > div:nth-of-type(1) > p').text(homeArr[0]);
    $('#matchScore > div:nth-of-type(2) > div:nth-of-type(1) > div > img').attr('src', `./files/${homeArr[1]}_s.png`);

    // 원정 팀 정보
    $('#matchScore > div:nth-of-type(2) > div:nth-of-type(3) > p').text(awayArr[0]);
    $('#matchScore > div:nth-of-type(2) > div:nth-of-type(3) > div > img').attr('src', `./files/${awayArr[1]}_s.png`);

    // 경기 점수
    if (matchData['homeScore'] != undefined && matchData['homeScore'] != '') $('#matchScore > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)').html(`${matchData['homeScore']} : ${matchData['awayScore']}`);
    else $('#matchScore > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)').text(`vs`);

    // 경기 일자
    if (matchData['time'] != undefined && matchData['time'] != '') $('#matchScore > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(2)').text(`${month}.${date}.(${day}) ${matchData['time']}`);
    else $('#matchScore > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(2)').text(`${year}.${month}.${date}.`);

    // 경기 장소
    if (matchData['stadium'] != undefined && matchData['stadium'] != '') $('#matchScore > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(3)').text(`@${matchData['stadium']}`);

    // 득점자
    const homeScorer = matchData['homeScorer'] || '';
    const awayScorer = matchData['awayScorer'] || '';
    if ($(window).width() < 768) {
        $('#matchScore > div:nth-of-type(3) > p:nth-of-type(1)').html(homeScorer.replace(/\(.*?\)/g, ''));
        $('#matchScore > div:nth-of-type(3) > p:nth-of-type(2)').html(awayScorer.replace(/\(.*?\)/g, ''));
    } else {
        $('#matchScore > div:nth-of-type(3) > p:nth-of-type(1)').html(homeScorer);
        $('#matchScore > div:nth-of-type(3) > p:nth-of-type(2)').html(awayScorer);
    }

    // 하이라이트 표시
    if (matchData['hl']) $('#highlight > a').attr('href', `https://youtu.be/${matchData['hl']}`).attr('target', '_blank').attr('rel', 'noopener noreferrer');
    else $('#highlight').remove();

    // 유스 경기에서는 matchInfo 창 삭제
    if (teamType != 'A') {
        $('.matchDetail > button:nth-of-type(1)').css('display', 'none');
        if (localStorage.getItem(matchId) != 'matchH2H') matchLineup(matchId);
        else matchH2H(matchId);
    }

    // 라인업
    const hasLineup = Boolean(matchData['GK']?.length);
    if (hasLineup) lineup(matchData, num, year); // matchData, num, year 전달
    else {
        $('#matchLineup').css('display', 'none');
        $('.matchDetail > button:nth-of-type(2)').css('display', 'none');
        matchH2H(matchId);
    }

    // potm 없으면 matchInfo 창 삭제
    if ($('#matchInfo > div').length == 1 && $('#potm').css('display') == 'none') {
        $('.matchDetail > button:nth-of-type(1)').css('display', 'none');
        if (localStorage.getItem(matchId) != 'matchH2H' && hasLineup) matchLineup(matchId);
        else matchH2H(matchId);
    }

    // 경기 기록
    if (teamType == 'A' && matchData['matchStat']?.[0]?.length) stat(matchData, h2h); // matchData, h2h 전달
    else {
        $('#matchStat').css('display', 'none');
        $('.matchDetail > button:nth-of-type(3)').css('display', 'none');
    }

    // 상대 전적
    H2h(data, matchData, h2h); // data, matchData, h2h 전달

    // 버튼별 역할 부여
    $('.matchDetail > button:nth-of-type(1)').click(() => {
        matchInfo(matchId);
    });
    $('.matchDetail > button:nth-of-type(2)').click(() => {
        matchLineup(matchId);
    });
    $('.matchDetail > button:nth-of-type(3)').click(() => {
        matchStat(matchId);
    });
    $('.matchDetail > button:nth-of-type(4)').click(() => {
        matchH2H(matchId);
    });

    if ($(window).width() < 768) {
        const func = { matchInfo, matchLineup, matchStat, matchH2H };
        func[localStorage.getItem(matchId)]?.(matchId);
    }
}

// 라인업 출력
function lineup(matchData, num, year) {
    const positions = ['GK', 'DF', 'MF', 'FW'];

    const stats = [
        { char: 'g', file: 'goal' },
        { char: 'a', file: 'assist' },
        { char: 'y', file: 'yc' },
        { char: 'r', file: 'rc' },
        { char: 'o', file: 'og' }
    ];

    const colors = [
        { l: 8.5, c: "#374df5c0" },
        { l: 7.5, c: "#00adc4c0" },
        { l: 6.5, c: "#00c424c0" },
        { l: 6.0, c: "#d9af00c0" },
        { l: 5.0, c: "#ed7e07c0" },
        { l: 0.0, c: "#dc0c00c0" }
    ];

    const resolvePlayerMeta = (pId) => {
        const entry = num?.[year]?.[pId];
        const rawName = entry?.[0] || '';
        let pNum = entry?.[1] ?? '-';

        // 준프로 등번호 설정
        if (rawName == "장석훈" && year == 2024 && teamType == 'U18') pNum = 10;
        if (rawName == "양승민" && year == 2026 && teamType == 'A') pNum = 25;

        return { pName: rawName.replace(/[0-9]/g, ''), pNum };
    };

    const renderPotm = (pId, pNum, pName, rating) => {
        const numericRating = rating.replace(/[a-z]/g, '');
        $('#potm').css('display', 'block').html(`<p transl = 'y'>경기 최고의 선수</p><div><p transl = 'y'><span>${pNum}</span>${pName}</p><p class = 'potm' glass = 'true'>${numericRating}</p></div>`).off('click').on('click', function() {
            window.location.href = `./player?${pId}`;
        });

        if (numericRating == '-') $(`#potm > div > p:nth-of-type(2)`).css('background', '#00006040');
        else if (numericRating !== '') {
            const matchColor = colors.find(rule => Number(numericRating) >= rule.l);
            if (matchColor) $(`#potm > div > p:nth-of-type(2)`).css('background', matchColor.c);
        }
    };

    // 선발 선수 데이터
    if (teamType != 'A') $('#startingXI').html('<div><table><tbody></tbody></table></div>');
    
    positions.forEach((pos) => {
        if (matchData[pos]?.length) {
            matchData[pos].forEach((playerInfo) => {
                const pId = playerInfo[0];
                const rating = String(playerInfo[1] ?? '');
                const numericRating = rating.replace(/[a-z]/g, '');
                const { pName, pNum } = resolvePlayerMeta(pId);

                // div 삽입
                if (teamType == 'A') {
                    $(`#${pos.toLowerCase()}`).append(`<td id = ${pId}></td>`);
                    $(`#${pId}`).html(`<div><img src = './files/jersey.svg'></div><p>${pNum}</p><p transl = 'y'>${pName}<span></span></p><p glass = 'true'>${numericRating}</p>`);
                } else {
                    $(`#startingXI > div > table > tbody`).append(`<tr id = ${pId}></tr>`);
                    $(`#${pId}`).html(`<td>${pNum}</td><td transl = 'y'><p>${pName}<span></span></p><p glass = 'true'>${numericRating}</p></td>`);
                }

                // POTM 여부
                if (rating.replace(/[^p]/g, '') == 'p') {
                    renderPotm(pId, pNum, pName, rating);
                }

                // 클릭 시 화면 이동
                $(`#${pId}`).click(function () {
                    window.location.href = `./player?${pId}`;
                });

                // 기록별 아이콘 추가
                stats.forEach((type) => {
                    const cnt = rating.split(type.char).length - 1;

                    for (let i = 0; i < cnt; i++) {
                        if (teamType == 'A') $(`#${pId} > p:nth-of-type(2) > span`).append(`<img src = './files/${type.file}.svg'>`);
                        else $(`#${pId} > td:nth-of-type(2) > p:nth-of-type(1) > span`).append(`<img src = './files/${type.file}.svg'>`);
                    }
                });

                // 평점 칸 배색
                const $ratingBadge = (teamType == 'A')
                    ? $(`#${pId} > p:nth-of-type(3)`)
                    : $(`#${pId} > td:nth-of-type(2) > p:nth-of-type(2)`);
                if (numericRating == '') $ratingBadge.css('display', 'none');
                else if (numericRating == '-') $ratingBadge.css('background', '#00006040');
                else {
                    const matchColor = colors.find(rule => Number(numericRating) >= rule.l);
                    if (matchColor) $ratingBadge.css('background', matchColor.c);
                }

                // 너비 설정
                if (teamType == 'A') {
                    if ($(window).width() < 768) $(`#${pId}`).css('width', `calc(70vw / ${matchData[pos].length})`);
                    else $(`#${pId}`).css('width', `calc(26vw / ${matchData[pos].length})`);
                }
            });
        }
    });

    // 교체 선수 데이터
    if (matchData['SUB']?.length) {
        matchData['SUB'].forEach((playerInfo) => {
            const pId = playerInfo[0];
            const rating = String(playerInfo[1] ?? '');
            const numericRating = rating.replace(/[a-z]/g, '');
            const { pName, pNum } = resolvePlayerMeta(pId);

            // div 삽입
            $(`#sub > table > tbody`).append(`<tr id = ${pId}></tr>`);
            $(`#${pId}`).html(`<td>${pNum}</td><td transl = 'y'><p>${pName}<span></span></p><p glass = 'true'>${numericRating}</p></td>`);
            
            // POTM 여부
            if (rating.replace(/[^p]/g, '') == 'p') {
                renderPotm(pId, pNum, pName, rating);
            }

            // 클릭 시 화면 이동
            $(`#${pId}`).click(function() {
                window.location.href = `./player?${pId}`;
            });

            // 기록별 아이콘 추가
            stats.forEach((type) => {
                const cnt = rating.split(type.char).length - 1;

                for (let i = 0; i < cnt; i++) $(`#${pId} > td:nth-of-type(2) > p:nth-of-type(1) > span`).append(`<img src = './files/${type.file}.svg'>`);
            });

            // 평점 칸 배색
            if (numericRating == '') $(`#${pId} > td:nth-of-type(2) > p:nth-of-type(2)`).css('display', 'none');
            else if (numericRating == '-') $(`#${pId} > td:nth-of-type(2) > p:nth-of-type(2)`).css('background', '#00006040');
            else {
                const matchColor = colors.find(rule => Number(numericRating) >= rule.l);
                if (matchColor) $(`#${pId} > td:nth-of-type(2) > p:nth-of-type(2)`).css('background', matchColor.c);
            }
        });
    }

    // 유니폼 색상 설정
    if (year == 2026) {
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > div > img').css('filter', 'brightness(0) saturate(100%) invert(46%) sepia(78%) saturate(2289%) hue-rotate(349deg) brightness(96%) contrast(89%)');
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > p:nth-of-type(1)').css('color', '#000');
    } else if (year == 2025) {
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > div > img').css('filter', 'brightness(0) saturate(100%) invert(80%) sepia(99%) saturate(292%) hue-rotate(16deg) brightness(99%) contrast(86%)');
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > p:nth-of-type(1)').css('color', '#000');
    } else if (year == 2024) {
        $('#startingXI > table > tbody > tr:nth-of-type(-n+3) > td > p:nth-of-type(1)').css('color', '#d4a73f');
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > div > img').css('filter', 'brightness(0) saturate(100%) invert(77%) sepia(44%) saturate(5344%) hue-rotate(328deg) brightness(106%) contrast(99%)');
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > p:nth-of-type(1)').css('color', '#000');
    } else if (year == 2023) {
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > div > img').css('filter', 'brightness(0) saturate(100%) invert(100%) sepia(93%) saturate(1239%) hue-rotate(11deg) brightness(101%) contrast(93%)');
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > p:nth-of-type(1)').css('color', '#000');
    } else if (year == 2022 || year == 2021) {
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > div > img').css('filter', 'brightness(0) saturate(100%) invert(22%) sepia(91%) saturate(7210%) hue-rotate(334deg) brightness(95%) contrast(104%)');
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > p:nth-of-type(1)').css('color', '#000060');
    } else if (year == 2020 || year == 2019 || year == 2018) {
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > div > img').css('filter', 'brightness(0) saturate(100%) invert(83%) sepia(8%) saturate(3343%) hue-rotate(49deg) brightness(95%) contrast(89%)');
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > p:nth-of-type(1)').css('color', '#000');
    } else if (year == 2017) {
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > div > img').css('filter', 'brightness(0) saturate(100%) invert(41%) sepia(32%) saturate(1362%) hue-rotate(290deg) brightness(94%) contrast(94%)');
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > p:nth-of-type(1)').css('color', '#faf6f5');
    } else if (year == 2016) {
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > div > img').css('filter', 'brightness(0) saturate(100%) invert(44%) sepia(73%) saturate(3412%) hue-rotate(359deg) brightness(102%) contrast(85%)');
        $('#startingXI > table > tbody > tr:nth-of-type(4) > td > p:nth-of-type(1)').css('color', '#000');
    } else if (year == 2015) {
        if (Number(matchId.substring(0, 8)) >= 20150822) {
            $('#startingXI > table > tbody > tr:nth-of-type(4) > td > div > img').css('filter', 'brightness(0) saturate(100%) invert(53%) sepia(34%) saturate(4466%) hue-rotate(311deg) brightness(99%) contrast(107%)');
            $('#startingXI > table > tbody > tr:nth-of-type(4) > td > p:nth-of-type(1)').css('color', '#faf6f5');
        } else {
            $('#startingXI > table > tbody > tr:nth-of-type(4) > td > div > img').css('filter', 'brightness(0) saturate(100%) invert(14%) sepia(82%) saturate(3416%) hue-rotate(319deg) brightness(99%) contrast(89%)');
            $('#startingXI > table > tbody > tr:nth-of-type(4) > td > p:nth-of-type(1)').css('color', '#faf6f5');
        }
    }
}

// 경기 기록 출력
function stat(matchData, h2h) {
    // home, away 색상 설정
    let homeBg, homeColor, awayBg, awayColor;
    const isHome = matchData['home']?.[1] == 'seouleland' || matchData['home']?.[0] == '서울E';

    if (isHome) {
        const oppCode = normalizeTeamCode(matchData['away']?.[1]);
        const oppH2h = h2h?.[oppCode];
        homeBg = '#000060c0';
        homeColor = '#faf6f5';
        awayBg = `#${oppH2h?.[0] || '05090a'}c0`;
        awayColor = `#${oppH2h?.[1] || 'faf6f5'}`;
    } else {
        const oppCode = normalizeTeamCode(matchData['home']?.[1]);
        const oppH2h = h2h?.[oppCode];
        homeBg = `#${oppH2h?.[0] || '05090a'}c0`;
        homeColor = `#${oppH2h?.[1] || 'faf6f5'}`;
        awayBg = '#000060c0';
        awayColor = '#faf6f5';
    }

    // 기록 값 삽입
    const statArr = matchData['matchStat'] || [];

    $('#matchStat > table > tbody > tr:nth-of-type(1) > td:nth-of-type(2) > p:nth-of-type(1)').text((statArr[0] ?? '') + '%');
    $('#matchStat > table > tbody > tr:nth-of-type(1) > td:nth-of-type(2) > p:nth-of-type(2)').text((statArr[1] ?? '') + '%');

    for (let i = 2; i <= 10; i++) {
        $(`#matchStat > table > tbody > tr:nth-of-type(${i}) > td:nth-of-type(1) > p`).text(statArr[2 * (i - 1)] ?? '');
        $(`#matchStat > table > tbody > tr:nth-of-type(${i}) > td:nth-of-type(3) > p`).text(statArr[2 * (i - 1) + 1] ?? '');

        // 기록 높은 쪽 색칠
        if (i <= 3 || (i >= 8 && i <= 9)) {
            if (Number(statArr[2 * (i - 1)]) > Number(statArr[2 * (i - 1) + 1])) $(`#matchStat > table > tbody > tr:nth-of-type(${i}) > td:nth-of-type(1) > p`).css({ 'color': homeColor, 'background': homeBg, 'font-weight': '900' }).attr("glass", "true");
            else if (Number(statArr[2 * (i - 1)]) < Number(statArr[2 * (i - 1) + 1])) $(`#matchStat > table > tbody > tr:nth-of-type(${i}) > td:nth-of-type(3) > p`).css({ 'color': awayColor, 'background': awayBg, 'font-weight': '900' }).attr("glass", "true");
        } else {
            if (Number(statArr[2 * (i - 1)]) < Number(statArr[2 * (i - 1) + 1])) $(`#matchStat > table > tbody > tr:nth-of-type(${i}) > td:nth-of-type(1) > p`).css({ 'color': homeColor, 'background': homeBg, 'font-weight': '900' }).attr("glass", "true");
            else if (Number(statArr[2 * (i - 1)]) > Number(statArr[2 * (i - 1) + 1])) $(`#matchStat > table > tbody > tr:nth-of-type(${i}) > td:nth-of-type(3) > p`).css({ 'color': awayColor, 'background': awayBg, 'font-weight': '900' }).attr("glass", "true");
        }
    }

    // 점유율 Gradient 설정
    const homePoss = Math.max(0, Math.min(100, Number(statArr[0]) || 0));
    const awayPoss = Math.max(0, Math.min(100, Number(statArr[1]) || 0));

    if ($(window).width() < 768) {
        $('#matchStat > table > tbody > tr:nth-of-type(1) > td:nth-of-type(2) > p:nth-of-type(1)').css({ 'width': Math.max(0, 0.7 * homePoss - 2) + 'vw', 'color': homeColor, 'background': homeBg, 'padding-left': '2vw' });
        $('#matchStat > table > tbody > tr:nth-of-type(1) > td:nth-of-type(2) > p:nth-of-type(2)').css({ 'width': Math.max(0, 0.7 * awayPoss - 2) + 'vw', 'color': awayColor, 'background': awayBg, 'padding-right': '2vw' });
    } else {
        $('#matchStat > table > tbody > tr:nth-of-type(1) > td:nth-of-type(2) > p:nth-of-type(1)').css({ 'width': `${homePoss}%`, 'box-sizing': 'border-box', 'color': homeColor, 'background': homeBg, 'padding-left': '10px' });
        $('#matchStat > table > tbody > tr:nth-of-type(1) > td:nth-of-type(2) > p:nth-of-type(2)').css({ 'width': `${awayPoss}%`, 'box-sizing': 'border-box', 'color': awayColor, 'background': awayBg, 'padding-right': '10px' });
    }
}

// 상대 전적 출력
function H2h(data, matchData, h2h) {
    const isHome = (matchData['home']?.[1] == 'seouleland') ? 1 : 0;
    const opp = normalizeTeamCode(isHome ? matchData['away']?.[1] : matchData['home']?.[1]);

    const oppH2h = h2h?.[opp];
    const bgColor = `#${oppH2h?.[0] || '05090a'}c0`;
    const textColor = `#${oppH2h?.[1] || 'faf6f5'}`;

    let w = 0, d = 0, l = 0, goalS = 0, goalC = 0;

    // 역대 맞대결 경기
    const keys = Object.keys(data || {}).sort();

    for (let i = 0; i < keys.length; i++) {
        const m = data[keys[i]];
        const home = normalizeTeamCode(m?.['home']?.[1]);
        const away = normalizeTeamCode(m?.['away']?.[1]);
        
        if ((home == opp || away == opp) && (m['homeScore'] != undefined && m['homeScore'] != '' && m['awayScore'] != undefined && m['awayScore'] != '')) {
            const homeScore = parseFloat(String(m['homeScore']).replace(/<span[^>]*>.*?<\/span>/gi, ""));
            const awayScore = parseFloat(String(m['awayScore']).replace(/<span[^>]*>.*?<\/span>/gi, ""));
            if (isNaN(homeScore) || isNaN(awayScore)) continue;

            if (home == opp) {
                if (homeScore > awayScore) l++;
                else if (homeScore < awayScore) w++;
                else d++;

                goalS += awayScore;
                goalC += homeScore;
            } else if (away == opp) {
                if (homeScore > awayScore) w++;
                else if (homeScore < awayScore) l++;
                else d++;

                goalS += homeScore;
                goalC += awayScore;
            }

            $('#recentMatch').prepend(`
                <div class = '${keys[i]}'>
                    <div>
                        <div>
                            <img src = './files/${m['home'][1]}_s.png'>
                        </div>
                        <div>
                            <p>${homeScore}</p>
                            <img src = './files/${m['comp'][1]}_s.png'>
                            <p>${awayScore}</p>
                        </div>
                        <div>
                            <img src = './files/${m['away'][1]}_s.png'>
                        </div>
                    </div>
                    <div>
                        <p>${keys[i].substring(0, 4)}.${keys[i].substring(4, 6)}.${keys[i].substring(6, 8)}.</p>
                    </div>
                </div>
            `);

            if (((home == 'seouleland') && (homeScore > awayScore)) || ((home != 'seouleland') && (homeScore < awayScore))) {
                $(`#recentMatch > div:nth-of-type(1) > div:nth-of-type(2) > p`).css({'color': '#faf6f5', 'background': '#374df5c0', 'border': '1px solid #374df5c0'});
            } else if (((home != 'seouleland') && (homeScore > awayScore)) || ((home == 'seouleland') && (homeScore < awayScore))) {
                $(`#recentMatch > div:nth-of-type(1) > div:nth-of-type(2) > p`).css({'color': '#faf6f5', 'background': '#e0000060', 'border': '1px solid #e0000060'});
            } else {
                $(`#recentMatch > div:nth-of-type(1) > div:nth-of-type(2) > p`).css({'color': '#faf6f5', 'background': '#05090a40', 'border': '1px solid #05090a40'});
            }
        }
    }

    if (w + d + l > 0) {
        const wPct = parseFloat((100 * w / (w + d + l)));
        const dPct = parseFloat((100 * d / (w + d + l)));
        const lPct = parseFloat((100 * l / (w + d + l)));
        const goalSpG = parseFloat((goalS / (w + d + l)));
        const goalCpG = parseFloat((goalC / (w + d + l)));

        // 승무패 기록
        const getEnd = v => (v >= 100 ? 100 : Math.max(0, Number(v) - 3));
        const getStart = v => (v <= 0 ? 0 : Math.min(100, Number(v) + 3));
        let stops;

        if (isHome) {
            stops = [
                `#000060c0 ${getEnd(wPct)}%`,
                (d > 0) ? `#05090a40 ${getStart(wPct)}%` : null,
                (d > 0) ? `#05090a40 ${getEnd(wPct + dPct)}%` : null,
                (l > 0) ? `${bgColor} ${getStart((d > 0) ? (wPct + dPct) : wPct)}%` : null
            ];
        } else {
            stops = [
                `${bgColor} ${getEnd(lPct)}%`,
                (d > 0) ? `#05090a40 ${getStart(lPct)}%` : null,
                (d > 0) ? `#05090a40 ${getEnd(lPct + dPct)}%` : null,
                (w > 0) ? `#000060c0 ${getStart((d > 0) ? (lPct + dPct) : lPct)}%` : null
            ];
        }

        $('#h2hBar > p').css('background', `linear-gradient(105deg, ${stops.filter(Boolean).join(', ')})`);

        $(`#h2hText > div:nth-of-type(${-2 * isHome + 3}) > p:nth-of-type(1)`).text(w).css({ 'background': '#000060c0', 'color': '#faf6f5' });
        $(`#h2hText > div:nth-of-type(2) > p:nth-of-type(1)`).text(d).css({ 'background': '#05090a40', 'color': '#faf6f5' });
        $(`#h2hText > div:nth-of-type(${2 * isHome + 1}) > p:nth-of-type(1)`).text(l).css({ 'background': bgColor, 'color': textColor });

        $(`#h2hText > div:nth-of-type(${-2 * isHome + 3}) > div > p:nth-of-type(2)`).text(wPct.toFixed(1) + "%");
        $(`#h2hText > div:nth-of-type(2) > div > p:nth-of-type(2)`).text(dPct.toFixed(1) + "%");
        $(`#h2hText > div:nth-of-type(${2 * isHome + 1}) > div > p:nth-of-type(2)`).text(lPct.toFixed(1) + "%");
        
        $(`#h2hText > div:nth-of-type(${-2 * isHome + 3}) > div > p:nth-of-type(1)`).text('승리');
        $(`#h2hText > div:nth-of-type(${2 * isHome + 1}) > div > p:nth-of-type(1)`).text('패배');

        // 득실 기록
        const goalTotal = goalS + goalC;
        if (goalTotal === 0) {
            stops = isHome
                ? [`#000060c0 47%`, `${bgColor} 53%`]
                : [`${bgColor} 47%`, `#000060c0 53%`];
        } else {
            const goalSPct = Number((100 * goalS / goalTotal).toFixed(1));
            if (isHome) {
                stops = [
                    `#000060c0 ${getEnd(goalSPct)}%`,
                    `${bgColor} ${getStart(goalSPct)}%`
                ];
            } else {
                const awayPct = Number((100 - goalSPct).toFixed(1));
                stops = [
                    `${bgColor} ${getEnd(awayPct)}%`,
                    `#000060c0 ${getStart(awayPct)}%`
                ];
            }
        }

        $('#h2hGoalsBar > p').css('background', `linear-gradient(105deg, ${stops.filter(Boolean).join(', ')})`);
        
        $(`#h2hGoalsText > div:nth-of-type(${-1 * isHome + 2}) > p:nth-of-type(1)`).text(goalS).css({ 'background': '#000060c0', 'color': '#faf6f5' });
        $(`#h2hGoalsText > div:nth-of-type(${isHome + 1}) > p:nth-of-type(1)`).text(goalC).css({ 'background': bgColor, 'color': textColor });

        $(`#h2hGoalsText > div:nth-of-type(${-1 * isHome + 2}) > div > p:nth-of-type(2)`).text('경기당 ' + goalSpG.toFixed(1));
        $(`#h2hGoalsText > div:nth-of-type(${isHome + 1}) > div > p:nth-of-type(2)`).text('경기당 ' + goalCpG.toFixed(1));
        
        $(`#h2hGoalsText > div:nth-of-type(${-1 * isHome + 2}) > div > p:nth-of-type(1)`).text('득점');
        $(`#h2hGoalsText > div:nth-of-type(${isHome + 1}) > div > p:nth-of-type(1)`).text('실점');

        // 클릭 시 페이지 이동
        $('#recentMatch > div').each(function() {
            $(this).click(function() {
                window.location.href = `./match?${$(this).attr('class')}`;
            });
        });
    } else {
        $('#matchH2H').empty().append('<p>맞대결 기록이 없습니다.</p>');
    }
}

// matchDetail 버튼 클릭 시 실행 함수
function matchInfo(matchId) {
    if ($(window).width() < 768) {
        $('#matchInfo').css('display', 'block');
        $('#matchLineup').css('display', 'none');
        $('#matchStat').css('display', 'none');
        $('#matchH2H').css('display', 'none');
    }

    $('.matchDetail > button').css('font-weight', 300);
    $('.matchDetail > button:nth-of-type(1)').css('font-weight', 900);

    localStorage.setItem(matchId, 'matchInfo');
}

function matchLineup(matchId) {
    if ($(window).width() < 768) {
        $('#matchInfo').css('display', 'none');
        $('#matchLineup').css('display', 'block');
        $('#matchStat').css('display', 'none');
        $('#matchH2H').css('display', 'none');
    }

    $('.matchDetail > button').css('font-weight', 300);
    $('.matchDetail > button:nth-of-type(2)').css('font-weight', 900);

    localStorage.setItem(matchId, 'matchLineup');
}

function matchStat(matchId) {
    if ($(window).width() < 768) {
        $('#matchInfo').css('display', 'none');
        $('#matchLineup').css('display', 'none');
        $('#matchStat').css('display', 'block');
        $('#matchH2H').css('display', 'none');
    }

    $('.matchDetail > button').css('font-weight', 300);
    $('.matchDetail > button:nth-of-type(3)').css('font-weight', 900);

    localStorage.setItem(matchId, 'matchStat');
}

function matchH2H(matchId) {
    if ($(window).width() < 768) {
        $('#matchInfo').css('display', 'none');
        $('#matchLineup').css('display', 'none');
        $('#matchStat').css('display', 'none');
        $('#matchH2H').css('display', 'flex');
    }

    $('.matchDetail > button').css('font-weight', 300);
    $('.matchDetail > button:nth-of-type(4)').css('font-weight', 900);

    localStorage.setItem(matchId, 'matchH2H');
}
