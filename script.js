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

});

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
    season = $("#fixturesSeason_").css("display");

    if(season == "none") {
        document.getElementById("fixturesSeason_").style.display = "flex";
    } else {
        document.getElementById("fixturesSeason_").style.display = "none";
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
    season = $("#standingsSeason_").css("display");

    if(season == "none") {
        document.getElementById("standingsSeason_").style.display = "flex";
    } else {
        document.getElementById("standingsSeason_").style.display = "none";
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
dd = String(now.getDate()).padStart(2, "0");
mm = String(now.getMonth() + 1).padStart(2, "0");
yyyy = now.getFullYear();
nowYMD = yyyy + "-" + mm + "-" + dd + "T00:00:00.000Z";
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
$("#appDiv > p:nth-of-type(1)").text(app);
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