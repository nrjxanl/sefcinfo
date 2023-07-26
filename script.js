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
    $( "div[id*='fixtures']" ).css("display", "none");
    document.getElementById("fixturesA").style.display = "block";
}

function fixturesU18() {
    $( "div[id*='fixtures']" ).css("display", "none");
    document.getElementById("fixturesU18").style.display = "block";
}

function fixturesU15() {
    $( "div[id*='fixtures']" ).css("display", "none");
    document.getElementById("fixturesU15").style.display = "block";
}

function fixtures2023A() {
    $( "div[id*='fixtures']" ).css("display", "none");
    document.getElementById("fixtures2023A").style.display = "block";
}

//엠블럼 삽입
$( "td[class*='sefcH']" ).before("<td>서울 이랜드 FC</td><td><img src='./files/seouleland_s.png'></td>");
$( "td[class*='ganH']" ).before("<td>강원 FC</td><td><img src='./files/gangwonfc_s.png'></td>");
$( "td[class*='gyeH']" ).before("<td>경남 FC</td><td><img src='./files/gyeongnamfc_s.png'></td>");
$( "td[class*='gwaH']" ).before("<td>광주 FC</td><td><img src='./files/gwangjufc_s.png'></td>");
$( "td[class*='gimH']" ).before("<td>김천 상무 FC</td><td><img src='./files/gimcheonsangmu_s.png'></td>");
$( "td[class*='gfcH']" ).before("<td>김포 FC</td><td><img src='./files/gimpofc_s.png'></td>");
$( "td[class*='daeH']" ).before("<td>대구 FC</td><td><img src='./files/daegufc_s.png'></td>");
$( "td[class*='dhfcH']" ).before("<td>대전 하나 시티즌</td><td><img src='./files/daejeon_s.png'></td>");
$( "td[class*='busH']" ).before("<td>부산 아이파크</td><td><img src='./files/busanipark_s.png'></td>");
$( "td[class*='bucH']" ).before("<td>부천 FC 1995</td><td><img src='./files/bucheonfc_s.png'></td>");
$( "td[class*='fcsH']" ).before("<td>FC 서울</td><td><img src='./files/fcseoul_s.png'></td>");
$( "td[class*='sfcH']" ).before("<td>성남 FC</td><td><img src='./files/seongnamfc_s.png'></td>");
$( "td[class*='ssbH']" ).before("<td>수원 삼성 블루윙즈</td><td><img src='./files/suwonsamsung_s.png'></td>");
$( "td[class*='suwH']" ).before("<td>수원 FC</td><td><img src='./files/suwonfc_s.png'></td>");
$( "td[class*='ansH']" ).before("<td>안산 그리너스</td><td><img src='./files/ansangreeners_s.png'></td>");
$( "td[class*='anyH']" ).before("<td>FC 안양</td><td><img src='./files/fcanyang_s.png'></td>");
$( "td[class*='ulsH']" ).before("<td>울산 현대 축구단</td><td><img src='./files/ulsanhyundai_s.png'></td>");
$( "td[class*='incH']" ).before("<td>인천 유나이티드</td><td><img src='./files/incheonutd_s.png'></td>");
$( "td[class*='jdfcH']" ).before("<td>전남 드래곤즈</td><td><img src='./files/jeonnamdragons_s.png'></td>");
$( "td[class*='jeoH']" ).before("<td>전북 현대 모터스</td><td><img src='./files/jeonbukhyundai_s.png'></td>");
$( "td[class*='jejH']" ).before("<td>제주 유나이티드</td><td><img src='./files/jejuutd_s.png'></td>");
$( "td[class*='cafcH']" ).before("<td>충남아산 FC</td><td><img src='./files/chungnamasan_s.png'></td>");
$( "td[class*='pohH']" ).before("<td>포항 스틸러스</td><td><img src='./files/pohangsteelers_s.png'></td>");
$( "td[class*='ccfcH']" ).before("<td>천안 시티 FC</td><td><img src='./files/cheonancity_s.png'></td>");
$( "td[class*='chfcH']" ).before("<td>충북청주 FC</td><td><img src='./files/chungbukcheongju_s.png'></td>");

$( "td[class*='sefcA']" ).after("<td><img src='./files/seouleland_s.png'></td><td>서울 이랜드 FC</td>");
$( "td[class*='ganA']" ).after("<td><img src='./files/gangwonfc_s.png'></td><td>강원 FC</td>");
$( "td[class*='gyeA']" ).after("<td><img src='./files/gyeongnamfc_s.png'></td><td>경남 FC</td>");
$( "td[class*='gwaA']" ).after("<td><img src='./files/gwangjufc_s.png'></td><td>광주 FC</td>");
$( "td[class*='gimA']" ).after("<td><img src='./files/gimcheonsangmu_s.png'></td><td>김천 상무 FC</td>");
$( "td[class*='gfcA']" ).after("<td><img src='./files/gimpofc_s.png'></td><td>김포 FC</td>");
$( "td[class*='daeA']" ).after("<td><img src='./files/daegufc_s.png'></td><td>대구 FC</td>");
$( "td[class*='dhfcA']" ).after("<td><img src='./files/daejeon_s.png'></td><td>대전 하나 시티즌</td>");
$( "td[class*='busA']" ).after("<td><img src='./files/busanipark_s.png'></td><td>부산 아이파크</td>");
$( "td[class*='bucA']" ).after("<td><img src='./files/bucheonfc_s.png'></td><td>부천 FC 1995</td>");
$( "td[class*='fcsA']" ).after("<td><img src='./files/fcseoul_s.png'></td><td>FC 서울</td>");
$( "td[class*='sfcA']" ).after("<td><img src='./files/seongnamfc_s.png'></td><td>성남 FC</td>");
$( "td[class*='ssbA']" ).after("<td><img src='./files/suwonsamsung_s.png'></td><td>수원 삼성 블루윙즈</td>");
$( "td[class*='suwA']" ).after("<td><img src='./files/suwonfc_s.png'></td><td>수원 FC</td>");
$( "td[class*='ansA']" ).after("<td><img src='./files/ansangreeners_s.png'></td><td>안산 그리너스</td>");
$( "td[class*='anyA']" ).after("<td><img src='./files/fcanyang_s.png'></td><td>FC 안양</td>");
$( "td[class*='ulsA']" ).after("<td><img src='./files/ulsanhyundai_s.png'></td><td>울산 현대 축구단</td>");
$( "td[class*='incA']" ).after("<td><img src='./files/incheonutd_s.png'></td><td>인천 유나이티드</td>");
$( "td[class*='jdfcA']" ).after("<td><img src='./files/jeonnamdragons_s.png'></td><td>전남 드래곤즈</td>");
$( "td[class*='jeoA']" ).after("<td><img src='./files/jeonbukhyundai_s.png'></td><td>전북 현대 모터스</td>");
$( "td[class*='jejA']" ).after("<td><img src='./files/jejuutd_s.png'></td><td>제주 유나이티드</td>");
$( "td[class*='cafcA']" ).after("<td><img src='./files/chungnamasan_s.png'></td><td>충남아산 FC</td>");
$( "td[class*='pohA']" ).after("<td><img src='./files/pohangsteelers_s.png'></td><td>포항 스틸러스</td>");
$( "td[class*='ccfcA']" ).after("<td><img src='./files/cheonancity_s.png'></td><td>천안 시티 FC</td>");
$( "td[class*='chfcA']" ).after("<td><img src='./files/chungbukcheongju_s.png'></td><td>충북청주 FC</td>");