// 새로고침 시
$(document).ready(function() {

    // url 불러오기
    url = window.location.href

    // 쿼리스트링 제거
    if (window.location.search.includes("fbclid")) {
        var url = new URL(window.location.href);
        url.searchParams.delete("fbclid");

        if (url.search.endsWith("=")) {
            url.search = url.search.slice(0, -1);
        }

        history.replaceState(null, "", url.pathname + url.search + url.hash);
    }

    // 화면 너비 300px 이하일 때 경고
    if ($(window).width() < 300) {
        $("body").append("<div style='width: 80vw; height: 65px; padding: 0 10vw; background: #faf6f5; position: fixed; bottom: 0; left: 0; font-size: 14px; font-weight: 300; z-index: 300; display: flex; align-items: center; justify-content: center;'>기기의 화면 크기가 작아 페이지가 정상적으로 보이지 않을 수 있습니다.</div>")
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
    if ((after >= 768 && before < 768) || (after < 768 && before >= 768)) {
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
    $("body").append("<footer glass='true'><p>이 웹사이트는 팬이 운영하는 비공식 팬 페이지이며,<br>제공되는 데이터는 정확성을 보장하지 않습니다.</p><img src='https://sefc.info/files/x.svg'></footer>")
}

$("footer > img").click(function () {
    localStorage.setItem("footer", "x")
    $("footer").css("display", "none")
})

// 메뉴
$("body").append("<div id='menu' glass='true'><div transl='y'><img src='https://sefc.info/files/home.svg'>홈</div><div transl='y'><img src='https://sefc.info/files/fixtures.svg'>일정</div><div transl='y'><img src='https://sefc.info/files/players.svg'>선수단</div><div transl='y'><img src='https://sefc.info/files/stats.svg'>기록</div><div transl='y'><img src='https://sefc.info/files/standings.svg'>순위</div><div transl='y'><img src='https://sefc.info/files/chants.svg'>응원가</div><div transl='y'><img src='https://sefc.info/files/stadium.svg'>직관 가이드</div><div id='selectLang'><img src='https://sefc.info/files/lang.svg'><div><p l='ko'>KO</p><p l='en'>EN</p><p l='pt'>PT</p><p l='es'>ES</p><p l='jp'>JP</p></div></div><a href='https://naver.me/GlJ18AQh' target='_blank' transl='y'>오류 제보 및 건의</a><img class='bannerMenu' src='https://sefc.info/files/banner_1.jpg'></div><div id='menuBg' glass='true'></div>")

// 메뉴 번역
if (localStorage.getItem("lang") == "en") $("#menu > div:nth-of-type(5)").html("<img src='https://sefc.info/files/standings.svg'>Standings")
else if (localStorage.getItem("lang") == "pt") $("#menu > div:nth-of-type(5)").html("<img src='https://sefc.info/files/standings.svg'>Standings")
else if (localStorage.getItem("lang") == "es") $("#menu > div:nth-of-type(5)").html("<img src='https://sefc.info/files/standings.svg'>Clasificaciones")
else if (localStorage.getItem("lang") == "jp") $("#menu > div:nth-of-type(5)").html("<img src='https://sefc.info/files/standings.svg'>順位表")

// 언어 선택 버튼
if (localStorage.getItem("lang") == null) localStorage.setItem("lang", "ko");

$(`#menu > div:nth-last-of-type(1) > div > p[l="${localStorage.getItem("lang")}"]`).css("font-weight", "900")

$("#menu > div:nth-last-of-type(1) > div > p").filter(function() {
        return $(this).css("font-weight") == 600;
    }).css("display", "none")
    
el = $("#menu > div:nth-last-of-type(1) > div");

$("#menu > div:nth-last-of-type(1)").click(function() {
    cnt = el.find("p").filter(function() {
        return $(this).css("display") == "block";
    }).length;

    if (cnt == 1) el.find("p").css("display", "block");
    else el.find("p").filter(function() {
        return $(this).css("font-weight") == 600;
    }).css("display", "none")
})

$("#menu > div:nth-last-of-type(1) > div > p").click(function() {
    cnt = el.find("p").filter(function() {
        return $(this).css("display") == "block";
    }).length;

    if (cnt > 1) {
        localStorage.setItem("lang", $(this).attr("l"));
        $("#menu > div:nth-last-of-type(1) > div > p").css("font-weight", "600");
        $(this).css("font-weight", "900");

        console.log(`${$(this).attr("l")}로 언어 변경`);

        window.location.reload()
    }
})

// 상단 클릭 시 홈으로 이동
$("header > div:nth-of-type(2)").click(function() {
    window.location = "https://sefc.info"
})

// 매년 7월 7일 메인 로고, 배너 변경
if (new Date().getMonth() == 6 && new Date().getDate() == 7) {
    $("header > div:nth-of-type(2) > img").attr("src", "https://sefc.info/files/july7th.svg")
    $(".bannerMenu:nth-of-type(1)").attr("src", "https://sefc.info/files/july7th_1.png").css("pointer-events", "none")
    $(".bannerFixtures > img").attr("src", "https://sefc.info/files/july7th_2.png").parent().css("pointer-events", "none")
}

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
    window.location = "https://sefc.info/stadium"
})

// 배너 클릭 시 페이지 이동
$(".bannerMenu:nth-of-type(1), .bannerFixtures").click(function() {
    window.open("https://linktr.ee/sefcnuevo")
})
$(".instaMenu:nth-of-type(1)").click(function() {
    window.open("https://www.instagram.com/sefcinfo/")
})

// 모바일 버전에서 일정 페이지 배너 숨기기
if ($(window).width() < 768) {
    $(".bannerFixtures").css("display", "none")
}

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
} else if ($("#selectStadium").length || $("#stadium").length || $("#subway").length || $("#bus").length || $("#parking").length || $("#addFnb").length) {
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

    $(".playerButton > button").css({"color": "#05090a", "background": "#faf6f540"})
    $(".playerButton > button:nth-of-type(1)").css({"color": "#faf6f5", "background": "#000060c0"})
}

function playerU18() {
    $("#playerA").css("display", "none")
    $("#playerU18").css("display", "block")
    $("#playerU15").css("display", "none")

    $(".playerButton > button").css({"color": "#05090a", "background": "#faf6f540"})
    $(".playerButton > button:nth-of-type(2)").css({"color": "#faf6f5", "background": "#000060c0"})
}

function playerU15() {
    $("#playerA").css("display", "none")
    $("#playerU18").css("display", "none")
    $("#playerU15").css("display", "block")

    $(".playerButton > button").css({"color": "#05090a", "background": "#faf6f540"})
    $(".playerButton > button:nth-of-type(3)").css({"color": "#faf6f5", "background": "#000060c0"})
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
    $(".fixturesButton > button").css({"color": "#05090a", "background": "#faf6f540"})
    $(".fixturesButton > button:nth-of-type(3)").css({"color": "#faf6f5", "background": "#000060c0"})

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

    transl()
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

    transl()
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

    transl()
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

    $(".standingsButton > button").css({"color": "#05090a", "background": "#faf6f540"})
    $(".standingsButton > button:nth-of-type(1)").css({"color": "#faf6f5", "background": "#000060c0"})

    status_ = "A"
    year = new Date().getFullYear()
    window.history.replaceState({}, "", window.location.href.split("?")[0] + "?" + year + "?" + status_)
    standings()
}

function standingsU18() {
    $("#standingsA").css("display", "none")
    $("#standingsU18").css("display", "block")
    $("#standingsU15").css("display", "none")

    $(".standingsButton > button").css({"color": "#05090a", "background": "#faf6f540"})
    $(".standingsButton > button:nth-of-type(2)").css({"color": "#faf6f5", "background": "#000060c0"})

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

    $(".standingsButton > button").css({"color": "#05090a", "background": "#faf6f540"})
    $(".standingsButton > button:nth-of-type(3)").css({"color": "#faf6f5", "background": "#000060c0"})

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

    $(".statsButton > button").css({"color": "#05090a", "background": "#faf6f540"})
    $(".statsButton > button:nth-of-type(1)").css({"color": "#faf6f5", "background": "#000060c0"})

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

    $(".statsButton > button").css({"color": "#05090a", "background": "#faf6f540"})
    $(".statsButton > button:nth-of-type(2)").css({"color": "#faf6f5", "background": "#000060c0"})

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

    $(".statsButton > button").css({"color": "#05090a", "background": "#faf6f540"})
    $(".statsButton > button:nth-of-type(3)").css({"color": "#faf6f5", "background": "#000060c0"})

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
    teamChants = ["SEFC 콜", "서울 이랜드 콜(1)", "서울 이랜드 콜(2)", "2 3 4 서울 콜", "3 3 4 2 서울 콜", "승리하라 서울 콜", "뛰어 뛰어 서울 콜", "세트피스 콜", "하나되어<span>(선수단 입장 시)</span>", "사랑해 서울 이랜드<span>(선수단 인사 시)</span>", "서울의 노래", "사랑한다 서울", "우리는 서울 이랜드", "한강에서부터 제주까지", "표범의 전사들", "앞으로 가자", "둥글게 둥글게", "포에버", "항상 사랑할 거야", "푸른 심장", "서울 승리를 향해", "We Cheer for Seoul", "서울을 위해 달려라", "서울의 아리아", "너를 태우고", "페파스", "우리는 항상 여기에", "우리 모두 다 같이<span>(경기 승리 세리머니)</span>", "샤랄라 SEFC<span>(경기 승리 세리머니)</span>", "좌로 우로<span>(카니발)</span>", "뱃놀이<span>(카니발)</span>"]
    playersChants = ["캡틴 콜", "득점 콜", "오스마르 콜(1)", "오스마르 콜(2)", "변경준 콜"]

    for (i = 0; i < Object.keys(teamChants).length; i++) {
        $("#team").append("<div glass='true' transl='y'>" + teamChants[i] + "</div>")
    }

    for (i = 0; i < Object.keys(playersChants).length; i++) {
        $("#players").append("<div glass='true' transl='y'>" + playersChants[i] + "</div>")
    }

    $("#team").children("div").on("click", function () {
        window.location = "./chants/team?" + $(this).index()
    })

    $("#players").children("div").on("click", function () {
        window.location = "./chants/players?" + $(this).index()
    })

    transl()

    $("#team > div > span, #players > div > span").each(function () {
        if ($(this).text().includes("()")) {
            $(this).remove();
        }
    });
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

    if (chantsName == "서울 이랜드 콜(1)") {
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

    if (chantsName == "서울 이랜드 콜(2)") {
        chantsUrl = "g7zcA27FN5Q"
        original = "Uptown Funk"

        timeMapping = [
            {time: 3, elementId: "lyrics-1"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>서울 이랜드 서울 이랜드</p>")
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

    if (chantsName == "3 3 4 2 서울 콜") {
        chantsUrl = "fRxMNt_J2Ts"

        timeMapping = [
            {time: 2.9, elementId: "lyrics-1"},
            {time: 9.4, elementId: "lyrics-2"},
            {time: 12.6, elementId: "lyrics-3"},
            {time: 15.9, elementId: "lyrics-1"},
            {time: 22, elementId: "lyrics-2"},
            {time: 25.6, elementId: "lyrics-3"},
            {time: 28.9, elementId: "lyrics-1"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>서울 서울 서울 오</p><p id='lyrics-2'>짝짝짝 짝짝짝 짝짝짝짝 짝짝</p><p id='lyrics-3'>짝짝짝 짝짝짝 짝짝짝짝 짝짝</p>")
    }

    if (chantsName == "샤랄라 SEFC") {
        chantsUrl = "kMggPKSa2AU"

        timeMapping = [
            {time: 3, elementId: "lyrics-1"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>샤랄라랄라랄라 SEFC</p>")
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

    if (chantsName == "뛰어 뛰어 서울 콜") {
        chantsUrl = "SfEogkJ9eMo"

        timeMapping = [
            {time: 3.6, elementId: "lyrics-1"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>뛰어 뛰어 뛰어 뛰어 서울</p>")
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
        original = "When the Saints Go Marching In"

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

    if (chantsName == "좌로 우로") {
        chantsUrl = "2pUSfvzW_JM"
        original = "Links Rechts"

        timeMapping = [
            {time: 6, elementId: "lyrics-1"},
            {time: 9.2, elementId: "lyrics-2"},
            {time: 12.6, elementId: "lyrics-3"},
            {time: 15.9, elementId: "lyrics-4"},
            {time: 18.6, elementId: "lyrics-5"},
            {time: 22, elementId: "lyrics-6"},
            {time: 25.3, elementId: "lyrics-7"},
            {time: 28.5, elementId: "lyrics-8"},
            {time: 32, elementId: "lyrics-9"},
            {time: 35.3, elementId: "lyrics-10"},
            {time: 38.7, elementId: "lyrics-11"},
            {time: 42, elementId: "lyrics-12"},
            {time: 45, elementId: "lyrics-1"},
            {time: 48.2, elementId: "lyrics-2"},
            {time: 51.6, elementId: "lyrics-3"},
            {time: 54.9, elementId: "lyrics-4"},
            {time: 57.9, elementId: "lyrics-5"},
            {time: 61, elementId: "lyrics-6"},
            {time: 64.1, elementId: "lyrics-7"},
            {time: 67.5, elementId: "lyrics-8"},
            {time: 71.1, elementId: "lyrics-9"},
            {time: 74, elementId: "lyrics-10"},
            {time: 77.7, elementId: "lyrics-11"},
            {time: 81, elementId: "lyrics-12"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>푸른 도시 위를 질주하여라</p><p id='lyrics-2'>피 끓는 심장이 터질 때까지</p><p id='lyrics-3'>승리 위해 뛰어 저 표범처럼</p><p id='lyrics-4'>좌로 우로 뛰면서 서울을 외치자</p><p id='lyrics-5'>좌로 뜨드 뜨드 뜨드</p><p id='lyrics-6'>우로 뜨드 뜨드 뜨드</p><p id='lyrics-7'>좌로 뜨드 뜨드 뜨드</p><p id='lyrics-8'>우로 뜨드 뜨드 뜨드</p><p id='lyrics-9'>뜨뜨드드드드 뜨뜨드드드</p><p id='lyrics-10'>뜨뜨드드드드 뜨드드뜨드드</p><p id='lyrics-11'>뜨뜨드드드드 뜨뜨드드드</p><p id='lyrics-12'>뜨드뜨드드뜨드드 뜨드드뜨드드</p>")
    }

    if (chantsName == "둥글게 둥글게") {
        chantsUrl = "8h1k988BO8s"
        original = "둥글게 둥글게"

        timeMapping = [
            {time: 6, elementId: "lyrics-1"},
            {time: 9.3, elementId: "lyrics-2"},
            {time: 12.8, elementId: "lyrics-3"},
            {time: 16, elementId: "lyrics-4"},
            {time: 19.4, elementId: "lyrics-5"},
            {time: 23, elementId: "lyrics-6"},
            {time: 26, elementId: "lyrics-7"},
            {time: 29.4, elementId: "lyrics-8"},
            {time: 33, elementId: "lyrics-1"},
            {time: 36.3, elementId: "lyrics-2"},
            {time: 39.6, elementId: "lyrics-3"},
            {time: 42.8, elementId: "lyrics-4"},
            {time: 46.1, elementId: "lyrics-5"},
            {time: 49.5, elementId: "lyrics-6"},
            {time: 52.6, elementId: "lyrics-7"},
            {time: 56, elementId: "lyrics-8"},
            {time: 59.1, elementId: "lyrics-1"},
            {time: 62.4, elementId: "lyrics-2"},
            {time: 65.7, elementId: "lyrics-3"},
            {time: 68.9, elementId: "lyrics-4"},
            {time: 72.2, elementId: "lyrics-5"},
            {time: 75.6, elementId: "lyrics-6"},
            {time: 78.8, elementId: "lyrics-7"},
            {time: 82.2, elementId: "lyrics-8"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>승리를 위하여 다 함께 일어나</p><p id='lyrics-2'>서울 이랜 승리 위해 함께 외치자</p><p id='lyrics-3'>깃발을 흔들며 북 소리 맞춰서</p><p id='lyrics-4'>라라라라 머플러를 힘껏 돌리자</p><p id='lyrics-5'>알레 알레 알레 서울 이랜드</p><p id='lyrics-6'>알레 알레 알레 서울 이랜드</p><p id='lyrics-7'>함께 나아가자 포르차 서울</p><p id='lyrics-8'>하나되어 불러 봅시다</p>")
    }

    if (chantsName == "포에버") {
        chantsUrl = "r021bEbcxtE"
        original = "Si Nos Organizamos..."

        timeMapping = [
            {time: 3, elementId: "lyrics-1"},
            {time: 11.3, elementId: "lyrics-2"},
            {time: 15.3, elementId: "lyrics-3"},
            {time: 19.6, elementId: "lyrics-4"},
            {time: 23.3, elementId: "lyrics-5"},
            {time: 27.4, elementId: "lyrics-1"},
            {time: 35.9, elementId: "lyrics-2"},
            {time: 39.9, elementId: "lyrics-3"},
            {time: 44, elementId: "lyrics-4"},
            {time: 48, elementId: "lyrics-5"},
            {time: 52.2, elementId: "lyrics-1"},
            {time: 60.7, elementId: "lyrics-2"},
            {time: 64.8, elementId: "lyrics-3"},
            {time: 68.9, elementId: "lyrics-4"},
            {time: 72.9, elementId: "lyrics-5"},
            {time: 77, elementId: "lyrics-1"},
            {time: 85.2, elementId: "lyrics-2"},
            {time: 89.4, elementId: "lyrics-3"},
            {time: 93.7, elementId: "lyrics-4"},
            {time: 97.7, elementId: "lyrics-5"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>오 나의 서울 오 나의 서울</p><p id='lyrics-2'>어떠한 시련들이 다가와도</p><p id='lyrics-3'>우리는 항상 이곳을 지킨다네</p><p id='lyrics-4'>영광의 날이 다가올 때까지</p><p id='lyrics-5'>우리의 사랑 영원히 변함없네</p>")
    }

    if (chantsName == "항상 사랑할 거야") {
        chantsUrl = "80WBRiLRC9M"
        original = "Vamos, Vamos Azulcrema, Vamos a Ganar"

        timeMapping = [
            {time: 6.9, elementId: "lyrics-1"},
            {time: 11.1, elementId: "lyrics-2"},
            {time: 15.5, elementId: "lyrics-3"},
            {time: 19.8, elementId: "lyrics-4"},
            {time: 24, elementId: "lyrics-1"},
            {time: 28, elementId: "lyrics-2"},
            {time: 32.4, elementId: "lyrics-3"},
            {time: 36.8, elementId: "lyrics-4"},
            {time: 41, elementId: "lyrics-1"},
            {time: 45.1, elementId: "lyrics-2"},
            {time: 49.2, elementId: "lyrics-3"},
            {time: 53.8, elementId: "lyrics-4"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>가자 가자 서울은 승리하리라</p><p id='lyrics-2'>이 목소리는 멈추지 않을 거야</p><p id='lyrics-3'>너희가 어디 있든 따라가리라</p><p id='lyrics-4'>항상 사랑할 거야</p>")
    }

    if (chantsName == "푸른 심장") {
        chantsUrl = "V1IA-3XdjRw"
        original = "Corazon Rojinegro"

        timeMapping = [
            {time: 6.9, elementId: "lyrics-1"},
            {time: 11.2, elementId: "lyrics-2"},
            {time: 15.1, elementId: "lyrics-3"},
            {time: 19.2, elementId: "lyrics-4"},
            {time: 22.4, elementId: "lyrics-5"},
            {time: 23.8, elementId: "lyrics-6"},
            {time: 27.7, elementId: "lyrics-7"},
            {time: 31.8, elementId: "lyrics-8"},
            {time: 36, elementId: "lyrics-9"},
            {time: 38.8, elementId: "lyrics-10"},
            {time: 40, elementId: "lyrics-1"},
            {time: 44.2, elementId: "lyrics-2"},
            {time: 48.1, elementId: "lyrics-3"},
            {time: 52.2, elementId: "lyrics-4"},
            {time: 55.4, elementId: "lyrics-5"},
            {time: 56.8, elementId: "lyrics-6"},
            {time: 60.7, elementId: "lyrics-7"},
            {time: 64.8, elementId: "lyrics-8"},
            {time: 69, elementId: "lyrics-9"},
            {time: 71.8, elementId: "lyrics-10"},
            {time: 40, elementId: "lyrics-1"},
            {time: 44.2, elementId: "lyrics-2"},
            {time: 48.1, elementId: "lyrics-3"},
            {time: 52.2, elementId: "lyrics-4"},
            {time: 55.4, elementId: "lyrics-5"},
            {time: 56.8, elementId: "lyrics-6"},
            {time: 60.7, elementId: "lyrics-7"},
            {time: 64.8, elementId: "lyrics-8"},
            {time: 69, elementId: "lyrics-9"},
            {time: 71.8, elementId: "lyrics-10"},
            {time: 73, elementId: "lyrics-1"},
            {time: 77.2, elementId: "lyrics-2"},
            {time: 81.1, elementId: "lyrics-3"},
            {time: 85.2, elementId: "lyrics-4"},
            {time: 88.4, elementId: "lyrics-5"},
            {time: 89.8, elementId: "lyrics-6"},
            {time: 93.7, elementId: "lyrics-7"},
            {time: 97.8, elementId: "lyrics-8"},
            {time: 102, elementId: "lyrics-9"},
            {time: 104.8, elementId: "lyrics-10"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>그대와 이 길을 같이 걷는다면</p><p id='lyrics-2'>나는 그 누구도 두렵지가 않네</p><p id='lyrics-3'>우리의 가슴에 불을 지핀다면</p><p id='lyrics-4'>나는 그 누구도 부럽지가 않네</p><p id='lyrics-5'>라라라라</p><p id='lyrics-6'>자 가자 가자 앞으로</p><p id='lyrics-7'>터뜨려 너의 푸른 심장을</p><p id='lyrics-8'>자 가자 가자 앞으로</p><p id='lyrics-9'>터뜨려 너의 푸른 심장</p><p id='lyrics-10'>라라라라</p>")
    }

    if (chantsName == "서울 승리를 향해") {
        chantsUrl = "Aes0LShAauM"
        original = "Bud Like You"

        timeMapping = [
            {time: 5.3, elementId: "lyrics-1"},
            {time: 8.9, elementId: "lyrics-2"},
            {time: 12.6, elementId: "lyrics-3"},
            {time: 15.9, elementId: "lyrics-4"},
            {time: 19.3, elementId: "lyrics-1"},
            {time: 22.9, elementId: "lyrics-2"},
            {time: 26.6, elementId: "lyrics-3"},
            {time: 29.9, elementId: "lyrics-4"},
            {time: 33.3, elementId: "lyrics-1"},
            {time: 36.9, elementId: "lyrics-2"},
            {time: 40.6, elementId: "lyrics-3"},
            {time: 43.9, elementId: "lyrics-4"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>서울 서울 승리를 향해</p><p id='lyrics-2'>언젠가는 찾아오리 영광의 그날</p><p id='lyrics-3'>서울 서울 승리를 향해</p><p id='lyrics-4'>별을 다는 순간까지 모두 외쳐라</p>")
    }

    if (chantsName == "We Cheer for Seoul") {
        chantsUrl = "rEkqhK96icg"

        timeMapping = [
            {time: 3, elementId: "lyrics-1"},
            {time: 6, elementId: "lyrics-2"},
            {time: 9, elementId: "lyrics-3"},
            {time: 11.9, elementId: "lyrics-4"},
            {time: 14.8, elementId: "lyrics-5"},
            {time: 20.8, elementId: "lyrics-6"},
            {time: 27.8, elementId: "lyrics-7"},
            {time: 34, elementId: "lyrics-8"},
            {time: 41.6, elementId: "lyrics-1"},
            {time: 44.7, elementId: "lyrics-2"},
            {time: 47.6, elementId: "lyrics-3"},
            {time: 50.6, elementId: "lyrics-4"},
            {time: 53.3, elementId: "lyrics-5"},
            {time: 59.9, elementId: "lyrics-6"},
            {time: 66, elementId: "lyrics-7"},
            {time: 72.7, elementId: "lyrics-8"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>서울 서울 갖다 박아 버려</p><p id='lyrics-2'>서울 서울 때려 부숴 버려</p><p id='lyrics-3'>서울 서울 갖다 박아 버려</p><p id='lyrics-4'>서울 서울 때려 부숴 버려</p><p id='lyrics-5'>올레 올레오 서울 이랜</p><p id='lyrics-6'>올레 올레오 서울 이랜</p><p id='lyrics-7'>올레 올레오 서울 이랜</p><p id='lyrics-8'>올레 올레오 서울 이랜</p>")
    }

    if (chantsName == "서울을 위해 달려라") {
        chantsUrl = "aaKGkYKbeTA"
        original = "Runner"

        timeMapping = [
            {time: 6.6, elementId: "lyrics-1"},
            {time: 10.7, elementId: "lyrics-2"},
            {time: 14.5, elementId: "lyrics-3"},
            {time: 18.4, elementId: "lyrics-4"},
            {time: 22.4, elementId: "lyrics-1"},
            {time: 26.2, elementId: "lyrics-2"},
            {time: 30.3, elementId: "lyrics-3"},
            {time: 34.1, elementId: "lyrics-4"},
            {time: 38.1, elementId: "lyrics-5"},
            {time: 42, elementId: "lyrics-6"},
            {time: 46, elementId: "lyrics-7"},
            {time: 49.9, elementId: "lyrics-8"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>달려라 달려라 서울을 위해</p><p id='lyrics-2'>흐르는 땀을 바람에 흩뿌리며</p><p id='lyrics-3'>힘들고 숨이 차 넘어져도</p><p id='lyrics-4'>또 다시 일어나 앞으로 나아가리</p><p id='lyrics-5'>라라라 라라라 라라라 라라</p><p id='lyrics-6'>라라라 라라라라라라 라라라라</p><p id='lyrics-7'>라라라 라라라 라라라 라라</p><p id='lyrics-8'>라라라 라라라라라라 라 라라</p>")
    }

    if (chantsName == "캡틴 콜") {
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

    if (chantsName == "변경준 콜") {
        chantsUrl = "lBfPmmageI0"
        original = "슈퍼맨"

        timeMapping = [
            {time: 6, elementId: "lyrics-1"},
            {time: 9.3, elementId: "lyrics-2"},
            {time: 12.8, elementId: "lyrics-3"},
            {time: 16, elementId: "lyrics-4"},
            {time: 19, elementId: "lyrics-1"},
            {time: 22.3, elementId: "lyrics-2"},
            {time: 25.8, elementId: "lyrics-3"},
            {time: 29, elementId: "lyrics-4"},
            {time: 32, elementId: "lyrics-1"},
            {time: 35.3, elementId: "lyrics-2"},
            {time: 38.8, elementId: "lyrics-3"},
            {time: 42, elementId: "lyrics-4"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>치고 달려나가 서울 변경준</p><p id='lyrics-2'><ruby><rb>◌◌</rb><rp>(</rp><rt>상대</rt><rp>)</rp></ruby> 부숴 버려 서울 변경준</p><p id='lyrics-3'>멋지구나 잘생겼다 잔디 위의 푸른 야수</p><p id='lyrics-4'>스피드가 장난 아니지</p>")
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
                lastElement.style.color = "#05090a"
                lastElement.style.fontWeight = "300"
                lastElement.querySelectorAll("ruby, rb, rp, rt").forEach(el => {
                    el.style.color = "#05090a"
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
            document.getElementById(elementId).style.color = "#05090a"
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

// 직관 가이드
$("#selectStadium > a").click(function(e) {
    if ($(e.target).is("button")) return;

    $("#selectStadium > a").css("cursor", "pointer");
    $("#selectStadium > a > div > img").css("display", "inline");
    $("#selectStadium > a > div > button").remove();
    $(this).css("cursor", "auto");
    $(this).find("div > img").css("display", "none");
    $(this).find("div").append("<button glass='true' transl='y'>관중석 시야</button><button glass='true' transl='y'>교통 및 주차</button><button glass='true' transl='y'>주변 맛집</button>");

    stadium = $(this).closest("a").find("p").contents().filter(function() {
        return this.nodeType === 3;
    }).text().trim();

    // 관중석 시야 미지원 경기장
    if (stadium == "광양축구전용구장" || stadium == "천안종합운동장" || stadium == "청주종합경기장" || stadium == "이순신종합운동장") {
        $(this).find("div > button:nth-of-type(1)").css("opacity", 0.3).attr("class", "noHover")
    };

    // 교통 및 주차 미지원 경기장
    if (stadium == "광양축구전용구장" || stadium == "김포솔터축구장" || stadium == "구덕운동장" || stadium == "부천종합운동장" || stadium == "안산와~스타디움" || stadium == "이순신종합운동장" || stadium == "인천축구전용경기장" || stadium == "창원축구센터 주경기장" || stadium == "천안종합운동장" || stadium == "청주종합경기장" || stadium == "탄천종합운동장" || stadium == "화성종합경기타운 주경기장") {
        $(this).find("div > button:nth-of-type(2)").css("opacity", 0.3).attr("class", "noHover")
    };

    // 주변 맛집 미지원 경기장
    if (stadium == "광양축구전용구장" || stadium == "김포솔터축구장" || stadium == "구덕운동장" || stadium == "부천종합운동장" || stadium == "안산와~스타디움" || stadium == "이순신종합운동장" || stadium == "인천축구전용경기장" || stadium == "창원축구센터 주경기장" || stadium == "천안종합운동장" || stadium == "화성종합경기타운 주경기장") {
        $(this).find("div > button:nth-of-type(3)").css("opacity", 0.3).attr("class", "noHover")
    };

    transl()
});

if ($("#selectStadium").length) {
    $("#actualContents").click(function(e) {
        if ($(e.target).closest("#selectStadium > a").length) {
            return;
        }

        $("#selectStadium > a > div > img").css("display", "inline");
        $("#selectStadium > a > div > button").remove();
    });

    transl()
}

// 관중석 시야 페이지로 이동
$("#selectStadium").on("click", "a > div > button:nth-of-type(1)", function() {
    stadium = $(this).closest("a").find("p").contents().filter(function() {
        return this.nodeType === 3;
    }).text().trim();

    if (stadium == "이순신종합운동장") alert(`준비 중입니다.`);
    else if ($(this).attr("class") == "noHover") alert(`${stadium}은 비지정석제로, 관중석 시야 확인 기능을 제공하지 않습니다.`);
    else window.location = `./seats/${$(this).closest("a").attr("id")}`
});

// 교통 및 주차 페이지로 이동
$("#selectStadium").on("click", "a > div > button:nth-of-type(2)", function() {
    stadium = $(this).closest("a").find("p").contents().filter(function() {
        return this.nodeType === 3;
    }).text().trim();

    if ($(this).attr("class") == "noHover") alert(`준비 중입니다.`);
    else window.location = `./trans/${$(this).closest("a").attr("id")}`
});

// 주변 맛집 페이지로 이동
$("#selectStadium").on("click", "a > div > button:nth-of-type(3)", function() {
    stadium = $(this).closest("a").find("p").contents().filter(function() {
        return this.nodeType === 3;
    }).text().trim();

    if ($(this).attr("class") == "noHover") alert(`준비 중입니다.`);
    else window.location = `./fnb/${$(this).closest("a").attr("id")}`
});

if ($("#stadium").length) {
    let cnt = 0;

    // stadium 이름 추출
    const baseName = window.location.href.split("/").pop().replace(".html", "");

    // 숫자 → 알파벳 변환 함수 (1→A, 2→B, ...)
    function numberToLetter(num) {
        if (num >= 1 && num <= 26) {
            return String.fromCharCode(64 + num);
        }
        return '';
    }

    // 알파벳 → 숫자 변환 함수 (A→1, B→2, ...)
    function letterToNumber(letter) {
        if (/^[A-Z]$/.test(letter)) {
            return letter.charCodeAt(0) - 64;
        }
        return NaN;
    }

    // 사진 존재하는지 판단하는 함수
    function checkImgExists(url, callback) {
        const img = new Image();
        img.onload = function() {
            callback(true);
        };
        img.onerror = function() {
            callback(false);
        };
        img.src = url;
    }

    // 비동기(Promise)로 사진 존재 여부 체크
    function checkImgExistsAsync(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(url);
            img.onerror = () => resolve(null);
            img.src = url;
        });
    }

    // 구역별 사진 존재 여부 캐시 (메모리, 새로고침 시 사라짐)
    const seatsPhotoCache = {};

    // 사진 있는 좌석 표시 (병렬화, 메모리 캐시만 활용)
    async function markSeatsWithPhotos(rowGs, id) {
        // 좌석 열을 알파벳으로 표기하는 경기장 캐시 키도 알파벳 ver 사용
        const cacheKey = id;
        if (seatsPhotoCache[cacheKey]) {
            for (let i = 0; i < rowGs.length; i++) {
                const $rects = rowGs.eq(i).find("rect");
                const hor = $rects.length;
                // 좌석 열을 알파벳으로 표기하는 경기 i+1을 알파벳으로 변환
                let verKey = (baseName === 'tancheon' || baseName === 'hwaseong' || baseName ==='incheon') ? numberToLetter(i + 1) : (i + 1);
                for (let j = 0; j < hor; j++) {
                    if (seatsPhotoCache[cacheKey][verKey] && seatsPhotoCache[cacheKey][verKey][j + 1]) {
                        $rects.eq(hor - 1 - j).css("opacity", "1");
                    }
                }
            }
            return;
        }

        seatsPhotoCache[cacheKey] = {};
        let tasks = [];
        for (let i = 0; i < rowGs.length; i++) {
            const $rects = rowGs.eq(i).find("rect");
            const hor = $rects.length;
            // 좌석 열을 알파벳으로 표기하는 경기장 열을 알파벳으로 변환
            let verKey = (baseName === 'tancheon' || baseName === 'hwaseong' || baseName ==='incheon') ? numberToLetter(i + 1) : (i + 1);
            seatsPhotoCache[cacheKey][verKey] = {};
            for (let j = 0; j < hor; j++) {
                let horKey = j + 1;
                tasks.push((async () => {
                    // 좌석 열을 알파벳으로 표기하는 경기 파일명도 알파벳 ver 사용
                    let fileVer = (baseName === 'tancheon' || baseName === 'hwaseong' || baseName ==='incheon') ? verKey : (i + 1);
                    const url = `../files/${baseName}_${id}_${fileVer}_${horKey}.jpg`;
                    const result = await checkImgExistsAsync(url);
                    seatsPhotoCache[cacheKey][verKey][horKey] = !!result;
                    if (result) {
                        $rects.eq(hor - 1 - j).css("opacity", "1");
                    }
                })());
            }
        }
        await Promise.all(tasks);
    }

    $("#stadium > g > g").off("click").on("click", async function(e) {
        e.stopPropagation();

        const id = $(this).attr("id");

        $("#seats, #" + id).css("display", "block");

        const rowGs = $(`#${id} > svg > g > g > g`).filter(function() {
            return $(this).find("rect").length > 0;
        });

        const ver = rowGs.length;

        $("#seats").data({
            id: id,
            rowGs: rowGs,
            ver: ver
        });

        await markSeatsWithPhotos(rowGs, id);

        $("#seats").append("<button transl='y'>돌아가기</button>");

        $("#seats > div").css("pointer-events", "auto");

        transl()
    });

    $("#seats").on("click", "button", function() {
        $("#seats, #seats > div").css("display", "none");
        $("#seats > button").remove();
        $("#seats").removeData("id rowGs ver");
    });

    $("#seats > div > svg > g > g > g > rect").on("click", function() {
        const $rect = $(this);
        const $parentG = $rect.parent();

        const id = $("#seats").data("id");
        const rowGs = $("#seats").data("rowGs");
        let ver = rowGs ? rowGs.index($parentG) + 1 : 0;
        let hor = $parentG.find("rect").length - $parentG.find("rect").index($rect);

        // 좌석 열을 알파벳으로 표기하는 경기장의 열 알파벳 변환
        let displayVer = ver;
        let cacheVerKey = ver;
        let fileVerKey = ver;
        if ((baseName === 'tancheon' || baseName === 'hwaseong' || baseName ==='incheon') && ver > 0) {
            displayVer = numberToLetter(ver);
            cacheVerKey = displayVer;
            fileVerKey = displayVer;
        }

        $("#seatsPopUp").animate({ opacity: "1" }, 100).css("pointer-events", "auto").empty();
        $("#seatsPopUpBG").animate({ opacity: "1" }, 100).css("pointer-events", "auto");

        $("#seatsPopUp").append(`<p>${id}구역 ${displayVer}열 ${hor}번</p>`);

        // 좌석 열을 알파벳으로 표기하는 경기 캐시 알파벳 ver 사용
        let hasPhoto = false;
        if (seatsPhotoCache[id] && seatsPhotoCache[id][cacheVerKey] && seatsPhotoCache[id][cacheVerKey][hor]) {
            hasPhoto = true;
        }

        // 좌석 열을 알파벳으로 표기하는 경기 파일명 알파벳 ver 사용
        if (hasPhoto) {
            $("#seatsPopUp").append(
                `<img src='../files/${baseName}_${id}_${fileVerKey}_${hor}.jpg'><button transl='y'>사진 추가하기</button>`
            );
        } else {
            $("#seatsPopUp").append("<p transl='y'>해당 좌석의 사진이 없습니다.</p><button transl='y'>사진 추가하기</button>");
        }

        transl()
    });

    $("#seatsPopUp").on("click", "button", function() {
        window.open("https://naver.me/FutjIQDR");
    });

    $("#seatsPopUpBG").click(function() {
        $("#seatsPopUp").animate({ opacity: "0" }, 100).css("pointer-events", "none");
        $("#seatsPopUpBG").animate({ opacity: "0" }, 100).css("pointer-events", "none");
    });

    $(document).on("keydown", function (e) {
        if (e.key === "Escape") {
            if ($("#seatsPopUp").css("opacity") === "1" && $("#seatsPopUp").css("pointer-events") !== "none") {
                $("#seatsPopUp").animate({ opacity: "0" }, 100).css("pointer-events", "none");
                $("#seatsPopUpBG").animate({ opacity: "0" }, 100).css("pointer-events", "none");
            } else {
                $("#seats, #seats > div").css("display", "none");
                $("#seats > div").css("pointer-events", "none");
                $("#seats > button").remove();
                $("#seats").removeData("id rowGs ver");
            }
        }
    });
}

// 번역
function transl() {

    transList = {
        
        // 대회명
        "K리그1": ["K League 1", "K League 1", "K League 1", "Kリーグ1"],
        "K리그2": ["K League 2", "K League 2", "K League 2", "Kリーグ2"],
        "K리그 클래식": ["K League Classic", "K League Classic", "K League Classic", "Kリーグクラシック"],
        "K리그 챌린지": ["K League Challenge", "K League Challenge", "K League Challenge", "Kリーグチャレンジ"],
        "K리그": ["K League", "K League", "K League", "Kリーグ"],
        "코리아컵": ["Korean Cup", "Korean Cup", "Korean Cup", "コリアカップ"],
        "챔피언십": ["Championship", "Championship", "Championship", "チャンピオンシップ"],
        "주니어": ["Junior", "Junior", "Junior", "ジュニア"],
        "대한축구협회장배 전국고등학교 축구대회": ["KFA President's National High School Football Cup", "Taça Nacional de Futebol Americano do Presidente da KFA", "Copa Nacional de Fútbol de Escuelas Secundarias del Presidente de la KFA", "大韓サッカー協会長杯全国高校サッカー大会"],
        "부산MBC 전국고등학교 축구대회": ["Busan MBC National High School Football Cup", "Taça Nacional de Futebol Americano Escolar Busan MBC", "Copa Nacional de Fútbol de Escuelas Secundarias Busan MBC", "<ruby>釜山<rt>プサン</rt></ruby>MBC全国高校サッカー大会"],
        "문체부장관배 전국고등학교 축구대회": ["MCST National High School Football Cup", "Taça Nacional de Futebol Americano Escolar MCST", "Copa Nacional de Fútbol de Escuelas Secundarias MCST", "文化体育観光部長管轄全国高校サッカー大会"],
        "대통령금배 전국고등학교 축구대회": ["President's National High School Football Cup", "Taça Nacional de Futebol Americano do Presidente", "Copa Nacional de Fútbol de Escuelas Secundarias del Presidente", "大統領金杯全国高校サッカー大会"],
        "승강 플레이오프": ["Promotion-Relegation Playoffs", "Promotion-Relegation Playoffs", "Promotion-Relegation Playoffs", "昇降プレイオフ"],
        "플레이오프": ["Playoff", "Playoff", "Playoff", "プレイオフ"],
        "32강전": ["Round of 32", "Ronda de 32", "Dieciseisavos de Final", "32強戦"],
        "24강전": ["Round of 24", "Ronda de 24", "Ronda de 24", "24強戦"],
        "16강전": ["Round of 16", "Oitavos de Final", "Octavos de Final", "16強戦"],
        "12강전": ["Round of 12", "Ronda de 12", "Ronda de 12", "12強戦"],
        "8강전": ["Quarterfinals", "Quartos de Final", "Cuartos de Final", "8強戦"],
        "4강전": ["Semifinals", "Semifinais", "Semifinales", "4強戦"],
        "결승전": ["Final", "Final", "Final", "決勝戦"],
        "조별리그": ["Group Stage", "Fase de Grupos", "Fase de Grupos", "グループリーグ"],
        "1차전": ["R1", "J1", "J1", "1次戦"],
        "2차전": ["R2", "J2", "J2", "2次戦"],
        "전반기": ["1H", "Apertura", "Apertura", "前期"],
        "후반기": ["2H", "Clausura", "Clausura", "後期"],
        "KEB하나은행": ["KEB Hana Bank", "KEB Hana Bank", "KEB Hana Bank", "KEBハナ銀行"],
        "하나은행": ["Hana Bank", "Hana Bank", "Hana Bank", "ハナ銀行"],
        "하나원큐": ["Hana 1Q", "Hana 1Q", "Hana 1Q", "ハナワンキュー"],
        "현대오일뱅크": ["Hyundai Oil Bank", "Hyundai Oil Bank", "Hyundai Oil Bank", "現代オイルバンク"],

        // 경기장
        "목동운동장": ["Mokdong Stadium", "Estádio Mokdong", "Estadio Mokdong", "<ruby>モク洞<rt>木洞</rt></ruby>運動場"],
        "광양축구전용구장": ["Gwangyang Football Stadium", "Estádio de Futebol de Gwangyang", "Estadio de Fútbol de Gwangyang", "<ruby>クァンヤン<rt>光陽</rt></ruby>サッカー専用球場"],
        "김포솔터축구장": ["Gimpo Solteo Football Field", "Campo de Futebol Gimpo Solteo", "Campo de Fútbol de Gimpo Solteo", "<ruby>キンポ<rt>金浦</rt></ruby>ソルトサッカー場"],
        "구덕운동장": ["Gudeok Stadium", "Estádio Gudeok", "Estadio Gudeok", "<ruby>クドク<rt>九徳</rt></ruby>運動場"],
        "부천종합운동장": ["Bucheon Stadium", "Estádio Bucheon", "Estadio Bucheon", "<ruby>プチョン<rt>富川</rt></ruby>総合運動場"],
        "수원월드컵경기장": ["Suwon World Cup Stadium", "Estádio da Copa do Mundo de Suwon", "Estadio Mundialista de Suwon", "<ruby>スウォン<rt>水原</rt></ruby>ワールドカップ競技場"],
        "안산와~스타디움": ["Ansan Wa~ Stadium", "Estádio Ansan Wa~", "Estadio Ansan Wa~", "<ruby>アンサン<rt>安山</rt></ruby>ワ〜スタジアム"],
        "이순신종합운동장": ["Yi&nbsp;Sunsin Stadium", "Estádio Yi&nbsp;Sunsin", "Estadio Yi&nbsp;Sunsin", "<ruby>イ・スンシン<rt>李舜臣</rt></ruby>総合運動場"],
        "인천축구전용경기장": ["Incheon Football Stadium", "Estádio de Futebol de Incheon", "Estadio de Fútbol de Incheon", "<ruby>インチョン<rt>仁川</rt></ruby>サッカー専用競技場"],
        "창원축구센터 주경기장": ["Changwon Football Centre Main Stadium", "Estádio Principal do Centro de Futebol de Changwon", "Estadio Principal del Centro de Fútbol de Changwon", "<ruby>チャンウォン<rt>昌原</rt></ruby>サッカーセンター主競技場"],
        "천안종합운동장": ["Cheonan Stadium", "Estádio Cheonan", "Estadio Cheonan", "<ruby>チョナン<rt>天安</rt></ruby>総合運動場"],
        "청주종합경기장": ["Cheongju Stadium", "Estádio Cheongju", "Estadio Cheongju", "<ruby>チョンジュ<rt>清州</rt></ruby>総合競技場"],
        "탄천종합운동장": ["Tancheon Stadium", "Estádio Tancheon", "Estadio Tancheon", "<ruby>タンチョン<rt>炭川</rt></ruby>総合運動場"],
        "화성종합경기타운 주경기장": ["Hwaseong Sports Town Main Stadium", "Estádio Principal da Cidade Desportiva de Hwaseong", "Estadio Principal de la Ciudad Deportiva de Hwaseong", "<ruby>ファソン<rt>華城</rt></ruby>総合競技タウン主競技場"],

        // 응원가
        "팀 응원": ["Team", "Equipe", "Equipo", "チーム"],
        "선수 응원": ["Players", "Jogadoras", "Jugadores", "選手"],

        "SEFC 콜": ["SEFC", "SEFC", "SEFC", "SEFC"],
        "서울 이랜드 콜": ["Seoul E-Land", "Seoul E-Land", "Seoul E-Land", "ソウル・イーランド"],
        "2 3 4 서울 콜": ["2 3 4 Seoul", "2 3 4 Seul", "2 3 4 Seúl", "2-3-4-ソウル"],
        "3 3 4 2 서울 콜": ["3 3 4 2 Seoul", "3 3 4 2 Seul", "3 3 4 2 Seúl", "3-2-4-2-ソウル"],
        "승리하라 서울 콜": ["<ruby>Victory<rt>seungnihara</rt></ruby> Seoul", "<ruby>Vitória<rt>seungnihara</rt></ruby> Seul", "<ruby>Victoria<rt>seungnihara</rt></ruby> Seúl", "<ruby>勝利せよ<rt>スンニハラ</rt></ruby>、ソウル"],
        "뛰어 뛰어 서울 콜": ["<ruby>Jump, Jump,<rt>ttwieo ttwieo</rt></ruby> Seoul", "<ruby>Pula, Pula,<rt>ttwieo ttwieo</rt></ruby> Seul", "<ruby>Salta, Salta,<rt>ttwieo ttwieo</rt></ruby> Seúl", "<ruby>跳べ、跳べ<rt>トゥィオ トゥィオ</rt></ruby>、ソウル"],
        "세트피스 콜": ["Set Piece", "Set Piece", "Set Piece", "セットプレー"],
        "하나되어": ["<ruby>United as One<rt>hanadoe-eo</rt></ruby>", "<ruby>Juntos como Um<rt>hanadoe-eo</rt></ruby>", "<ruby>Juntos como Uno<rt>hanadoe-eo</rt></ruby>", "<ruby>一緒になって<rt>ハナドェオ</rt></ruby>"],
        "사랑해 서울 이랜드": ["<ruby>I Love<rt>saranghae</rt></ruby> Seoul E-Land", "<ruby>Te Amo<rt>saranghae</rt></ruby> Seoul E-Land", "<ruby>Te Amo<rt>saranghae</rt></ruby> Seoul E-Land", "<ruby>愛して<rt>サランヘ</rt></ruby>、ソウル・イーランド"],
        "서울의 노래": ["<ruby>Song of Seoul<rt>seourui norae</rt></ruby>", "<ruby>Canção de Seul<rt>seourui norae</rt></ruby>", "<ruby>Canción de Seúl<rt>seourui norae</rt></ruby>", "<ruby>ソウルの歌<rt>ソウレ ノレ</rt></ruby>"],
        "사랑한다 서울": ["<ruby>I Love<rt>saranghanda</rt></ruby> Seoul", "<ruby>Te Amo<rt>saranghanda</rt></ruby> Seul", "<ruby>Te Amo<rt>saranghanda</rt></ruby> Seúl", "<ruby>愛する<rt>サランハンダ</rt></ruby>、ソウル"],
        "우리는 서울 이랜드": ["<ruby>We are<rt>urineun</rt></ruby> Seoul E-Land", "<ruby>Nós somos<rt>urineun</rt></ruby> Seoul E-Land", "<ruby>Somos<rt>urineun</rt></ruby> Seoul E-Land", "<ruby>僕たちは<rt>ウリヌン</rt></ruby>ソウル・イーランド"],
        "한강에서부터 제주까지": ["<ruby>From the Hangang River to Jeju<rt>han-gang-eseobuteo jejukkaji</rt></ruby>", "<ruby>Do Rio Hangang a Jeju<rt>han-gang-eseobuteo jejukkaji</rt></ruby>", "<ruby>Del río Hangang a Jeju<rt>han-gang-eseobuteo jejukkaji</rt></ruby>", "<ruby>ハンガンからチェジュまで<rt>ハンガンエソブト チェジュカジ</rt></ruby>"],
        "표범의 전사들": ["<ruby>Warriors of the Leopard<rt>pyobeomui jeonsadeul</rt></ruby>", "<ruby>Guerreiros do Leopardo<rt>pyobeomui jeonsadeul</rt></ruby>", "<ruby>Guerreros del leopardo<rt>pyobeomui jeonsadeul</rt></ruby>", "<ruby>ヒョウの戦士たち<rt>ピョボメ チョンサドゥル</rt></ruby>"],
        "앞으로 가자": ["<ruby>Let's Go Forward<rt>apeuro gaja</rt></ruby>", "<ruby>Vamos Avançar<rt>apeuro gaja</rt></ruby>", "<ruby>Vamos Adelante<rt>apeuro gaja</rt></ruby>", "<ruby>前に行こう<rt>アプロ カジャ</rt></ruby>"],
        "둥글게 둥글게": ["<ruby>Round and Round<rt>dunggeulge</rt></ruby>", "<ruby>Round and Round<rt>dunggeulge</rt></ruby>", "<ruby>Round and Round<rt>dunggeulge</rt></ruby>", "<ruby>丸く丸く<rt>トゥングルゲ トゥングルゲ</rt></ruby>"],
        "포에버": ["<ruby>Forever<rt>po-ebeo</rt></ruby>", "<ruby>Para Sempre<rt>po-ebeo</rt></ruby>", "<ruby>Para Siempre<rt>po-ebeo</rt></ruby>", "フォーエバー"],
        "항상 사랑할 거야": ["<ruby>I Will Always Love You<rt>hangsang saranghal geoya</rt></ruby>", "<ruby>Eu Sempre Te Vou Amar<rt>hangsang saranghal geoya</rt></ruby>", "<ruby>Siempre Te Querré<rt>hangsang saranghal geoya</rt></ruby>", "<ruby>いつも愛してるよ<rt>ハンサン サランハル コヤ</rt></ruby>"],
        "푸른 심장": ["<ruby>Blue Heart<rt>pureun simjang</rt></ruby>", "<ruby>Coração Azul<rt>pureun simjang</rt></ruby>", "<ruby>Corazón Azul<rt>pureun simjang</rt></ruby>", "<ruby>青いハート<rt>プルン シムジャン</rt></ruby>"],
        "서울 승리를 향해": ["Seoul, <ruby>Towards Victory<rt>seungnireul hyanghae</rt></ruby>", "Seul, <ruby>Rumo à Vitória<rt>seungnireul hyanghae</rt></ruby>", "Seúl, <ruby>Hacia la Victoria<rt>seungnireul hyanghae</rt></ruby>", "ソウル、<ruby>勝利に向けて<rt>スンニルル ヒャンヘ</rt></ruby>"],
        "서울을 위해 달려라": ["<ruby>Run for Seoul<rt>seoureul wihae dallyeora</rt></ruby>", "<ruby>Corra por Seul<rt>seoureul wihae dallyeora</rt></ruby>", "<ruby>Corre por Seúl<rt>seoureul wihae dallyeora</rt></ruby>", "<ruby>ソウルのために走れ<rt>ソウルル ウィヘ タルリョラ</rt></ruby>"],
        "서울의 아리아": ["<ruby>Aria of Seoul<rt>seourui aria</rt></ruby>", "<ruby>Ária de Seul<rt>seourui aria</rt></ruby>", "<ruby>Aria de Seúl<rt>seourui aria</rt></ruby>", "<ruby>ソウルのアリア<rt>ソウレ アリア</rt></ruby>"],
        "너를 태우고": ["<ruby>Carrying You<rt>neoreul taeugo</rt></ruby>", "<ruby>Carregando-o<rt>neoreul taeugo</rt></ruby>", "<ruby>Llevándote<rt>neoreul taeugo</rt></ruby>", "<ruby>君をのせて<rt>ノルル テウゴ</rt></ruby>"],
        "페파스": ["Pepas", "Pepas", "Pepas", "ペパス"],
        "우리는 항상 여기에": ["<ruby>We Are Always Here<rt>urineun hangsang yeogie</rt></ruby>", "<ruby>Estamos Sempre Aqui<rt>urineun hangsang yeogie</rt></ruby>", "<ruby>Siempre Estamos Aquí<rt>urineun hangsang yeogie</rt></ruby>", "<ruby>僕たちはいつもここに<rt>ウリヌン ハンサン ヨギエ</rt></ruby>"],
        "우리 모두 다 같이": ["<ruby>All of Us Together<rt>uri modu da gachi</rt></ruby>", "<ruby>Todos Nós Juntos<rt>uri modu da gachi</rt></ruby>", "<ruby>Todos Juntos<rt>uri modu da gachi</rt></ruby>", "<ruby>みんな一緒に<rt>ウリ モドゥ タ カチ</rt></ruby>"],
        "샤랄라 SEFC": ["Sharala SEFC", "Sharala SEFC", "Sharala SEFC", "シャララSEFC"],
        "좌로 우로": ["<ruby>Left Right<rt>jwaro uro</rt></ruby>", "<ruby>Esquerda Direita<rt>jwaro uro</rt></ruby>", "<ruby>Izquierda Derecha<rt>jwaro uro</rt></ruby>", "<ruby>左-右<rt>チャロ ウロ</rt></ruby>"],
        "뱃놀이": ["<ruby>Shanty<rt>baennori</rt></ruby>", "<ruby>Canção de Marinheiro<rt>baennori</rt></ruby>", "<ruby>Canto de Barqueros<rt>baennori</rt></ruby>", "<ruby>船歌<rt>ペンノリ</rt></ruby>"],
        
        "캡틴 콜": ["Captain", "Capitão", "Capitán", "キャプテン"],
        "득점 콜": ["Goalscorer", "Goleador", "Goleador", "得点した選手"],
        "오스마르 콜": ["Osmar Ibáñez Barba", "Osmar Ibáñez Barba", "Osmar Ibáñez Barba", "オスマル・イバニェス・バルバ"],
        "변경준 콜": ["Byeon Gyeongjun", "Byeon Gyeongjun", "Byeon Gyeongjun", "ピョン・キョンジュン"],

        "선수단 입장 시": ["", "", "", ""],
        "선수단 인사 시": ["", "", "", ""],
        "경기 승리 세리머니": ["", "", "", ""],
        "카니발": ["", "", "", ""],

        // 이름
        "가브리엘": ["Gabriel Santos", "Gabriel Santos", "Gabriel Santos", "ガブリエル・サントス"],
        "강민재": ["Kang Minjae", "Kang Minjae", "Kang Minjae", "カン・ミンジェ"],
        "감한솔": ["Gam Hansol", "Gam Hansol", "Gam Hansol", "カム・ハンソル"],
        "강정묵": ["Kang Jeongmook", "Kang Jeongmook", "Kang Jeongmook", "カン・ジョンムク"],
        "고경준": ["Ko Kyungjoon", "Ko Kyungjoon", "Ko Kyungjoon", "コ・キョンジュン"],
        "고민혁": ["Ko Minhyeok", "Ko Minhyeok", "Ko Minhyeok", "コ・ミンヒョク"],
        "고무열": ["Go Mooyul", "Go Mooyul", "Go Mooyul", "コ・ムヨル"],
        "고재현": ["Go Jaehyun", "Go Jaehyun", "Go Jaehyun", "コ・チェヒョン"],
        "고준영": ["Go Junyoung", "Go Junyoung", "Go Junyoung", "コ・チュニョン"],
        "고차원": ["Ko Chawon", "Ko Chawon", "Ko Chawon", "コ・チャウォン"],
        "곽성욱": ["Gwak Seonguk", "Gwak Seonguk", "Gwak Seonguk", "クァク・ソンウク"],
        "곽윤호": ["Gwak Yunho", "Gwak Yunho", "Gwak Yunho", "クァク・ユンホ"],
        "구대엽": ["Gu Daeyeob", "Gu Daeyeob", "Gu Daeyeob", "ク・テヨブ"],
        "구성윤": ["Gu Sungyun", "Gu Sungyun", "Gu Sungyun", "ク・ソンユン"],
        "권기표": ["Kwon Gipyo", "Kwon Gipyo", "Kwon Gipyo", "クォン・キピョ"],
        "금교진": ["Geum Kyojin", "Geum Kyojin", "Geum Kyojin", "クム・キョジン"],
        "김강호": ["Kim Kangho", "Kim Kangho", "Kim Kangho", "キム・カンホ"],
        "김결": ["Kim Gyeol", "Kim Gyeol", "Kim Gyeol", "キム・キョル"],
        "김경민": ["Kim Kyeongmin", "Kim Kyeongmin", "Kim Kyeongmin", "キム・キョンミン"],
        "김경준": ["Kim Kyungjun", "Kim Kyungjun", "Kim Kyungjun", "キム・キョンジュン"],
        "김대광": ["Kim Daekwang", "Kim Daekwang", "Kim Daekwang", "キム・テグァン"],
        "김동권": ["Kim Donggwon", "Kim Donggwon", "Kim Donggwon", "キム・トングォン"],
        "김동섭": ["Kim Dongsub", "Kim Dongsub", "Kim Dongsub", "キム・トンソブ"],
        "김동진": ["Kim Dongjin", "Kim Dongjin", "Kim Dongjin", "キム・トンジン"],
        "김동철": ["Kim Dongcheol", "Kim Dongcheol", "Kim Dongcheol", "キム・トンチョル"],
        "김민규1": ["Kim Mingyu", "Kim Mingyu", "Kim Mingyu", "キム・ミンギュ"],
        "김민규2": ["Kim Minkyu", "Kim Minkyu", "Kim Minkyu", "キム・ミンギュ"],
        "김민균": ["Kim Minkyun", "Kim Minkyun", "Kim Minkyun", "キム・ミンキュン"],
        "김민서": ["Kim Minseo", "Kim Minseo", "Kim Minseo", "キム・ミンソ"],
        "김민제": ["Kim Minje", "Kim Minje", "Kim Minje", "キム・ミンジェ"],
        "김민호": ["Kim Minho", "Kim Minho", "Kim Minho", "キム・ミンホ"],
        "김병석": ["Kim Byungsuk", "Kim Byungsuk", "Kim Byungsuk", "キム・ピョンソク"],
        "김선민": ["Kim Sunmin", "Kim Sunmin", "Kim Sunmin", "キム・ソンミン"],
        "김성주": ["Kim Sungju", "Kim Sungju", "Kim Sungju", "キム・ソンジュ"],
        "김성현": ["Kim Seonghyeon", "Kim Seonghyeon", "Kim Seonghyeon", "キム・ソンヒョン"],
        "김수안": ["Kim Suan", "Kim Suan", "Kim Suan", "キム・スアン"],
        "김신진": ["Kim Shinjin", "Kim Shinjin", "Kim Shinjin", "キム・シンジン"],
        "김연수": ["Kim Yeonsoo", "Kim Yeonsoo", "Kim Yeonsoo", "キム・ヨンス"],
        "김영광": ["Kim Youngkwang", "Kim Youngkwang", "Kim Youngkwang", "キム・ヨングァン"],
        "김영욱": ["Kim Younguk", "Kim Younguk", "Kim Younguk", "キム・ヨンウク"],
        "김오규": ["Kim Ohkyu", "Kim Ohkyu", "Kim Ohkyu", "キム・オギュ"],
        "김원식": ["Kim Wonsik", "Kim Wonsik", "Kim Wonsik", "キム・ウォンシク"],
        "김인성": ["Kim Insung", "Kim Insung", "Kim Insung", "キム・インソン"],
        "김재성": ["Kim Jaesung", "Kim Jaesung", "Kim Jaesung", "キム・チェソン"],
        "김재연": ["Kim Jaeyeon", "Kim Jaeyeon", "Kim Jaeyeon", "キム・チェヨン"],
        "김재웅": ["Kim Jaewoong", "Kim Jaewoong", "Kim Jaewoong", "キム・チェウン"],
        "김재현": ["Kim Jaehyun", "Kim Jaehyun", "Kim Jaehyun", "キム・チェヒョン"],
        "김정수": ["Kim Jungsu", "Kim Jungsu", "Kim Jungsu", "キム・チョンス"],
        "김정환": ["Kim Jeonghwan", "Kim Jeonghwan", "Kim Jeonghwan", "キム・チョンファン"],
        "김주환": ["Kim Juhwan", "Kim Juhwan", "Kim Juhwan", "キム・チュファン"],
        "김준태": ["Kim Juntae", "Kim Juntae", "Kim Juntae", "キム・チュンテ"],
        "김지운": ["Kim Jiun", "Kim Jiun", "Kim Jiun", "キム・チウン"],
        "김진혁": ["Kim Jinhyuk", "Kim Jinhyuk", "Kim Jinhyuk", "キム・チンヒョク"],
        "김진환": ["Kim Jinhwan", "Kim Jinhwan", "Kim Jinhwan", "キム・チンファン"],
        "김창욱": ["Kim Changwook", "Kim Changwook", "Kim Changwook", "キム・チャンウク"],
        "김태수": ["Kim Taesu", "Kim Taesu", "Kim Taesu", "キム・テス"],
        "김태은": ["Kim Taeeun", "Kim Taeeun", "Kim Taeeun", "キム・テウン"],
        "김태현1": ["Kim Taehyun", "Kim Taehyun", "Kim Taehyun", "キム・テヒョン"],
        "김태현2": ["Kim Taehyeon", "Kim Taehyeon", "Kim Taehyeon", "キム・テヒョン"],
        "김하준": ["Kim Hajun", "Kim Hajun", "Kim Hajun", "キム・ハジュン"],
        "김현규": ["Kim Hyunkyu", "Kim Hyunkyu", "Kim Hyunkyu", "キム・ヒョンギュ"],
        "김현성": ["Kim Hyeonsung", "Kim Hyeonsung", "Kim Hyeonsung", "キム・ヒョンソン"],
        "김현솔": ["Kim Hyunsol", "Kim Hyunsol", "Kim Hyunsol", "キム・ヒョンソル"],
        "김현우": ["Kim Hyeonwoo", "Kim Hyeonwoo", "Kim Hyeonwoo", "キム・ヒョヌ"],
        "김현훈": ["Kim Hyunhun", "Kim Hyunhun", "Kim Hyunhun", "キム・ヒョンフン"],
        "김형근": ["Kim Hyunggeun", "Kim Hyunggeun", "Kim Hyunggeun", "キム・ヒョングン"],
        "김호준1": ["Kim Hojun", "Kim Hojun", "Kim Hojun", "キム・ホジュン"],
        "김희원": ["Kim Heewon", "Kim Heewon", "Kim Heewon", "キム・ヒウォン"],
        "까데나시": ["Felipe Cadenazzi", "Felipe Cadenazzi", "Felipe Cadenazzi", "フェリペ・カデナシ"],
        "까리우스": ["Alan Cariús", "Alan Cariús", "Alan Cariús", "アラン・カリウス"],
        "노동건": ["No Donggeon", "No Donggeon", "No Donggeon", "ノ・トンゴン"],
        "두아르테": ["Róbson Duarte", "Róbson Duarte", "Róbson Duarte", "ロブソン・ドゥアルチ"],
        "라이언존슨": ["Ryan Johnson", "Ryan Johnson", "Ryan Johnson", "ライアン・ジョンソン"],
        "레안드로": ["Leandro Ribeiro", "Leandro Ribeiro", "Leandro Ribeiro", "レアンドロ・リベイロ"],
        "로빙요": ["Daniel Lovinho", "Daniel Lovinho", "Daniel Lovinho", "ダニエル・ロビーニョ"],
        "마스다": ["Masuda Chikashi", "Masuda Chikashi", "Masuda Chikashi", "<ruby>増田誓志<rt>マスダ チカシ</rt></ruby>"],
        "명준재": ["Myung Junjae", "Myung Junjae", "Myung Junjae", "ミョン・チュンジェ"],
        "몬타뇨": ["Jhon Montaño", "Jhon Montaño", "Jhon Montaño", "ジョン・モンターニョ"],
        "문상윤": ["Moon Sangyun", "Moon Sangyun", "Moon Sangyun", "ムン・サンユン"],
        "문정인": ["Moon Jungin", "Moon Jungin", "Moon Jungin", "ムン・チョンイン"],
        "바비오": ["William Barbio", "William Barbio", "William Barbio", "ウィリアン・バルビオ"],
        "박경민": ["Park Kyungmin", "Park Kyungmin", "Park Kyungmin", "パク・キョンミン"],
        "박경배": ["Park Kyoungbae", "Park Kyoungbae", "Park Kyoungbae", "パク・キョンベ"],
        "박민서": ["Park Minseo", "Park Minseo", "Park Minseo", "パク・ミンソ"],
        "박성우": ["Park Seongwoo", "Park Seongwoo", "Park Seongwoo", "パク・ソンウ"],
        "박정인": ["Park Jeongin", "Park Jeongin", "Park Jeongin", "パク・チョンイン"],
        "박준영1": ["Park Junyoung", "Park Junyoung", "Park Junyoung", "パク・チュニョン"],
        "박준영2": ["Park Junyoung", "Park Junyoung", "Park Junyoung", "パク・チュニョン"],
        "박창환": ["Park Changhwan", "Park Changhwan", "Park Changhwan", "パク・チャンファン"],
        "박태준": ["Park Taejun", "Park Taejun", "Park Taejun", "パク・テジュン"],
        "반토안": ["Nguyễn Văn Toàn", "Nguyễn Văn Toàn", "Nguyễn Văn Toàn", "グエン・バン・トアン"],
        "배서준": ["Bae Seojoon", "Bae Seojoon", "Bae Seojoon", "ペ・ソジュン"],
        "배재우": ["Bae Jaewoo", "Bae Jaewoo", "Bae Jaewoo", "ペ・チェウ"],
        "배진우": ["Bae Jinwoo", "Bae Jinwoo", "Bae Jinwoo", "ペ・チヌ"],
        "백지웅": ["Baek Jiung", "Baek Jiung", "Baek Jiung", "ペク・チウン"],
        "백지훈": ["Baek Jihoon", "Baek Jihoon", "Baek Jihoon", "ペク・チフン"],
        "베네가스": ["Nicolás Benegas", "Nicolás Benegas", "Nicolás Benegas", "ニコラス・ベネガス"],
        "벨루소": ["Jonatas Belusso", "Jonatas Belusso", "Jonatas Belusso", "ジョナタス・ベルゾー"],
        "변경준": ["Byeon Gyeongjun", "Byeon Gyeongjun", "Byeon Gyeongjun", "ピョン・キョンジュン"],
        "변준범": ["Byeon Junbyum", "Byeon Junbyum", "Byeon Junbyum", "ピョン・チュンボム"],
        "보비": ["Robert Cullen", "Robert Cullen", "Robert Cullen", "カレン・ロバート"],
        "브루노 실바": ["Bruno Silva", "Bruno Silva", "Bruno Silva", "ブルーノ・シウバ"],
        "브루노": ["Bruno Oliveira", "Bruno Oliveira", "Bruno Oliveira", "ブルーノ・オリベイラ"],
        "서경주": ["Seo Gyeongju", "Seo Gyeongju", "Seo Gyeongju", "ソ・キョンジュ"],
        "서보민": ["Seo Bomin", "Seo Bomin", "Seo Bomin", "ソ・ポミン"],
        "서재민1": ["Seo Jaemin", "Seo Jaemin", "Seo Jaemin", "ソ・チェミン"],
        "서재민2": ["Seo Jaemin", "Seo Jaemin", "Seo Jaemin", "ソ・チェミン"],
        "서정진": ["Seo Jungjin", "Seo Jungjin", "Seo Jungjin", "ソ・チョンジン"],
        "서진석": ["Seo Jinseok", "Seo Jinseok", "Seo Jinseok", "ソ・チンソク"],
        "손석용": ["Son Sukyong", "Son Sukyong", "Son Sukyong", "ソン・ソクヨン"],
        "손혁찬": ["Son Hyeokchan", "Son Hyeokchan", "Son Hyeokchan", "ソン・ヒョクチャン"],
        "송시우": ["Song Siwoo", "Song Siwoo", "Song Siwoo", "ソン・シウ"],
        "수쿠타 파수": ["Richard Sukuta-Pasu", "Richard Sukuta-Pasu", "Richard Sukuta-Pasu", "リヒャルト・スクタ＝パス"],
        "신성학": ["Shin Seonghak", "Shin Seonghak", "Shin Seonghak", "シン・ソンハク"],
        "신일수": ["Shin Ilsoo", "Shin Ilsoo", "Shin Ilsoo", "シン・イルス"],
        "신세계": ["Shin Segye", "Shin Segye", "Shin Segye", "シン・セギェ"],
        "심광욱": ["Sim Gwangwook", "Sim Gwangwook", "Sim Gwangwook", "シム・クァンウク"],
        "심상민": ["Sim Sangmin", "Sim Sangmin", "Sim Sangmin", "シム・サンミン"],
        "심영성": ["Shim Youngsung", "Shim Youngsung", "Shim Youngsung", "シム・ヨンソン"],
        "아르시치": ["Lazar Arsić", "Lazar Arsić", "Lazar Arsić", "ラザル・アルシッチ"],
        "아센호": ["Mauricio Asenjo", "Mauricio Asenjo", "Mauricio Asenjo", "マウリシオ・アセンホ"],
        "아이데일": ["John Iredale", "John Iredale", "John Iredale", "ジョン・アイルデール"],
        "아츠키": ["Wada Atsuki", "Wada Atsuki", "Wada Atsuki", "<ruby>和田篤紀<rt>ワダ アツキ</rt></ruby>"],
        "안동혁": ["An Donghyeog", "An Donghyeog", "An Donghyeog", "アン・トンヒョク"],
        "안성빈": ["An Sungbin", "An Sungbin", "An Sungbin", "アン・ソンビン"],
        "안재훈": ["Ahn Jaehoon", "Ahn Jaehoon", "Ahn Jaehoon", "アン・チェフン"],
        "안지호": ["An Jiho", "An Jiho", "An Jiho", "アン・チホ"],
        "안태현": ["An Taehyun", "An Taehyun", "An Taehyun", "アン・テヒョン"],
        "알렉스": ["Wesley Alex", "Wesley Alex", "Wesley Alex", "ウェズリー・アレックス"],
        "야고": ["Yago Moreira Silva", "Yago Moreira Silva", "Yago Moreira Silva", "ヤゴ・モレイラ・シウバ"],
        "양기훈": ["Yang Kihoon", "Yang Kihoon", "Yang Kihoon", "ヤン・キフン"],
        "엄예훈": ["Ueom Yehoon", "Ueom Yehoon", "Ueom Yehoon", "オム・イェフン"],
        "에레라": ["Ignacio Herrera", "Ignacio Herrera", "Ignacio Herrera", "イグナシオ・エレーラ"],
        "에울레르": ["Euller Silva", "Euller Silva", "Euller Silva", "エウレー・シウバ"],
        "오스마르": ["Osmar Ibáñez Barba", "Osmar Ibáñez Barba", "Osmar Ibáñez Barba", "オスマル・イバニェス・バルバ"],
        "오인표": ["Oh Inpyo", "Oh Inpyo", "Oh Inpyo", "オ・インピョ"],
        "오창현": ["Oh Changhyun", "Oh Changhyun", "Oh Changhyun", "オ・チャンヒョン"],
        "비엘키에비치": ["Diego Bielkiewicz", "Diego Bielkiewicz", "Diego Bielkiewicz", "ディエゴ・ビエルキエビッチ"],
        "원기종": ["Won Kijong", "Won Kijong", "Won Kijong", "ウォン・キジョン"],
        "유키": ["Kobayashi Yūki", "Kobayashi Yūki", "Kobayashi Yūki", "<ruby>小林祐希<rt>コバヤシ ユウキ</rt></ruby>"],
        "유정완": ["Yu Jeongwan", "Yu Jeongwan", "Yu Jeongwan", "ユ・チョンワン"],
        "유제호": ["Yu Jeho", "Yu Jeho", "Yu Jeho", "ユ・チェホ"],
        "유지훈": ["Yu Jihun", "Yu Jihun", "Yu Jihun", "ユ・チフン"],
        "유창현": ["Ryu Changhyun", "Ryu Changhyun", "Ryu Changhyun", "ユ・チャンヒョン"],
        "윤보상": ["Yoon Bosang", "Yoon Bosang", "Yoon Bosang", "ユン・ポサン"],
        "윤상호": ["Yoon Sangho", "Yoon Sangho", "Yoon Sangho", "ユン・サンホ"],
        "윤석주": ["Yoon Sukju", "Yoon Sukju", "Yoon Sukju", "ユン・ソクチュ"],
        "윤성열": ["Yoon Sungyeul", "Yoon Sungyeul", "Yoon Sungyeul", "ユン・ソンニョル"],
        "이건희": ["Lee Kunhee", "Lee Kunhee", "Lee Kunhee", "イ・コンヒ"],
        "이경렬": ["Lee Kyungryul", "Lee Kyungryul", "Lee Kyungryul", "イ・キョンニョル"],
        "이규로": ["Lee Kyuro", "Lee Kyuro", "Lee Kyuro", "イ・キュロ"],
        "이기현": ["Lee Kihyun", "Lee Kihyun", "Lee Kihyun", "イ・キヒョン"],
        "이동률": ["Lee Dongryul", "Lee Dongryul", "Lee Dongryul", "イ・トンニュル"],
        "이민규": ["Lee Minkyu", "Lee Minkyu", "Lee Minkyu", "イ・ミンギュ"],
        "이반": ["Ivan Herceg", "Ivan Herceg", "Ivan Herceg", "イバン・ヘルツェグ"],
        "이범수": ["Lee Bumsoo", "Lee Bumsoo", "Lee Bumsoo", "イ・ポムス"],
        "이병욱": ["Lee Byungwook", "Lee Byungwook", "Lee Byungwook", "イ・ピョンウク"],
        "이상기": ["Lee Sanggi", "Lee Sanggi", "Lee Sanggi", "イ・サンギ"],
        "이상민1": ["Lee Sangmin", "Lee Sangmin", "Lee Sangmin", "イ・サンミン"],
        "이상민2": ["Lee Sangmin", "Lee Sangmin", "Lee Sangmin", "イ・サンミン"],
        "이성윤": ["Lee Sungyoon", "Lee Sungyoon", "Lee Sungyoon", "イ・ソンユン"],
        "이시영": ["Lee Siyoung", "Lee Siyoung", "Lee Siyoung", "イ・シヨン"],
        "이시헌": ["Lee Siheon", "Lee Siheon", "Lee Siheon", "イ・シホン"],
        "이예찬": ["Lee Yeachan", "Lee Yeachan", "Lee Yeachan", "イ・イェチャン"],
        "이인재": ["Lee Injae", "Lee Injae", "Lee Injae", "イ・インジェ"],
        "이재안": ["Lee Jaean", "Lee Jaean", "Lee Jaean", "イ・チェアン"],
        "이재익": ["Lee Jaeik", "Lee Jaeik", "Lee Jaeik", "イ・チェイク"],
        "이재훈": ["Lee Jaehun", "Lee Jaehun", "Lee Jaehun", "イ・チェフン"],
        "이정문": ["Lee Jungmoon", "Lee Jungmoon", "Lee Jungmoon", "イ・チョンムン"],
        "이정필": ["Lee Jeongfeel", "Lee Jeongfeel", "Lee Jeongfeel", "イ・チョンピル"],
        "이주혁": ["Lee Joohyuk", "Lee Joohyuk", "Lee Joohyuk", "イ・チュヒョク"],
        "이준석": ["Lee Joonsuk", "Lee Joonsuk", "Lee Joonsuk", "イ・チュンソク"],
        "이준희": ["Lee Junhee", "Lee Junhee", "Lee Junhee", "イ・チュンヒ"],
        "이코바": ["Eduvie Ikoba", "Eduvie Ikoba", "Eduvie Ikoba", "エドゥビー・イコバ"],
        "이탈로": ["Ítalo Carvalho", "Ítalo Carvalho", "Ítalo Carvalho", "イタロ・カルバーリュ"],
        "이태호": ["Lee Taeho", "Lee Taeho", "Lee Taeho", "イ・テホ"],
        "이현성": ["Lee Hyunsung", "Lee Hyunsung", "Lee Hyunsung", "イ・ヒョンソン"],
        "장석훈": ["Chang Seokhoon", "Chang Seokhoon", "Chang Seokhoon", "チャン・ソクン"],
        "장윤호": ["Jang Yunho", "Jang Yunho", "Jang Yunho", "チャン・ユンホ"],
        "전기성": ["Jeon Giseong", "Jeon Giseong", "Jeon Giseong", "チョン・キソン"],
        "전민광": ["Jeon Mingwang", "Jeon Mingwang", "Jeon Mingwang", "チョン・ミングァン"],
        "전석훈": ["Jeon Seokhun", "Jeon Seokhun", "Jeon Seokhun", "チョン・ソクン"],
        "정성호": ["Jung Sungho", "Jung Sungho", "Jung Sungho", "チョン・ソンホ"],
        "정재민": ["Jeong Jaemin", "Jeong Jaemin", "Jeong Jaemin", "チョン・チェミン"],
        "정재용": ["Jeong Jaeyong", "Jeong Jaeyong", "Jeong Jaeyong", "チョン・チェヨン"],
        "정희웅": ["Jeong Heewoong", "Jeong Heewoong", "Jeong Heewoong", "チョン・ヒウン"],
        "조동재": ["Cho Dongjae", "Cho Dongjae", "Cho Dongjae", "チョ・トンジェ"],
        "조상준": ["Cho Sangjun", "Cho Sangjun", "Cho Sangjun", "チョ・サンジュン"],
        "조영광": ["Cho Youngkwang", "Cho Youngkwang", "Cho Youngkwang", "チョ・ヨングァン"],
        "조용태": ["Cho Yongtae", "Cho Yongtae", "Cho Yongtae", "チョ・ヨンテ"],
        "조우진": ["Cho Woojin", "Cho Woojin", "Cho Woojin", "チョ・ウジン"],
        "조원희": ["Cho Wonhee", "Cho Wonhee", "Cho Wonhee", "チョ・ウォンヒ"],
        "조재완": ["Cho Jaewan", "Cho Jaewan", "Cho Jaewan", "チョ・チェワン"],
        "조찬호": ["Cho Chanho", "Cho Chanho", "Cho Chanho", "チョ・チャンホ"],
        "조향기": ["Cho Hyanggi", "Cho Hyanggi", "Cho Hyanggi", "チョ・ヒャンギ"],
        "주민규": ["Joo Minkyu", "Joo Minkyu", "Joo Minkyu", "チョ・ミンギュ"],
        "주한성": ["Joo Hanseong", "Joo Hanseong", "Joo Hanseong", "チョ・ハンソン"],
        "주현성": ["Joo Hyunsung", "Joo Hyunsung", "Joo Hyunsung", "チョ・ヒョンソン"],
        "차승현": ["Cha Seunghyeon", "Cha Seunghyeon", "Cha Seunghyeon", "チャ・スンヒョン"],
        "채광훈": ["Chae Kwanghoon", "Chae Kwanghoon", "Chae Kwanghoon", "チェ・クァンフン"],
        "채영현": ["Chae Yeonghyeon", "Chae Yeonghyeon", "Chae Yeonghyeon", "チェ・ヨンヒョン"],
        "최병도": ["Choi Byungdo", "Choi Byungdo", "Choi Byungdo", "チェ・ピョンド"],
        "최오백": ["Choi Ohback", "Choi Ohback", "Choi Ohback", "チェ・オベク"],
        "최유상": ["Choi Yoosang", "Choi Yoosang", "Choi Yoosang", "チェ・ユサン"],
        "최재훈": ["Choi Jaehun", "Choi Jaehun", "Choi Jaehun", "チェ・チェフン"],
        "최종환": ["Choi Jonghoan", "Choi Jonghoan", "Choi Jonghoan", "チェ・チョンファン"],
        "최치원": ["Choi Chiwon", "Choi Chiwon", "Choi Chiwon", "チェ・チウォン"],
        "최한솔": ["Choi Hansol", "Choi Hansol", "Choi Hansol", "チェ・ハンソル"],
        "최호정": ["Choi Hojung", "Choi Hojung", "Choi Hojung", "チェ・ホジョン"],
        "츠바사": ["Nishi Tsubasa", "Nishi Tsubasa", "Nishi Tsubasa", "<ruby>西翼<rt>ニシ ツバサ</rt></ruby>"],
        "카즈키": ["Kozuka Kazuki", "Kozuka Kazuki", "Kozuka Kazuki", "<ruby>小塚和季<rt>コヅカ カズキ</rt></ruby>"],
        "칼라일 미첼": ["Carlyle Mitchell", "Carlyle Mitchell", "Carlyle Mitchell", "カーライル・ミッチェル"],
        "쿠티뉴": ["Douglas Coutinho", "Douglas Coutinho", "Douglas Coutinho", "ドウグラス・コウチーニョ"],
        "타라바이": ["Tarabai", "Tarabai", "Tarabai", "タラバイ"],
        "탁우선": ["Tak Woosun", "Tak Woosun", "Tak Woosun", "タク・ウソン"],
        "토모키": ["Wada Tomoki", "Wada Tomoki", "Wada Tomoki", "<ruby>和田倫季<rt>ワダ トモキ</rt></ruby>"],
        "페드링요": ["Pedrinho Pimentel", "Pedrinho Pimentel", "Pedrinho Pimentel", "ペドリーニョ・ピメンテル"],
        "페블레스": ["Daniel Febles", "Daniel Febles", "Daniel Febles", "ダニエル・フェブレス"],
        "피터": ["Peter Makrillos", "Peter Makrillos", "Peter Makrillos", "ピーター・マクリロス"],
        "한용수": ["Han Yongsu", "Han Yongsu", "Han Yongsu", "ハン・ヨンス"],
        "한의권": ["Han Euigwon", "Han Euigwon", "Han Euigwon", "ハン・ウィグォン"],
        "한지륜": ["Han Jiryun", "Han Jiryun", "Han Jiryun", "ハン・チリュン"],
        "허범산": ["Heo Beomsan", "Heo Beomsan", "Heo Beomsan", "ホ・ポムサン"],
        "허용준": ["Heo Yongjoon", "Heo Yongjoon", "Heo Yongjoon", "ホ・ヨンジュン"],
        "호난": ["Ronan David", "Ronan David", "Ronan David", "ロナン・ダビド"],
        "홍승현": ["Hong Seunghyeon", "Hong Seunghyeon", "Hong Seunghyeon", "ホン・スンヒョン"],
        "황도연": ["Hwang Doyeon", "Hwang Doyeon", "Hwang Doyeon", "ファン・トヨン"],
        "황정욱": ["Hwang Jungwook", "Hwang Jungwook", "Hwang Jungwook", "ファン・チョンウク"],
        "황태현": ["Hwang Taehyeon", "Hwang Taehyeon", "Hwang Taehyeon", "ファン・テヒョン"],
        "아론": ["Aaron Calver", "Aaron Calver", "Aaron Calver", "アロン・カルバー"],
        "임동혁": ["Lim Donghyuk", "Lim Donghyuk", "Lim Donghyuk", "イム・トンヒョク"],
        "김민서": ["Kim Minseo", "Kim Minseo", "Kim Minseo", "キム・ミンソ"],
        "강상민": ["Kang Sangmin", "Kang Sangmin", "Kang Sangmin", "カン・サンミン"],
        "곽승민": ["Kwak Seungmin", "Kwak Seungmin", "Kwak Seungmin", "クァク・スンミン"],
        "김도윤1": ["Kim Doyun", "Kim Doyun", "Kim Doyun", "キム・トユン"],
        "김영호": ["Kim Youngho", "Kim Youngho", "Kim Youngho", "キム・ヨンホ"],
        "김지훈": ["Kim Jihoon", "Kim Jihoon", "Kim Jihoon", "キム・チフン"],
        "서동현": ["Seo Donghyun", "Seo Donghyun", "Seo Donghyun", "ソ・トンヒョン"],
        "송원준": ["Song Wonjun", "Song Wonjun", "Song Wonjun", "ソン・ウォンジュン"],
        "안지현": ["An Jihyeon", "An Jihyeon", "An Jihyeon", "アン・チヒョン"],
        "오규빈": ["Oh Kyubin", "Oh Kyubin", "Oh Kyubin", "オ・キュビン"],
        "이도성": ["Lee Doseong", "Lee Doseong", "Lee Doseong", "イ・トソン"],
        "이상헌": ["Lee Sangheon", "Lee Sangheon", "Lee Sangheon", "イ・サンホン"],

        // 구단명
        "서울 이랜드 FC": ["Seoul E-Land FC", "Seoul E-Land FC", "Seoul E-Land FC", "ソウル・イーランドFC"],
        "FC 서울": ["FC Seoul", "FC Seoul", "FC Seoul", "FCソウル"],
        "FC 안양": ["FC Anyang", "FC Anyang", "FC Anyang", "FC<ruby>アニャン<rt>安養</rt></ruby>"],
        "강원 FC": ["Gangwon FC", "Gangwon FC", "Gangwon FC", "<ruby>カンウォン<rt>江原</rt></ruby>FC"],
        "경남 FC": ["Gyeongnam FC", "Gyeongnam FC", "Gyeongnam FC", "<ruby>キョンナム<rt>慶南</rt></ruby>FC"],
        "고양 자이크로": ["Goyang Zaicro", "Goyang Zaicro", "Goyang Zaicro", "<ruby>コヤン<rt>高陽</rt></ruby>・ザイクロ"],
        "고양 Hi FC": ["Goyang Hi FC", "Goyang Hi FC", "Goyang Hi FC", "<ruby>コヤン<rt>高陽</rt></ruby>Hi FC"],
        "광주 FC": ["Gwangju FC", "Gwangju FC", "Gwangju FC", "<ruby>クァンジュ<rt>光州</rt></ruby>FC"],
        "김천 상무 FC": ["Gimcheon Sangmu FC", "Gimcheon Sangmu FC", "Gimcheon Sangmu FC", "<ruby>キムチョン<rt>金泉</rt></ruby>・サンムFC"],
        "김포 FC": ["Gimpo FC", "Gimpo FC", "Gimpo FC", "<ruby>キンポ<rt>金浦</rt></ruby>FC"],
        "대구 FC": ["Daegu FC", "Daegu FC", "Daegu FC", "<ruby>テグ<rt>大邱</rt></ruby>FC"],
        "대전 시티즌": ["Daejeon Citizen", "Daejeon Citizen", "Daejeon Citizen", "<ruby>テジョン<rt>大田</rt></ruby>・シチズン"],
        "대전 하나 시티즌": ["Daejeon Hana Citizen", "Daejeon Hana Citizen", "Daejeon Hana Citizen", "<ruby>テジョン<rt>大田</rt></ruby>・ハナ・シチズン"],
        "부산 아이파크": ["Busan IPark", "Busan IPark", "Busan IPark", "<ruby>プサン<rt>釜山</rt></ruby>・アイパーク"],
        "부천 FC 1995": ["Bucheon FC 1995", "Bucheon FC 1995", "Bucheon FC 1995", "<ruby>プチョン<rt>富川</rt></ruby>FC1995"],
        "상주 상무 FC": ["Sangju Sangmu FC", "Sangju Sangmu FC", "Sangju Sangmu FC", "<ruby>サンジュ<rt>常州</rt></ruby>・サンムFC"],
        "성남 FC": ["Seongnam FC", "Seongnam FC", "Seongnam FC", "<ruby>ソンナム<rt>城南</rt></ruby>FC"],
        "수원 FC": ["Suwon FC", "Suwon FC", "Suwon FC", "<ruby>スウォン<rt>水原</rt></ruby>FC"],
        "수원 삼성 블루윙즈": ["Suwon Samsung Bluewings", "Suwon Samsung Bluewings", "Suwon Samsung Bluewings", "<ruby>スウォン<rt>水原</rt></ruby>・サムスン・ブルーウィングス"],
        "아산 무궁화 FC": ["Asan Mugunghwa FC", "Asan Mugunghwa FC", "Asan Mugunghwa FC", "<ruby>アサン<rt>牙山</rt></ruby>・ムグンファFC"],
        "안산 경찰청 축구단": ["Ansan Police FC", "Ansan Police FC", "Ansan Police FC", "<ruby>アンサン<rt>安山</rt></ruby><ruby>警察庁<rt>キョンチャルチョン</rt></ruby>FC"],
        "안산 그리너스": ["Ansan Greeners", "Ansan Greeners", "Ansan Greeners", "<ruby>アンサン<rt>安山</rt></ruby>・グリナース"],
        "안산 무궁화 FC": ["Ansan Mugunghwa FC", "Ansan Mugunghwa FC", "Ansan Mugunghwa FC", "<ruby>アンサン<rt>安山</rt></ruby>・ムグンファFC"],
        "울산 현대": ["Ulsan Hyundai", "Ulsan Hyundai", "Ulsan Hyundai", "<ruby>ウルサン<rt>蔚山</rt></ruby><ruby>現代<rt>ヒョンデ</rt></ruby>"],
        "울산 HD FC": ["Ulsan HD FC", "Ulsan HD FC", "Ulsan HD FC", "<ruby>ウルサン<rt>蔚山</rt></ruby>HD FC"],
        "인천 유나이티드": ["Incheon United", "Incheon United", "Incheon United", "<ruby>インチョン<rt>仁川</rt></ruby>・ユナイテッド"],
        "전남 드래곤즈": ["Jeonnam Dragons", "Jeonnam Dragons", "Jeonnam Dragons", "<ruby>チョンナム<rt>全南</rt></ruby>・ドラゴンズ"],
        "전북 현대 모터스": ["Jeonbuk Hyundai Motors", "Jeonbuk Hyundai Motors", "Jeonbuk Hyundai Motors", "<ruby>チョンブク<rt>全北</rt></ruby><ruby>現代<rt>ヒョンデ</rt></ruby>・モータース"],
        "제주 유나이티드": ["Jeju United", "Jeju United", "Jeju United", "<ruby>チェジュ<rt>済州</rt></ruby>・ユナイテッド"],
        "제주 SK FC": ["Jeju SK FC", "Jeju SK FC", "Jeju SK FC", "<ruby>チェジュ<rt>済州</rt></ruby>SK FC"],
        "천안 시티 FC": ["Cheonan City FC", "Cheonan City FC", "Cheonan City FC", "<ruby>チョナン<rt>天安</rt></ruby>・シティFC"],
        "충남아산 FC": ["Chungnam Asan FC", "Chungnam Asan FC", "Chungnam Asan FC", "<ruby>チュンナム<rt>忠南</rt></ruby>・<ruby>アサン<rt>牙山</rt></ruby>FC"],
        "충북청주 FC": ["Chungbuk Cheongju FC", "Chungbuk Cheongju FC", "Chungbuk Cheongju FC", "<ruby>チュンブク<rt>忠北</rt></ruby>・<ruby>チョンジュ<rt>清州</rt></ruby>FC"],
        "충주 험멜": ["Chungju Hummel", "Chungju Hummel", "Chungju Hummel", "<ruby>チュンジュ<rt>忠州</rt></ruby>ヒュンメル"],
        "포항 스틸러스": ["Pohang Steelers", "Pohang Steelers", "Pohang Steelers", "<ruby>ポハン<rt>浦項</rt></ruby>・スティーラーズ"],
        "화성 FC": ["Hwaseong FC", "Hwaseong FC", "Hwaseong FC", "<ruby>ファソン<rt>華城</rt></ruby>FC"],
        "세일중학교": ["Seil Middle School", "Seil Middle School", "Seil Middle School", "<ruby>セイル<rt>世一</rt></ruby>中学"],
        "신림중학교": ["Shillim Middle School", "Shillim Middle School", "Shillim Middle School", "<ruby>シンリム<rt>新林</rt></ruby>中学"],
        "한양중학교": ["Hanyang Middle School", "Hanyang Middle School", "Hanyang Middle School", "<ruby>ハニャン<rt>漢陽</rt></ruby>中学"],
        "숭실중학교": ["Soongsil Middle School", "Soongsil Middle School", "Soongsil Middle School", "<ruby>スンシル<rt>崇實</rt></ruby>中学"],
        "중동중학교": ["Joongdong Middle School", "Joongdong Middle School", "Joongdong Middle School", "<ruby>チュンドン<rt>中東</rt></ruby>中学"],
        "신천중학교": ["Shincheon Middle School", "Shincheon Middle School", "Shincheon Middle School", "<ruby>シンチョン<rt>新川</rt></ruby>中学"],
        "경희중학교": ["Kyunghee Middle School", "Kyunghee Middle School", "Kyunghee Middle School", "<ruby>キョンヒ<rt>慶熙</rt></ruby>中学"],
        "배재중학교": ["Paichai Middle School", "Paichai Middle School", "Paichai Middle School", "<ruby>ペジェ<rt>培材</rt></ruby>中学"],
        "남강중학교": ["Namkang Middle School", "Namkang Middle School", "Namkang Middle School", "<ruby>ナムガン<rt>南崗</rt></ruby>中学"],
        "강동": ["Gangdong", "Gangdong", "Gangdong", "<ruby>カンドン<rt>江東</rt></ruby>"],
        "구산중학교": ["Gusan Middle School", "Gusan Middle School", "Gusan Middle School", "<ruby>クサン<rt>龜山</rt></ruby>中学"],
        "장안중학교": ["Jangan Middle School", "Jangan Middle School", "Jangan Middle School", "<ruby>チャンアン<rt>長安</rt></ruby>中学"],
        "보인중학교": ["Boin Middle School", "Boin Middle School", "Boin Middle School", "<ruby>ポイン<rt>輔仁</rt></ruby>中学"],
        "석관중학교": ["Seokgwan Middle School", "Seokgwan Middle School", "Seokgwan Middle School", "<ruby>ソックァン<rt>石串</rt></ruby>中学"],
        "도봉중학교": ["Dobong Middle School", "Dobong Middle School", "Dobong Middle School", "<ruby>トボン<rt>道峰</rt></ruby>中学"],
        "마포신북": ["Mapo Sinbuk", "Mapo Sinbuk", "Mapo Sinbuk", "<ruby>マポ<rt>麻浦</rt></ruby>・<ruby>シンブク<rt>新北</rt></ruby>"],
        "개원중학교": ["Gaewon Middle School", "Gaewon Middle School", "Gaewon Middle School", "<ruby>ケウォン<rt>開院</rt></ruby>中学"],
        "화곡중학교": ["Hwagok Middle School", "Hwagok Middle School", "Hwagok Middle School", "<ruby>ファゴク<rt>禾谷</rt></ruby>中学"],
        "문래중학교": ["Mullae Middle School", "Mullae Middle School", "Mullae Middle School", "<ruby>ムンレ<rt>文來</rt></ruby>中学"],
        "중앙대학교 사범대학 부속중학교": ["Chung-Ang University Middle School", "Chung-Ang University Middle School", "Chung-Ang University Middle School", "<ruby>チュンアン<rt>中央</rt></ruby>大學校師範大學附屬中学"],
        "동원중학교": ["Dongwon Middle School", "Dongwon Middle School", "Dongwon Middle School", "<ruby>トンウォン<rt>東元</rt></ruby>中学"],
        "동북중학교": ["Dongbuk Middle School", "Dongbuk Middle School", "Dongbuk Middle School", "<ruby>トンブク<rt>東北</rt></ruby>中学"],
        "당산서중학교": ["Dangsanseo Middle School", "Dangsanseo Middle School", "Dangsanseo Middle School", "<ruby>タンサンソ<rt>堂山西</rt></ruby>中学"],
        "뉴 은평 FC": ["New Eunpyeong FC", "New Eunpyeong FC", "New Eunpyeong FC", "ニュー・<ruby>ウンピョン<rt>恩平</rt></ruby>FC"],
        "영서중학교": ["Yeongseo Middle School", "Yeongseo Middle School", "Yeongseo Middle School", "<ruby>ヨンソ<rt>永西</rt></ruby>中学"],
        "FC 한양": ["FC Hanyang", "FC Hanyang", "FC Hanyang", "FC<ruby>ハニャン<rt>漢陽</rt></ruby>"],

        // 구단명(Abbr.)
        "서울E": ["SEFC", "SEFC", "SEFC", "ソウルE"],
        "FC서울": ["SEO", "SEO", "SEO", "FCソウル"],
        "안양": ["ANY", "ANY", "ANY", "アニャン"],
        "강원": ["GAN", "GAN", "GAN", "カンウォン"],
        "경남공고": ["GN THS", "GN THS", "GN THS", "キョンナム工業高校"],
        "경남": ["GYE", "GYE", "GYE", "キョンナム"],
        "고양": ["GOY", "GOY", "GOY", "ゴヤン"],
        "광주": ["GWA", "GWA", "GWA", "クァンジュ"],
        "김천": ["GIM", "GIM", "GIM", "キムチョン"],
        "김포": ["GFC", "GFC", "GFC", "キムポ"],
        "대구": ["DAE", "DAE", "DAE", "テグ"],
        "대전코레일": ["KORAIL", "KORAIL", "KORAIL", "テジョンKORAIL"],
        "대전": ["DHFC", "DHFC", "DHFC", "テジョン"],
        "부산": ["BUS", "BUS", "BUS", "プサン"],
        "부천": ["BUC", "BUC", "BUC", "プチョン"],
        "상주": ["SAN", "SAN", "SAN", "サンジュ"],
        "성남": ["SFC", "SFC", "SFC", "ソンナム"],
        "수원FC": ["SUW", "SUW", "SUW", "スウォンFC"],
        "수원삼성": ["SSB", "SSB", "SSB", "スウォン・サムスン"],
        "아산무궁화": ["AMFC", "AMFC", "AMFC", "アサン・ムグンファ"],
        "안산경찰청": ["ANS", "ANS", "ANS", "アンサン警察庁"],
        "안산무궁화": ["ANS", "ANS", "ANS", "アンサン・ムグンファ"],
        "안산": ["ANS", "ANS", "ANS", "アンサン"],
        "울산": ["ULS", "ULS", "ULS", "ウルサン"],
        "인천": ["INC", "INC", "INC", "インチョン"],
        "전남": ["JDFC", "JDFC", "JDFC", "チョンナム"],
        "전북": ["JEO", "JEO", "JEO", "チョンブク"],
        "제주": ["JEJ", "JEJ", "JEJ", "チェジュ"],
        "천안": ["CCFC", "CCFC", "CCFC", "チョナン"],
        "충남아산": ["CAFC", "CAFC", "CAFC", "チュンナム・アサン"],
        "충북청주": ["CHFC", "CHFC", "CHFC", "チュンブク・チョンジュ"],
        "충주": ["CHU", "CHU", "CHU", "チュンジュ"],
        "포항": ["POH", "POH", "POH", "ポハン"],
        "화성": ["HSFC", "HSFC", "HSFC", "ファソン"],
        "성균관대": ["SKKU", "SKKU", "SKKU", "ソンギュングァン大学"],
        "포천": ["PCFC", "PCFC", "PCFC", "ポチョン"],
        "고려대": ["KU", "KU", "KU", "コリョ大学"],
        "호남대": ["HU", "HU", "HU", "ホナム大学"],
        "창원": ["CFC", "CFC", "CFC", "チャンウォン"],
        "송월": ["SWFC", "SWFC", "SWFC", "ソンウォル"],
        "계명고": ["KM HS", "KM HS", "KM HS", "キェミョン高校"],
        "숭실고": ["SS HS", "SS HS", "SS HS", "スンシル高校"],
        "초지고": ["CJ HS", "CJ HS", "CJ HS", "チョジ高校"],
        "홍천FC": ["HFC", "HFC", "HFC", "ホンチョン"],
        "파주고려": ["PJKR", "PJKR", "PJKR", "パジ・ュゴリョ"],
        "서울광진": ["SGJ", "SGJ", "SGJ", "ソウル・クァンジン"],
        "운호고": ["UH HS", "UH HS", "UH HS", "ウンホ高校"],
        "경기항공고": ["GA HS", "GA HS", "GA HS", "キョンギ航空高校"],
        "보인고": ["BOIN", "BOIN", "BOIN", "ポイン高校"],
        "과천고": ["GC HS", "GC HS", "GC HS", "クァチョン高校"],
        "수원고": ["SW HS", "SW HS", "SW HS", "スウォン高校"],
        "신라고": ["SL HS", "SL HS", "SL HS", "シンラ高校"],
        "광운AI고": ["KW HS", "KW HS", "KW HS", "クァンウンAI高校"],
        "대륜고": ["DR HS", "DR HS", "DR HS", "テリュン高校"],

        // 버튼
        "출전 경기 모두 보기": ["See All", "Ver Tudo", "Ver Todo", "全て見る"],
        "경기 일정 모두 보기": ["See All", "Ver Tudo", "Ver Todo", "全て見る"],
        "순위 모두 보기": ["See All", "Ver Tudo", "Ver Todo", "全て見る"],
        "스크롤하여 모두 보기": ["Scroll to See All", "Percorra para Ver Tudo", "Desplácese para Ver Todo", "スクロールして全て見る"],
        "모두 보기": ["See All", "Ver Tudo", "Ver Todo", "全て見る"],
        "A팀": ["A", "A", "A", "Aチーム"],
        "오늘": ["Today", "Hoje", "Hoy", "今日"],
        "통산": ["All-Time", "Todos os Tempos", "Todos los Tiempos", "通算"],
        "연도별": ["by Season", "por Temporada", "por Temporada", "年別"],
        "배경화면 다운로드": ["Download", "Baixar", "Descargar", "ダウンロード"],
        "사진 추가하기": ["Add Photos", "Adicionar Fotos", "Añadir Fotos", "写真を追加"],
        "돌아가기": ["Back", "Volte", "Volver", "戻る"],
        "관중석 시야": ["View From the Seat", "Vista do Assento", "Vista Desde el Asiento", "観客席の視野"],
        "교통 및 주차": ["Transportation & Parking", "Transporte e Estacionamento", "Transporte y Estacionamiento", "交通・駐車"],
        "주변 맛집": ["Nearby Restaurants", "Restaurantes Próximos", "Restaurantes Cercanos", "周辺レストラン"],
        "맛집 추가하기": ["Add Restaurants", "Adicionar Restaurantes", "Agregar Restaurantes", "レストランを追加"],
        "순위 자세히": ["See More Details", "Ver Mais Detalhes", "Ver Más Detalles", "もっと見る"],
        "순위 간략히": ["See Briefly", "Ver Brevemente", "Ver Brevemente", "簡単に見る"],
        "정보": ["Info", "Info", "Info", "情報"],
        "라인업": ["Lineups", "Formação", "Alineación", "ラインナップ"],
        "전적": ["H2H", "Frente-a-Frente", "Cara a Cara", "チーム対チーム"],
        "기상청 제공": ["Provided by the Korea Meteorological Administration", "Fornecido pela Administração Meteorológica da Coreia", "Proporcionado por la Administración Meteorológica de Corea", "気象庁提供"],

        "시즌별 기록": ["All Seasons", "Estatísticas por Temporada", "Estadísticas por Temporada", "年別スタッツ"],

        // 메뉴
        "홈": ["Home", "Home", "Inicio", "ホーム"],
        "일정": ["Fixtures", "Partidas", "Partidos", "日程"],
        "선수단": ["Players", "Jogadoras", "Jugadores", "選手名鑑"],
        "기록": ["Stats", "Estatísticos", "Estadísticas", "スタッツ"],
        "순위": ["Standings", "Classificações", "Clasificaciones", "順位表"],
        "응원가": ["Chants", "Canções", "Canciones", "チャント"],
        "직관 가이드": ["Guides", "Guias", "Guías", "ガイド"],
        "오류 제보 및 건의": ["Report Errors & Make Suggestions", "Reportar Erros e Fazer Sugestões", "Informar Errores y Hacer Sugerencias", "エラー情報・提案"],

         // legend
        "순위": ["Pos.", "Pos.", "Pos.", "順位"],
        "구단": ["Team", "Equipe", "Equipo", "クラブ名"],
        "승점": ["Pts.", "Pts.", "Pts.", "勝点"],
        "득점": ["GF", "GP", "GF", "得点"],
        "실점": ["GA", "GC", "GC", "失点"],
        "교체 명단": ["Substitutes", "Substitutos", "Suplentes", "控えメンバー"],
        "하이라이트": ["Highlights", "Resumo", "Resumen", "ハイライト"],
        "경기 최고의 선수": ["Player of the Match", "Jogador da Partida", "Jugador del Partido", "試合最優秀選手"],
        "점유율": ["Possession", "Posse de Bola", "Posesión", "ボールの支配率"],
        "유효슈팅": ["Shots on Target", "Remates Enquadrados", "Disparos a Puerta", "枠内シュート"],
        "슈팅": ["Shots", "Remates", "Tiros", "シュート"],
        "파울": ["Fouls Committed", "Faltas", "Faltas", "ファウル"],
        "경고 누적": ["2nd Yellow Cards", "2º Cartões Amarelos", "2ª Tarjetas Amarillas", "2ndイエローカード"],
        "경고": ["Yellow Cards", "Cartões Amarelos", "Tarjetas Amarillas", "イエローカード"],
        "퇴장": ["Red Cards", "Cartões Vermelhos", "Tarjetas Rojas", "レッドカード"],
        "코너킥": ["Corners", "Cantos", "Saques de Esquina", "コーナー"],
        "프리킥": ["Free Kicks", "Tiros Livres", "Tiros Libres", "フリーキック"],
        "오프사이드": ["Offsides", "Foras-de-Jogo", "Fueras de Juego", "オフサイド"],
        "승리": ["Wins", "Vitórias", "Ganados", "勝利"],
        "무승부": ["Draws", "Empates", "Empatados", "引き分け"],
        "패배": ["Losses", "Derrotas", "Perdidos", "敗北"],
        "골키퍼": ["", "", "", ""],
        "수비수": ["", "", "", ""],
        "미드필더": ["", "", "", ""],
        "공격수": ["", "", "", ""],
        "출전": ["Apps.", "Jogos", "Partidos", "出戦"],
        "도움": ["Assists", "Assistências", "Asistencias", "アシスト"],
        "공격P": ["G+A", "G+A", "G+A", "G+A"],
        "국적": ["Nationality", "Nacionalidade", "Nacionalidad", "国籍"],
        "키": ["Height", "Altura", "Altura", "身長"],
        "세": ["", "", "", "歳"],
        "소속": ["Team", "Equipe", "Equipo", "所属チーム"],
        "평점": ["Ratings", "Ratings", "Ratings", "レーティング"],
        "통산 기록": ["All Seasons", "Todas as Épocas", "Todas las Temporadas", "通算スタッツ"],
        "시즌": ["Seasons", "Temporadas", "Temporadas", "シーズン"],
        "선수": ["Name", "Nome", "Nombre", "名前"],
        "승": ["W", "V", "G", "勝利"],
        "무": ["D", "E", "E", "引き分け"],
        "패": ["L", "D", "P", "敗北"],
        "득실차": ["GD", "SG", "Dif.", "得失点"],
        "해당 좌석의 사진이 없습니다.": ["No Photo", "Sem Foto", "Sin Foto", "写真はありません"],
        "지하철": ["Subways", "Metrôs", "Metros", "地下鉄"],
        "버스": ["Buses", "Ônibus", "Autobuses", "バス"],
        "식당": ["Restaurants", "Restaurantes", "Restaurantes", "レストラン"],
        "카페&amp;디저트": ["Cafes & Desserts", "Cafés e Sobremesas", "Cafés y Postres", "コーヒー・デザート"],
        "현재 ": ["Current Weather in ", "Tempo Atual no ", "El Tiempo Actual en ", "現在"],
        " 날씨": ["", "", "", "の天気"],

        // 국적
        "대한민국": ["Republic of Korea", "República da Coreia", "República de Corea", "大韓民国"],
        "아르헨티나": ["Argentina", "Argentina", "Argentina", "アルゼンチン"],
        "브라질": ["Brazil", "Brasil", "Brasil", "ブラジル"],
        "자메이카": ["Jamaica", "Jamaica", "Jamaica", "ジャマイカ"],
        "일본": ["Japan", "Japão", "Japón", "日本"],
        "콜롬비아": ["Colombia", "Colômbia", "Colombia", "コロンビア"],
        "베트남": ["Vietnam", "Vietnã", "Vietnam", "ベトナム"],
        "독일": ["Germany", "Alemanha", "Alemania", "ドイツ"],
        "오스트레일리아": ["Australia", "Austrália", "Australia", "オーストラリア"],
        "세르비아": ["Serbia", "Sérvia", "Serbia", "セルビア"],
        "칠레": ["Chile", "Chile", "Chile", "チリ"],
        "스페인": ["Spain", "Espanha", "España", "スペイン"],
        "크로아티아": ["Croatia", "Croácia", "Croacia", "クロアチア"],
        "미국": ["United States", "Estados Unidos", "Estados Unidos", "アメリカ合衆国"],
        "트리니다드 토바고": ["Trinidad and Tobago", "Trindade e Tobago", "Trinidad y Tobago", "トリニダード・トバゴ"],
        "베네수엘라": ["Venezuela", "Venezuela", "Venezuela", "ベネズエラ"],

        // 날씨
        "맑음": ["Clear", "Claro", "Despejado", "晴れ"],
        "비": ["Rain", "Chuva", "Lluvia", "雨"],
        "눈·비": ["Snow & Rain", "Neve e Chuva", "Nieve y Lluvia", "雪・雨"],
        "눈": ["Snow", "Neve", "Nieve", "雪"],
        "빗방울": ["Raindrops", "Gotas de Chuva", "Gotas de Lluvia", "小雨"],
        "약한 눈·비": ["Light Snow & Rain", "Neve e Chuva Fraca", "Nieve y Lluvia Débil", "小雨・雪"],
        "눈 날림": ["Snow Flurry", "Nevasca Leve", "Ventisca de Nieve", "小雪"],
        "강풍주의보": ["Strong Wind Advisory", "Aviso de Vento Forte", "Aviso de Viento Fuerte", "強風注意報"],
        "강풍경보": ["Strong Wind Warning", "Alerta de Vento Forte", "Alerta de Viento Fuerte", "強風警報"],
        "풍랑주의보": ["High Seas Advisory", "Aviso de Maré Alta", "Aviso de Mar Adverso", "嵐の注意報"],
        "풍랑경보": ["High Seas Warning", "Alerta de Maré Alta", "Alerta de Mar Adverso", "嵐の警報"],
        "호우주의보": ["Heavy Rain Advisory", "Aviso de Chuva Forte", "Aviso de Lluvia Intensa", "大雨注意報"],
        "호우경보": ["Heavy Rain Warning", "Alerta de Chuva Forte", "Alerta de Lluvia Intensa", "大雨警報"],
        "대설주의보": ["Heavy Snow Advisory", "Aviso de Nevasca", "Aviso de Nevadas", "大雪注意報"],
        "대설경보": ["Heavy Snow Warning", "Alerta de Nevasca", "Alerta de Nevadas", "大雪警報"],
        "건조주의보": ["Dry Weather Advisory", "Aviso de Tempo Seco", "Aviso de Tiempo Seco", "乾燥注意報"],
        "건조경보": ["Dry Weather Warning", "Alerta de Tempo Seco", "Alerta de Tiempo Seco", "乾燥警報"],
        "폭풍해일주의보": ["Storm Surge Advisory", "Aviso de Ressaca de Tempestade", "Aviso de Marea de Tormenta", "津波注意報"],
        "폭풍해일경보": ["Storm Surge Warning", "Alerta de Ressaca de Tempestade", "Alerta de Marea de Tormenta", "津波警報"],
        "한파주의보": ["Cold Wave Advisory", "Aviso de Onda de Frio", "Aviso de Ola de Frío", "低温注意報"],
        "한파경보": ["Cold Wave Warning", "Alerta de Onda de Frio", "Alerta de Ola de Frío", "低温警報"],
        "태풍주의보": ["Typhoon Advisory", "Aviso de Tufão", "Aviso de Tifón", "台風注意報"],
        "태풍경보": ["Typhoon Warning", "Alerta de Tufão", "Alerta de Tifón", "台風警報"],
        "황사주의보": ["Yellow Dust Advisory", "Aviso de Poeira Amarela", "Aviso de Polvo Amarillo", "黄砂注意報"],
        "황사경보": ["Yellow Dust Warning", "Alerta de Poeira Amarela", "Alerta de Polvo Amarillo", "黄砂警報"],
        "폭염주의보": ["Heat Wave Advisory", "Aviso de Onda de Calor", "Aviso de Ola de Calor", "爆炎注意報"],
        "폭염경보": ["Heat Wave Warning", "Alerta de Onda de Calor", "Alerta de Ola de Calor", "爆炎警報"],

        // 지역명
        "서울": ["Seoul", "Seul", "Seúl", "ソウル"],

        // 배경화면
        "홈 킷": ["Home Kit", "Camiseta Principal", "Camiseta 1ª Equipación", "ホームユニフォーム"],
        "원정 킷": ["Away Kit", "Camisola Alternativa", "Camiseta 2ª Equipación", "アウェイユニフォーム"],
        "GK 홈 킷": ["GK Home Kit", "Camiseta Principal", "Camiseta 1ª Equipación", "GKホームユニフォーム"],
        "GK 원정 킷": ["GK Away Kit", "Camisola Alternativa", "Camiseta 2ª Equipación", "GKアウェイユニフォーム"],
    };

    nameList = {
        0:[20250207, 20200151, 20130116, 20200150, 20220286, 20170227, 20250192, 20140067, 20160266, 20240313, 20250194, 20230211, 20230194],
        1:[20150225, 20240190, 20150224],
        2:[20020081, 20150222],
    };

    var lang = localStorage.getItem("lang");
    var langNum = lang == "en" ? 0
        : lang == "pt" ? 1
            : lang == "es" ? 2
                : lang == "jp" ? 3
                    : null;

    $("[transl='y']").each(function () {
        var originalText = $(this).html();
        var newText = originalText;

        if (langNum != null) {
            for (var word in transList) {
                if (originalText.indexOf(word) !== -1) {
                    var regex = new RegExp(word, "g");
                    newText = newText.replace(regex, transList[word][langNum]);
                }
            }
        }

        // 라운드
        var regex = /(\d+)라운드/g;
        if (regex.test(newText) && lang != "ko") {
            newText = newText.replace(regex, function (match, p1) {
                if (langNum == 0) return "R" + p1;
                else if (langNum == 1 || langNum == 2) return "J" + p1;
                else if (langNum == 3) return p1 + "ラウンド";
                else return p1 + "라운드";
            });
        }

        // 제n회
        var regex = /제(\d+)회/g;
        if (regex.test(newText) && lang != "ko") {
            var newText = newText.replace(regex, function (match, p1) {
                var num = parseInt(p1, 10);

                if (langNum == 0) {
                    var j = num % 10, k = num % 100;

                    if (j == 1 && k != 11) {
                        return num + "st";
                    }
                    if (j == 2 && k != 12) {
                        return num + "nd";
                    }
                    if (j == 3 && k != 13) {
                        return num + "rd";
                    }
                    return num + "th";
                } else if (langNum == 1 || langNum == 2) return num + "º";
                else if (langNum == 3) return "第" + num + "回";
                else return "제" + num + "회";
            });
        }
        
        // 경기당
        var regex = /경기당\s*([\d.]+)/g;

        if (regex.test(newText)) {
            newText = newText.replace(regex, function (match, p1) {
                var n = parseFloat(p1.trim());

                if (langNum === 0) {
                    return n + " per Game";
                } else if (langNum === 1) {
                    return n + " por Jogo";
                } else if (langNum === 2) {
                    return n + " por Juego";
                } else if (langNum === 3) return "1試合あたり" + n + "回";
                else return "경기당 " + n;
            });
        }


        if (newText !== originalText) {
            $(this).html(newText);
        }

    });
    
    // 선수 이름 뒤 숫자 지우기/이름 짧게
    $("#startingXI > table > tbody > tr > td > p:nth-of-type(2), #sub > table > tbody > tr > td:nth-of-type(2) > p:nth-of-type(1)").each(function() {
        $(this).text().replace(/[0-9]/g, "");

        parent = $(this).parents().filter(function () {
            return typeof $(this).attr('id') !== 'undefined' && $(this).attr('id') !== '';
        }).first().attr("id");
        parent = Number(parent);

        // 공백으로 구분
        if(nameList[0].includes(parent)) $(this).text($(this).text().split(" ")[0]);
        else if(nameList[1].includes(parent)) $(this).text($(this).text());
        else if(parent == nameList[2][0]) $(this).text("Glory");
        else if(parent == nameList[2][1]) $(this).text("Bobby");
        else $(this).text($(this).text().split(" ").length > 1 ? $(this).text().split(" ").slice(1).join(" ") : $(this).text());

        // 나카구로(・)로 구분
        if(nameList[0].includes(parent)) $(this).text($(this).text().split("・")[0]);
        else if(nameList[1].includes(parent)) $(this).text($(this).text());
        else if(parent == nameList[2][0]) $(this).text("Glory");
        else if(parent == nameList[2][1]) $(this).text("Bobby");
        else $(this).text($(this).text().split("・").length > 1 ? $(this).text().split("・").slice(1).join("・") : $(this).text());
    })

    console.log(`번역 완료(ko -> ${lang})`)

};

transl()