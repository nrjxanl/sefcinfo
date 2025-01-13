// 새로고침 시
$(document).ready(function() {

    // url 불러오기
    url = window.location.href

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
$("body").append("<div id='menu'><div><span></span><img src='https://sefc.info/files/home.svg'>홈</div><div><span></span><img src='https://sefc.info/files/fixtures.svg'>일정</div><div><span></span><img src='https://sefc.info/files/players.svg'>선수단</div><div><span></span><img src='https://sefc.info/files/stats.svg'>기록</div><div><span></span><img src='https://sefc.info/files/standings.svg'>순위</div><div><span></span><img src='https://sefc.info/files/chants.svg'>응원가</div></div><div id='menuBg'></div>")

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
    window.location = "./fixtures"
})
$("#menu > div:nth-of-type(3)").click(function() {
    window.location = "./players"
})
$("#menu > div:nth-of-type(4)").click(function() {
    window.location = "./stats"
})
$("#menu > div:nth-of-type(5)").click(function() {
    window.location = "./standings"
})
$("#menu > div:nth-of-type(6)").click(function() {
    window.location = "./chants"
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
} else if ($("#team").length) {
    $("#menu > div:nth-of-type(6)").css("color", "#000060")
    $("#menu > div:nth-of-type(6) > span").css("background", "#000060")
    $("#menu > div:nth-of-type(6) > img").css("filter", "brightness(0) saturate(100%) invert(8%) sepia(76%) saturate(5175%) hue-rotate(242deg) brightness(71%) contrast(125%)")
}

// 메뉴 hover 시 강조
$("#menu > div").hover(
    function() {
        $("#menu > div > span").css("background", "")
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
    $(".fixturesButton > button").css({"color": "#000000", "border-bottom": "none"})
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
    $("#matchInfo").css("display", "block")
    $("#matchLineup").css("display", "none")
    $("#matchStat").css("display", "none")
    $("#matchH2H").css("display", "none")
    $(".matchDetail button:nth-child(1)").css("font-weight", 900)
    $(".matchDetail button:nth-child(2)").css("font-weight", 300)
    $(".matchDetail button:nth-child(3)").css("font-weight", 300)
    $(".matchDetail button:nth-child(4)").css("font-weight", 300)
    localStorage.setItem(id, "matchInfo")
}

function matchLineup() {
    $("#matchInfo").css("display", "none")
    $("#matchLineup").css("display", "block")
    $("#matchStat").css("display", "none")
    $("#matchH2H").css("display", "none")
    $(".matchDetail button:nth-child(1)").css("font-weight", 300)
    $(".matchDetail button:nth-child(2)").css("font-weight", 900)
    $(".matchDetail button:nth-child(3)").css("font-weight", 300)
    $(".matchDetail button:nth-child(4)").css("font-weight", 300)
    localStorage.setItem(id, "matchLineup")
}

function matchStat() {
    $("#matchInfo").css("display", "none")
    $("#matchLineup").css("display", "none")
    $("#matchStat").css("display", "block")
    $("#matchH2H").css("display", "none")
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

    $(".standingsButton > button").css({"color": "#000000", "border-bottom": "none"})
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

    $(".standingsButton > button").css({"color": "#000000", "border-bottom": "none"})
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

    $(".standingsButton > button").css({"color": "#000000", "border-bottom": "none"})
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

    $(".statsButton > button").css({"color": "#000000", "border-bottom": "none"})
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

    $(".statsButton > button").css({"color": "#000000", "border-bottom": "none"})
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

    $(".statsButton > button").css({"color": "#000000", "border-bottom": "none"})
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
    teamChants = ["SEFC 콜", "서울 이랜드 콜", "2 3 4 서울 콜", "서울의 터<span>(선수 입장 시)</span>", "골 골 골 골 서울 이랜드<span>(세트피스 상황)</span>", "서울의 노래", "사랑해 서울 이랜드", "한강에서부터 제주까지", "표범의 전사들", "앞으로 가자", "하늘 아래서 소리쳐", "바빌론 강가에서<span>(Rivers of Babylon)</span>", "빙빙 돌아라", "서울의 아리아", "라퓨타", "페퍼스", "우리는 항상 여기에", "뱃놀이<span>(경기 승리 후)</span>"]
    playersChants = ["선수 콜", "주장 콜", "득점 콜", "오스마르 콜"]

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

if ($("#chantsName").length && window.location.href.match("team")) {
    chantsName = (teamChants[window.location.href.split("?")[1] - 1]).split("<span>")[0]
    $("#chantsName").text(chantsName)
    
    let chantsUrl, timeMapping

    if (chantsName == "SEFC 콜") {
        chantsUrl = "v_KFUAThuiw"

        timeMapping = [
            {time: 1.7, elementId: "lyrics-1"},
            {time: 3, elementId: "lyrics-2"},
            {time: 4.7, elementId: "lyrics-1"},
            {time: 6, elementId: "lyrics-2"},
            {time: 7.3, elementId: "lyrics-1"},
            {time: 8.6, elementId: "lyrics-2"},
            {time: 10.2, elementId: "lyrics-1"},
            {time: 11.8, elementId: "lyrics-2"},
        ]

        $("#chantsLyrics").append("<p id='lyrics-1'>짝 짝 짝 짝</p><p id='lyrics-2'>SEFC</p>")
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
    
    function onPlayerReady(event) {
        console.log("Player is ready")
    }
    
    let lastBoldId = null  // 마지막으로 볼드 처리된 자막의 ID를 기억
    
    function updateTextStyle(currentTime) {
        // 현재 시간에 맞는 자막을 검색
        const currentMapping = timeMapping.find(({ time }) => Math.abs(currentTime - time) < 0.25)
        
        // 만약 현재 자막이 있으면
        if (currentMapping) {
            // 이전 자막이 볼드 상태라면 그 자막을 기본 상태로 되돌림
            if (lastBoldId && lastBoldId !== currentMapping.elementId) {
                document.getElementById(lastBoldId).style.fontWeight = "300"  // 이전 자막을 기본 상태로 돌림
            }
        
            // 현재 자막을 볼드 처리
            document.getElementById(currentMapping.elementId).style.fontWeight = "600"
        
            // 현재 자막의 ID를 마지막 볼드 처리된 자막으로 기록
            lastBoldId = currentMapping.elementId
        }
    }
    
    // 영상이 끝났을 때 모든 자막의 볼드 처리를 해제하는 함수
    function resetAllTextStyles() {
        timeMapping.forEach(({ elementId }) => {
            document.getElementById(elementId).style.fontWeight = "300"  // 모든 자막을 기본 스타일로 초기화
        })
    }
    
    function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.PLAYING) {
            setInterval(() => {
                const currentTime = player.getCurrentTime()
                updateTextStyle(currentTime)
            }, 500)
        } else if (event.data === YT.PlayerState.ENDED) {
            // 영상이 끝났을 때 모든 자막의 볼드 처리를 해제
            resetAllTextStyles()
        }
    }
}