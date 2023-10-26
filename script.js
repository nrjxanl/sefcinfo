// 새로고침 시
$(document).ready(function() {

    // 다음 경기로 이동
    if($("#nextMatchA").length) {
        document.getElementById("nextMatchA").scrollIntoView({behavior: "smooth", block: "center"});
    };

});

// 푸터
if ($("#news").length) { // 뉴스
    $("footer").html("<a href='./news'><div><img src='./files/news.png'>뉴스</div></a><a href='./players'><ul><img src='./files/players.png'></ul></a><a href='https://sefc.info'><ul><img src='./files/seouleland_s.png'></ul></a><a href='./fixtures'><ul><img src='./files/fixtures.png'></ul></a><a href='./standings'><ul><img src='./files/standings.png'></ul></a>")
} else if ($(".matchDetail").length || $(".fixturesButton").length) { // 일정
    $("footer").html("<a href='./news'><ul><img src='./files/news.png'></ul></a><a href='./players'><ul><img src='./files/players.png'></ul></a><a href='https://sefc.info'><ul><img src='./files/seouleland_s.png'></ul></a><a href='./fixtures'><div><img src='./files/fixtures.png'>일정</div></a><a href='./standings'><ul><img src='./files/standings.png'></ul></a>")
} else if ($(".playerDetail").length || $(".playerButton").length) { // 선수
    $("footer").html("<a href='./news'><ul><img src='./files/news.png'></ul></a><a href='./players'><div><img src='./files/players.png'>선수</div></a><a href='https://sefc.info'><ul><img src='./files/seouleland_s.png'></ul></a><a href='./fixtures'><ul><img src='./files/fixtures.png'></ul></a><a href='./standings'><ul><img src='./files/standings.png'></ul></a>")
} else if ($(".standingsButton").length) { // 순위
    $("footer").html("<a href='./news'><ul><img src='./files/news.png'></ul></a><a href='./players'><ul><img src='./files/players.png'></ul></a><a href='https://sefc.info'><ul><img src='./files/seouleland_s.png'></ul></a><a href='./fixtures'><ul><img src='./files/fixtures.png'></ul></a><a href='./standings'><div><img src='./files/standings.png'>순위</div></a>")
} else {
    $("footer").html("<a href='./news'><ul><img src='./files/news.png'></ul></a><a href='./players'><ul><img src='./files/players.png'></ul></a><a href='https://sefc.info'><ul><img src='./files/seouleland_s.png'></ul></a><a href='./fixtures'><ul><img src='./files/fixtures.png'></ul></a><a href='./standings'><ul><img src='./files/standings.png'></ul></a>")
};

// 문자별 글꼴 적용
characterList = [];

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
i = 0x3500; // CJK Hanja 3
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
};

function playerU18() {
    document.getElementById("playerA").style.display = "none";
    document.getElementById("playerU18").style.display = "block";
    document.getElementById("playerU15").style.display = "none";
};

function playerU15() {
    document.getElementById("playerA").style.display = "none";
    document.getElementById("playerU18").style.display = "none";
    document.getElementById("playerU15").style.display = "block";
};

// 일정 창 전환
function fixturesA() {
    document.getElementById("fixturesA").style.display = "block";
    document.getElementById("fixturesU18").style.display = "none";
    document.getElementById("fixturesU15").style.display = "none";
    document.getElementById("nextMatchA").scrollIntoView({block: "center"});
};

function fixturesU18() {
    document.getElementById("fixturesA").style.display = "none";
    document.getElementById("fixturesU18").style.display = "block";
    document.getElementById("fixturesU15").style.display = "none";
    document.getElementById("nextMatchU18").scrollIntoView({block: "center"});
};

function fixturesU15() {
    document.getElementById("fixturesA").style.display = "none";
    document.getElementById("fixturesU18").style.display = "none";
    document.getElementById("fixturesU15").style.display = "block";
    document.getElementById("nextMatchU15").scrollIntoView({block: "center"});
};

function fixturesSeason() {
    season = $("#fixturesSeason_").css("display");

    if(season == "none") {
        document.getElementById("fixturesSeason_").style.display = "flex";
    } else {
        document.getElementById("fixturesSeason_").style.display = "none";
    };
    
};

// 일정 SEFC tr 투명도 변경
$("div[id*='fixtures'] > div > a > div > table > tbody > tr:has(.sefc) > td:nth-child(n-2):nth-child(-n+3)").css("opacity", "100%")
$("div[id*='fixtures'] > div > a > div > table > tbody > tr:has(.sefc8) > td:nth-child(n-2):nth-child(-n+3)").css("opacity", "100%")
$("div[id*='fixtures'] > div > a > div > table > tbody > tr:has(.sefc5) > td:nth-child(n-2):nth-child(-n+3)").css("opacity", "100%")

$("div[id*='fixtures'] > div > a > div > table > tbody > tr:has(.ssb) > td:nth-child(3)").css("font-size", "14px")
$("div[id*='fixtures'] > div > a > div > table > tbody > tr:has(.ssb8) > td:nth-child(3)").css("font-size", "14px")
$("div[id*='fixtures'] > div > a > div > table > tbody > tr:has(.ssb5) > td:nth-child(3)").css("font-size", "14px")

// 경기 세부 정보 창 전환
function matchInfo() {
    document.getElementById("matchInfo").style.display = "block";
    document.getElementById("matchLineup").style.display = "none";
    document.getElementById("matchStat").style.display = "none";
    document.getElementById("matchH2H").style.display = "none";
    $(".matchDetail button:nth-child(1)").css("font-weight", 900);
    $(".matchDetail button:nth-child(2)").css("font-weight", 500);
    $(".matchDetail button:nth-child(3)").css("font-weight", 500);
    $(".matchDetail button:nth-child(4)").css("font-weight", 500);
};

function matchLineup() {
    document.getElementById("matchInfo").style.display = "none";
    document.getElementById("matchLineup").style.display = "block";
    document.getElementById("matchStat").style.display = "none";
    document.getElementById("matchH2H").style.display = "none";
    $(".matchDetail button:nth-child(1)").css("font-weight", 500);
    $(".matchDetail button:nth-child(2)").css("font-weight", 900);
    $(".matchDetail button:nth-child(3)").css("font-weight", 500);
    $(".matchDetail button:nth-child(4)").css("font-weight", 500);
};

function matchStat() {
    document.getElementById("matchInfo").style.display = "none";
    document.getElementById("matchLineup").style.display = "none";
    document.getElementById("matchStat").style.display = "block";
    document.getElementById("matchH2H").style.display = "none";
    $(".matchDetail button:nth-child(1)").css("font-weight", 500);
    $(".matchDetail button:nth-child(2)").css("font-weight", 500);
    $(".matchDetail button:nth-child(3)").css("font-weight", 900);
    $(".matchDetail button:nth-child(4)").css("font-weight", 500);
};

function matchH2H() {
    document.getElementById("matchInfo").style.display = "none";
    document.getElementById("matchLineup").style.display = "none";
    document.getElementById("matchStat").style.display = "none";
    document.getElementById("matchH2H").style.display = "flex";
    $(".matchDetail button:nth-child(1)").css("font-weight", 500);
    $(".matchDetail button:nth-child(2)").css("font-weight", 500);
    $(".matchDetail button:nth-child(3)").css("font-weight", 500);
    $(".matchDetail button:nth-child(4)").css("font-weight", 900);
};

if ($("#matchScore").length && !$("#highlight").length) {
    document.getElementById("matchLineup").style.display = "block";
    $(".matchDetail button:nth-child(1)").css("display", "none");
    $(".matchDetail button:nth-child(2)").css("font-weight", 900);
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

// 순위 자세히/간략히 보기
function standings() {
    if($("div[id*='standings']").find("th:nth-of-type(6)").css("display") == "none") {
        $("div[id*='standings'] > div > table > thead > tr > th:nth-of-type(n+3)").css({"display": "table-cell", "width": "calc(50vw/7)"});
        $("div[id*='standings'] > div > table > tbody > tr > td:nth-of-type(n+4)").css({"display": "table-cell", "width": "calc(50vw/7)", "font-size": "12px"});
    } else {
        $("div[id*='standings'] > div > table > thead > tr > th:nth-of-type(n+3)").css({"width": "12.5vw"})
        $("div[id*='standings'] > div > table > thead > tr > th:nth-of-type(n+4):nth-of-type(-n+6)").css({"display": "none"});
        $("div[id*='standings'] > div > table > tbody > tr > td:nth-of-type(n+4)").css({"width": "12.5vw", "font-size": "14px"})
        $("div[id*='standings'] > div > table > tbody > tr > td:nth-of-type(n+5):nth-of-type(-n+7)").css({"display": "none"});
        $(".standings button").text("자세히 보기");
    };
};

function standingsU18F() {
    document.getElementById("standingsU18F").style.display = "block";
    document.getElementById("standingsU18S").style.display = "none";
    $(".standingsDetail button:nth-child(1)").css("font-weight", 900);
    $(".standingsDetail button:nth-child(2)").css("font-weight", 500);
}

function standingsU18S() {
    document.getElementById("standingsU18F").style.display = "none";
    document.getElementById("standingsU18S").style.display = "block";
    $(".standingsDetail button:nth-child(1)").css("font-weight", 500);
    $(".standingsDetail button:nth-child(2)").css("font-weight", 900);
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

$("#playerPos > #cf").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-70vw", "margin-left": "20vw"});
$("#playerPos > #lw").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-63.8vw", "margin-left": "5vw"});
$("#playerPos > #rw").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-63.8vw", "margin-left": "35vw"});
$("#playerPos > #am").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-57.6vw", "margin-left": "20vw"});
$("#playerPos > #lm").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-46.4vw", "margin-left": "5vw"});
$("#playerPos > #cm").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-46.4vw", "margin-left": "20vw"});
$("#playerPos > #rm").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-46.4vw", "margin-left": "35vw"});
$("#playerPos > #dm").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-35.2vw", "margin-left": "20vw"});
$("#playerPos > #lb").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-29.4vw", "margin-left": "5vw"});
$("#playerPos > #rb").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-29.4vw", "margin-left": "35vw"});
$("#playerPos > #cb").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-23.6vw", "margin-left": "20vw"});
$("#playerPos > #gk").css({"width": "10vw", "padding": "1vw 0", "font-size": "14px", "border-radius": "50px", "color": "#fafafa", "background": "#dcdcdc", "position": "absolute", "margin-top": "-12vw", "margin-left": "20vw"});

$("p[pos=o]").css({"color": "#fafafa", "background": "#000831", "opacity": "1"});

// 선수 정보 창 전환
function playerInfo() {
    document.getElementById("playerPos").style.display = "block";
    document.getElementById("playerStat").style.display = "none";
    document.getElementById("playerCareer").style.display = "none";
    $(".playerDetail button:nth-child(1)").css("font-weight", 900);
    $(".playerDetail button:nth-child(2)").css("font-weight", 500);
    $(".playerDetail button:nth-child(3)").css("font-weight", 500);
}

function playerStat() {
    document.getElementById("playerPos").style.display = "none";
    document.getElementById("playerStat").style.display = "flex";
    document.getElementById("playerCareer").style.display = "none";
    $(".playerDetail button:nth-child(1)").css("font-weight", 500);
    $(".playerDetail button:nth-child(2)").css("font-weight", 900);
    $(".playerDetail button:nth-child(3)").css("font-weight", 500);
}

function playerCareer() {
    document.getElementById("playerPos").style.display = "none";
    document.getElementById("playerStat").style.display = "none";
    document.getElementById("playerCareer").style.display = "block";
    $(".playerDetail button:nth-child(1)").css("font-weight", 500);
    $(".playerDetail button:nth-child(2)").css("font-weight", 500);
    $(".playerDetail button:nth-child(3)").css("font-weight", 900);
}

// 나이 계산
birthday = $("#birth").text();
birthday = new Date(birthday + "T00:00:00.000Z");

now = new Date();
dd = String(now.getDate()).padStart(2, "0");
mm = String(now.getMonth() + 1).padStart(2, "0");
yyyy = now.getFullYear();
nowYMD = yyyy + "-" + mm + "-" + dd + "T00:00:00.000Z";
today = new Date(nowYMD);

years = today.getFullYear() - birthday.getFullYear();
birthday.setFullYear(today.getFullYear());

if (today < birthday) {years--;};

$("#age").text(years + "세");

// 선수 경력 임대 div 들여쓰기
$("div[loan='o']").css({"padding-left": "3vw", "opacity": "0.8"});
$("div[loan='o'] > p:nth-of-type(1)").css("width", "32vw");

// 하이라이트 가져오기
href = $("#highlight").text();

$("#highlight").empty().append("<a href='https://youtu.be/" + href + "' target='_blank'><img src='http://img.youtube.com/vi/" + href + "/mqdefault.jpg'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png'></a>");

if ($("#highlight > a").attr("href") == "https://youtu.be/") {
    $("#highlight").css("display", "none");
};