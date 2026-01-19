import { loadData } from './firebase.js';

async function initPage() {
    try {
        /*
            dataA: A팀 전체 데이터
            
            standings: 순위
        */

        const [dataA, standings] = await Promise.all([
            loadData('dataA'),
            loadData('standings'),
        ]);

        render(dataA, standings);
    } catch (error) {
        console.error('데이터 불러오기 실패', error);
    }

    afterLoading();
}

initPage();

function render(data, standings) {
    const dataKeys = Object.keys(data);

    // 다음 경기
    const todayStr = new Date().getFullYear() +
        String(new Date().getMonth() + 1).padStart(2, '0') +
        String(new Date().getDate()).padStart(2, '0') +
        '0';

    const nextKey = dataKeys.sort().find(key => key >= todayStr);

    if (nextKey != undefined) {
        const home = data[nextKey]['home'];
        const homeScore = data[nextKey]['homeScore'];
        const away = data[nextKey]['away'];
        const awayScore = data[nextKey]['awayScore'];
        const comp = data[nextKey]['comp'];
        const round = data[nextKey]['round'];
        const date = `${nextKey.substring(0, 4)}.${nextKey.substring(4, 6)}.${nextKey.substring(6, 8)}.`;
        const time = data[nextKey]['time'];

        $('#nextMatch > div:nth-of-type(2) > p:nth-of-type(1)').text(home[0]);
        $('#nextMatch > div:nth-of-type(2) > div:nth-of-type(1) > img').attr('src', `./files/${home[1]}_s.png`);
        $('#nextMatch > div:nth-of-type(2) > p:nth-of-type(2)').text(away[0]);
        $('#nextMatch > div:nth-of-type(2) > div:nth-of-type(3) > img').attr('src', `./files/${away[1]}_s.png`);

        $('#nextMatch > div:nth-of-type(3) > p').text(`${comp[0]} ${round} | ${date}`);

        if (homeScore != '') $('#nextMatch > div:nth-of-type(2) > div:nth-of-type(2)').text(`${homeScore} : ${awayScore}`).css('font-size', '18px');
        else {
            const kickoffYear = nextKey.substring(0, 4);
            const kickoffMonth = nextKey.substring(4, 6) - 1; // JS는 월이 0부터 시작
            const kickoffDay = nextKey.substring(6, 8);
            const kickoffHour = time.split(':')[0];
            const kickoffMin = time.split(':')[1];

            // 경기 시간 데이터 (정확한 시/분 포함)
            const targetDate = new Date(kickoffYear, kickoffMonth, kickoffDay, kickoffHour, kickoffMin);
            // 경기 날짜 데이터 (시간 제외, D-Day 계산용)
            const targetDateOnly = new Date(kickoffYear, kickoffMonth, kickoffDay);

            const countdownTimer = setInterval(function () {
                const now = new Date();
                const distance = targetDate.getTime() - now.getTime();

                if (distance < 0) {
                    clearInterval(countdownTimer);
                    $('#nextMatch > div:nth-of-type(2) > div:nth-of-type(2)').text('-').css('font-size', '18px');
                } 
                // 1. 남은 시간이 24시간(1000ms * 60s * 60m * 24h) 이하일 때
                else if (distance <= 24 * 60 * 60 * 1000) {
                    const h = Math.floor(distance / (1000 * 60 * 60));
                    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const s = Math.floor((distance % (1000 * 60)) / 1000);
                    
                    const timeText = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
                    $('#nextMatch > div:nth-of-type(2) > div:nth-of-type(2)').text(timeText).css('font-size', '18px');
                } 
                // 2. 24시간보다 많이 남았을 때 (날짜 기준 D-Day)
                else {
                    const nowOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                    const diffDays = Math.round((targetDateOnly - nowOnly) / (1000 * 60 * 60 * 24));
                    
                    $('#nextMatch > div:nth-of-type(2) > div:nth-of-type(2)').text(`D-${diffDays}`).css('font-size', '18px');
                }
            }, 1000);
        }
    } else {
        $('#nextMatch').css('display', 'none');
        if ($(window).width() < 768) $('#prevMatch').css('margin-top', '100px');
        else $('#prevMatch').css('width', '65vw');
    }

    $('#nextMatch').click(function () {
        window.location.href = `./match?${nextKey}`;
        localStorage.setItem(nextKey, 'matchInfo');
    });

    // 최근 5경기
    const lastKey = dataKeys.filter(key => key < todayStr).sort().reverse().slice(0, 5).reverse();

    for (let i = 0; i < 5; i++) {
        const home = data[lastKey[i]]['home'];
        const homeScore = data[lastKey[i]]['homeScore'];
        const away = data[lastKey[i]]['away'];
        const awayScore = data[lastKey[i]]['awayScore'];

        const opp = (home[0] == '서울E') ? away : home;

        $(`#prevMatch > div > div:nth-of-type(${i + 1})`).attr('class', lastKey[i]);

        $(`#prevMatch > div > div:nth-of-type(${i + 1}) > div > img`).attr('src', `./files/${opp[1]}_s.png`);
        $(`#prevMatch > div > div:nth-of-type(${i + 1}) > p:nth-of-type(1)`).text(`${homeScore}:${awayScore}`);

        if (home[0] == '서울E') {
            if (homeScore > awayScore) $(`#prevMatch > div > div:nth-of-type(${i + 1}) > p:nth-of-type(1)`).css({'color': '#faf6f5', 'background': '#374df5c0', 'border': '1px solid #374df5c0'});
            else if (homeScore < awayScore) $(`#prevMatch > div > div:nth-of-type(${i + 1}) > p:nth-of-type(1)`).css({'color': '#faf6f5', 'background': '#e0000060', 'border': '1px solid #e0000060'});
        } else {
            if (homeScore < awayScore) $(`#prevMatch > div > div:nth-of-type(${i + 1}) > p:nth-of-type(1)`).css({'color': '#faf6f5', 'background': '#374df5c0', 'border': '1px solid #374df5c0'});
            else if (homeScore > awayScore) $(`#prevMatch > div > div:nth-of-type(${i + 1}) > p:nth-of-type(1)`).css({'color': '#faf6f5', 'background': '#e0000060', 'border': '1px solid #e0000060'});
        }
        
        if (homeScore == awayScore) $(`#prevMatch > div > div:nth-of-type(${i + 1}) > p:nth-of-type(1)`).css({'color': '#faf6f5', 'background': '#05090a40', 'border': '1px solid #05090a40'});
    }

    $('#prevMatch > div > div').click(function() {
        const id = $(this).attr('class');

        window.location.href = `./match?${id}`;
        localStorage.setItem(id, 'matchInfo');
    });

    // 순위
    const teamNameMap = {
        '강원 FC': 'gangwonfc',
        '경남 FC': 'gyeongnamfc2010',
        '광주 FC': 'gwangjufc2020',
        '김천 상무 FC': 'gimcheonsangmu',
        '김포 FC': 'gimpofc2022',
        '김해 FC 2008': 'gimhaefc',
        '대구 FC': 'daegufc2013',
        '대전 하나 시티즌': 'daejeonhana2020',
        '부산 아이파크': 'busanipark2012',
        '부천 FC 1995': 'bucheonfc',
        'FC 서울': 'fcseoul',
        '서울 이랜드 FC': 'seouleland',
        '성남 FC': 'seongnamfc2014',
        '수원 삼성 블루윙즈': 'suwonsamsung',
        '수원 FC': 'suwonfc2016',
        'FC 안양': 'fcanyang',
        '안산 그리너스 FC': 'ansangreeners2025',
        '용인 FC': 'yonginfc',
        '울산 HD FC': 'ulsanhd2024',
        '인천 유나이티드 FC': 'incheonutd',
        '전남 드래곤즈': 'jeonnamdragons2022',
        '전북 현대 모터스': 'jeonbukhyundai2018',
        '제주 SK FC': 'jejusk2025',
        '천안 시티 FC': 'cheonancity2023',
        '충남아산 FC': 'chungnamasan',
        '충북청주 FC': 'chungbukcheongju',
        '파주 프런티어 FC': 'pajufrontier',
        '포항 스틸러스': 'pohangsteelers',
        '화성 FC': 'hwaseongfc2023'
    }

    const standingsList = {};
    const year = new Date().getFullYear();
    const teamNum = Object.keys(standings[year]['A']).length;

    let sefc; // 서울 이랜드 FC 순위

    for (let i = 0; i < teamNum; i++) {
        standingsList[i + 1] = [standings[year]['A'][i][1], standings[year]['A'][i][2], standings[year]['A'][i][6]];

        if (standings[year]['A'][i][1] == '서울 이랜드 FC') sefc = i + 1;
    }
    
    if ($(window).width() < 768) {
        if (sefc < 3) {
            for (let i = 1; i <= 5; i++) {
                $('#standingsHome > table > tbody').append(`<tr class='${i == sefc ? 'sefc' : ''}'><td>${i}</td><td><img src = './files/${teamNameMap[standingsList[i][0]]}_s.png'></td><td>${standingsList[i][0]}</td><td>${standingsList[i][1]}</td><td>${standingsList[i][2]}</td></tr>`);
            }
        } else if (sefc > (teamNum - 2)) {
            for (let i = (teamNum - 4); i <= teamNum; i++) {
                $('#standingsHome > table > tbody').append(`<tr class='${i == sefc ? 'sefc' : ''}'><td>${i}</td><td><img src = './files/${teamNameMap[standingsList[i][0]]}_s.png'></td><td>${standingsList[i][0]}</td><td>${standingsList[i][1]}</td><td>${standingsList[i][2]}</td></tr>`);
            }
        } else {
            for (let i = (sefc - 2); i <= (sefc + 2); i++) {
                $('#standingsHome > table > tbody').append(`<tr class='${i == sefc ? 'sefc' : ''}'><td>${i}</td><td><img src = './files/${teamNameMap[standingsList[i][0]]}_s.png'></td><td>${standingsList[i][0]}</td><td>${standingsList[i][1]}</td><td>${standingsList[i][2]}</td></tr>`);
            }
        }
    } else {
        $('#standingsHome > table').after(`
            <table>
                <thead>
                    <tr>
                        <th transl='y'>순위</th>
                        <th colspan="2" transl='y'>구단</th>
                        <th transl='y'>승점</th>
                        <th transl='y'>득점</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>`);
        
        for (let i = 1; i <= Math.ceil(teamNum / 2); i++) {
            $('#standingsHome > table:nth-of-type(1) > tbody').append(`<tr class='${i == sefc ? 'sefc' : ''}'><td>${i}</td><td><img src = './files/${teamNameMap[standingsList[i][0]]}_s.png'></td><td>${standingsList[i][0]}</td><td>${standingsList[i][1]}</td><td>${standingsList[i][2]}</td></tr>`);
        }

        for (let i = (Math.ceil(teamNum / 2) + 1); i <= teamNum; i++) {
            $('#standingsHome > table:nth-of-type(2) > tbody').append(`<tr class='${i == sefc ? 'sefc' : ''}'><td>${i}</td><td><img src = './files/${teamNameMap[standingsList[i][0]]}_s.png'></td><td>${standingsList[i][0]}</td><td>${standingsList[i][1]}</td><td>${standingsList[i][2]}</td></tr>`);
        }

        if (teamNum % 2 == 1) $('#standingsHome > table:nth-of-type(2) > tbody').append('<tr></tr>');
    }

    // 날씨 숨기기
    $('#nextMatch > div:nth-of-type(1)').css('display', 'none');
}