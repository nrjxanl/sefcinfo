data= {
    "id": ["202303010", "202303050", "202303110", "202303290", "202304020", "202304090", "202304120", "202304150", "202304180", "202304220", "202304300", "202305030", "202305060", "202305130", "202305200", "202305240", "202305280", "202306040", "202306110", "202306250", "202307030", "202307080", "202307180", "202307230", "202307310", "202308060", "202308150", "202308200", "202308260", "202309030", "202309160", "202309190", "202309240", "202309300", "202310070", "202310280", "202311110", "202311260", "202302138", "202302158", "202302178", "202302208", "202302228", "202302248", "202303048", "202303118", "202303188", "202304018", "202304088", "202304158", "202304228", "202304268", "202305068", "202305088", "202305208", "202306028", "202306108", "202306248", "202307158", "202307178", "202307198", "202308268", "202309098", "202309168", "202309228", "202310078", "202310148", "202310128", "202310288", "202311048", "202311118", "202302075", "202302095", "202302115", "202302135", "202302165", "202303045", "202303185", "202303255", "202304015", "202304085", "202304155", "202304225", "202304295", "202305205", "202306025", "202306105", "202306175", "202306245", "202307015", "202308095", "202308115", "202308135", "202308265", "202309025", "202309095", "202309165", "202310075", "202310215", "202310285", "202311045"],
    "comp": ["k2r1", "fa16t", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "home": ["서울E", "안양", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "homeScore": ["2", "1", "0", "6", "1", "4", "2", "2", "0", "0", "1", "1", "0", "3", "2", "0", "1", "1", "1", "1", "3", "0", "0", "2", "0", "1", "4", "", "", "", "", "", "", "", "", "", "", "", "1", "1", "1", "1", "2", "1", "2", "4", "2", "1", "2", "3", "2", "0", "2", "3", "4", "2", "4", "3", "5", "4", "2", "", "", "", "", "", "", "", "", "", "", "0", "0", "1", "2", "4", "1", "0", "3", "0", "2", "0", "1", "6", "0", "3", "3", "1", "4", "1", "4", "0", "0", "", "", "", "", "", "", "", ""],
    "homeScorer": ["70' 브루노<br>75' 츠바사", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "away": ["충북청주", "서울E", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "awayScore": ["3", "1", "1", "0", "0", "1", "1", "0", "1", "1", "2", "2", "0", "2", "0", "1", "2", "2", "2", "2", "3", "0", "1", "1", "0", "2", "0", "", "", "", "", "", "", "", "", "", "", "", "4", "2", "0", "5", "3", "2", "1", "2", "0", "0", "4", "2", "4", "2", "0", "3", "2", "2", "2", "2", "0", "2", "0", "", "", "", "", "", "", "", "", "", "", "0", "2", "7", "3", "0", "2", "2", "3", "3", "2", "2", "0", "0", "4", "1", "1", "1", "0", "2", "4", "1", "2", "", "", "", "", "", "", "", ""],
    "awayScorer": ["8' 파울리뉴<br>50' 문상윤<br>63' 조르지", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
}

// 경기 정보
id = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.lastIndexOf("/") + 10);
dataList = Object.values(data.id);
n = dataList.indexOf(id);
date = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.lastIndexOf("/") + 5) + ". " + document.URL.substring(document.URL.lastIndexOf("/") + 5, document.URL.lastIndexOf("/") + 7) + ". " + document.URL.substring(document.URL.lastIndexOf("/") + 7, document.URL.lastIndexOf("/") + 9) + ".";

$("#homeScore").html(data.homeScore[n]);
$("#awayScore").html(data.awayScore[n]);
$("#date").html(date);
$("#homeScorer").html(data.homeScorer[n]);
$("#awayScorer").html(data.awayScorer[n]);

if(data.homeScore[n] > data.awayScore[n]) {
    $("#awayScore").css("opacity", "0.7");
} else if(data.homeScore[n] < data.awayScore[n]) {
    $("#homeScore").css("opacity", "0.7");
}
// 일정 목록
aMatch = data.id.filter((a) => a.substr(-1) == 0);
u18Match = data.id.filter((a) => a.substr(-1) == 8);
u15Match = data.id.filter((a) => a.substr(-1) == 5);

console.log(aMatch.length, u18Match.length, u15Match.length)

for(i = 0; i < aMatch.length; i++) {
    $("#fixturesA > .fixtures").append("<div class='fixtures_'></div>");
};
for(i = 0; i < u18Match.length; i++) {
    $("#fixturesU18 > .fixtures").append("<div class='fixtures_'></div>");
};
for(i = 0; i < u15Match.length; i++) {
    $("#fixturesU15 > .fixtures").append("<div class='fixtures_'></div>");
};

$(".fixtures_").each(function(index) {
    $(this).append("<div><div><div><img></div><p></p></div><div><span></span><span>:</span><span></span></div><div><p></p><div><img></div></div></div><div><div><img><p></p></div><div><p></p></div></div>")

    home = data.home[index];
    homeScore = data.homeScore[index];
    away = data.away[index];
    awayScore = data.awayScore[index];
    comp = data.comp[index].replace("k2", "하나원큐 K리그2 2023 ").replace("fa", "2023 하나원큐 FA CUP ").replace("t", "강전").toUpperCase();
    date = data.id[index].substr(0, 4) + "." + data.id[index].substr(4, 2) + "." + data.id[index].substr(6, 2) + ".";
    
    $(this).find("div:nth-of-type(1) > div:nth-of-type(1) > p").text(home);
    $(this).find("div:nth-of-type(1) > div:nth-of-type(3) > p").text(away);
    $(this).find("div:nth-of-type(1) > div:nth-of-type(2) > span:nth-of-type(1)").text(homeScore);
    $(this).find("div:nth-of-type(1) > div:nth-of-type(2) > span:nth-of-type(3)").text(awayScore);
    $(this).find("div:nth-of-type(2) > div:nth-of-type(1) > p").text(comp);
    $(this).find("div:nth-of-type(2) > div:nth-of-type(2) > p").text(date);

    // 엠블럼 사진
    homeImg = 
        home == "서울E" ? "seouleland_s" :
        home == "울산" ? "ulsanhyundai_s" :
        home == "수원삼성" ? "suwonsamsung_s" :
        home == "수원FC" ? "suwonfc_s" :
        home == "성남" ? "seongnamfc_s" :
        home == "포항" ? "pohangsteelers_s" :
        home == "전남" ? "jeonnamdragons_s" :
        home == "전북" ? "jeonbukhyundai_s" :
        home == "제주" ? "jejuutd_s" :
        home == "인천" ? "incheonutd_s" :
        home == "경남" ? "gyeongnamfc_s" :
        home == "광주" ? "gwangjufc_s" :
        home == "김포" ? "gimpofc_s" :
        home == "김천" ? "gimcheonsangmu_s" :
        home == "강원" ? "gangwonfc_s" :
        home == "FC서울" ? "fcseoul_s" :
        home == "안양" ? "fcanyang_s" :
        home == "대전" ? "daejeonhana_s" :
        home == "대구" ? "daegufc_s" :
        home == "충남아산" ? "chungnamasanfc_s" :
        home == "충북청주" ? "chungbukcheongjufc_s" :
        home == "천안" ? "cheonancity_s" :
        home == "부산" ? "busanipark_s" :
        home == "부천" ? "bucheonfc_s" :
        away == "안산" ? "ansangreeners_s" :
        "dummy";

    awayImg = 
        away == "서울E" ? "seouleland_s" :
        away == "울산" ? "ulsanhyundai_s" :
        away == "수원삼성" ? "suwonsamsung_s" :
        away == "수원FC" ? "suwonfc_s" :
        away == "성남" ? "seongnamfc_s" :
        away == "포항" ? "pohangsteelers_s" :
        away == "전남" ? "jeonnamdragons_s" :
        away == "전북" ? "jeonbukhyundai_s" :
        away == "제주" ? "jejuutd_s" :
        away == "인천" ? "incheonutd_s" :
        away == "경남" ? "gyeongnamfc_s" :
        away == "광주" ? "gwangjufc_s" :
        away == "김포" ? "gimpofc_s" :
        away == "김천" ? "gimcheonsangmu_s" :
        away == "강원" ? "gangwonfc_s" :
        away == "FC서울" ? "fcseoul_s" :
        away == "안양" ? "fcanyang_s" :
        away == "대전" ? "daejeonhana_s" :
        away == "대구" ? "daegufc_s" :
        away == "충남아산" ? "chungnamasan_s" :
        away == "충북청주" ? "chungbukcheongju_s" :
        away == "천안" ? "cheonancity_s" :
        away == "부산" ? "busanipark_s" :
        away == "부천" ? "bucheonfc_s" :
        away == "안산" ? "ansangreeners_s" :
        "dummy";

    compImg = 
        comp.indexOf("K리그") !== -1 ? "kleague40_s" :
        comp.indexOf("FA CUP") !== -1 ? "facup_s" :
        "dummy";

        $(this).find("div:nth-of-type(1) > div:nth-of-type(1) > div > img").attr("src", "./files/" + homeImg + ".png");
        $(this).find("div:nth-of-type(1) > div:nth-of-type(3) > div > img").attr("src", "./files/" + awayImg + ".png");
        $(this).find("div:nth-of-type(2) > div:nth-of-type(1) > img").attr("src", "./files/" + compImg + ".png");
});