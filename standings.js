import { loadData } from './firebase.js';

let teamType = (window.location.href.split('?')[2] == 'A' || window.location.href.split('?')[2] == 'U18' || window.location.href.split('?')[2] == 'U15') ? window.location.href.split('?')[2] : 'A';
let click = 0;

beforeLoading();

async function initPage() {
    try {
        /*
            standings: 순위
        */
        const standings = await loadData('standings');
        render(standings);
    } catch (error) {
        console.error('데이터 불러오기 실패', error);
    }

    // afterLoading 함수가 있다면 실행 (없으면 주석 처리)
    if (typeof afterLoading === 'function') afterLoading();
}

initPage();

function render(standings) {
    let year;
    const currYear = new Date().getFullYear();

    // 버튼 역할 지정
    $('.standingsButton > button:nth-of-type(1)').click(() => teamA(standings, year));
    $('.standingsButton > button:nth-of-type(2)').click(() => teamU18(standings, year));
    $('.standingsButton > button:nth-of-type(3)').click(() => teamU15(standings, year));

    // 연도 선언
    try {
        const urlYear = window.location.href.split('?')[1];
        if (urlYear && urlYear.length == 4) {
            if ((urlYear >= 2015) && (urlYear <= currYear)) {
                year = urlYear;
            } else {
                year = currYear;
            }
        } else {
            year = currYear;
        }
    } catch (error) {
        year = currYear;
    }

    // 연도 옵션 추가
    for (let i = currYear; i >= 2015; i--) {
        $('.standingsSeason > select').append(`<option value='${i}'>${i}</option>`);
    }

    // 기본 함수 실행
    switch (teamType) {
        case 'A':
            teamA(standings, year);
            break;
        case 'U18':
            teamU18(standings, year);
            break;
        case 'U15':
            teamU15(standings, year);
            break;
        default: ;
    }

    // 연도 선택 변경 이벤트
    $('.standingsSeason > select').on('change', function () {
        $(this).blur();
        
        year = $(this).val();
        setYear(standings, year, teamType);
    });

    $('.standingsSeason > p:nth-of-type(1)').click(function () {
        if (click == 0) open();
        else close();
    });

    if ($(window).width() >= 768) {
        $('#standingsA > div > table > thead > tr > th:nth-of-type(2)').attr('colspan', 2);
        $('.standingsSeason > p:nth-of-type(1)').css('display', 'none');
    }

    $('.standingsSeason > p:nth-of-type(2)').click(function () {
        if (!(year == 2015)) year--;
        setYear(standings, year, teamType);
    });

    $('.standingsSeason > p:nth-of-type(3)').click(function () {
        if (!(year == currYear)) year++;
        setYear(standings, year, teamType);
    });

    $('.standingsSeason > p:nth-of-type(4)').click(function () {
        year = currYear;
        setYear(standings, year, teamType);
    });
}

// 순위표 펼치기
function open() {
    $('table > thead > tr > th:nth-of-type(2)').attr('colspan', '1');
    $('table > thead > tr > th:nth-of-type(n+4):nth-of-type(-n+6)').css('display', 'table-cell');
    $('table > thead > tr > th:nth-of-type(n+8)').css('display', 'table-cell');
    $('table > tbody > tr > td:nth-of-type(3)').css('display', 'none');
    $('table > tbody > tr > td:nth-of-type(n+5):nth-of-type(-n+7)').css('display', 'table-cell');
    $('table > tbody > tr > td:nth-of-type(n+9)').css('display', 'table-cell');

    $('tr.sefc > td:nth-of-type(8)').css('border-radius', '0');

    $('.standingsSeason > p:nth-of-type(1)').text('순위 간략히');

    click = 1;
}

// 순위표 접기
function close() {
    $('table > thead > tr > th:nth-of-type(2)').attr('colspan', '2');
    $('table > thead > tr > th:nth-of-type(n+4):nth-of-type(-n+6)').css('display', 'none');
    $('table > thead > tr > th:nth-of-type(n+8)').css('display', 'none');
    $('table > tbody > tr > td:nth-of-type(3)').css('display', 'table-cell');
    $('table > tbody > tr > td:nth-of-type(n+5):nth-of-type(-n+7)').css('display', 'none');
    $('table > tbody > tr > td:nth-of-type(n+9)').css('display', 'none');

    $('tr.sefc > td:nth-of-type(8)').css('border-radius', '0 20px 20px 0');

    $('.standingsSeason > p:nth-of-type(1)').text('순위 자세히');

    click = 0;
}

// 순위 불러오기
function loadStandings(standings, year, teamType) {
    const teamNameMap = {
        '광주 FC': [
            { year: 2020, code: 'gwangjufc2020' },
            { year: 2010, code: 'gwangjufc2010' } 
        ],
        '수원 FC': [
            { year: 2016, code: 'suwonfc2016' },
            { year: 2003, code: 'suwonfc2003' } 
        ],
        '안산 그리너스 FC': [
            { year: 2025, code: 'ansangreeners2025' },
            { year: 2017, code: 'ansangreeners2017' } 
        ],
        '전남 드래곤즈': [
            { year: 2022, code: 'jeonnamdragons2022' },
            { year: 2014, code: 'jeonnamdragons2014' } 
        ],
        '전북 현대 모터스': [
            { year: 2018, code: 'jeonbukhyundai2018' },
            { year: 2013, code: 'jeonbukhyundai2013' } 
        ],

        '강원 FC': 'gangwonfc',
        '경남 FC': 'gyeongnamfc2010',
        '고양 Hi FC': 'goyanghifc',
        '고양 자이크로': 'goyangzaicro',
        '김천 상무 FC': 'gimcheonsangmu',
        '김포 FC': 'gimpofc2022',
        '김해 FC 2008': 'gimhaefc2026',
        '대구 FC': 'daegufc2013',
        '대전 시티즌': 'daejeoncitizen2003',
        '대전 하나 시티즌': 'daejeonhana2020',
        '부산 아이파크': 'busanipark2012',
        '부천 FC 1995': 'bucheonfc',
        '상주 상무 FC': 'sangjusangmu',
        'FC 서울': 'fcseoul',
        'FC 서울 FOS': 'fcseoul',
        '서울 이랜드 FC': 'seouleland',
        '성남 FC': 'seongnamfc2014',
        '수원 FC-P': 'suwonfc2016',
        '수원 삼성 블루윙즈': 'suwonsamsung',
        '아산 무궁화 FC': 'asanmugunghwa',
        '안산 경찰청 축구단': 'ansanpolice',
        '안산 경찰청 축구단': 'ansanpolice',
        '안산 무궁화 FC': 'ansanmugunghwa',
        'FC 안양': 'fcanyang',
        '용인 FC': 'yonginfc',
        '울산 HD FC': 'ulsanhd2024',
        '울산 현대': 'ulsanhyundai2016',
        '인천 유나이티드 FC': 'incheonutd',
        '제주 유나이티드 FC': 'jejuutd2006',
        '제주 SK FC': 'jejusk2025',
        '천안 시티 FC': 'cheonancity2023',
        '충남아산 FC': 'chungnamasan',
        '충북청주 FC': 'chungbukcheongju',
        '충주 험멜': 'chungjuhummel',
        '파주 프런티어 FC': 'pajufrontier',
        '포항 스틸러스': 'pohangsteelers',
        '화성 FC': 'hwaseongfc2023',

        '개원중학교': 'gaewonms',
        '경희중학교': 'kyungheems',
        '구산중학교(서울)': 'gusanms',
        '남강중학교': 'namkangms',
        '뉴 은평 FC': 'neweunpyeong',
        '당산서중학교': 'dangsanseoms',
        '도봉중학교': 'dobongms',
        '동북중학교': 'dongbukms',
        '동원중학교(서울)': 'dongwonms',
        '마포신북': 'maposinbukfc',
        '문래중학교': 'mullaems',
        '배재중학교': 'paichaims',
        '보인중학교': 'boinms',
        '석관중학교': 'seokgwanms',
        '성남 FC 강동': 'seongnamfc2014',
        '세일중학교': 'seilms',
        '숭실중학교': 'soongsilms',
        '신림중학교': 'sillimms',
        '신천중학교': 'sincheonms',
        '영서중학교': 'yeongseoms',
        '장안중학교(서울)': 'janganms',
        '중동중학교': 'joongdongms',
        '중앙대학교 사범대학 부속중학교': 'chungangunivms',
        'FC 한양': 'fchanyang',
        '한양중학교': 'hanyangms',
        '화곡중학교': 'hwagokms',
        'FOS': 'fcseoul'
    };

    $('[id^=standings] > div > table > tbody').empty();

    if (teamType != 'U18') {
        $('[id^=standings]').css('display', 'none');
        $(`#standings${teamType}`).css('display', 'block');

        const teamDataListF = standings[year][teamType];
        const teamNumF = teamDataListF.length;

        for (let i = 0; i < teamNumF; i++) {
            let teamName = teamDataListF[i][1];
            let cleanTeamName = teamName.replace(/ U-15| U-18/gi, '').trim();
            let teamCode = '';
            const mappingData = teamNameMap[cleanTeamName];

            if (Array.isArray(mappingData)) {
                for (let k = 0; k < mappingData.length; k++) {
                    if (parseInt(year) >= mappingData[k].year) {
                        teamCode = mappingData[k].code;
                        break;
                    }
                }
            } else {
                teamCode = mappingData || '';
            }

            let w = teamDataListF[i][3];
            let d = teamDataListF[i][4];
            let l = teamDataListF[i][5];
            let gs = teamDataListF[i][6];
            let gc = teamDataListF[i][7];
            let pts = (parseInt(w) * 3) + parseInt(d);
            let gd = parseInt(gs) - parseInt(gc);

            let rowClass = cleanTeamName.includes('서울 이랜드 FC') ? 'sefc' : '';
            
            let emblemSrc = teamCode ? `./files/${teamCode}_s.png` : '';
            
            let $tr = $(`
                <tr class='${rowClass}'>
                    <td>${i + 1}</td>
                    <td><img src='${emblemSrc}'></td>
                    <td>${teamName}</td>
                    <td>${pts}</td>
                    <td>${w}</td>
                    <td>${d}</td>
                    <td>${l}</td>
                    <td>${gs}</td>
                    <td>${gc}</td>
                    <td>${gd}</td>
                </tr>
            `);

            $(`#standings${teamType} > div > table > tbody`).append($tr);
        }
        
        if (typeof applyViewState === 'function') applyViewState();
    } else {
        $('[id^=standings]').css('display', 'none');
        $(`#standingsU18, #standingsU18F, #standingsU18S`).css('display', 'block');

        // 전반기
        const teamDataListF = standings[year]['U18F'];
        const teamNumF = teamDataListF.length;

        for (let i = 0; i < teamNumF; i++) {
            let teamName = teamDataListF[i][1];
            let cleanTeamName = teamName.replace(/ U-15| U-18/gi, '').trim();
            let teamCode = '';
            const mappingData = teamNameMap[cleanTeamName];

            if (Array.isArray(mappingData)) {
                for (let k = 0; k < mappingData.length; k++) {
                    if (parseInt(year) >= mappingData[k].year) {
                        teamCode = mappingData[k].code;
                        break;
                    }
                }
            } else {
                teamCode = mappingData || '';
            }

            let w = teamDataListF[i][3];
            let d = teamDataListF[i][4];
            let l = teamDataListF[i][5];
            let gs = teamDataListF[i][6];
            let gc = teamDataListF[i][7];
            let pts = (parseInt(w) * 3) + parseInt(d);
            let gd = parseInt(gs) - parseInt(gc);

            let rowClass = cleanTeamName.includes('서울 이랜드 FC') ? 'sefc' : '';
            
            let emblemSrc = teamCode ? `./files/${teamCode}_s.png` : '';
            
            let $tr = $(`
                <tr class='${rowClass}'>
                    <td>${i + 1}</td>
                    <td><img src='${emblemSrc}'></td>
                    <td>${teamName}</td>
                    <td>${pts}</td>
                    <td>${w}</td>
                    <td>${d}</td>
                    <td>${l}</td>
                    <td>${gs}</td>
                    <td>${gc}</td>
                    <td>${gd}</td>
                </tr>
            `);

            $(`#standingsU18F > table > tbody`).append($tr);
        }

        // 후반기
        if (standings[year]['U18S'] != undefined) {
            const teamDataListS = standings[year]['U18S'];
            const teamNumS = teamDataListS.length;

            for (let i = 0; i < teamNumS; i++) {
                let teamName = teamDataListS[i][1];
                let cleanTeamName = teamName.replace(/ U-15| U-18/gi, '').trim();
                let teamCode = '';
                const mappingData = teamNameMap[cleanTeamName];

                if (Array.isArray(mappingData)) {
                    for (let k = 0; k < mappingData.length; k++) {
                        if (parseInt(year) >= mappingData[k].year) {
                            teamCode = mappingData[k].code;
                            break;
                        }
                    }
                } else {
                    teamCode = mappingData || '';
                }

                let w = teamDataListS[i][3];
                let d = teamDataListS[i][4];
                let l = teamDataListS[i][5];
                let gs = teamDataListS[i][6];
                let gc = teamDataListS[i][7];
                let pts = (parseInt(w) * 3) + parseInt(d);
                let gd = parseInt(gs) - parseInt(gc);

                let rowClass = cleanTeamName.includes('서울 이랜드 FC') ? 'sefc' : '';

                let emblemSrc = teamCode ? `./files/${teamCode}_s.png` : '';

                let $tr = $(`
                <tr class='${rowClass}'>
                    <td>${i + 1}</td>
                    <td><img src='${emblemSrc}'></td>
                    <td>${teamName}</td>
                    <td>${pts}</td>
                    <td>${w}</td>
                    <td>${d}</td>
                    <td>${l}</td>
                    <td>${gs}</td>
                    <td>${gc}</td>
                    <td>${gd}</td>
                </tr>
            `);

                $(`#standingsU18S > table > tbody`).append($tr);
            }
        } else {
            $('#standingsU18S, #standingsU18F > p').css('display', 'none');
        }
        
        if (typeof applyViewState === 'function') applyViewState();
    }

    if ($(window).width() < 768) {
        if (click == 0) close();
        else open();
    }
}

// 연도 설정
function setYear(standings, year, teamType) {
    $(`option[value='${year}']`).prop('selected', true);

    // url 설정
    window.history.replaceState({}, '', `${window.location.href.split('?')[0]}?${year}?${teamType}`);

    // 일정 불러오기
    loadStandings(standings, year, teamType);
}

// 팀 선택
function teamA(standings, year) {
    teamType = 'A';

    $('.standingsButton > button').css({ 'color': '#05090a', 'background': '#faf6f540' });
    $('.standingsButton > button:nth-of-type(1)').css({ 'color': '#faf6f5', 'background': '#000060c0' });

    setYear(standings, year, teamType);
}

function teamU18(standings, year) {
    teamType = 'U18';

    $('.standingsButton > button').css({ 'color': '#05090a', 'background': '#faf6f540' });
    $('.standingsButton > button:nth-of-type(2)').css({ 'color': '#faf6f5', 'background': '#000060c0' });

    setYear(standings, year, teamType);
}

function teamU15(standings, year) {
    teamType = 'U15';

    $('.standingsButton > button').css({ 'color': '#05090a', 'background': '#faf6f540' });
    $('.standingsButton > button:nth-of-type(3)').css({ 'color': '#faf6f5', 'background': '#000060c0' });

    setYear(standings, year, teamType);
}