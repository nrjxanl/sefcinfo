// 새로고침 시
$(document).ready(function() {

    // 다음 경기로 이동
    if ($("#nextMatchA").length) {
        document.getElementById("nextMatchA").scrollIntoView({behavior: "smooth", block: "center"})
    } else if (!$("#nextMatchA").length && $("#fixturesButtonOffset").length) {
        window.scroll({top: document.body.scrollHeight, left: 0, behavior: "smooth"})
    }

    // 화면 너비 300px 이하일 때 경고
    if ($(window).width() < 300) {
        $("body").append("<div style='width: 80vw; height: 65px; padding: 0 10vw; background: #fafafa; position: fixed; bottom: 0; left: 0; font-size: 14px; font-weight: 500; z-index: 300; display: flex; align-items: center; justify-content: center;'>기기의 화면 크기가 작아 페이지가 정상적으로 보이지 않을 수 있습니다.</div>")
    }

    // 화면 너비 768px~1023px일 때 경고
    if ($(window).width() >= 768 && $(window).width() < 1023) {
        $("body").append("<div style='width: 80vw; height: 65px; padding: 0 10vw; background: #fafafa; position: fixed; bottom: 0; left: 0; font-size: 14px; font-weight: 500; z-index: 300; display: flex; align-items: center; justify-content: center;'>페이지가 아직 이 기기를 완벽히 지원하지 않아 페이지가 정상적으로 보이지 않을 수 있습니다.</div>")
    }

})

// 화면 크기 변경 시
before = $(this).width()
$(window).resize(function() {
    after = $(this).width()
    if (after != before) {
        location.reload()
    }
})

// 헤더
$("header").html("<a href='https://sefc.info'><img src='https://sefc.info/files/seouleland_s.png'></a>")

if ($("div[id*=ButtonOffset]").length) {
    if ($(".recordsDetail").length) {
        $(".recordsSeason").css({"background": "#fafafa"})
        $(".recordsDetail").css({"background": "linear-gradient(0deg, transparent 0%, #fafafa 20%)", "padding-bottom": "20px"})
    } else {
        $("div[class*=Season]").css({"background": "linear-gradient(0deg, transparent 0%, #fafafa 20%)", "padding-bottom": "20px"})
    }
} else {
    $("header").css({"background": "linear-gradient(0deg, transparent 0%, #fafafa 20%)", "padding-bottom": "20px"})
}

// 푸터
$("footer").html("<div><img src='https://sefc.info/files/home.svg'><p>홈</p></div><div><img src='https://sefc.info/files/players.svg'><p>선수단</p></div><div><img src='https://sefc.info/files/fixtures.svg'><p>일정</p></div><div><img src='https://sefc.info/files/standings.svg'><p>순위</p></div>")

$("footer > div:nth-of-type(1)").attr("onclick", "location.href='https://sefc.info'")
$("footer > div:nth-of-type(2)").attr("onclick", "location.href='https://sefc.info/players'")
$("footer > div:nth-of-type(3)").attr("onclick", "location.href='https://sefc.info/fixtures'")
$("footer > div:nth-of-type(4)").attr("onclick", "location.href='https://sefc.info/standings'")

if ($("#nextMatch").length) {
    $("footer > div:nth-of-type(1) > img").css("filter", "invert(19%) sepia(72%) saturate(4441%) hue-rotate(228deg) brightness(103%) contrast(103%)")
    $("footer > div:nth-of-type(1) > p").css("color", "#174fff")
} else if ($(".playerButton").length || $("#playerMain").length) {
    $("footer > div:nth-of-type(2) > img").css("filter", "invert(19%) sepia(72%) saturate(4441%) hue-rotate(228deg) brightness(103%) contrast(103%)")
    $("footer > div:nth-of-type(2) > p").css("color", "#174fff")
} else if ($(".fixturesButton").length || $("#matchScore").length) {
    $("footer > div:nth-of-type(3) > img").css("filter", "invert(19%) sepia(72%) saturate(4441%) hue-rotate(228deg) brightness(103%) contrast(103%)")
    $("footer > div:nth-of-type(3) > p").css("color", "#174fff")
} else if ($(".standingsButton").length) {
    $("footer > div:nth-of-type(4) > img").css("filter", "invert(19%) sepia(72%) saturate(4441%) hue-rotate(228deg) brightness(103%) contrast(103%)")
    $("footer > div:nth-of-type(4) > p").css("color", "#174fff")
}

// 문자별 글꼴 적용
characterList = []

i = 0x00c0 // Latin-1 Supplement
while(i <= 0x00ff) {
    characterList.push(i)
    i++
}
i = 0x0100 // Latin Extended-A, B
while(i <= 0x024f) {
    characterList.push(i)
    i++
}
i = 0x0370 // Greek, Coptic, Cyrillic
while(i <= 0x052f) {
    characterList.push(i)
    i++
}
i = 0x1ea0 // Vietnamese
while(i <= 0x1ef9) {
    characterList.push(i)
    i++
}
i = 0x2e80 // CJK Hanja 1
while(i <= 0x2ef3) {
    characterList.push(i)
    i++
}
i = 0x2f00 // CJK Hanja 2
while(i <= 0x2fd5) {
    characterList.push(i)
    i++
}
i = 0x3500 // CJK Hanja 3
while(i <= 0x4dbf) {
    characterList.push(i)
    i++
}
i = 0x4e00 // CJK Hanja 4
while(i <= 0x9fff) {
    characterList.push(i)
    i++
}
i = 0xf900 // CJK Hanja 5
while(i <= 0xfaff) {
    characterList.push(i)
    i++
}
i = 0x20000 // CJK Hanja 6
while(i <= 0x2fa1f) {
    characterList.push(i)
    i++
}

_playerName = $("#playerName").find("span:nth-of-type(2)")
playerName = []

i = 0
while ( i < _playerName.text().length) {
    playerName.push(_playerName.text().charCodeAt(i))
    i++
}

intersection = playerName.filter(value => characterList.includes(value))
if (intersection.length != 0) {
    _playerName.css({"font-family": "'Noto Sans', 'Noto Sans KR'", "font-weight": "500"})
}

// 선수단 창 전환
function playerA() {
    document.getElementById("playerA").style.display = "block"
    document.getElementById("playerU18").style.display = "none"
    document.getElementById("playerU15").style.display = "none"
    document.getElementById("playerAllTime").style.display = "none"
}

function playerU18() {
    document.getElementById("playerA").style.display = "none"
    document.getElementById("playerU18").style.display = "block"
    document.getElementById("playerU15").style.display = "none"
    document.getElementById("playerAllTime").style.display = "none"
}

function playerU15() {
    document.getElementById("playerA").style.display = "none"
    document.getElementById("playerU18").style.display = "none"
    document.getElementById("playerU15").style.display = "block"
    document.getElementById("playerAllTime").style.display = "none"
}

// 일정 창 전환
function fixturesA() {
    $("#fixturesA").css("display", "block")
    $("#fixturesU18").css("display", "none")
    $("#fixturesU15").css("display", "none")

    if ($("#nextMatchA").length) {
        document.getElementById("nextMatchA").scrollIntoView({block: "center"})
    } else {
        window.scroll({top: document.body.scrollHeight, left: 0})
    }
}

function fixturesU18() {
    $("#fixturesA").css("display", "none")
    $("#fixturesU18").css("display", "block")
    $("#fixturesU15").css("display", "none")

    if ($("#nextMatchU18").length) {
        document.getElementById("nextMatchU18").scrollIntoView({block: "center"})
    } else {
        window.scroll({top: document.body.scrollHeight, left: 0})
    }
}

function fixturesU15() {
    $("#fixturesA").css("display", "none")
    $("#fixturesU18").css("display", "none")
    $("#fixturesU15").css("display", "block")

    if ($("#nextMatchU15").length) {
        document.getElementById("nextMatchU15").scrollIntoView({block: "center"})
    } else {
        window.scroll({top: document.body.scrollHeight, left: 0})
    }
}

function fixturesSeason() {
    season = $("#fixturesSeason_").css("display")

    if(season == "none") {
        document.getElementById("fixturesSeason_").style.display = "flex"
    } else {
        document.getElementById("fixturesSeason_").style.display = "none"
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
function matchInfo() {
    $("#matchInfo").css("display", "block")
    $("#matchLineup").css("display", "none")
    $("#matchStat").css("display", "none")
    $("#matchH2H").css("display", "none")
    $(".matchDetail button:nth-child(1)").css("font-weight", 900)
    $(".matchDetail button:nth-child(2)").css("font-weight", 500)
    $(".matchDetail button:nth-child(3)").css("font-weight", 500)
    $(".matchDetail button:nth-child(4)").css("font-weight", 500)
}

function matchLineup() {
    $("#matchInfo").css("display", "none")
    $("#matchLineup").css("display", "block")
    $("#matchStat").css("display", "none")
    $("#matchH2H").css("display", "none")
    $(".matchDetail button:nth-child(1)").css("font-weight", 500)
    $(".matchDetail button:nth-child(2)").css("font-weight", 900)
    $(".matchDetail button:nth-child(3)").css("font-weight", 500)
    $(".matchDetail button:nth-child(4)").css("font-weight", 500)
}

function matchStat() {
    $("#matchInfo").css("display", "none")
    $("#matchLineup").css("display", "none")
    $("#matchStat").css("display", "block")
    $("#matchH2H").css("display", "none")
    $(".matchDetail button:nth-child(1)").css("font-weight", 500)
    $(".matchDetail button:nth-child(2)").css("font-weight", 500)
    $(".matchDetail button:nth-child(3)").css("font-weight", 900)
    $(".matchDetail button:nth-child(4)").css("font-weight", 500)
}

if ($("#matchScore").length && !$("#highlight").length) {
    $("#matchLineup").css("display", "block")
    $(".matchDetail button:nth-child(1)").css("display", "none")
    $(".matchDetail button:nth-child(2)").css("font-weight", 900)
}

// 선수 기록 창 전환
function recordsA() {
    document.getElementById("recordsA").style.display = "block"
    document.getElementById("recordsU18").style.display = "none"
    document.getElementById("recordsU15").style.display = "none"
}

function recordsU18() {
    document.getElementById("recordsA").style.display = "none"
    document.getElementById("recordsU18").style.display = "block"
    document.getElementById("recordsU15").style.display = "none"
}

function recordsU15() {
    document.getElementById("recordsA").style.display = "none"
    document.getElementById("recordsU18").style.display = "none"
    document.getElementById("recordsU15").style.display = "block"
}

function recordsSeason() {
    season = $("#recordsSeason_").css("display")

    if(season == "none") {
        document.getElementById("recordsSeason_").style.display = "flex"
    } else {
        document.getElementById("recordsSeason_").style.display = "none"
    }

}

function recordsApp() {
    $(".appRecord").css("display", "flex")
    $(".goalRecord").css("display", "none")
    $(".assistRecord").css("display", "none")
    $(".recordsDetail button:nth-child(1)").css("font-weight", 900)
    $(".recordsDetail button:nth-child(2)").css("font-weight", 500)
    $(".recordsDetail button:nth-child(3)").css("font-weight", 500)
}

function recordsGoal() {
    $(".appRecord").css("display", "none")
    $(".goalRecord").css("display", "flex")
    $(".assistRecord").css("display", "none")
    $(".recordsDetail button:nth-child(1)").css("font-weight", 500)
    $(".recordsDetail button:nth-child(2)").css("font-weight", 900)
    $(".recordsDetail button:nth-child(3)").css("font-weight", 500)
}

function recordsAssist() {
    $(".appRecord").css("display", "none")
    $(".goalRecord").css("display", "none")
    $(".assistRecord").css("display", "flex")
    $(".recordsDetail button:nth-child(1)").css("font-weight", 500)
    $(".recordsDetail button:nth-child(2)").css("font-weight", 500)
    $(".recordsDetail button:nth-child(3)").css("font-weight", 900)
}

// 순위 창 전환
function standingsA() {
    document.getElementById("standingsA").style.display = "block"
    document.getElementById("standingsU18").style.display = "none"
    document.getElementById("standingsU15").style.display = "none"
}

function standingsU18() {
    document.getElementById("standingsA").style.display = "none"
    document.getElementById("standingsU18").style.display = "block"
    document.getElementById("standingsU15").style.display = "none"
}

function standingsU15() {
    document.getElementById("standingsA").style.display = "none"
    document.getElementById("standingsU18").style.display = "none"
    document.getElementById("standingsU15").style.display = "block"
}

function standingsSeason() {
    season = $("#standingsSeason_").css("display")

    if(season == "none") {
        document.getElementById("standingsSeason_").style.display = "flex"
    } else {
        document.getElementById("standingsSeason_").style.display = "none"
    }
    
}

// 순위 자세히/간략히 보기
function viewAll() {
    if($("div[id*='standings']").find("th:nth-of-type(6)").css("display") == "none") {
        $("div[id*='standings'] > div > table > thead > tr > th:nth-of-type(n+3)").css({"display": "table-cell", "width": "calc(50vw/7)"})
        $("div[id*='standings'] > div > table > tbody > tr > td:nth-of-type(n+4)").css({"display": "table-cell", "width": "calc(50vw/7)", "font-size": "12px"})
        $(".standings button").text("간략히 보기")
    } else {
        $("div[id*='standings'] > div > table > thead > tr > th:nth-of-type(n+3)").css({"width": "12.5vw"})
        $("div[id*='standings'] > div > table > thead > tr > th:nth-of-type(n+4):nth-of-type(-n+6)").css({"display": "none"})
        $("div[id*='standings'] > div > table > tbody > tr > td:nth-of-type(n+4)").css({"width": "12.5vw", "font-size": "14px"})
        $("div[id*='standings'] > div > table > tbody > tr > td:nth-of-type(n+5):nth-of-type(-n+7)").css({"display": "none"})
        $(".standings button").text("자세히 보기")
    }
}

function standingsU18F() {
    document.getElementById("standingsU18F").style.display = "block"
    document.getElementById("standingsU18S").style.display = "none"
    $(".standingsDetail button:nth-child(1)").css("font-weight", 900)
    $(".standingsDetail button:nth-child(2)").css("font-weight", 500)
}

function standingsU18S() {
    document.getElementById("standingsU18F").style.display = "none"
    document.getElementById("standingsU18S").style.display = "block"
    $(".standingsDetail button:nth-child(1)").css("font-weight", 500)
    $(".standingsDetail button:nth-child(2)").css("font-weight", 900)
}

// 순위표 SEFC tr 속성 변경
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc) > td").css({"background": "#000831", "color": "#fafafa"})
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc) > td:nth-child(1)").css("border-radius", "50px 0 0 50px")
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc) > td:nth-last-child(3)").css("border-radius", "0 50px 50px 0")
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc8) > td").css({"background": "#000831", "color": "#fafafa"})
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc8) > td:nth-child(1)").css("border-radius", "50px 0 0 50px")
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc8) > td:nth-last-child(3)").css("border-radius", "0 50px 50px 0")
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc5) > td").css({"background": "#000831", "color": "#fafafa"})
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc5) > td:nth-child(1)").css("border-radius", "50px 0 0 50px")
$("div[id*='standings'] > div > table > tbody > tr:has(.sefc5) > td:nth-last-child(3)").css("border-radius", "0 50px 50px 0")

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

if ($(window).width() < 768) {
    $("#playerPos > #cf").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-70vw", "margin-left": "20vw"})
    $("#playerPos > #lw").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-63.8vw", "margin-left": "5vw"})
    $("#playerPos > #rw").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-63.8vw", "margin-left": "35vw"})
    $("#playerPos > #am").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-57.6vw", "margin-left": "20vw"})
    $("#playerPos > #lm").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-46.4vw", "margin-left": "5vw"})
    $("#playerPos > #cm").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-46.4vw", "margin-left": "20vw"})
    $("#playerPos > #rm").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-46.4vw", "margin-left": "35vw"})
    $("#playerPos > #dm").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-35.2vw", "margin-left": "20vw"})
    $("#playerPos > #lb").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-29.4vw", "margin-left": "5vw"})
    $("#playerPos > #rb").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-29.4vw", "margin-left": "35vw"})
    $("#playerPos > #cb").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-23.6vw", "margin-left": "20vw"})
    $("#playerPos > #gk").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-12vw", "margin-left": "20vw"})
} else {
    $("#playerPos > #cf").css({"width": "40px", "padding": "4px 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-280px", "margin-left": "80px"})
    $("#playerPos > #lw").css({"width": "40px", "padding": "4px 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-255.2px", "margin-left": "20px"})
    $("#playerPos > #rw").css({"width": "40px", "padding": "4px 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-255.2px", "margin-left": "140px"})
    $("#playerPos > #am").css({"width": "40px", "padding": "4px 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-230.4px", "margin-left": "80px"})
    $("#playerPos > #lm").css({"width": "40px", "padding": "4px 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-185.6px", "margin-left": "20px"})
    $("#playerPos > #cm").css({"width": "40px", "padding": "4px 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-185.6px", "margin-left": "80px"})
    $("#playerPos > #rm").css({"width": "40px", "padding": "4px 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-185.6px", "margin-left": "140px"})
    $("#playerPos > #dm").css({"width": "40px", "padding": "4px 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-140.8px", "margin-left": "80px"})
    $("#playerPos > #lb").css({"width": "40px", "padding": "4px 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-117.6px", "margin-left": "20px"})
    $("#playerPos > #rb").css({"width": "40px", "padding": "4px 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-117.6px", "margin-left": "140px"})
    $("#playerPos > #cb").css({"width": "40px", "padding": "4px 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-94.4px", "margin-left": "80px"})
    $("#playerPos > #gk").css({"width": "40px", "padding": "4px 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-48px", "margin-left": "80px"})
}

$("p[pos=o]").css({"color": "#fafafa", "background": "#000831", "opacity": "1"})

// 선수 정보 창 전환
function playerInfo() {
    document.getElementById("playerPos").style.display = "block"
    document.getElementById("playerStat").style.display = "none"
    document.getElementById("playerCareer").style.display = "none"
    $(".playerDetail button:nth-child(1)").css("font-weight", 900)
    $(".playerDetail button:nth-child(2)").css("font-weight", 500)
    $(".playerDetail button:nth-child(3)").css("font-weight", 500)
}

function playerStat() {
    document.getElementById("playerPos").style.display = "none"
    document.getElementById("playerStat").style.display = "flex"
    document.getElementById("playerCareer").style.display = "none"
    $(".playerDetail button:nth-child(1)").css("font-weight", 500)
    $(".playerDetail button:nth-child(2)").css("font-weight", 900)
    $(".playerDetail button:nth-child(3)").css("font-weight", 500)
}

function playerCareer() {
    document.getElementById("playerPos").style.display = "none"
    document.getElementById("playerStat").style.display = "none"
    document.getElementById("playerCareer").style.display = "block"
    $(".playerDetail button:nth-child(1)").css("font-weight", 500)
    $(".playerDetail button:nth-child(2)").css("font-weight", 500)
    $(".playerDetail button:nth-child(3)").css("font-weight", 900)
}

// 나이 계산
birthday = $("#birth").text()
birthday = new Date(birthday + "T00:00:00.000Z")

now = new Date()
dd = String(now.getDate()).padStart(2, "0")
mm = String(now.getMonth() + 1).padStart(2, "0")
yyyy = now.getFullYear()
nowYMD = yyyy + "-" + mm + "-" + dd + "T00:00:00.000Z"
today = new Date(nowYMD)

years = today.getFullYear() - birthday.getFullYear()
birthday.setFullYear(today.getFullYear())

if (today < birthday) {years--}

$("#age").text(years + "세")

// 선수 경력 임대 div 들여쓰기
if ($(window).width() < 768) {
    $("div[loan='o']").css({"padding-left": "3vw", "opacity": "0.8"})
    $("div[loan='o'] > p:nth-of-type(1)").css("width", "32vw")
} else {
    $("div[loan='o']").css({"padding-left": "12px", "opacity": "0.8"})
    $("div[loan='o'] > p:nth-of-type(1)").css("width", "128px")
}