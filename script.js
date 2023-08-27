// 새로고침 시
$(document).ready(function() {

    // 맨 위로 이동
    if($("#yetA").length) {
        document.getElementById("yetA").scrollIntoView({behavior: "smooth", block: "center"});
    } else {
        $("html").animate({
            scrollTop: 0
        }, 300)
    };
    
    // 글자 크기 자동 조정
    screenWidth = $(window).width()
    if (screenWidth < 350) {
        $("*").css("font-size", function(_i, val) {
            return parseInt(val) - 4 + "px";
        });
    } else if (screenWidth < 410) {
        $("*").css("font-size", function(_i, val) {
            return parseInt(val) - 2 + "px";
        });
    } else {};

});

//A팀 엠블럼 삽입
$("td[class='sefc']").after("<td><img src='./files/seouleland_s.png'></td><td>서울 이랜드 FC</td>");
$("td[class='gan']").after("<td><img src='./files/gangwonfc_s.png'></td><td>강원 FC</td>");
$("td[class='gye']").after("<td><img src='./files/gyeongnamfc2010_s.png'></td><td>경남 FC</td>");
$("td[class='gwa']").after("<td><img src='./files/gwangjufc2020_s.png'></td><td>광주 FC</td>");
$("td[class='gim']").after("<td><img src='./files/gimcheonsangmu_s.png'></td><td>김천 상무 FC</td>");
$("td[class='gfc']").after("<td><img src='./files/gimpofc2022_s.png'></td><td>김포 FC</td>");
$("td[class='dae']").after("<td><img src='./files/daegufc2013_s.png'></td><td>대구 FC</td>");
$("td[class='dhfc']").after("<td><img src='./files/daejeonhana2020_s.png'></td><td>대전 하나 시티즌</td>");
$("td[class='bus']").after("<td><img src='./files/busanipark2012_s.png'></td><td>부산 아이파크</td>");
$("td[class='buc']").after("<td><img src='./files/bucheonfc_s.png'></td><td>부천 FC 1995</td>");
$("td[class='fcs']").after("<td><img src='./files/fcseoul_s.png'></td><td>FC 서울</td>");
$("td[class='sfc']").after("<td><img src='./files/seongnamfc2014_s.png'></td><td>성남 FC</td>");
$("td[class='ssb']").after("<td><img src='./files/suwonsamsung_s.png'></td><td>수원 삼성 블루윙즈</td>");
$("td[class='suw']").after("<td><img src='./files/suwonfc2016_s.png'></td><td>수원 FC</td>");
$("td[class='ans']").after("<td><img src='./files/ansangreeners_s.png'></td><td>안산 그리너스</td>");
$("td[class='any']").after("<td><img src='./files/fcanyang_s.png'></td><td>FC 안양</td>");
$("td[class='uls']").after("<td><img src='./files/ulsanhyundai2016_s.png'></td><td>울산 현대 축구단</td>");
$("td[class='inc']").after("<td><img src='./files/incheonutd_s.png'></td><td>인천 유나이티드</td>");
$("td[class='jdfc']").after("<td><img src='./files/jeonnamdragons2022_s.png'></td><td>전남 드래곤즈</td>");
$("td[class='jeo']").after("<td><img src='./files/jeonbukhyundai2018_s.png'></td><td>전북 현대 모터스</td>");
$("td[class='jej']").after("<td><img src='./files/jejuutd_s.png'></td><td>제주 유나이티드</td>");
$("td[class='cafc']").after("<td><img src='./files/chungnamasan_s.png'></td><td>충남아산 FC</td>");
$("td[class='poh']").after("<td><img src='./files/pohangsteelers_s.png'></td><td>포항 스틸러스</td>");
$("td[class='ccfc']").after("<td><img src='./files/cheonancity2023_s.png'></td><td>천안 시티 FC</td>");
$("td[class='chfc']").after("<td><img src='./files/chungbukcheongju_s.png'></td><td>충북청주 FC</td>");

//U18 엠블럼 삽입
$("td[class='sefc8']").after("<td><img src='./files/seouleland_s.png'></td><td>서울 이랜드 FC U-18</td>");
$("td[class='gan8']").after("<td><img src='./files/gangwonfc_s.png'></td><td>강원 FC U-18</td>");
$("td[class='gye8']").after("<td><img src='./files/gyeongnamfc2010_s.png'></td><td>경남 FC U-18</td>");
$("td[class='gwa8']").after("<td><img src='./files/gwangjufc2020_s.png'></td><td>광주 FC U-18</td>");
$("td[class='gim8']").after("<td><img src='./files/gimcheonsangmu_s.png'></td><td>김천 상무 FC U-18</td>");
$("td[class='gfc8']").after("<td><img src='./files/gimpofc2022_s.png'></td><td>김포 FC U-18</td>");
$("td[class='dae8']").after("<td><img src='./files/daegufc2013_s.png'></td><td>대구 FC U-18</td>");
$("td[class='dhfc8']").after("<td><img src='./files/daejeonhana2020_s.png'></td><td>대전 하나 시티즌 U-18</td>");
$("td[class='bus8']").after("<td><img src='./files/busanipark2012_s.png'></td><td>부산 아이파크 U-18</td>");
$("td[class='buc8']").after("<td><img src='./files/bucheonfc_s.png'></td><td>부천 FC 1995 U-18</td>");
$("td[class='fcs8']").after("<td><img src='./files/fcseoul_s.png'></td><td>FC 서울 U-18</td>");
$("td[class='sfc8']").after("<td><img src='./files/seongnamfc2014_s.png'></td><td>성남 FC U-18</td>");
$("td[class='ssb8']").after("<td><img src='./files/suwonsamsung_s.png'></td><td>수원 삼성 블루윙즈 U-18</td>");
$("td[class='suw8']").after("<td><img src='./files/suwonfc2016_s.png'></td><td>수원 FC U-18</td>");
$("td[class='ans8']").after("<td><img src='./files/ansangreeners_s.png'></td><td>안산 그리너스 U-18</td>");
$("td[class='any8']").after("<td><img src='./files/fcanyang_s.png'></td><td>FC 안양 U-18</td>");
$("td[class='uls8']").after("<td><img src='./files/ulsanhyundai2016_s.png'></td><td>울산 현대 축구단 U-18</td>");
$("td[class='inc8']").after("<td><img src='./files/incheonutd_s.png'></td><td>인천 유나이티드 U-18</td>");
$("td[class='jdfc8']").after("<td><img src='./files/jeonnamdragons2022_s.png'></td><td>전남 드래곤즈 U-18</td>");
$("td[class='jeo8']").after("<td><img src='./files/jeonbukhyundai2018_s.png'></td><td>전북 현대 모터스 U-18</td>");
$("td[class='jej8']").after("<td><img src='./files/jejuutd_s.png'></td><td>제주 유나이티드 U-18</td>");
$("td[class='cafc8']").after("<td><img src='./files/chungnamasan_s.png'></td><td>충남아산 FC U-18</td>");
$("td[class='poh8']").after("<td><img src='./files/pohangsteelers_s.png'></td><td>포항 스틸러스 U-18</td>");
$("td[class='ccfc8']").after("<td><img src='./files/cheonancity2023_s.png'></td><td>천안 시티 FC U-18</td>");
$("td[class='chfc8']").after("<td><img src='./files/chungbukcheongju_s.png'></td><td>충북청주 FC U-18</td>");
$("td[class='soongsilhs']").after("<td><img src='./files/soongsilhs_s.png'></td><td>숭실고등학교</td>");
$("td[class='chojihs']").after("<td><img src='./files/chojihs_s.png'></td><td>초지고등학교</td>");
$("td[class='pajukorea8']").after("<td><img src='./files/pajukorea_s.png'></td><td>파주고려 FC U-18</td>");
$("td[class='hongcheonfc']").after("<td><img src='./files/hongcheonfc_s.png'></td><td>홍천 안정환 FC U-18</td>");

//U15 엠블럼 삽입
$("td[class='sefc5']").after("<td><img src='./files/seouleland_s.png'></td><td>서울 이랜드 FC U-15</td>");
$("td[class='gan5']").after("<td><img src='./files/gangwonfc_s.png'></td><td>강원 FC U-15</td>");
$("td[class='gye5']").after("<td><img src='./files/gyeongnamfc2010_s.png'></td><td>경남 FC U-15</td>");
$("td[class='gwa5']").after("<td><img src='./files/gwangjufc2020_s.png'></td><td>광주 FC U-15</td>");
$("td[class='gim5']").after("<td><img src='./files/gimcheonsangmu_s.png'></td><td>김천 상무 FC U-15</td>");
$("td[class='gfc5']").after("<td><img src='./files/gimpofc2022_s.png'></td><td>김포 FC U-15</td>");
$("td[class='dae5']").after("<td><img src='./files/daegufc2013_s.png'></td><td>대구 FC U-15</td>");
$("td[class='dhfc5']").after("<td><img src='./files/daejeonhana2020_s.png'></td><td>대전 하나 시티즌 U-15</td>");
$("td[class='bus5']").after("<td><img src='./files/busanipark2012_s.png'></td><td>부산 아이파크 U-15</td>");
$("td[class='buc5']").after("<td><img src='./files/bucheonfc_s.png'></td><td>부천 FC 1995 U-15</td>");
$("td[class='fcs5']").after("<td><img src='./files/fcseoul_s.png'></td><td>FC 서울 U-15</td>");
$("td[class='sfc5']").after("<td><img src='./files/seongnamfc2014_s.png'></td><td>성남 FC U-15</td>");
$("td[class='ssb5']").after("<td><img src='./files/suwonsamsung_s.png'></td><td>수원 삼성 블루윙즈 U-15</td>");
$("td[class='suw5']").after("<td><img src='./files/suwonfc2016_s.png'></td><td>수원 FC U-15</td>");
$("td[class='ans5']").after("<td><img src='./files/ansangreeners_s.png'></td><td>안산 그리너스 U-15</td>");
$("td[class='any5']").after("<td><img src='./files/fcanyang_s.png'></td><td>FC 안양 U-15</td>");
$("td[class='uls5']").after("<td><img src='./files/ulsanhyundai2016_s.png'></td><td>울산 현대 축구단 U-15</td>");
$("td[class='inc5']").after("<td><img src='./files/incheonutd_s.png'></td><td>인천 유나이티드 U-15</td>");
$("td[class='jdfc5']").after("<td><img src='./files/jeonnamdragons2022_s.png'></td><td>전남 드래곤즈 U-15</td>");
$("td[class='jeo5']").after("<td><img src='./files/jeonbukhyundai2018_s.png'></td><td>전북 현대 모터스 U-15</td>");
$("td[class='jej5']").after("<td><img src='./files/jejuutd_s.png'></td><td>제주 유나이티드 U-15</td>");
$("td[class='cafc5']").after("<td><img src='./files/chungnamasan_s.png'></td><td>충남아산 FC U-15</td>");
$("td[class='poh5']").after("<td><img src='./files/pohangsteelers_s.png'></td><td>포항 스틸러스 U-15</td>");
$("td[class='ccfc5']").after("<td><img src='./files/cheonancity2023_s.png'></td><td>천안 시티 FC U-15</td>");
$("td[class='chfc5']").after("<td><img src='./files/chungbukcheongju_s.png'></td><td>충북청주 FC U-15</td>");

// 대회 엠블럼 삽입
$("td[class='kl']").after("<td rowspan='2'><img style='height: 6vw;' src='./files/kleague_s.png'></td>");
$("td[class='kl40']").after("<td rowspan='2'><img style='height: 6vw;' src='./files/kleague40_s.png'></td>");
$("td[class='fa']").after("<td rowspan='2'><img src='./files/facup_s.png'></td>");
$("td[class='klj']").after("<td rowspan='2'><img src='./files/kleaguejunior_s.png'></td>");
$("td[class='klyc']").after("<td rowspan='2'><img src='./files/kleagueyouthchampionship_s.png'></td>");
$("td[class='mcst']").after("<td rowspan='2'><img src='./files/mcst_s.png'></td>");
$("td[class='kfa']").after("<td rowspan='2'><img src='./files/kfa_s.png'></td>");

// 헤더, 푸터
$("header").html("<a href='https://sefc.info'><img src='./files/seouleland.png'></a></header>")
$("footer").html("<ul><li><a href='./club'>구단</a></li><li><a href='./news'>소식</a></li><li><a href='./players'>선수단</a></li><li><a href='./fixtures'>일정</a></li><li><a href='./standings'>순위</a></li></ul>")

// 문자별 글꼴 적용
characterList = []

i = 0x00c0; // Latin-1 Supplement
while(i <= 0x00ff) {
    characterList.push(i);
    i++;
}
i = 0x0100; // Latin Extended-A, B
while(i <= 0x024f) {
    characterList.push(i);
    i++;
}
i = 0x0370; // Greek, Coptic, Cyrillic
while(i <= 0x052f) {
    characterList.push(i);
    i++;
}
i = 0x1ea0; // Vietnamese
while(i <= 0x1ef9) {
    characterList.push(i);
    i++;
}
i = 0x2e80; // CJK Hanja 1
while(i <= 0x2ef3) {
    characterList.push(i);
    i++;
}
i = 0x2f00; // CJK Hanja 2
while(i <= 0x2fd5) {
    characterList.push(i);
    i++;
}
i = 0x3400; // CJK Hanja 3
while(i <= 0x4dbf) {
    characterList.push(i);
    i++;
}
i = 0x4e00; // CJK Hanja 4
while(i <= 0x9fff) {
    characterList.push(i);
    i++;
}
i = 0xf900; // CJK Hanja 5
while(i <= 0xfaff) {
    characterList.push(i);
    i++;
}
i = 0x20000; // CJK Hanja 6
while(i <= 0x2fa1f) {
    characterList.push(i);
    i++;
}

_playerName = $("#playerName").find("span:nth-of-type(2)");
playerName = [];

i = 0
while ( i < _playerName.text().length) {
    playerName.push(_playerName.text().charCodeAt(i));
    i++;
};

intersection = playerName.filter(value => characterList.includes(value));
if (intersection.length != 0) {
    _playerName.css({"font-family": "'Noto Sans', 'Noto Sans KR'", "font-weight": "500"});
};

// 선수단 창 전환
function playerA() {
    document.getElementById("playerA").style.display = "block";
    document.getElementById("playerU18").style.display = "none";
    document.getElementById("playerU15").style.display = "none";
}

function playerU18() {
    document.getElementById("playerA").style.display = "none";
    document.getElementById("playerU18").style.display = "block";
    document.getElementById("playerU15").style.display = "none";
}

function playerU15() {
    document.getElementById("playerA").style.display = "none";
    document.getElementById("playerU18").style.display = "none";
    document.getElementById("playerU15").style.display = "block";
}

// 일정 창 전환
function fixturesA() {
    document.getElementById("fixturesA").style.display = "block";
    document.getElementById("fixturesU18").style.display = "none";
    document.getElementById("fixturesU15").style.display = "none";
    document.getElementById("yetA").scrollIntoView({behavior: "smooth", block: "center"});
}

function fixturesU18() {
    document.getElementById("fixturesA").style.display = "none";
    document.getElementById("fixturesU18").style.display = "block";
    document.getElementById("fixturesU15").style.display = "none";
    document.getElementById("yetU18").scrollIntoView({behavior: "smooth", block: "center"});
}

function fixturesU15() {
    document.getElementById("fixturesA").style.display = "none";
    document.getElementById("fixturesU18").style.display = "none";
    document.getElementById("fixturesU15").style.display = "block";
    document.getElementById("yetU15").scrollIntoView({behavior: "smooth", block: "center"});
}

function fixturesSeason() {
    fixturesSeason = $("div[class='fixturesSeason_']").css("display")

    if(fixturesSeason == "none") {
        $("div[class='fixturesSeason_']").css("display", "flex");
    }else {
        $("div[class='fixturesSeason_']").css("display", "none");
    }
    
}

// 일정 SEFC tr 투명도 변경
$("div[id*='fixtures'] > div > a > div > table > tbody > tr:has(.sefc) > td:nth-child(n-2):nth-child(-n+3)").css("opacity", "100%")
$("div[id*='fixtures'] > div > a > div > table > tbody > tr:has(.sefc8) > td:nth-child(n-2):nth-child(-n+3)").css("opacity", "100%")
$("div[id*='fixtures'] > div > a > div > table > tbody > tr:has(.sefc5) > td:nth-child(n-2):nth-child(-n+3)").css("opacity", "100%")

$("div[id*='fixtures'] > div > a > div > table > tbody > tr:has(.ssb) > td:nth-child(3)").css("font-size", "14px")
$("div[id*='fixtures'] > div > a > div > table > tbody > tr:has(.ssb8) > td:nth-child(3)").css("font-size", "14px")
$("div[id*='fixtures'] > div > a > div > table > tbody > tr:has(.ssb5) > td:nth-child(3)").css("font-size", "14px")

// 경기 세부 정보 창 전환
function matchTimeline() {
    document.getElementById("matchTimeline").style.display = "block";
    document.getElementById("matchLineup").style.display = "none";
    document.getElementById("matchStat").style.display = "none";
    document.getElementById("matchH2H").style.display = "none";
    $(".matchDetail button:nth-child(1)").css("font-weight", 700);
    $(".matchDetail button:nth-child(2)").css("font-weight", 400);
    $(".matchDetail button:nth-child(3)").css("font-weight", 400);
    $(".matchDetail button:nth-child(4)").css("font-weight", 400);
}

function matchLineup() {
    document.getElementById("matchTimeline").style.display = "none";
    document.getElementById("matchLineup").style.display = "block";
    document.getElementById("matchStat").style.display = "none";
    document.getElementById("matchH2H").style.display = "none";
    $(".matchDetail button:nth-child(1)").css("font-weight", 400);
    $(".matchDetail button:nth-child(2)").css("font-weight", 700);
    $(".matchDetail button:nth-child(3)").css("font-weight", 400);
    $(".matchDetail button:nth-child(4)").css("font-weight", 400);
}

function matchStat() {
    document.getElementById("matchTimeline").style.display = "none";
    document.getElementById("matchLineup").style.display = "none";
    document.getElementById("matchStat").style.display = "block";
    document.getElementById("matchH2H").style.display = "none";
    $(".matchDetail button:nth-child(1)").css("font-weight", 400);
    $(".matchDetail button:nth-child(2)").css("font-weight", 400);
    $(".matchDetail button:nth-child(3)").css("font-weight", 700);
    $(".matchDetail button:nth-child(4)").css("font-weight", 400);
}

function matchH2H() {
    document.getElementById("matchTimeline").style.display = "none";
    document.getElementById("matchLineup").style.display = "none";
    document.getElementById("matchStat").style.display = "none";
    document.getElementById("matchH2H").style.display = "flex";
    $(".matchDetail button:nth-child(1)").css("font-weight", 400);
    $(".matchDetail button:nth-child(2)").css("font-weight", 400);
    $(".matchDetail button:nth-child(3)").css("font-weight", 400);
    $(".matchDetail button:nth-child(4)").css("font-weight", 700);
}

// 순위 창 전환
function standingsA() {
    document.getElementById("standingsA").style.display = "block";
    document.getElementById("standingsU18").style.display = "none";
    document.getElementById("standingsU15").style.display = "none";
}

function standingsU18() {
    document.getElementById("standingsA").style.display = "none";
    document.getElementById("standingsU18").style.display = "block";
    document.getElementById("standingsU15").style.display = "none";
}

function standingsU15() {
    document.getElementById("standingsA").style.display = "none";
    document.getElementById("standingsU18").style.display = "none";
    document.getElementById("standingsU15").style.display = "block";
}

function standingsSeason() {
    standingsSeason = $("div[class='standingsSeason_']").css("display")

    if(standingsSeason == "none") {
        $("div[class='standingsSeason_']").css("display", "flex");
    }else {
        $("div[class='standingsSeason_']").css("display", "none");
    }
    
}

function standings() {
    standingsTh = $("div[id*='standings'] div table thead tr th:nth-child(6)").css("display")
    
    if($("div[id*='standings']").find("th:nth-child(6)").css("display") == "none") {
        $("div[id*='standings'] div table").css("width", "113vw");
        $("div[id*='standings'] div table thead tr th:nth-child(n+4):nth-child(-n+6)").css({"display": "table-cell", "width": "10vw"});
        $("div[id*='standings'] div table thead tr th:nth-child(n+8)").css({"display": "table-cell", "width": "10vw"});
        $("div[id*='standings'] div table tbody tr td:nth-child(n+6):nth-child(-n+8)").css({"display": "table-cell", "width": "10vw"});
        $("div[id*='standings'] div table tbody tr td:nth-child(n+10)").css({"display": "table-cell", "width": "10vw"});
        $("div[id*='standings'] div table tbody tr td:nth-child(3)").css("width", "8vw");
        $("div[id*='standings'] div table tbody tr td:nth-child(4)").css("width", "35vw");
        $("div[id*='standings'] > div > table > tbody > tr:has(.sefc) > td:nth-last-child(1)").css("border-radius", "0 50px 50px 0");
        $("div[id*='standings'] > div > table > tbody > tr:has(.sefc) > td:nth-last-child(3)").css("border-radius", "");
        $("div[id*='standings'] > div > table > tbody > tr:has(.sefc8) > td:nth-last-child(1)").css("border-radius", "0 50px 50px 0");
        $("div[id*='standings'] > div > table > tbody > tr:has(.sefc8) > td:nth-last-child(3)").css("border-radius", "");
        $("div[id*='standings'] > div > table > tbody > tr:has(.sefc5) > td:nth-last-child(1)").css("border-radius", "0 50px 50px 0");
        $("div[id*='standings'] > div > table > tbody > tr:has(.sefc5) > td:nth-last-child(3)").css("border-radius", "");
        $(".standings button").text("간략히 보기");
    } else {
        $("div[id*='standings'] div table").css("width", "90vw");
        $("div[id*='standings'] div table thead tr th:nth-child(n+4):nth-child(-n+6)").css({"display": "none"});
        $("div[id*='standings'] div table thead tr th:nth-child(n+8)").css({"display": "none"});
        $("div[id*='standings'] div table tbody tr td:nth-child(n+6):nth-child(-n+8)").css({"display": "none"});
        $("div[id*='standings'] div table tbody tr td:nth-child(n+10)").css({"display": "none"});
        $("div[id*='standings'] div table tbody tr td:nth-child(3)").css("width", "10vw");
        $("div[id*='standings'] div table tbody tr td:nth-child(4)").css("width", "40vw");
        $("div[id*='standings'] > div > table > tbody > tr:has(.sefc) > td:nth-last-child(1)").css("border-radius", "");
        $("div[id*='standings'] > div > table > tbody > tr:has(.sefc) > td:nth-last-child(3)").css("border-radius", "0 50px 50px 0");
        $("div[id*='standings'] > div > table > tbody > tr:has(.sefc8) > td:nth-last-child(1)").css("border-radius", "");
        $("div[id*='standings'] > div > table > tbody > tr:has(.sefc8) > td:nth-last-child(3)").css("border-radius", "0 50px 50px 0");
        $("div[id*='standings'] > div > table > tbody > tr:has(.sefc5) > td:nth-last-child(1)").css("border-radius", "");
        $("div[id*='standings'] > div > table > tbody > tr:has(.sefc5) > td:nth-last-child(3)").css("border-radius", "0 50px 50px 0");
        $(".standings button").text("자세히 보기");
    }
}

function standingsU18F() {
    document.getElementById("standingsU18F").style.display = "block";
    document.getElementById("standingsU18S").style.display = "none";
    $(".standingsDetail button:nth-child(1)").css("font-weight", 700)
    $(".standingsDetail button:nth-child(2)").css("font-weight", 400)
}

function standingsU18S() {
    document.getElementById("standingsU18F").style.display = "none";
    document.getElementById("standingsU18S").style.display = "block";
    $(".standingsDetail button:nth-child(1)").css("font-weight", 400)
    $(".standingsDetail button:nth-child(2)").css("font-weight", 700)
}

// 순위표 SEFC tr 속성 변경
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc) > td").css({"background": "#000831", "color": "#fafafa"});
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc) > td:nth-child(1)").css("border-radius", "50px 0 0 50px");
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc) > td:nth-last-child(3)").css("border-radius", "0 50px 50px 0");
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc8) > td").css({"background": "#000831", "color": "#fafafa"});
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc8) > td:nth-child(1)").css("border-radius", "50px 0 0 50px");
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc8) > td:nth-last-child(3)").css("border-radius", "0 50px 50px 0");
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc5) > td").css({"background": "#000831", "color": "#fafafa"});
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc5) > td:nth-child(1)").css("border-radius", "50px 0 0 50px");
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc5) > td:nth-last-child(3)").css("border-radius", "0 50px 50px 0");

// 인스타그램 링크
$("#playerInfo").find("a[href='#']").attr({"onclick": "return false", "style": "opacity: 0.5"})

// 포지션
$("#playerPos > #cf").text("CF")
$("#playerPos > #lw").text("LW")
$("#playerPos > #rw").text("RW")
$("#playerPos > #am").text("AM")
$("#playerPos > #lm").text("LM")
$("#playerPos > #cm").text("CM")
$("#playerPos > #rm").text("RM")
$("#playerPos > #dm").text("DM")
$("#playerPos > #lb").text("LB")
$("#playerPos > #rb").text("RB")
$("#playerPos > #cb").text("CB")
$("#playerPos > #gk").text("GK")

$("#playerPos > #cf").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "top": "137.5vw", "left": "45vw"})
$("#playerPos > #lw").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "top": "143.5vw", "left": "31vw"})
$("#playerPos > #rw").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "top": "143.5vw", "left": "59vw"})
$("#playerPos > #am").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "top": "149.5vw", "left": "45vw"})
$("#playerPos > #lm").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "top": "161.5vw", "left": "31vw"})
$("#playerPos > #cm").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "top": "161.5vw", "left": "45vw"})
$("#playerPos > #rm").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "top": "161.5vw", "left": "59vw"})
$("#playerPos > #dm").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "top": "173.5vw", "left": "45vw"})
$("#playerPos > #lb").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "top": "179.5vw", "left": "31vw"})
$("#playerPos > #rb").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "top": "179.5vw", "left": "59vw"})
$("#playerPos > #cb").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "top": "185.5vw", "left": "45vw"})
$("#playerPos > #gk").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "top": "197.5vw", "left": "45vw"})

$("p[pos=o]").css({"color": "#fafafa", "background": "#000831", "opacity": "1"})

// 선수 정보 창 전환
function playerInfo() {
    document.getElementById("playerPos").style.display = "block";
    document.getElementById("playerStat").style.display = "none";
    document.getElementById("playerCareer").style.display = "none";
    $(".playerDetail button:nth-child(1)").css("font-weight", 700);
    $(".playerDetail button:nth-child(2)").css("font-weight", 400);
    $(".playerDetail button:nth-child(3)").css("font-weight", 400);
}

function playerStat() {
    document.getElementById("playerPos").style.display = "none";
    document.getElementById("playerStat").style.display = "flex";
    document.getElementById("playerCareer").style.display = "none";
    $(".playerDetail button:nth-child(1)").css("font-weight", 400);
    $(".playerDetail button:nth-child(2)").css("font-weight", 700);
    $(".playerDetail button:nth-child(3)").css("font-weight", 400);
}

function playerCareer() {
    document.getElementById("playerPos").style.display = "none";
    document.getElementById("playerStat").style.display = "none";
    document.getElementById("playerCareer").style.display = "block";
    $(".playerDetail button:nth-child(1)").css("font-weight", 400);
    $(".playerDetail button:nth-child(2)").css("font-weight", 400);
    $(".playerDetail button:nth-child(3)").css("font-weight", 700);
}

// 나이 계산
birthday = $("#birth").text()
birthday = new Date(birthday + "T00:00:00.000Z")

now = new Date();
dd = String(now.getDate()).padStart(2, '0');
mm = String(now.getMonth() + 1).padStart(2, '0');
yyyy = now.getFullYear();
nowYMD = yyyy + '-' + mm + '-' + dd + 'T00:00:00.000Z';
today = new Date(nowYMD);

years = today.getFullYear() - birthday.getFullYear();
birthday.setFullYear(today.getFullYear());

if (today < birthday)
{
    years--;
}

$("#age").text(years + "세")

// 선수 기록
app = $("#app").text();
appPct = app / 183;
$("#appDiv > p:nth-child(1)").text(app);
goal = $("#goalDiv > canvas").text();
goalPct = goal / 37;
$("#goalDiv > p:nth-child(2)").text(goal);
assist = $("#assistDiv > canvas").text();
assistPct = assist / 13;
$("#assistDiv > p:nth-child(2)").text(assist);
shot = $("#shotDiv > canvas").text();
shotPct = shot / 175;
$("#shotDiv > p:nth-child(2)").text(shot);
sot = $("#sotDiv > canvas").text();
sotPct = sot / 100;
$("#sotDiv > p:nth-child(2)").text(sot);
foulc = $("#foulcDiv > canvas").text();
foulcPct = foulc / 146;
$("#foulcDiv > p:nth-child(2)").text(foulc);
fouls = $("#foulsDiv > canvas").text();
foulsPct = fouls / 144;
$("#foulsDiv > p:nth-child(2)").text(fouls);
yc = $("#ycDiv > canvas").text();
ycPct = yc / 19;
$("#ycDiv > p:nth-child(2)").text(yc);
rc = $("#rcDiv > canvas").text();
rcPct = rc / 2;
$("#rcDiv > p:nth-child(2)").text(rc);
conc = $("#concDiv > canvas").text();
concPct = conc / 255;
$("#concDiv > p:nth-child(2)").text(conc);
og = $("#ogDiv > canvas").text();
ogPct = og / 2;
$("#ogDiv > p:nth-child(2)").text(og);

options = {
    rotation: -90,
    circumference: 180,
    animation: false,
};

appChart = document.getElementById("app").getContext("2d");
app = new Chart(appChart, {
    type: "doughnut",
    data: {
        datasets: [{
            data: [appPct * 100, "100" - appPct * 100],
            backgroundColor: ["#000831", "#00083120"],
        }]
    },
        options: options,
});

$("#goalDiv > canvas").after("<p></p><p id='goal'></p>")
$("#goal").css("width", $(window).width() * 0.3 * goalPct)
$("#assistDiv > canvas").after("<p></p><p id='assist'></p>")
$("#assist").css("width", $(window).width() * 0.3 * assistPct)
$("#shotDiv > canvas").after("<p></p><p id='shot'></p>")
$("#shot").css("width", $(window).width() * 0.3 * shotPct)
$("#sotDiv > canvas").after("<p></p><p id='sot'></p>")
$("#sot").css("width", $(window).width() * 0.3 * sotPct)
$("#foulcDiv > canvas").after("<p></p><p id='foulc'></p>")
$("#foulc").css("width", $(window).width() * 0.3 * foulcPct)
$("#foulsDiv > canvas").after("<p></p><p id='fouls'></p>")
$("#fouls").css("width", $(window).width() * 0.3 * foulsPct)
$("#ycDiv > canvas").after("<p></p><p id='yc'></p>")
$("#yc").css("width", $(window).width() * 0.3 * ycPct)
$("#rcDiv > canvas").after("<p></p><p id='rc'></p>")
$("#rc").css("width", $(window).width() * 0.3 * rcPct)
$("#concDiv > canvas").after("<p></p><p id='conc'></p>")
$("#conc").css("width", $(window).width() * 0.3 * concPct)
$("#ogDiv > canvas").after("<p></p><p id='og'></p>")
$("#og").css("width", $(window).width() * 0.3 * ogPct)

// 선수 경력 임대 div 들여쓰기
$("div[loan='o']").css({"padding-left": "3vw", "opacity": "0.8"});
$("div[loan='o'] > p:nth-of-type(1)").css("width", "32vw");

// 선수 경력 구단 엠블럼 dummy
$("#playerCareer > div > div").find("img").attr("onerror", "this.src = './files/dummy.png'");