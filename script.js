// 새로고침 시 맨 위로
window.onload = function() {
    setTimeout (function() {
        scrollTo(0, 0);
    }, 100);
}

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
    $("div[id*='fixtures']").css("display", "none");
    document.getElementById("fixturesA").style.display = "block";
}

function fixturesU18() {
    $("div[id*='fixtures']").css("display", "none");
    document.getElementById("fixturesU18").style.display = "block";
}

function fixturesU15() {
    $("div[id*='fixtures']").css("display", "none");
    document.getElementById("fixturesU15").style.display = "block";
}

//엠블럼 삽입
$("td[class='sefc']").after("<td style='opacity: 100% !important;'><img src='./files/seouleland_s.png'></td><td style='opacity: 100% !important;'>서울 이랜드 FC</td>");
$("td[class='gan']").after("<td><img src='./files/gangwonfc_s.png'></td><td>강원 FC</td>");
$("td[class='gye']").after("<td><img src='./files/gyeongnamfc_s.png'></td><td>경남 FC</td>");
$("td[class='gwa']").after("<td><img src='./files/gwangjufc_s.png'></td><td>광주 FC</td>");
$("td[class='gim']").after("<td><img src='./files/gimcheonsangmu_s.png'></td><td>김천 상무 FC</td>");
$("td[class='gfc']").after("<td><img src='./files/gimpofc_s.png'></td><td>김포 FC</td>");
$("td[class='dae']").after("<td><img src='./files/daegufc_s.png'></td><td>대구 FC</td>");
$("td[class='dhfc']").after("<td><img src='./files/daejeon_s.png'></td><td>대전 하나 시티즌</td>");
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

$("td[class='kl40']").after("<td rowspan='2'><img src='./files/kleague40_s.png'></td>");
$("td[class='fa']").after("<td rowspan='2'><img src='./files/facup_s.png'></td>");