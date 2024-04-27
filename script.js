// 새로고침 시
$(document).ready(function() {

    // 새로고침 시 맨 위로 이동
    history.scrollRestoration = "manual"

    // 화면 너비 300px 이하일 때 경고
    if ($(window).width() < 300) {
        $("body").append("<div style='width: 80vw; height: 65px; padding: 0 10vw; background: #fafafa; position: fixed; bottom: 0; left: 0; font-size: 14px; font-weight: 500; z-index: 300; display: flex; align-items: center; justify-content: center;'>기기의 화면 크기가 작아 페이지가 정상적으로 보이지 않을 수 있습니다.</div>")
    }

    // 화면 너비 768px~1023px일 때 경고
    if ($(window).width() >= 768 && $(window).width() < 1023) {
        $("body").append("<div style='width: 80vw; height: 65px; padding: 0 10vw; background: #fafafa; position: fixed; bottom: 0; left: 0; font-size: 14px; font-weight: 500; z-index: 300; display: flex; align-items: center; justify-content: center;'>페이지가 아직 이 기기를 완벽히 지원하지 않아 페이지가 정상적으로 보이지 않을 수 있습니다.</div>")
    }

    // A팀 선수단 불러오기
    if ($(".playerButton").length) {
        playerA()
    }

    // A팀 일정 불러오기
    if ($(".fixturesButton").length) {
        fixturesA()
    }

    // A팀 순위 불러오기
    if ($(".standingsButton").length) {
        standingsA()
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
$("header").html("<div><img src='./files/menu.svg' onclick='menu()'></div><p>SEFCiNFO</p><div><img src='./files/seouleland_s.png'></div>")
$("body").append("<div id='menu'><div><img src='./files/players.svg'>선수단</div><div><img src='./files/fixtures.svg'>일정</div><div><img src='./files/stats.svg'>기록</div><div><img src='./files/standings.svg'>순위</div></div><div id='menuBg'></div>")

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
    window.location = "./players"
})
$("#menu > div:nth-of-type(2)").click(function() {
    window.location = "./fixtures"
})
$("#menu > div:nth-of-type(3)").click(function() {
    window.location = "./stats"
})
$("#menu > div:nth-of-type(4)").click(function() {
    window.location = "./standings"
})

// 메뉴 내 현재 페이지 이름 강조
if ($("#playerButton").length || $("#playerInfo").length) {
    $("#menu > div:nth-of-type(1)").css("background", "#174fff10")
} else if ($("#fixturesButton").length || $("#matchScore").length) {
    $("#menu > div:nth-of-type(2)").css("background", "#174fff10")
}

// 선수 기록 창 전환
function statsSeason() {
    season = $("#statsSeason_").css("display")

    if(season == "none") {
        document.getElementById("statsSeason_").style.display = "flex"
    } else {
        document.getElementById("statsSeason_").style.display = "none"
    }

}

// 선수단 창 전환
function playerA() {
    $("#playerA").css("display", "block")
    $("#playerU18").css("display", "none")
    $("#playerU15").css("display", "none")

    $(".playerButton > button").css({"color": "#000831", "border-bottom": "none"})
    $(".playerButton > button:nth-of-type(1)").css({"color": "#174fff", "border-bottom": "3px solid #174fff"})
}

function playerU18() {
    $("#playerA").css("display", "none")
    $("#playerU18").css("display", "block")
    $("#playerU15").css("display", "none")

    $(".playerButton > button").css({"color": "#000831", "border-bottom": "none"})
    $(".playerButton > button:nth-of-type(2)").css({"color": "#174fff", "border-bottom": "3px solid #174fff"})
}

function playerU15() {
    $("#playerA").css("display", "none")
    $("#playerU18").css("display", "none")
    $("#playerU15").css("display", "block")

    $(".playerButton > button").css({"color": "#000831", "border-bottom": "none"})
    $(".playerButton > button:nth-of-type(3)").css({"color": "#174fff", "border-bottom": "3px solid #174fff"})
}

// 일정 창 전환
function fixturesA() {
    $("#fixturesA").css("display", "block")
    $("#fixturesU18").css("display", "none")
    $("#fixturesU15").css("display", "none")

    $(".fixturesButton > button").css({"color": "#000831", "border-bottom": "none"})
    $(".fixturesButton > button:nth-of-type(1)").css({"color": "#174fff", "border-bottom": "3px solid #174fff"})

    status_ = "A"
    fixtures()
}

function fixturesU18() {
    $("#fixturesA").css("display", "none")
    $("#fixturesU18").css("display", "block")
    $("#fixturesU15").css("display", "none")

    $(".fixturesButton > button").css({"color": "#000831", "border-bottom": "none"})
    $(".fixturesButton > button:nth-of-type(2)").css({"color": "#174fff", "border-bottom": "3px solid #174fff"})

    status_ = "U18"
    fixtures()
}

function fixturesU15() {
    $("#fixturesA").css("display", "none")
    $("#fixturesU18").css("display", "none")
    $("#fixturesU15").css("display", "block")

    $(".fixturesButton > button").css({"color": "#000831", "border-bottom": "none"})
    $(".fixturesButton > button:nth-of-type(3)").css({"color": "#174fff", "border-bottom": "3px solid #174fff"})

    status_ = "U15"
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

// 순위 창 전환
function standingsA() {
    $("#standingsA").css("display", "block")
    $("#standingsU18").css("display", "none")
    $("#standingsU15").css("display", "none")

    $(".standingsButton > button").css({"color": "#000831", "border-bottom": "none"})
    $(".standingsButton > button:nth-of-type(1)").css({"color": "#174fff", "border-bottom": "3px solid #174fff"})

    status_ = "A"
    standings()
}

function standingsU18() {
    $("#standingsA").css("display", "none")
    $("#standingsU18").css("display", "block")
    $("#standingsU15").css("display", "none")

    $(".standingsButton > button").css({"color": "#000831", "border-bottom": "none"})
    $(".standingsButton > button:nth-of-type(2)").css({"color": "#174fff", "border-bottom": "3px solid #174fff"})

    status_ = "U18"
    standings()
}

function standingsU15() {
    $("#standingsA").css("display", "none")
    $("#standingsU18").css("display", "none")
    $("#standingsU15").css("display", "block")

    $(".standingsButton > button").css({"color": "#000831", "border-bottom": "none"})
    $(".standingsButton > button:nth-of-type(3)").css({"color": "#174fff", "border-bottom": "3px solid #174fff"})

    status_ = "U15"
    standings()
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