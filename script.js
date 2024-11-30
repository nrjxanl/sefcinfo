// 새로고침 시
$(document).ready(function() {

    // url 불러오기
    url = window.location.href

    // 새로고침 시 맨 위로 이동
    history.scrollRestoration = "manual"

    // 화면 너비 300px 이하일 때 경고
    if ($(window).width() < 300) {
        $("body").append("<div style='width: 80vw; height: 65px; padding: 0 10vw; background: #fafafa; position: fixed; bottom: 0; left: 0; font-size: 14px; font-weight: 300; z-index: 300; display: flex; align-items: center; justify-content: center;'>기기의 화면 크기가 작아 페이지가 정상적으로 보이지 않을 수 있습니다.</div>")
    }

    // 화면 너비 768px~1023px일 때 경고
    if ($(window).width() >= 768 && $(window).width() < 1023) {
        $("body").append("<div style='width: 80vw; height: 65px; padding: 0 10vw; background: #fafafa; position: fixed; bottom: 0; left: 0; font-size: 14px; font-weight: 300; z-index: 300; display: flex; align-items: center; justify-content: center;'>페이지가 아직 이 기기를 완벽히 지원하지 않아 페이지가 정상적으로 보이지 않을 수 있습니다.</div>")
    }

    // A팀 선수단 불러오기
    if ($(".playerButton").length) {
        playerA()
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

// 스켈레톤 애니메이션
$(document).ready(function () {
    setTimeout (function () {
        $("#skeleton").css("display", "none")
        $("#actualContents").css("display", "block")
    }, 300)
})

// 푸터
if (localStorage.getItem("footer") == null) {
    $("body").append("<footer><p>이 웹사이트는 팬이 운영하는 비공식 팬 페이지이며,<br>제공되는 데이터는 정확성을 보장하지 않습니다.</p><img src='./files/x.svg'></footer>")
}

$("footer > img").click(function () {
    localStorage.setItem("footer", "x")
    $("footer").css("display", "none")
})

// 메뉴
$("body").append("<div id='menu'><div><img src='./files/home.svg'>홈</div><div><img src='./files/players.svg'>선수단</div><div><img src='./files/fixtures.svg'>일정</div><div><img src='./files/stats.svg'>기록</div><div><img src='./files/standings.svg'>순위</div></div><div id='menuBg'></div>")

// 상단 클릭 시 홈으로 이동
$("header > div:nth-of-type(2)").click(function() {
    window.location = "https://sefc.info"
})

// 메뉴 열기
function menu() {
    $("#menuBg").css("display", "block").animate({opacity: "1"}, 200)
    $("#menu").animate({left: "0"}, 200)
}

// 메뉴 닫기
$("#menuBg").click(function() {
    $("#menuBg").animate({opacity: "0"}, 200, function() {
        $("#menuBg").css("display", "none")
    })
    $("#menu").animate({left: "-60vw"}, 200)
})

// 메뉴 버튼 클릭 시 페이지 이동
$("#menu > div:nth-of-type(1)").click(function() {
    window.location = "https://sefc.info"
})
$("#menu > div:nth-of-type(2)").click(function() {
    window.location = "./players"
})
$("#menu > div:nth-of-type(3)").click(function() {
    window.location = "./fixtures"
})
$("#menu > div:nth-of-type(4)").click(function() {
    window.location = "./stats"
})
$("#menu > div:nth-of-type(5)").click(function() {
    window.location = "./standings"
})

// 메뉴 내 현재 페이지 이름 강조
if ($("#prevMatch").length) {
    $("#menu > div:nth-of-type(1)").css({"background": "#000060", "color": "#fafafa"})
    $("#menu > div:nth-of-type(1) > img").css("filter", "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(1deg) brightness(103%) contrast(103%)")
} else if ($(".playerButton").length || $("#playerInfo").length) {
        $("#menu > div:nth-of-type(2)").css({"background": "#000060", "color": "#fafafa"})
        $("#menu > div:nth-of-type(2) > img").css("filter", "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(1deg) brightness(103%) contrast(103%)")
} else if ($(".fixturesButton").length || $("#matchScore").length) {
    $("#menu > div:nth-of-type(3)").css({"background": "#000060", "color": "#fafafa"})
    $("#menu > div:nth-of-type(3) > img").css("filter", "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(1deg) brightness(103%) contrast(103%)")
} else if ($(".statsButton").length) {
    $("#menu > div:nth-of-type(4)").css({"background": "#000060", "color": "#fafafa"})
    $("#menu > div:nth-of-type(4) > img").css("filter", "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(1deg) brightness(103%) contrast(103%)")
} else if ($(".standingsButton").length) {
    $("#menu > div:nth-of-type(5)").css({"background": "#000060", "color": "#fafafa"})
    $("#menu > div:nth-of-type(5) > img").css("filter", "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(1deg) brightness(103%) contrast(103%)")
}

// 선수단 창 전환
function playerA() {
    $("#playerA").css("display", "block")
    $("#playerU18").css("display", "none")
    $("#playerU15").css("display", "none")

    $(".playerButton > button").css({"color": "#000000", "border-bottom": "none"})
    $(".playerButton > button:nth-of-type(1)").css({"color": "#000060", "border-bottom": "3px solid #000060"})
}

function playerU18() {
    $("#playerA").css("display", "none")
    $("#playerU18").css("display", "block")
    $("#playerU15").css("display", "none")

    $(".playerButton > button").css({"color": "#000000", "border-bottom": "none"})
    $(".playerButton > button:nth-of-type(2)").css({"color": "#000060", "border-bottom": "3px solid #000060"})
}

function playerU15() {
    $("#playerA").css("display", "none")
    $("#playerU18").css("display", "none")
    $("#playerU15").css("display", "block")

    $(".playerButton > button").css({"color": "#000000", "border-bottom": "none"})
    $(".playerButton > button:nth-of-type(3)").css({"color": "#000060", "border-bottom": "3px solid #000060"})
}

// 일정 창 전환
function fixturesA() {

    if ($("#calendar").css("display") == "none") {
        $("#fixturesA").css("display", "block")
        $("#fixturesU18").css("display", "none")
        $("#fixturesU15").css("display", "none")
    }

    $(".fixturesButton > button").css({"color": "#000000", "border-bottom": "none"})
    $(".fixturesButton > button:nth-of-type(1)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    status_ = "A"
    year = new Date().getFullYear()
    month = ("0" + (new Date().getMonth() + 1)).slice(-2)
    fixtures()
}

function fixturesU18() {

    if ($("#calendar").css("display") == "none") {
        $("#fixturesA").css("display", "none")
        $("#fixturesU18").css("display", "block")
        $("#fixturesU15").css("display", "none")
    }

    $(".fixturesButton > button").css({"color": "#000000", "border-bottom": "none"})
    $(".fixturesButton > button:nth-of-type(2)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    status_ = "U18"
    year = new Date().getFullYear()
    month = ("0" + (new Date().getMonth() + 1)).slice(-2)
    fixtures()
}

function fixturesU15() {

    if ($("#calendar").css("display") == "none") {
        $("#fixturesA").css("display", "none")
        $("#fixturesU18").css("display", "none")
        $("#fixturesU15").css("display", "block")
    }

    $(".fixturesButton > button").css({"color": "#000000", "border-bottom": "none"})
    $(".fixturesButton > button:nth-of-type(3)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    status_ = "U15"
    year = new Date().getFullYear()
    month = ("0" + (new Date().getMonth() + 1)).slice(-2)
    fixtures()
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
    localStorage.setItem("match", "matchInfo")
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
    localStorage.setItem("match", "matchLineup")
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
    localStorage.setItem("match", "matchStat")
}

if ($("#matchScore").length && !$("#highlight").length) {
    $("#matchLineup").css("display", "block")
    $(".matchDetail button:nth-child(1)").css("display", "none")
    $(".matchDetail button:nth-child(2)").css("font-weight", 900)
}

// 순위 창 전환
function standingsA() {
    $("#standingsA").css("display", "block")
    $("#standingsU18").css("display", "none")
    $("#standingsU15").css("display", "none")

    $(".standingsButton > button").css({"color": "#000000", "border-bottom": "none"})
    $(".standingsButton > button:nth-of-type(1)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    status_ = "A"
    year = new Date().getFullYear()
    $(".standingsSeason > p:nth-of-type(1)").text(year)
    standings()
}

function standingsU18() {
    $("#standingsA").css("display", "none")
    $("#standingsU18").css("display", "block")
    $("#standingsU15").css("display", "none")

    $(".standingsButton > button").css({"color": "#000000", "border-bottom": "none"})
    $(".standingsButton > button:nth-of-type(2)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    status_ = "U18"
    year = new Date().getFullYear()
    $(".standingsSeason > p:nth-of-type(1)").text(year)
    standings()
}

function standingsU15() {
    $("#standingsA").css("display", "none")
    $("#standingsU18").css("display", "none")
    $("#standingsU15").css("display", "block")

    $(".standingsButton > button").css({"color": "#000000", "border-bottom": "none"})
    $(".standingsButton > button:nth-of-type(3)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    status_ = "U15"
    year = new Date().getFullYear()
    $(".standingsSeason > p:nth-of-type(1)").text(year)
    standings()
}

// 기록 창 전환
function statsA() {
    $("#statsA").css("display", "block")
    $("#statsU18").css("display", "none")
    $("#statsU15").css("display", "none")

    $(".statsButton > button").css({"color": "#000000", "border-bottom": "none"})
    $(".statsButton > button:nth-of-type(1)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    // 장석훈 등번호
    if (year == 2024) {
        playerNumber[2024][20240155][1] = 70
    }

    status_ = "A"
    year = new Date().getFullYear()
    $(".statsSeason > p:nth-of-type(1)").text(year)
    stats()
}

function statsU18() {
    $("#statsA").css("display", "none")
    $("#statsU18").css("display", "block")
    $("#statsU15").css("display", "none")

    $(".statsButton > button").css({"color": "#000000", "border-bottom": "none"})
    $(".statsButton > button:nth-of-type(2)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    // 장석훈 등번호
    if (year == 2024) {
        playerNumber[2024][20240155][1] = 10
    }

    status_ = "U18"
    year = new Date().getFullYear()
    $(".statsSeason > p:nth-of-type(1)").text(year)
    stats()
}

function statsU15() {
    $("#statsA").css("display", "none")
    $("#statsU18").css("display", "none")
    $("#statsU15").css("display", "block")

    $(".statsButton > button").css({"color": "#000000", "border-bottom": "none"})
    $(".statsButton > button:nth-of-type(3)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    status_ = "U15"
    year = new Date().getFullYear()
    $(".statsSeason > p:nth-of-type(1)").text(year)
    stats()
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