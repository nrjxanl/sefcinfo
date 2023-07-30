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
    document.getElementById("nextMatch").scrollIntoView({behavior: "smooth", block: "center"});
}

function fixturesU18() {
    document.getElementById("fixturesA").style.display = "none";
    document.getElementById("fixturesU18").style.display = "block";
    document.getElementById("fixturesU15").style.display = "none";
    document.getElementById("nextMatch8").scrollIntoView({behavior: "smooth", block: "center"});
}

function fixturesU15() {
    document.getElementById("fixturesA").style.display = "none";
    document.getElementById("fixturesU18").style.display = "none";
    document.getElementById("fixturesU15").style.display = "block";
    document.getElementById("nextMatch5").scrollIntoView({behavior: "smooth", block: "center"});
}

function fixturesSeason() {
    var fixturesSeason = $("div[class='fixturesSeason_']").css("display")

    if(fixturesSeason == "none") {
        $("div[class='fixturesSeason_']").css("display", "flex");
    }else {
        $("div[class='fixturesSeason_']").css("display", "none");
    }
    
}

// 일정 글자 수 초과 시 글꼴 크기 조정
// fontSize = function(){
//     content = $("div[id*=fixtures] > div > a > div > table > tbody > tr > td:nth-child(3)")
//     fontSize = parseInt(content.width()/15)+"px";
//     content.css('font-size', fontSize);
// };

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
    var standingsSeason = $("div[class='standingsSeason_']").css("display")

    if(standingsSeason == "none") {
        $("div[class='standingsSeason_']").css("display", "flex");
    }else {
        $("div[class='standingsSeason_']").css("display", "none");
    }
    
}

function standings() {
    var standings = $("div[id*='standings'] div table thead tr th:nth-child(8)").css("display")

    if(standings == "none") {
        $("div[id*='standings'] div table").css("width", "113vw");
        $("div[id*='standings'] div table thead tr th:nth-child(n+4):nth-child(-n+6)").css({"display": "table-cell", "width": "10vw"});
        $("div[id*='standings'] div table thead tr th:nth-child(n+8)").css({"display": "table-cell", "width": "10vw"});
        $("div[id*='standings'] div table tbody tr td:nth-child(n+6):nth-child(-n+8)").css({"display": "table-cell", "width": "10vw"});
        $("div[id*='standings'] div table tbody tr td:nth-child(n+10)").css({"display": "table-cell", "width": "10vw"});
        $("div[id*='standings'] div table tbody tr td:nth-child(3)").css("width", "8vw");
        $("div[id*='standings'] div table tbody tr td:nth-child(4)").css("width", "35vw");
        $(".standings button").text("간략히 보기");
    }else {
        $("div[id*='standings'] div table").css("width", "90vw");
        $("div[id*='standings'] div table thead tr th:nth-child(n+4):nth-child(-n+6)").css({"display": "none"});
        $("div[id*='standings'] div table thead tr th:nth-child(n+8)").css({"display": "none"});
        $("div[id*='standings'] div table tbody tr td:nth-child(n+6):nth-child(-n+8)").css({"display": "none"});
        $("div[id*='standings'] div table tbody tr td:nth-child(n+10)").css({"display": "none"});
        $("div[id*='standings'] div table tbody tr td:nth-child(3)").css("width", "10vw");
        $("div[id*='standings'] div table tbody tr td:nth-child(4)").css("width", "40vw");
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

//A팀 엠블럼 삽입
$("td[class='sefc']").after("<td><img src='./files/seouleland_s.png'></td><td>서울 이랜드 FC</td>");
$("td[class='gan']").after("<td><img src='./files/gangwonfc_s.png'></td><td>강원 FC</td>");
$("td[class='gye']").after("<td><img src='./files/gyeongnamfc_s.png'></td><td>경남 FC</td>");
$("td[class='gwa']").after("<td><img src='./files/gwangjufc_s.png'></td><td>광주 FC</td>");
$("td[class='gim']").after("<td><img src='./files/gimcheonsangmu_s.png'></td><td>김천 상무 FC</td>");
$("td[class='gfc']").after("<td><img src='./files/gimpofc_s.png'></td><td>김포 FC</td>");
$("td[class='dae']").after("<td><img src='./files/daegufc_s.png'></td><td>대구 FC</td>");
$("td[class='dhfc']").after("<td><img src='./files/daejeonhana_s.png'></td><td>대전 하나 시티즌</td>");
$("td[class='bus']").after("<td><img src='./files/busanipark_s.png'></td><td>부산 아이파크</td>");
$("td[class='buc']").after("<td><img src='./files/bucheonfc_s.png'></td><td>부천 FC 1995</td>");
$("td[class='fcs']").after("<td><img src='./files/fcseoul_s.png'></td><td>FC 서울</td>");
$("td[class='sfc']").after("<td><img src='./files/seongnamfc_s.png'></td><td>성남 FC</td>");
$("td[class='ssb']").after("<td><img src='./files/suwonsamsung_s.png'></td><td>수원 삼성 블루윙즈</td>");
$("td[class='suw']").after("<td><img src='./files/suwonfc_s.png'></td><td>수원 FC</td>");
$("td[class='ans']").after("<td><img src='./files/ansangreeners_s.png'></td><td>안산 그리너스</td>");
$("td[class='any']").after("<td><img src='./files/fcanyang_s.png'></td><td>FC 안양</td>");
$("td[class='uls']").after("<td><img src='./files/ulsanhyundai_s.png'></td><td>울산 현대 축구단</td>");
$("td[class='inc']").after("<td><img src='./files/incheonutd_s.png'></td><td>인천 유나이티드</td>");
$("td[class='jdfc']").after("<td><img src='./files/jeonnamdragons_s.png'></td><td>전남 드래곤즈</td>");
$("td[class='jeo']").after("<td><img src='./files/jeonbukhyundai_s.png'></td><td>전북 현대 모터스</td>");
$("td[class='jej']").after("<td><img src='./files/jejuutd_s.png'></td><td>제주 유나이티드</td>");
$("td[class='cafc']").after("<td><img src='./files/chungnamasan_s.png'></td><td>충남아산 FC</td>");
$("td[class='poh']").after("<td><img src='./files/pohangsteelers_s.png'></td><td>포항 스틸러스</td>");
$("td[class='ccfc']").after("<td><img src='./files/cheonancity_s.png'></td><td>천안 시티 FC</td>");
$("td[class='chfc']").after("<td><img src='./files/chungbukcheongju_s.png'></td><td>충북청주 FC</td>");

//U18 엠블럼 삽입
$("td[class='sefc8']").after("<td style='opacity: 100% !important;'><img src='./files/seouleland_s.png'></td><td style='opacity: 100% !important;'>서울 이랜드 FC U-18</td>");
$("td[class='gan8']").after("<td><img src='./files/gangwonfc_s.png'></td><td>강원 FC U-18</td>");
$("td[class='gye8']").after("<td><img src='./files/gyeongnamfc_s.png'></td><td>경남 FC U-18</td>");
$("td[class='gwa8']").after("<td><img src='./files/gwangjufc_s.png'></td><td>광주 FC U-18</td>");
$("td[class='gim8']").after("<td><img src='./files/gimcheonsangmu_s.png'></td><td>김천 상무 FC U-18</td>");
$("td[class='gfc8']").after("<td><img src='./files/gimpofc_s.png'></td><td>김포 FC U-18</td>");
$("td[class='dae8']").after("<td><img src='./files/daegufc_s.png'></td><td>대구 FC U-18</td>");
$("td[class='dhfc8']").after("<td><img src='./files/daejeonhana_s.png'></td><td>대전 하나 시티즌 U-18</td>");
$("td[class='bus8']").after("<td><img src='./files/busanipark_s.png'></td><td>부산 아이파크 U-18</td>");
$("td[class='buc8']").after("<td><img src='./files/bucheonfc_s.png'></td><td>부천 FC 1995 U-18</td>");
$("td[class='fcs8']").after("<td><img src='./files/fcseoul_s.png'></td><td>FC 서울 U-18</td>");
$("td[class='sfc8']").after("<td><img src='./files/seongnamfc_s.png'></td><td>성남 FC U-18</td>");
$("td[class='ssb8']").after("<td><img src='./files/suwonsamsung_s.png'></td><td>수원 삼성 블루윙즈 U-18</td>");
$("td[class='suw8']").after("<td><img src='./files/suwonfc_s.png'></td><td>수원 FC U-18</td>");
$("td[class='ans8']").after("<td><img src='./files/ansangreeners_s.png'></td><td>안산 그리너스 U-18</td>");
$("td[class='any8']").after("<td><img src='./files/fcanyang_s.png'></td><td>FC 안양 U-18</td>");
$("td[class='uls8']").after("<td><img src='./files/ulsanhyundai_s.png'></td><td>울산 현대 축구단 U-18</td>");
$("td[class='inc8']").after("<td><img src='./files/incheonutd_s.png'></td><td>인천 유나이티드 U-18</td>");
$("td[class='jdfc8']").after("<td><img src='./files/jeonnamdragons_s.png'></td><td>전남 드래곤즈 U-18</td>");
$("td[class='jeo8']").after("<td><img src='./files/jeonbukhyundai_s.png'></td><td>전북 현대 모터스 U-18</td>");
$("td[class='jej8']").after("<td><img src='./files/jejuutd_s.png'></td><td>제주 유나이티드 U-18</td>");
$("td[class='cafc8']").after("<td><img src='./files/chungnamasan_s.png'></td><td>충남아산 FC U-18</td>");
$("td[class='poh8']").after("<td><img src='./files/pohangsteelers_s.png'></td><td>포항 스틸러스 U-18</td>");
$("td[class='ccfc8']").after("<td><img src='./files/cheonancity_s.png'></td><td>천안 시티 FC U-18</td>");
$("td[class='chfc8']").after("<td><img src='./files/chungbukcheongju_s.png'></td><td>충북청주 FC U-18</td>");
$("td[class='soongsilhs']").after("<td><img src='./files/soongsilhs_s.png'></td><td>숭실고등학교</td>");
$("td[class='chojihs']").after("<td><img src='./files/chojihs_s.png'></td><td>초지고등학교</td>");
$("td[class='pajukorea8']").after("<td><img src='./files/pajukorea_s.png'></td><td>파주고려 FC U-18</td>");
$("td[class='hongcheonfc']").after("<td><img src='./files/hongcheonfc_s.png'></td><td>홍천 안정환 FC U-18</td>");

//U15 엠블럼 삽입
$("td[class='sefc5']").after("<td style='opacity: 100% !important;'><img src='./files/seouleland_s.png'></td><td style='opacity: 100% !important;'>서울 이랜드 FC U-15</td>");
$("td[class='gan5']").after("<td><img src='./files/gangwonfc_s.png'></td><td>강원 FC U-15</td>");
$("td[class='gye5']").after("<td><img src='./files/gyeongnamfc_s.png'></td><td>경남 FC U-15</td>");
$("td[class='gwa5']").after("<td><img src='./files/gwangjufc_s.png'></td><td>광주 FC U-15</td>");
$("td[class='gim5']").after("<td><img src='./files/gimcheonsangmu_s.png'></td><td>김천 상무 FC U-15</td>");
$("td[class='gfc5']").after("<td><img src='./files/gimpofc_s.png'></td><td>김포 FC U-15</td>");
$("td[class='dae5']").after("<td><img src='./files/daegufc_s.png'></td><td>대구 FC U-15</td>");
$("td[class='dhfc5']").after("<td><img src='./files/daejeonhana_s.png'></td><td>대전 하나 시티즌 U-15</td>");
$("td[class='bus5']").after("<td><img src='./files/busanipark_s.png'></td><td>부산 아이파크 U-15</td>");
$("td[class='buc5']").after("<td><img src='./files/bucheonfc_s.png'></td><td>부천 FC 1995 U-15</td>");
$("td[class='fcs5']").after("<td><img src='./files/fcseoul_s.png'></td><td>FC 서울 U-15</td>");
$("td[class='sfc5']").after("<td><img src='./files/seongnamfc_s.png'></td><td>성남 FC U-15</td>");
$("td[class='ssb5']").after("<td><img src='./files/suwonsamsung_s.png'></td><td>수원 삼성 블루윙즈 U-15</td>");
$("td[class='suw5']").after("<td><img src='./files/suwonfc_s.png'></td><td>수원 FC U-15</td>");
$("td[class='ans5']").after("<td><img src='./files/ansangreeners_s.png'></td><td>안산 그리너스 U-15</td>");
$("td[class='any5']").after("<td><img src='./files/fcanyang_s.png'></td><td>FC 안양 U-15</td>");
$("td[class='uls5']").after("<td><img src='./files/ulsanhyundai_s.png'></td><td>울산 현대 축구단 U-15</td>");
$("td[class='inc5']").after("<td><img src='./files/incheonutd_s.png'></td><td>인천 유나이티드 U-15</td>");
$("td[class='jdfc5']").after("<td><img src='./files/jeonnamdragons_s.png'></td><td>전남 드래곤즈 U-15</td>");
$("td[class='jeo5']").after("<td><img src='./files/jeonbukhyundai_s.png'></td><td>전북 현대 모터스 U-15</td>");
$("td[class='jej5']").after("<td><img src='./files/jejuutd_s.png'></td><td>제주 유나이티드 U-15</td>");
$("td[class='cafc5']").after("<td><img src='./files/chungnamasan_s.png'></td><td>충남아산 FC U-15</td>");
$("td[class='poh5']").after("<td><img src='./files/pohangsteelers_s.png'></td><td>포항 스틸러스 U-15</td>");
$("td[class='ccfc5']").after("<td><img src='./files/cheonancity_s.png'></td><td>천안 시티 FC U-15</td>");
$("td[class='chfc5']").after("<td><img src='./files/chungbukcheongju_s.png'></td><td>충북청주 FC U-15</td>");

// 대회 엠블럼 삽입
$("td[class='kl']").after("<td rowspan='2'><img style='height: 6vw;' src='./files/kleague_s.png'></td>");
$("td[class='kl40']").after("<td rowspan='2'><img style='height: 6vw;' src='./files/kleague40_s.png'></td>");
$("td[class='fa']").after("<td rowspan='2'><img src='./files/facup_s.png'></td>");
$("td[class='klj']").after("<td rowspan='2'><img src='./files/kleaguejunior_s.png'></td>");
$("td[class='klyc']").after("<td rowspan='2'><img src='./files/kleagueyouthchampionship_s.png'></td>");
$("td[class='mcst']").after("<td rowspan='2'><img src='./files/mcst_s.png'></td>");
$("td[class='kfa']").after("<td rowspan='2'><img src='./files/kfa_s.png'></td>");