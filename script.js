// 새로고침 시
$(document).ready(function() {

    // url 불러오기
    url = window.location.href

    // 화면 너비 300px 이하일 때 경고
    if ($(window).width() < 300) {
        $("body").append("<div style='width: 80vw; height: 65px; padding: 0 10vw; background: #fafafa; position: fixed; bottom: 0; left: 0; font-size: 14px; font-weight: 300; z-index: 300; display: flex; align-items: center; justify-content: center;'>기기의 화면 크기가 작아 페이지가 정상적으로 보이지 않을 수 있습니다.</div>")
    }

    // 새로고침 시 맨 위로 이동
    history.scrollRestoration = "manual"

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
    if ($(window).width() < 768) {
        setTimeout (function () {
            $("#skeletonMobile").css("display", "none")
            $("#actualContents").css("display", "block")
        }, 300)
    } else {
        setTimeout (function () {
            $("#skeletonPC").css("display", "none")
            if ($("#standingsA").length || $("#chantsName").length) {
                $("#actualContents").css("flex-direction", "column")
            }
            $("#actualContents").css("display", "flex")
        }, 300)
    }
})

// 푸터
if (localStorage.getItem("footer") == null) {
    $("body").append("<footer><p>이 웹사이트는 팬이 운영하는 비공식 팬 페이지이며,<br>제공되는 데이터는 정확성을 보장하지 않습니다.</p><img src='https://sefc.info/files/x.svg'></footer>")
}

$("footer > img").click(function () {
    localStorage.setItem("footer", "x")
    $("footer").css("display", "none")
})

// 메뉴
$("body").append("<div id='menu'><div><span></span><img src='https://sefc.info/files/home.svg'>홈</div><div><span></span><img src='https://sefc.info/files/fixtures.svg'>일정</div><div><span></span><img src='https://sefc.info/files/players.svg'>선수단</div><div><span></span><img src='https://sefc.info/files/stats.svg'>기록</div><div><span></span><img src='https://sefc.info/files/standings.svg'>순위</div><div><span></span><img src='https://sefc.info/files/chants.svg'>응원가</div><div><span></span><img src='https://sefc.info/files/wallpaper.svg'>배경화면</div><a href='https://naver.me/GlJ18AQh' target='_blank'>오류 제보 및 건의</a><img class='bannerMenu' src='https://sefc.info/files/banner_1.jpg'></div><div id='menuBg'></div>")

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
    window.location = "https://sefc.info/fixtures"
})
$("#menu > div:nth-of-type(3)").click(function() {
    window.location = "https://sefc.info/players"
})
$("#menu > div:nth-of-type(4)").click(function() {
    window.location = "https://sefc.info/stats"
})
$("#menu > div:nth-of-type(5)").click(function() {
    window.location = "https://sefc.info/standings"
})
$("#menu > div:nth-of-type(6)").click(function() {
    window.location = "https://sefc.info/chants"
})
$("#menu > div:nth-of-type(7)").click(function() {
    window.location = "https://sefc.info/wallpaper"
})

// 배너 클릭 시 페이지 이동
$(".bannerMenu:nth-of-type(1)").click(function() {
    window.open("https://linktr.ee/sefcnuevo")
})

// 메뉴 내 현재 페이지 이름 강조
if ($("#prevMatch").length) {
    $("#menu > div:nth-of-type(1)").css("color", "#000060")
    $("#menu > div:nth-of-type(1) > span").css("background", "#000060")
    $("#menu > div:nth-of-type(1) > img").css("filter", "brightness(0) saturate(100%) invert(8%) sepia(76%) saturate(5175%) hue-rotate(242deg) brightness(71%) contrast(125%)")
} else if ($(".fixturesButton").length || $("#matchScore").length) {
    $("#menu > div:nth-of-type(2)").css("color", "#000060")
    $("#menu > div:nth-of-type(2) > span").css("background", "#000060")
    $("#menu > div:nth-of-type(2) > img").css("filter", "brightness(0) saturate(100%) invert(8%) sepia(76%) saturate(5175%) hue-rotate(242deg) brightness(71%) contrast(125%)")
} else if ($(".playerButton").length || $("#playerInfo").length) {
    $("#menu > div:nth-of-type(3)").css("color", "#000060")
    $("#menu > div:nth-of-type(3) > span").css("background", "#000060")
    $("#menu > div:nth-of-type(3) > img").css("filter", "brightness(0) saturate(100%) invert(8%) sepia(76%) saturate(5175%) hue-rotate(242deg) brightness(71%) contrast(125%)")
} else if ($(".statsButton").length) {
    $("#menu > div:nth-of-type(4)").css("color", "#000060")
    $("#menu > div:nth-of-type(4) > span").css("background", "#000060")
    $("#menu > div:nth-of-type(4) > img").css("filter", "brightness(0) saturate(100%) invert(8%) sepia(76%) saturate(5175%) hue-rotate(242deg) brightness(71%) contrast(125%)")
} else if ($(".standingsButton").length) {
    $("#menu > div:nth-of-type(5)").css("color", "#000060")
    $("#menu > div:nth-of-type(5) > span").css("background", "#000060")
    $("#menu > div:nth-of-type(5) > img").css("filter", "brightness(0) saturate(100%) invert(8%) sepia(76%) saturate(5175%) hue-rotate(242deg) brightness(71%) contrast(125%)")
} else if ($("#team").length || $("#chantsName").length) {
    $("#menu > div:nth-of-type(6)").css("color", "#000060")
    $("#menu > div:nth-of-type(6) > span").css("background", "#000060")
    $("#menu > div:nth-of-type(6) > img").css("filter", "brightness(0) saturate(100%) invert(8%) sepia(76%) saturate(5175%) hue-rotate(242deg) brightness(71%) contrast(125%)")
} else if ($("#wallpaperCanvas").length) {
    $("#menu > div:nth-of-type(7)").css("color", "#000060")
    $("#menu > div:nth-of-type(7) > span").css("background", "#000060")
    $("#menu > div:nth-of-type(7) > img").css("filter", "brightness(0) saturate(100%) invert(8%) sepia(76%) saturate(5175%) hue-rotate(242deg) brightness(71%) contrast(125%)")
}

// 메뉴 hover 시 강조
$("#menu > div").hover(
    function() {
        $(this).find("span").css("background", "#000080")
    }, 
    function() {
        $(this).find("span").css("background", "")
    }
);

// 선수단 창 전환
function playerA() {
    $("#playerA").css("display", "block")
    $("#playerU18").css("display", "none")
    $("#playerU15").css("display", "none")

    $(".playerButton > button").css({"color": "#050505", "border-bottom": "none"})
    $(".playerButton > button:nth-of-type(1)").css({"color": "#000060", "border-bottom": "3px solid #000060"})
}

function playerU18() {
    $("#playerA").css("display", "none")
    $("#playerU18").css("display", "block")
    $("#playerU15").css("display", "none")

    $(".playerButton > button").css({"color": "#050505", "border-bottom": "none"})
    $(".playerButton > button:nth-of-type(2)").css({"color": "#000060", "border-bottom": "3px solid #000060"})
}

function playerU15() {
    $("#playerA").css("display", "none")
    $("#playerU18").css("display", "none")
    $("#playerU15").css("display", "block")

    $(".playerButton > button").css({"color": "#050505", "border-bottom": "none"})
    $(".playerButton > button:nth-of-type(3)").css({"color": "#000060", "border-bottom": "3px solid #000060"})
}

// 일정 창 전환
function fixturesA() {
    status_ = "A"
    year = new Date().getFullYear()
    month = ("0" + (new Date().getMonth() + 1)).slice(-2)
    window.history.replaceState({}, "", window.location.href.split("?")[0] + "?" + year + "" + month + "?" + status_)
    fixtures()
}

function fixturesU18() {
    status_ = "U18"
    year = new Date().getFullYear()
    month = ("0" + (new Date().getMonth() + 1)).slice(-2)
    window.history.replaceState({}, "", window.location.href.split("?")[0] + "?" + year + "" + month + "?" + status_)
    fixtures()
}

function fixturesU15() {
    $(".fixturesButton > button").css({"color": "#050505", "border-bottom": "none"})
    $(".fixturesButton > button:nth-of-type(3)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    status_ = "U15"
    year = new Date().getFullYear()
    month = ("0" + (new Date().getMonth() + 1)).slice(-2)
    window.history.replaceState({}, "", window.location.href.split("?")[0] + "?" + year + "" + month + "?" + status_)
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
    if ($(window).width() < 768) {
        $("#matchInfo").css("display", "block")
        $("#matchLineup").css("display", "none")
        $("#matchStat").css("display", "none")
        $("#matchH2H").css("display", "none")
    } else {
        $("#matchInfo").css("display", "flex")
        $("#matchLineup").css("display", "flex")
        $("#matchStat").css("display", "flex")
        $("#matchH2H").css("display", "flex")

        matchH2H()
    }
    $(".matchDetail button:nth-child(1)").css("font-weight", 900)
    $(".matchDetail button:nth-child(2)").css("font-weight", 300)
    $(".matchDetail button:nth-child(3)").css("font-weight", 300)
    $(".matchDetail button:nth-child(4)").css("font-weight", 300)
    localStorage.setItem(id, "matchInfo")
}

function matchLineup() {
    if ($(window).width() < 768) {
        $("#matchInfo").css("display", "none")
        $("#matchLineup").css("display", "block")
        $("#matchStat").css("display", "none")
        $("#matchH2H").css("display", "none")
    } else {
        $("#matchInfo").css("display", "flex")
        $("#matchLineup").css("display", "flex")
        $("#matchStat").css("display", "flex")
        $("#matchH2H").css("display", "flex")

        matchH2H()
    }
    $(".matchDetail button:nth-child(1)").css("font-weight", 300)
    $(".matchDetail button:nth-child(2)").css("font-weight", 900)
    $(".matchDetail button:nth-child(3)").css("font-weight", 300)
    $(".matchDetail button:nth-child(4)").css("font-weight", 300)
    localStorage.setItem(id, "matchLineup")
}

function matchStat() {
    if ($(window).width() < 768) {
        $("#matchInfo").css("display", "none")
        $("#matchLineup").css("display", "none")
        $("#matchStat").css("display", "block")
        $("#matchH2H").css("display", "none")
    } else {
        $("#matchInfo").css("display", "flex")
        $("#matchLineup").css("display", "flex")
        $("#matchStat").css("display", "flex")
        $("#matchH2H").css("display", "flex")

        matchH2H()
    }
    $(".matchDetail button:nth-child(1)").css("font-weight", 300)
    $(".matchDetail button:nth-child(2)").css("font-weight", 300)
    $(".matchDetail button:nth-child(3)").css("font-weight", 900)
    $(".matchDetail button:nth-child(4)").css("font-weight", 300)
    localStorage.setItem(id, "matchStat")
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

    $(".standingsButton > button").css({"color": "#050505", "border-bottom": "none"})
    $(".standingsButton > button:nth-of-type(1)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    status_ = "A"
    year = new Date().getFullYear()
    window.history.replaceState({}, "", window.location.href.split("?")[0] + "?" + year + "?" + status_)
    standings()
}

function standingsU18() {
    $("#standingsA").css("display", "none")
    $("#standingsU18").css("display", "block")
    $("#standingsU15").css("display", "none")

    $(".standingsButton > button").css({"color": "#050505", "border-bottom": "none"})
    $(".standingsButton > button:nth-of-type(2)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    // 장석훈 등번호
    if (year == 2024) {
        playerNumber[2024][20240155][1] = 10
    }

    status_ = "U18"
    year = new Date().getFullYear()
    window.history.replaceState({}, "", window.location.href.split("?")[0] + "?" + year + "?" + status_)
    standings()
}

function standingsU15() {
    $("#standingsA").css("display", "none")
    $("#standingsU18").css("display", "none")
    $("#standingsU15").css("display", "block")

    $(".standingsButton > button").css({"color": "#050505", "border-bottom": "none"})
    $(".standingsButton > button:nth-of-type(3)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    status_ = "U15"
    year = new Date().getFullYear()
    window.history.replaceState({}, "", window.location.href.split("?")[0] + "?" + year + "?" + status_)
    standings()
}

// 기록 창 전환
function statsA() {
    $("#statsA").css("display", "block")
    $("#statsU18").css("display", "none")
    $("#statsU15").css("display", "none")

    $(".statsButton > button").css({"color": "#050505", "border-bottom": "none"})
    $(".statsButton > button:nth-of-type(1)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    // 장석훈 등번호
    if (year == 2024) {
        playerNumber[2024][20240155][1] = 70
    }

    status_ = "A"
    year = new Date().getFullYear()
    $(".statsSeason > p:nth-of-type(5)").text("통산")
    $(".statsSeason > p:nth-of-type(n+2):nth-of-type(-n+3)").css("display", "block")
    $(".statsSeason > p:nth-of-type(4)").css("margin-left", "10px")
    window.history.replaceState({}, "", window.location.href.split("?")[0] + "?" + year + "?" + status_)
    stats()
}

function statsU18() {
    $("#statsA").css("display", "none")
    $("#statsU18").css("display", "block")
    $("#statsU15").css("display", "none")

    $(".statsButton > button").css({"color": "#050505", "border-bottom": "none"})
    $(".statsButton > button:nth-of-type(2)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    // 장석훈 등번호
    if (year == 2024) {
        playerNumber[2024][20240155][1] = 10
    }

    status_ = "U18"
    year = new Date().getFullYear()
    $(".statsSeason > p:nth-of-type(5)").text("통산")
    $(".statsSeason > p:nth-of-type(n+2):nth-of-type(-n+3)").css("display", "block")
    $(".statsSeason > p:nth-of-type(4)").css("margin-left", "10px")
    window.history.replaceState({}, "", window.location.href.split("?")[0] + "?" + year + "?" + status_)
    stats()
}

function statsU15() {
    $("#statsA").css("display", "none")
    $("#statsU18").css("display", "none")
    $("#statsU15").css("display", "block")

    $(".statsButton > button").css({"color": "#050505", "border-bottom": "none"})
    $(".statsButton > button:nth-of-type(3)").css({"color": "#000060", "border-bottom": "3px solid #000060"})

    status_ = "U15"
    year = new Date().getFullYear()
    $(".statsSeason > p:nth-of-type(5)").text("통산")
    $(".statsSeason > p:nth-of-type(n+2):nth-of-type(-n+3)").css("display", "block")
    $(".statsSeason > p:nth-of-type(4)").css("margin-left", "10px")
    window.history.replaceState({}, "", window.location.href.split("?")[0] + "?" + year + "?" + status_)
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

// 응원가
if ($("#team").length || $("#chantsName").length) {
    teamChants = ["SEFC 콜", "서울 이랜드 콜", "2 3 4 서울 콜", "세트피스 콜", "승리하라 서울 콜", "하나되어<span>(선수 입장 시)</span>", "서울의 노래", "사랑한다 서울", "우리는 서울 이랜드", "사랑해 서울 이랜드", "한강에서부터 제주까지", "표범의 전사들", "앞으로 가자", "하늘 아래서 소리쳐", "서울의 아리아", "너를 태우고", "페파스", "우리는 항상 여기에", "뱃놀이<span>(경기 승리 후)</span>", "우리 모두 다 같이<span>(경기 승리 후 세리머니)</span>",]
    playersChants = ["선수 콜", "주장 콜", "득점 콜", "오스마르 콜(1)", "오스마르 콜(2)"]

    for (i = 0; i < Object.keys(teamChants).length; i++) {
        $("#team").append("<div>" + teamChants[i] + "</div>")
    }

    for (i = 0; i < Object.keys(playersChants).length; i++) {
        $("#players").append("<div>" + playersChants[i] + "</div>")
    }

    $("#team").children("div").on("click", function () {
        window.location = "./chants/team?" + $(this).index()
    })

    $("#players").children("div").on("click", function () {
        window.location = "./chants/players?" + $(this).index()
    })
}

if ($("#chantsName").length) {

    if (window.location.href.match("team")) {
        chantsName = (teamChants[window.location.href.split("?")[1] - 1]).split("<span>")[0]
    } else if (window.location.href.match("players")) {
        chantsName = (playersChants[window.location.href.split("?")[1] - 1]).split("<span>")[0]
    }

    $("#chantsName").text(chantsName)
    
    let chantsUrl, timeMapping
    if (chantsName == "SEFC 콜") {
        chantsUrl = "7g7et2bEVbo"

        timeMapping = [
            {time: 3, elementId: "lyrics-1"},
            {time: 4.6, elementId: "lyrics-2"},
            {time: 6, elementId: "lyrics-1"},
            {time: 7.6, elementId: "lyrics-2"},
            {time: 9, elementId: "lyrics-1"},
            {time: 10.6, elementId: "lyrics-2"},
            {time: 12, elementId: "lyrics-1"},
            {time: 13.6, elementId: "lyrics-2"},
            {time: 15, elementId: "lyrics-1"},
            {time: 16.6, elementId: "lyrics-2"},
            {time: 18, elementId: "lyrics-1"},
            {time: 19.6, elementId: "lyrics-2"},
            {time: 21, elementId: "lyrics-1"},
            {time: 22.6, elementId: "lyrics-2"},
            {time: 24, elementId: "lyrics-1"},
            {time: 25.5, elementId: "lyrics-2"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>짝 짝 짝 짝</p><p id='lyrics-2'>SEFC</p>")
    }

    if (chantsName == "서울 이랜드 콜") {
        chantsUrl = "hWGFNT7Jip0"

        timeMapping = [
            {time: 3, elementId: "lyrics-1"},
            {time: 4.6, elementId: "lyrics-2"},
            {time: 6, elementId: "lyrics-1"},
            {time: 7.6, elementId: "lyrics-2"},
            {time: 9, elementId: "lyrics-1"},
            {time: 10.6, elementId: "lyrics-2"},
            {time: 12, elementId: "lyrics-1"},
            {time: 13.6, elementId: "lyrics-2"},
            {time: 15, elementId: "lyrics-1"},
            {time: 16.6, elementId: "lyrics-2"},
            {time: 18, elementId: "lyrics-1"},
            {time: 19.6, elementId: "lyrics-2"},
            {time: 21, elementId: "lyrics-1"},
            {time: 22.6, elementId: "lyrics-2"},
            {time: 24, elementId: "lyrics-1"},
            {time: 25.6, elementId: "lyrics-2"},
            {time: 27, elementId: "lyrics-1"},
            {time: 28.6, elementId: "lyrics-2"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>짝 짝짝 짝짝</p><p id='lyrics-2'>서울 이랜드</p>")
    }

    if (chantsName == "2 3 4 서울 콜") {
        chantsUrl = "pTyfylvEESE"

        timeMapping = [
            {time: 2.4, elementId: "lyrics-1"},
            {time: 5, elementId: "lyrics-2"},
            {time: 5.9, elementId: "lyrics-1"},
            {time: 8.6, elementId: "lyrics-2"},
            {time: 9.1, elementId: "lyrics-1"},
            {time: 11.8, elementId: "lyrics-2"},
            {time: 12.6, elementId: "lyrics-1"},
            {time: 15, elementId: "lyrics-2"},
            {time: 15.9, elementId: "lyrics-1"},
            {time: 18.2, elementId: "lyrics-2"},
            {time: 19, elementId: "lyrics-1"},
            {time: 21.8, elementId: "lyrics-2"},
            {time: 22.4, elementId: "lyrics-1"},
            {time: 25, elementId: "lyrics-2"},
            {time: 25.8, elementId: "lyrics-1"},
            {time: 28.4, elementId: "lyrics-2"},
            {time: 29, elementId: "lyrics-1"},
            {time: 31.8, elementId: "lyrics-2"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>짝짝 짝짝짝 <ruby><rb>짝짝짝짝</rb><rp>(</rp><rt>알레알레</rt><rp>)</rp></ruby></p><p id='lyrics-2'>서울</p>")
    }

    if (chantsName == "하나되어") {
        chantsUrl = "nMN_QxXrc7o"
        original = "터"

        timeMapping = [
            {time: 2.8, elementId: "lyrics-1"},
            {time: 6, elementId: "lyrics-2"},
            {time: 9.6, elementId: "lyrics-3"},
            {time: 13, elementId: "lyrics-4"},
            {time: 16.3, elementId: "lyrics-5"},
            {time: 19.6, elementId: "lyrics-6"},
            {time: 23, elementId: "lyrics-7"},
            {time: 26.2, elementId: "lyrics-8"},
            {time: 29.7, elementId: "lyrics-1"},
            {time: 33, elementId: "lyrics-2"},
            {time: 36.2, elementId: "lyrics-3"},
            {time: 39.9, elementId: "lyrics-4"},
            {time: 43, elementId: "lyrics-5"},
            {time: 46.4, elementId: "lyrics-6"},
            {time: 49.9, elementId: "lyrics-7"},
            {time: 53, elementId: "lyrics-8"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>하나되어 나아가자</p><p id='lyrics-2'>깃발을 높이 들고</p><p id='lyrics-3'>우리의 푸른 함성으로</p><p id='lyrics-4'>승리를 노래하자</p><p id='lyrics-5'>라라라라 라라라라</p><p id='lyrics-6'>라라라 라라라라</p><p id='lyrics-7'>라라라 라라 라라라라</p><p id='lyrics-8'>라라라 라라라라</p>")
    }

    if (chantsName == "세트피스 콜") {
        chantsUrl = "899tZppq-RM"
        original = "Papa's got a brand new pigbag"

        timeMapping = [
            {time: 6.3, elementId: "lyrics-1"},
            {time: 8.3, elementId: "lyrics-2"},
            {time: 9.7, elementId: "lyrics-1"},
            {time: 11.3, elementId: "lyrics-2"},
            {time: 13.2, elementId: "lyrics-1"},
            {time: 14.8, elementId: "lyrics-2"},
            {time: 16.4, elementId: "lyrics-1"},
            {time: 17.9, elementId: "lyrics-2"},
            {time: 19.7, elementId: "lyrics-1"},
            {time: 21.4, elementId: "lyrics-2"},
            {time: 23, elementId: "lyrics-1"},
            {time: 24.8, elementId: "lyrics-2"},
            {time: 26.4, elementId: "lyrics-1"},
            {time: 27.9, elementId: "lyrics-2"},
            {time: 29.7, elementId: "lyrics-1"},
            {time: 31.4, elementId: "lyrics-2"},
            {time: 33, elementId: "lyrics-1"},
            {time: 34.6, elementId: "lyrics-2"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>골 골 골 골</p><p id='lyrics-2'>서울 이랜</p>")
    }

    if (chantsName == "서울의 노래") {
        chantsUrl = "5vMBcPtaBsQ"

        timeMapping = [
            {time: 28.6, elementId: "lyrics-1"},
            {time: 35.5, elementId: "lyrics-2"},
            {time: 38.9, elementId: "lyrics-3"},
            {time: 42.3, elementId: "lyrics-4"},
            {time: 49, elementId: "lyrics-5"},
            {time: 55.8, elementId: 'lyrics-1'},
            {time: 62.8, elementId: 'lyrics-2'},
            {time: 66.4, elementId: 'lyrics-3'},
            {time: 69.8, elementId: "lyrics-6"},
            {time: 72, elementId: "x"},
            {time: 114.2, elementId: "lyrics-1"},
            {time: 121, elementId: "lyrics-2"},
            {time: 124.4, elementId: "lyrics-3"},
            {time: 128, elementId: "lyrics-4"},
            {time: 134.9, elementId: "lyrics-5"},
            {time: 141.6, elementId: 'lyrics-1'},
            {time: 148.4, elementId: 'lyrics-2'},
            {time: 152, elementId: 'lyrics-3'},
            {time: 155.3, elementId: "lyrics-6"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>서울의 승리를 위해 함께 외치자</p><p id='lyrics-2'>오오오 오 오오 오 오</p><p id='lyrics-3'>오오오 오 오오 오 오오</p><p id='lyrics-4'>승리 위한 우리 노래가 여기에 울려 퍼지면</p><p id='lyrics-5'>끝까지 맞서 싸워 서울은 승리하리라</p><p id='lyrics-6'>서울</p>")
    }

    if (chantsName == "사랑해 서울 이랜드") {
        chantsUrl = "yQuKrbwrl78"

        timeMapping = [
            {time: 0.7, elementId: "lyrics-1"},
            {time: 7.8, elementId: "lyrics-2"},
            {time: 14.8, elementId: 'lyrics-1'},
            {time: 22, elementId: 'lyrics-2'},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>사랑해 서울 이랜드 사랑해 서울 이랜드</p><p id='lyrics-2'>사랑해 서울 이랜드 오오</p>")
    }

    if (chantsName == "한강에서부터 제주까지") {
        chantsUrl = "yH7SZef6RCM"

        timeMapping = [
            {time: 3, elementId: "lyrics-1"},
            {time: 7.9, elementId: "lyrics-2"},
            {time: 12.6, elementId: "lyrics-3"},
            {time: 16.9, elementId: "lyrics-4"},
            {time: 21.4, elementId: 'lyrics-1'},
            {time: 26, elementId: 'lyrics-2'},
            {time: 30.3, elementId: 'lyrics-3'},
            {time: 34.8, elementId: 'lyrics-4'},
            {time: 39.1, elementId: 'lyrics-1'},
            {time: 43.8, elementId: 'lyrics-2'},
            {time: 48.1, elementId: 'lyrics-3'},
            {time: 52.4, elementId: 'lyrics-4'},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>한강에서부터 <ruby><rb>◌◌</rb><rp>(</rp><rt>지역명</rt><rp>)</rp></ruby>까지</p><p id='lyrics-2'>우리는 싸운다 SEFC</p><p id='lyrics-3'>오오오오 오오오오</p><p id='lyrics-4'>에에에에 에에에에</p>")
    }

    if (chantsName == "표범의 전사들") {
        chantsUrl = "9XSkx-QOvdY"

        timeMapping = [
            {time: 3, elementId: "lyrics-1"},
            {time: 9.8, elementId: "lyrics-2"},
            {time: 15.2, elementId: "lyrics-3"},
            {time: 22.1, elementId: "lyrics-4"},
            {time: 30.1, elementId: 'lyrics-1'},
            {time: 37, elementId: 'lyrics-2'},
            {time: 42.6, elementId: 'lyrics-3'},
            {time: 49.5, elementId: 'lyrics-4'},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>알레알레오 서울 이랜드 표범의 전사들이여</p><p id='lyrics-2'>맞서 싸워라 승리하리라 저 높은 곳에 우뚝 서리라</p><p id='lyrics-3'>오 오오오 오오오오 오오오오 오오오오</p><p id='lyrics-4'>오 오오오 오오오오 오오오오 오오오오</p>")
    }

    if (chantsName == "앞으로 가자") {
        chantsUrl = "KTLorKH-ecM"

        timeMapping = [
            {time: 3.6, elementId: "lyrics-1"},
            {time: 7, elementId: "lyrics-2"},
            {time: 10.6, elementId: "lyrics-3"},
            {time: 14, elementId: "lyrics-4"},
            {time: 17.3, elementId: 'lyrics-5'},
            {time: 20.9, elementId: 'lyrics-6'},
            {time: 24.1, elementId: 'lyrics-7'},
            {time: 27.7, elementId: 'lyrics-8'},
            {time: 31, elementId: "lyrics-1"},
            {time: 34.4, elementId: "lyrics-2"},
            {time: 38, elementId: "lyrics-3"},
            {time: 41.2, elementId: "lyrics-4"},
            {time: 44.8, elementId: 'lyrics-5'},
            {time: 48, elementId: 'lyrics-6'},
            {time: 51.7, elementId: 'lyrics-7'},
            {time: 55, elementId: 'lyrics-8'},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>우리들은 서울 이랜드</p><p id='lyrics-2'>서울 이랜 승리 위해 앞으로 가자</p><p id='lyrics-3'>우리들은 서울 이랜드</p><p id='lyrics-4'>서울 이랜 승리 위해 앞으로 가자</p><p id='lyrics-5'>알레알레 알레알레오</p><p id='lyrics-6'>알레알레 알레알레 알레알레오</p><p id='lyrics-7'>알레알레 알레알레오</p><p id='lyrics-8'>알레알레 알레알레 알레알레오</p>")
    }

    if (chantsName == "하늘 아래서 소리쳐") {
        chantsUrl = "MwN-yQNqsNE"

        timeMapping = [
            {time: 0.1, elementId: "lyrics-1"},
            {time: 2.8, elementId: "lyrics-2"},
            {time: 3.6, elementId: "lyrics-3"},
            {time: 6, elementId: "lyrics-4"},
            {time: 6.8, elementId: 'lyrics-5'},
            {time: 10, elementId: 'lyrics-6'},
            {time: 12.8, elementId: 'lyrics-7'},
            {time: 13.7, elementId: "lyrics-1"},
            {time: 15.9, elementId: "lyrics-2"},
            {time: 17, elementId: "lyrics-3"},
            {time: 19.2, elementId: "lyrics-4"},
            {time: 20, elementId: 'lyrics-5'},
            {time: 23.6, elementId: 'lyrics-6'},
            {time: 26, elementId: 'lyrics-7'},
            {time: 27, elementId: "lyrics-1"},
            {time: 29, elementId: "lyrics-2"},
            {time: 30, elementId: "lyrics-3"},
            {time: 32.9, elementId: "lyrics-4"},
            {time: 33.8, elementId: 'lyrics-5'},
            {time: 36.9, elementId: 'lyrics-6'},
            {time: 39.1, elementId: 'lyrics-7'},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'><ruby><rb>◌◌</rb><rp>(</rp><rt>지역명</rt><rp>)</rp></ruby> 하늘 아래서 소리쳐</p><p id='lyrics-2'>짝 짝</p><p id='lyrics-3'><ruby><rb>◌◌</rb><rp>(</rp><rt>지역명</rt><rp>)</rp></ruby> 하늘 아래서 소리쳐</p><p id='lyrics-4'>짝 짝</p><p id='lyrics-5'><ruby><rb>◌◌</rb><rp>(</rp><rt>지역명</rt><rp>)</rp></ruby> 하늘 아래서 우린 함께할 거야</p><p id='lyrics-6'><ruby><rb>◌◌</rb><rp>(</rp><rt>지역명</rt><rp>)</rp></ruby> 하늘 아래서 소리쳐</p><p id='lyrics-7'>짝 짝</p>")
    }

    if (chantsName == "서울의 아리아") {
        chantsUrl = "A-NxFbnDR_Y"

        timeMapping = [
            {time: 3, elementId: "lyrics-1"},
            {time: 9.9, elementId: "lyrics-2"},
            {time: 16.8, elementId: "lyrics-3"},
            {time: 23.8, elementId: "lyrics-4"},
            {time: 30.8, elementId: 'lyrics-3'},
            {time: 37.8, elementId: 'lyrics-4'},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>라 라라라라 라라 라 라라라라 라라</p><p id='lyrics-2'>라 라라라라 라라 라 라라 라라라</p><p id='lyrics-3'>파랗게 피어나는 승리를 위한 함성</p><p id='lyrics-4'>서울의 영원한 폭풍이 되리라</p>")
    }

    if (chantsName == "너를 태우고") {
        chantsUrl = "_bYQs-S96mQ"
        originalSong = "君をのせて(너를 태우고)"

        timeMapping = [
            {time: 3, elementId: "lyrics-1"},
            {time: 10, elementId: "lyrics-2"},
            {time: 16.1, elementId: "lyrics-3"},
            {time: 23.2, elementId: "lyrics-4"},
            {time: 29.8, elementId: "lyrics-5"},
            {time: 37, elementId: "lyrics-6"},
            {time: 43.2, elementId: "lyrics-7"},
            {time: 50.6, elementId: "lyrics-8"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>푸른색이 빛도는 나의 서울이여</p><p id='lyrics-2'>황금빛 저녁놀 우리들의 청춘</p><p id='lyrics-3'>푸른색이 빛도는 나의 서울이여</p><p id='lyrics-4'>진격하라 저 앞으로 승리를 위해</p><p id='lyrics-5'>라라 라라 라라라 라라라 라라라</p><p id='lyrics-6'>라라라 라라라 라라 라라 라라</p><p id='lyrics-7'>라라 라라 라라라 라라라 라라라</p><p id='lyrics-8'>라라라라 라라라라 라라 라라라</p>")
    }

    if (chantsName == "페파스") {
        chantsUrl = "L5-3owmmRTI"
        original = "Pepas"

        timeMapping = [
            {time: 3, elementId: "lyrics-1"},
            {time: 9.1, elementId: "lyrics-2"},
            {time: 10, elementId: "lyrics-3"},
            {time: 15.7, elementId: "lyrics-4"},
            {time: 16.8, elementId: "lyrics-5"},
            {time: 22.8, elementId: "lyrics-6"},
            {time: 23.8, elementId: "lyrics-7"},
            {time: 30.7, elementId: "lyrics-1"},
            {time: 36.6, elementId: "lyrics-2"},
            {time: 37.6, elementId: "lyrics-3"},
            {time: 43.4, elementId: "lyrics-4"},
            {time: 44.2, elementId: "lyrics-5"},
            {time: 50.2, elementId: "lyrics-6"},
            {time: 51.1, elementId: "lyrics-7"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>서울 승리 위해 외쳐 우리는 끝까지 노래하고 뛰어</p><p id='lyrics-2'>후 하</p><p id='lyrics-3'>서울 승리 위해 외쳐 우리는 끝까지 노래하고 뛰어</p><p id='lyrics-4'>후 하</p><p id='lyrics-5'>라라 라라라라 라라 라라라라 라라 라라라라 라라</p><p id='lyrics-6'>서울</p><p id='lyrics-7'>라라 라라라라 라라 라라라라 라라 라라라라 라라</p>")
    }

    if (chantsName == "우리는 항상 여기에") {
        chantsUrl = "yu4ewFb2RQo"

        timeMapping = [
            {time: 6.7, elementId: "lyrics-1"},
            {time: 13.9, elementId: "lyrics-2"},
            {time: 21, elementId: "lyrics-1"},
            {time: 27.9, elementId: "lyrics-2"},
            {time: 35, elementId: "lyrics-1"},
            {time: 41.9, elementId: "lyrics-2"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>우리는 항상 여기에 언제나 너희를 위해</p><p id='lyrics-2'>저 푸른 소나무같이 우린 여기에</p>")
    }

    if (chantsName == "뱃놀이") {
        chantsUrl = "UmCO0qxTLrM"

        timeMapping = [
            {time: 0.1, elementId: "lyrics-1"},
            {time: 6.6, elementId: "lyrics-2"},
            {time: 12.8, elementId: "lyrics-3"},
            {time: 19, elementId: "lyrics-4"},
            {time: 22, elementId: "lyrics-1"},
            {time: 28.6, elementId: "lyrics-2"},
            {time: 34.8, elementId: "lyrics-3"},
            {time: 41, elementId: "lyrics-4"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>즐거운 서울 승리의 날에 <ruby><rb>◌◌</rb><rp>(</rp><rt>상대</rt><rp>)</rp></ruby> 팬 우는 소리</p><p id='lyrics-2'>지고 가는 <ruby><rb>◌◌</rb><rp>(</rp><rt>상대</rt><rp>)</rp></ruby> 팬이 처량도 하구나</p><p id='lyrics-3'>어기야 디여엉차 어기영차 어기야 디여엉 어기영차</p><p id='lyrics-4'>뱃놀이 가잔다</p>")
    }

    if (chantsName == "우리 모두 다 같이") {
        chantsUrl = "EVoLg-CN-UY"
        original = "빙빙 돌아라"

        timeMapping = [
            {time: 2.5, elementId: "lyrics-1"},
            {time: 6, elementId: "lyrics-2"},
            {time: 10, elementId: "lyrics-3"},
            {time: 14, elementId: "lyrics-4"},
            {time: 17.7, elementId: "lyrics-5"},
            {time: 21.4, elementId: "lyrics-6"},
            {time: 25, elementId: "lyrics-7"},
            {time: 28.9, elementId: "lyrics-8"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>우리 모두 다 같이 서울 서울</p><p id='lyrics-2'>다시 한 번 더 크게 서울 서울</p><p id='lyrics-3'>라라라라 라라라라 라라라라 라라라</p><p id='lyrics-4'>나의 사랑 서울 이랜드</p><p id='lyrics-5'>라라라라 라라라라 라 라라</p><p id='lyrics-6'>라라라라 라라라라 라 라라</p><p id='lyrics-7'>라라라라 라라라라 라라라라 라라라</p><p id='lyrics-8'>나의 사랑 서울 이랜드</p>")
    }

    if (chantsName == "사랑한다 서울") {
        chantsUrl = "gqLcEWkOOYE"
        original = "Por una Cabeza"

        timeMapping = [
            {time: 3.4, elementId: "lyrics-1"},
            {time: 10, elementId: "lyrics-2"},
            {time: 16.7, elementId: "lyrics-3"},
            {time: 23.3, elementId: "lyrics-4"},
            {time: 29.9, elementId: "lyrics-1"},
            {time: 36.7, elementId: "lyrics-2"},
            {time: 43.3, elementId: "lyrics-3"},
            {time: 49.9, elementId: "lyrics-4"},
            {time: 56.8, elementId: "lyrics-1"},
            {time: 63.2, elementId: "lyrics-2"},
            {time: 69.9, elementId: "lyrics-3"},
            {time: 76.8, elementId: "lyrics-4"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>사랑한다 서울 사랑한다 이랜</p><p id='lyrics-2'>내 가슴속에 영원히 남을 사랑이 되어라</p><p id='lyrics-3'>사랑한다 서울 사랑한다 이랜</p><p id='lyrics-4'>내 가슴속에 영원히 남을 사랑이어라</p>")
    }

    if (chantsName == "승리하라 서울 콜") {
        chantsUrl = "cEJhaesrVQQ"

        timeMapping = [
            {time: 3, elementId: "lyrics-1"},
            {time: 4.6, elementId: "lyrics-2"},
            {time: 6.1, elementId: "lyrics-1"},
            {time: 7.7, elementId: "lyrics-2"},
            {time: 9.2, elementId: "lyrics-1"},
            {time: 10.8, elementId: "lyrics-2"},
            {time: 12.3, elementId: "lyrics-1"},
            {time: 13.9, elementId: "lyrics-2"},
            {time: 15.4, elementId: "lyrics-1"},
            {time: 17, elementId: "lyrics-2"},
            {time: 18.5, elementId: "lyrics-1"},
            {time: 20.1, elementId: "lyrics-2"},
            {time: 21.6, elementId: "lyrics-1"},
            {time: 23.1, elementId: "lyrics-2"},
            {time: 24.7, elementId: "lyrics-1"},
            {time: 26.2, elementId: "lyrics-2"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>짝짝짝짝 짝짝</p><p id='lyrics-2'>승리하라 서울</p>")
    }

    if (chantsName == "우리는 서울 이랜드") {
        chantsUrl = "w1oEKWw7XHA"

        timeMapping = [
            {time: 3, elementId: "lyrics-1"},
            {time: 6.4, elementId: "lyrics-2"},
            {time: 9.6, elementId: "lyrics-3"},
            {time: 12.9, elementId: "lyrics-4"},
            {time: 16.4, elementId: "lyrics-1"},
            {time: 19.7, elementId: "lyrics-2"},
            {time: 23, elementId: "lyrics-3"},
            {time: 26.3, elementId: "lyrics-4"},
            {time: 29.7, elementId: "lyrics-1"},
            {time: 32.9, elementId: "lyrics-2"},
            {time: 36.2, elementId: "lyrics-3"},
            {time: 39.7, elementId: "lyrics-4"},
            {time: 43, elementId: "lyrics-1"},
            {time: 46, elementId: "lyrics-2"},
            {time: 49.4, elementId: "lyrics-3"},
            {time: 53, elementId: "lyrics-4"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>오오오오 오오오오</p><p id='lyrics-2'>우리는 서울 이랜드</p><p id='lyrics-3'>오오오오 오오 오오</p><p id='lyrics-4'>승리의 서울 이랜드</p>")
    }

    if (chantsName == "선수 콜") {
        chantsUrl = "63tMGuZemIs"

        timeMapping = [
            {time: 2, elementId: "lyrics-1"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>서울의 <ruby><rb>◌◌</rb><rp>(</rp><rt>선수</rt><rp>)</rp></ruby> 야이야이야</p>")
    }

    if (chantsName == "주장 콜") {
        chantsUrl = "fla4_qsIHCw"

        timeMapping = [
            {time: 0.1, elementId: "lyrics-1"},
            {time: 4.7, elementId: "lyrics-2"},
            {time: 9, elementId: "lyrics-3"},
            {time: 13, elementId: "lyrics-4"},
            {time: 17.1, elementId: "lyrics-1"},
            {time: 21.6, elementId: "lyrics-2"},
            {time: 25.8, elementId: "lyrics-3"},
            {time: 29.8, elementId: "lyrics-4"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>라라라라 라라라라 캡틴 <ruby><rb>◌◌</rb><rp>(</rp><rt>선수</rt><rp>)</rp></ruby></p><p id='lyrics-2'>라라라라 라라라라 캡틴 <ruby><rb>◌◌</rb><rp>(</rp><rt>선수</rt><rp>)</rp></ruby></p><p id='lyrics-3'>승리 위해 다 함께 외치자</p><p id='lyrics-4'>라라라라 라라라라 캡틴 <ruby><rb>◌◌</rb><rp>(</rp><rt>선수</rt><rp>)</rp></ruby></p>")
    }

    if (chantsName == "득점 콜") {
        chantsUrl = "ubR1cPfjRv0"

        timeMapping = [
            {time: 3, elementId: "lyrics-1"},
            {time: 9, elementId: "lyrics-2"},
            {time: 15.1, elementId: "lyrics-1"},
            {time: 21, elementId: "lyrics-2"},
            {time: 27.1, elementId: "lyrics-1"},
            {time: 33.1, elementId: "lyrics-2"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>오레오 오레오 서울의 <ruby><rb>◌◌</rb><rp>(</rp><rt>선수</rt><rp>)</rp></ruby></p><p id='lyrics-2'>오레오 오레오 승리는 우리의 것</p>")
    }

    if (chantsName == "오스마르 콜(1)") {
        chantsUrl = "4Tsm-yPKOMs"

        timeMapping = [
            {time: 0.1, elementId: "lyrics-1"},
            {time: 3.1, elementId: "lyrics-2"},
            {time: 6.6, elementId: "lyrics-1"},
            {time: 9.8, elementId: "lyrics-2"},
            {time: 12.8, elementId: "lyrics-1"},
            {time: 15.8, elementId: "lyrics-2"},
            {time: 18.8, elementId: "lyrics-1"},
            {time: 21.8, elementId: "lyrics-2"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>오 오 오스마르</p><p id='lyrics-2'>오오오 오오오 오오오 오오오</p>")
    }

    if (chantsName == "오스마르 콜(2)") {
        chantsUrl = "Nbt3dz3X3Bg"

        timeMapping = [
            {time: 3.3, elementId: "lyrics-1"},
            {time: 6.8, elementId: "lyrics-2"},
            {time: 10, elementId: "lyrics-3"},
            {time: 13.2, elementId: "lyrics-4"},
            {time: 16.4, elementId: "lyrics-5"},
            {time: 19.8, elementId: "lyrics-6"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>오스마르 오스마르 서울만을 사랑해</p><p id='lyrics-2'>레울파크에 왔네 오 오 오스마르 헤이</p><p id='lyrics-3'>오스마르 오스마르 스페인의 검투사</p><p id='lyrics-4'>승격을 위해 왔네 오 오 오스마르 헤이</p><p id='lyrics-5'>오스마르 오스마르 이바녜스 바르바</p><p id='lyrics-6'>황새도 막지 못해 오 오 오스마르 헤이</p>")
    }

    $("#chantsVideo").append('<iframe id="youtube-player" src="https://www.youtube.com/embed/' + chantsUrl + '?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')

    let player
    function onYouTubeIframeAPIReady() {
        player = new YT.Player("youtube-player", {
            events: {
                onStateChange: onPlayerStateChange,
                onReady: onPlayerReady
            }
        })
    }

    function onPlayerReady(event) {}

    let lastBoldId = null  // 마지막으로 볼드 처리된 자막의 ID를 기억

    function updateTextStyle(currentTime) {
        // 현재 시간에 맞는 자막을 검색
        const currentMapping = timeMapping.find(({ time }) => Math.abs(currentTime - time) < 0.1)
        
        // 만약 현재 자막이 있으면
        if (currentMapping) {
            // 이전 자막이 볼드 상태라면 그 자막과 내부 요소들을 기본 상태로 되돌림
            if (lastBoldId && lastBoldId !== currentMapping.elementId) {
                const lastElement = document.getElementById(lastBoldId)
                lastElement.style.color = "#050505"
                lastElement.style.fontWeight = "300"
                lastElement.querySelectorAll("ruby, rb, rp, rt").forEach(el => {
                    el.style.color = "#050505"
                    el.style.fontWeight = "300"
                });
            }

            // 현재 자막을 볼드 처리
            const currentElement = document.getElementById(currentMapping.elementId)
            currentElement.style.color = "#000060"
            currentElement.style.fontWeight = "600"
            currentElement.querySelectorAll("ruby, rb, rp, rt").forEach(el => {
                el.style.color = "#000060"
                el.style.fontWeight = "600"
            })

            // 현재 자막의 ID를 마지막 볼드 처리된 자막으로 기록
            lastBoldId = currentMapping.elementId;
        }
    }

    // 영상이 끝났을 때 모든 자막의 볼드 처리를 해제하는 함수
    function resetAllTextStyles() {
        timeMapping.forEach(({ elementId }) => {
            document.getElementById(elementId).style.color = "#050505"
            document.getElementById(elementId).style.fontWeight = "300"  // 모든 자막을 기본 스타일로 초기화
        })
    }

    function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.PLAYING) {
            setInterval(() => {
                const currentTime = player.getCurrentTime()
                updateTextStyle(currentTime)
            }, 100)
        } else if (event.data === YT.PlayerState.ENDED) {
            // 영상이 끝났을 때 모든 자막의 볼드 처리를 해제
            resetAllTextStyles()
        }
    }
}