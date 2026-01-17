import { loadData } from './firebase.js';

let teamType = (window.location.href.split('?')[2] == 'A' || window.location.href.split('?')[2] == 'U18' || window.location.href.split('?')[2] == 'U15') ? window.location.href.split('?')[2] : 'A';

async function initPage() {
    try {
        /*
            dataA: A팀 전체 데이터
            dataU18: U-18 전체 데이터
            dataU15: U-15 전체 데이터
        */

        const [dataA, dataU18, dataU15] = await Promise.all([
            loadData('dataA'),
            loadData('dataU18'),
            loadData('dataU15'),
        ]);

        render(dataA, dataU18, dataU15);
    } catch (error) {
        console.error('데이터 불러오기 실패', error);
    }

    afterLoading();
}

initPage();

function render(dataA, dataU18, dataU15) {
    let year, month;
    const currYear = new Date().getFullYear();
    const currMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);

    // 현재 팀 데이터 가져오기
    const getCurrentData = () => {
        if(teamType == 'A') return dataA;
        if(teamType == 'U18') return dataU18;
        if(teamType == 'U15') return dataU15;
    }

    // 버튼 역할 지정
    $('.fixturesButton > button:nth-of-type(1)').click(() => teamA(dataA, year, month));
    $('.fixturesButton > button:nth-of-type(2)').click(() => teamU18(dataU18, year, month));
    $('.fixturesButton > button:nth-of-type(3)').click(() => teamU15(dataU15, year, month));

    // 연월 선언
    try {
        if (window.location.href.split('?')[1].length == 6) {
            if ((window.location.href.split('?')[1].substring(0, 4) >= 2015) && (window.location.href.split('?')[1].substring(0, 4) <= currYear)) {
                year = window.location.href.split('?')[1].substring(0, 4);
            } else {
                year = currYear;
            }
            if ((window.location.href.split('?')[1].substring(4, 6) >= 1) && (window.location.href.split('?')[1].substring(4, 6) <= 12)) {
                month = window.location.href.split('?')[1].substring(4, 6);
            } else {
                month = currMonth;
            }
        }
    } catch (error) {
        year = currYear;
        month = currMonth;
    }

    for (let i = currYear; i >= 2015; i--) {
        $('.fixturesSeason > select').append(`<option value='${i}'>${i}</option>`);
    }

    // 기본 함수 실행
    switch(teamType) {
        case 'A':
            teamA(dataA, year, month);
            break;
        case 'U18':
            teamU18(dataU18, year, month);
            break;
        case 'U15':
            teamU15(dataU15, year, month);
            break;
        default: ;
    }

    // 버튼 제어
    $('.fixturesSeason > select').on('change', function() {
        $(this).blur();
        
        year = $(this).val();
    
        setYear(getCurrentData(), year, month);
    });

    $('.fixturesSeason > p:nth-of-type(1)').click(function() {
        if (!((year == 2015) && (month == '01'))) {
            if (month == '01') {
                year--;
                month = '12';
            } else {
                month = ('0' + (Number(month) - 1)).slice(-2);
            }

            setYear(getCurrentData(), year, month);
        }
    });

    $('.fixturesSeason > p:nth-of-type(2)').click(function() {
        if (!((year == currYear) && (month == '12'))) {
            if (month == '12') {
                year++;
                month = '01';
            } else {
                month = ('0' + (Number(month) + 1)).slice(-2);
            }

            setYear(getCurrentData(), year, month);
        }
    });

    $('.fixturesSeason > p:nth-of-type(3)').click(function() {
        year = currYear;
        month = currMonth;

        setYear(getCurrentData(), year, month);
    });

    // 일정 클릭 시 일정 페이지로 이동
    $(document).on('click', '.fixtures_', function () {
        const matchId = $(this).attr('id');

        localStorage.setItem(matchId, 'matchInfo');
        window.location.href = `./match?${matchId}`;
    });
}

// 연, 월 설정
function setYear(data, year, month) {
    $(`option[value='${year}']`).prop('selected', true);

    $('.fixturesSeason > span').text(month);

    // url 설정
    window.history.replaceState({}, "", `${window.location.href.split("?")[0]}?${year}${month}?${teamType}`);

    // 일정 불러오기
    loadFixtures(data, year, month);
}

function loadFixtures(data, year, month) {
    const target = `${year}${month}`;
    const filtered = {};

    Object.keys(data).forEach(key => {
        if (key.startsWith(target)) {
            filtered[key] = data[key];
        }
    })

    const keys = Object.keys(filtered);

    switch (teamType) {
        case 'A':
            $("#fixturesA").css("display", "block");
            $("#fixturesU18").css("display", "none");
            $("#fixturesU15").css("display", "none");
            break;
        case 'U18':
            $("#fixturesA").css("display", "none");
            $("#fixturesU18").css("display", "block");
            $("#fixturesU15").css("display", "none");
            break;
        case 'U15':
            $("#fixturesA").css("display", "none");
            $("#fixturesU18").css("display", "none");
            $("#fixturesU15").css("display", "block");
            break;
    }

    $('[id^=fixtures] > .fixtures').empty();

    for (let i = 0; i < keys.length; i++) {
        const matchData = filtered[keys[i]];
        const homeScore = matchData['homeScore'];
        const awayScore = matchData['awayScore'];
        const isHome = (matchData['home'][1] == 'seouleland') ? 1 : 0;

        $(`#fixtures${teamType} > .fixtures`).append(`
            <div id = '${keys[i]}' class='fixtures_' glass='true'>
                <div>
                    <img src = './files/${matchData['comp'][1]}_s.png'>
                    <p transl='y'>${matchData['comp'][0]} ${matchData['round']}</p>
                </div>
                <div>
                    <div>
                        <div>
                            <img src = './files/${matchData['home'][1]}_s.png'>
                        </div>
                        <p transl='y'>${matchData['home'][0]}</p>
                    </div>
                    <div>
                        <p>${homeScore} : ${awayScore}</p>
                        <p glass='true'>${keys[i].substring(4, 6)}.${keys[i].substring(6, 8)}. ${matchData['time']}</p>
                    </div>
                    <div>
                        <div>
                            <img src = './files/${matchData['away'][1]}_s.png'>
                        </div>
                        <p transl='y'>${matchData['away'][0]}</p>
                    </div>
                </div>
            </div>
        `);

        // 승무패 색상
        if (homeScore != undefined && homeScore != '') {
            if ((isHome && (homeScore.replace(/<span[^>]*>.*?<\/span>/gi, "") > awayScore.replace(/<span[^>]*>.*?<\/span>/gi, ""))) || (!(isHome) && (homeScore.replace(/<span[^>]*>.*?<\/span>/gi, "") < awayScore.replace(/<span[^>]*>.*?<\/span>/gi, "")))) {
                $(`#fixtures${teamType} > .fixtures > .fixtures_:nth-of-type(${i + 1}) > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(2)`).css({ 'color': '#faf6f5', 'background': '#374df5c0', 'border': '1px solid #374df5c0' });
            } else if ((!(isHome) && (homeScore.replace(/<span[^>]*>.*?<\/span>/gi, "") > awayScore.replace(/<span[^>]*>.*?<\/span>/gi, ""))) || (isHome && (homeScore.replace(/<span[^>]*>.*?<\/span>/gi, "") < awayScore.replace(/<span[^>]*>.*?<\/span>/gi, "")))) {
                $(`#fixtures${teamType} > .fixtures > .fixtures_:nth-of-type(${i + 1}) > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(2)`).css({ 'color': '#faf6f5', 'background': '#e0000060', 'border': '1px solid #e0000060' });
            } else {
                $(`#fixtures${teamType} > .fixtures > .fixtures_:nth-of-type(${i + 1}) > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(2)`).css({ 'color': '#faf6f5', 'background': '#05090a40', 'border': '1px solid #05090a40' });
            }
        }

        // 데이터 없을 때 대체
        if (homeScore == undefined || homeScore == '') $(`#fixtures${teamType} > .fixtures > .fixtures_:nth-of-type(${i + 1}) > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)`).text(`vs`);
        if (matchData['time'] == undefined || matchData['time'] == '') $(`#fixtures${teamType} > .fixtures > .fixtures_:nth-of-type(${i + 1}) > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(2)`).text(`${keys[i].substring(4, 6)}.${keys[i].substring(6, 8)}.`).css('padding', '2px 20px');
    }

    if (keys.length == 0) {
        $(`#fixtures${teamType} > .fixtures`).append("<p transl='y'>일정이 없습니다.</p>");
        $(`#fixtures${teamType} > .fixtures > p`).css({ "font-size": "16px", "margin-top": "calc(27px + 5vw)", "font-weight": "300" });
    }
}

// 팀 선택
function teamA(data, year, month) {
    teamType = 'A';
    
    $('.fixturesButton > button').css({ 'color': '#05090a', 'background': '#faf6f540' });
    $('.fixturesButton > button:nth-of-type(1)').css({'color': '#faf6f5', 'background': '#000060c0'});

    setYear(data, year, month);
}

function teamU18(data, year, month) {
    teamType = 'U18';

    $('.fixturesButton > button').css({ 'color': '#05090a', 'background': '#faf6f540' });
    $('.fixturesButton > button:nth-of-type(2)').css({'color': '#faf6f5', 'background': '#000060c0'});

    setYear(data, year, month);
}

function teamU15(data, year, month) {
    teamType = 'U15';

    $('.fixturesButton > button').css({ 'color': '#05090a', 'background': '#faf6f540' });
    $('.fixturesButton > button:nth-of-type(3)').css({'color': '#faf6f5', 'background': '#000060c0'});

    setYear(data, year, month);
}