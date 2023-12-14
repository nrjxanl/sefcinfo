A2022 = {
    "team": ["광주", "대전", "안양", "부천", "경남", "충남아산", "서울E", "김포", "안산", "부산", "전남"],
    "pts": ["86", "74", "69", "61", "56", "52", "48", "41", "37", "36", "35"],
    "w": ["25", "21", "19", "17", "17", "13", "11", "10", "8", "9", "6"],
    "d": ["11", "11", "13", "10", "9", "13", "15", "11", "13", "9", "17"],
    "l": ["4", "8", "9", "14", "16", "14", "14", "19", "19", "22", "17"],
    "goalS": ["68", "70", "52", "54", "63", "39", "46", "39", "49", "34", "47"],
    "goalC": ["32", "45", "41", "47", "63", "44", "47", "65", "67", "52", "58"],
    "diff": ["36", "25", "11", "7", "0", "-5", "-1", "-26", "-18", "-18", "-11"],
}
U18F2022 = {
    "team": ["강원", "수원삼성", "FC서울", "수원FC", "부천", "안산", "서울E", "제주", "성남", "인천", "안양", "김포"],
    "pts": ["27", "22", "20", "20", "19", "19", "16", "14", "10", "10", "9", "0"],
    "w": ["8", "7", "6", "6", "6", "5", "5", "4", "2", "3", "2", "0"],
    "d": ["3", "1", "2", "2", "1", "4", "1", "2", "4", "1", "3", "0"],
    "l": ["0", "3", "3", "3", "4", "2", "5", "5", "5", "7", "6", "11"],
    "goalS": ["30", "31", "29", "16", "22", "23", "25", "22", "17", "20", "15", "3"],
    "goalC": ["11", "18", "12", "9", "10", "13", "21", "22", "19", "24", "21", "73"],
    "diff": ["19", "13", "17", "7", "12", "10", "4", "0", "-2", "-4", "-6", "-70"],
}
U18S2022 = {
    "team": ["울산", "경남", "인천", "부산", "서울E", "성남", "제주", "충남아산", "안양", "김천", "김포"],
    "pts": ["26", "22", "19", "18", "15", "15", "13", "13", "8", "6", "3"],
    "w": ["8", "7", "6", "6", "5", "5", "4", "3", "2", "1", "1"],
    "d": ["2", "1", "1", "0", "0", "0", "1", "4", "2", "3", "0"],
    "l": ["0", "2", "3", "4", "5", "5", "5", "3", "6", "6", "9"],
    "goalS": ["18", "16", "18", "25", "15", "10", "22", "11", "10", "10", "7"],
    "goalC": ["5", "12", "9", "15", "14", "18", "16", "9", "17", "14", "33"],
    "diff": ["13", "4", "9", "10", "1", "-8", "6", "2", "-7", "-4", "-26"],
}
U152022 = {
    "team": ["수원삼성", "FC서울", "성남", "부천", "인천", "서울E", "제주", "수원FC", "안산", "안양", "강원"],
    "pts": ["55", "51", "44", "36", "32", "28", "24", "22", "12", "9", "7"],
    "w": ["18", "17", "14", "11", "10", "8", "7", "7", "4", "2", "2"],
    "d": ["1", "0", "2", "3", "2", "4", "3", "1", "0", "3", "1"],
    "l": ["1", "3", "4", "6", "8", "8", "10", "12", "16", "15", "17"],
    "goalS": ["72", "65", "55", "47", "37", "31", "37", "31", "15", "10", "20"],
    "goalC": ["14", "10", "25", "30", "29", "30", "48", "49", "52", "56", "77"],
    "diff": ["58", "55", "30", "17", "8", "1", "-11", "-18", "-37", "-46", "-57"],
}

function standings2022() {
    $("#standingsSeason_ > button").css({"color": "#000831", "background": "#fafafa"})
    $("#standingsSeason_ > button:contains(2022)").css({"color": "#fafafa", "background": "#000831"})
    $("#standingsA > div > table > tbody").empty();
    $("#standingsU18F > table > tbody").empty();
    $("#standingsU18S > table > tbody").empty();
    $("#standingsU15 > div > table > tbody").empty();

    teamListA2022 = Object.values(A2022.team);
    ptsListA2022 = Object.values(A2022.pts);
    wListA2022 = Object.values(A2022.w);
    dListA2022 = Object.values(A2022.d);
    lListA2022 = Object.values(A2022.l);
    goalSListA2022 = Object.values(A2022.goalS);
    goalCListA2022 = Object.values(A2022.goalC);
    diffListA2022 = Object.values(A2022.diff);

    j = teamListA2022.indexOf("서울E");

    for (i = 0; i < teamListA2022.length; i++) {
        emblem = 
            teamListA2022[i] == "서울E" ? "seouleland_s" :
            teamListA2022[i] == "울산" ? "ulsanhyundai2016_s" :
            teamListA2022[i] == "수원삼성" ? "suwonsamsung_s" :
            teamListA2022[i] == "수원FC" ? "suwonfc2016_s" :
            teamListA2022[i] == "성남" ? "seongnamfc2014_s" :
            teamListA2022[i] == "포항" ? "pohangsteelers_s" :
            teamListA2022[i] == "전남" ? "jeonnamdragons2022_s" :
            teamListA2022[i] == "전북" ? "jeonbukhyundai2018_s" :
            teamListA2022[i] == "제주" ? "jejuutd_s" :
            teamListA2022[i] == "인천" ? "incheonutd_s" :
            teamListA2022[i] == "경남" ? "gyeongnamfc2010_s" :
            teamListA2022[i] == "광주" ? "gwangjufc2020_s" :
            teamListA2022[i] == "김포" ? "gimpofc2022_s" :
            teamListA2022[i] == "김천" ? "gimcheonsangmu_s" :
            teamListA2022[i] == "강원" ? "gangwonfc_s" :
            teamListA2022[i] == "FC서울" ? "fcseoul_s" :
            teamListA2022[i] == "안양" ? "fcanyang_s" :
            teamListA2022[i] == "대전" ? "daejeonhana2020_s" :
            teamListA2022[i] == "대구" ? "daegufc2013_s" :
            teamListA2022[i] == "충남아산" ? "chungnamasan_s" :
            teamListA2022[i] == "충북청주" ? "chungbukcheongju_s" :
            teamListA2022[i] == "천안" ? "cheonancity2023_s" :
            teamListA2022[i] == "부산" ? "busanipark2012_s" :
            teamListA2022[i] == "부천" ? "bucheonfc_s" :
            teamListA2022[i] == "안산" ? "ansangreeners_s" :
            "dummy";

            $("#standingsA > div > table > tbody").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>")

            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListA2022[i]);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListA2022[i]);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(wListA2022[i]);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)").text(dListA2022[i]);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(7)").text(lListA2022[i]);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(8)").text(goalSListA2022[i]);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(9)").text(goalCListA2022[i]);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(10)").text(diffListA2022[i]);

        if (j == 0) {
            if (i >= j && i <= (j + 2)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListA2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListA2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(goalSListA2022[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(1)").attr("class", "sefc");
            };
        } else if (j == (teamListA2022.length - 1)) {
            if (i >= (j - 2) && i <= j) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(3)").text(teamListA2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(4)").text(ptsListA2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(5)").text(goalSListA2022[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(3)").attr("class", "sefc");
            };
        } else {
            if (i >= (j - 1) && i <= (j + 1)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(3)").text(teamListA2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(4)").text(ptsListA2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(5)").text(goalSListA2022[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(2)").attr("class", "sefc");
            };
        };

        if (teamListA2022[i] == "서울E") {
            $("#standingsA").find("tbody > tr:nth-of-type(" + (i + 1) + ")").attr("class", "sefc");
        };
    };

    teamListU18F2022 = Object.values(U18F2022.team);
    ptsListU18F2022 = Object.values(U18F2022.pts);
    wListU18F2022 = Object.values(U18F2022.w);
    dListU18F2022 = Object.values(U18F2022.d);
    lListU18F2022 = Object.values(U18F2022.l);
    goalSListU18F2022 = Object.values(U18F2022.goalS);
    goalCListU18F2022 = Object.values(U18F2022.goalC);
    diffListU18F2022 = Object.values(U18F2022.diff);

    j = teamListU18F2022.indexOf("서울E");

    for (i = 0; i < teamListU18F2022.length; i++) {
        emblem = 
            teamListU18F2022[i] == "서울E" ? "seouleland_s" :
            teamListU18F2022[i] == "울산" ? "ulsanhyundai2016_s" :
            teamListU18F2022[i] == "수원삼성" ? "suwonsamsung_s" :
            teamListU18F2022[i] == "수원FC" ? "suwonfc2016_s" :
            teamListU18F2022[i] == "성남" ? "seongnamfc2014_s" :
            teamListU18F2022[i] == "포항" ? "pohangsteelers_s" :
            teamListU18F2022[i] == "전남" ? "jeonnamdragons2022_s" :
            teamListU18F2022[i] == "전북" ? "jeonbukhyundai2018_s" :
            teamListU18F2022[i] == "제주" ? "jejuutd_s" :
            teamListU18F2022[i] == "인천" ? "incheonutd_s" :
            teamListU18F2022[i] == "경남" ? "gyeongnamfc2010_s" :
            teamListU18F2022[i] == "광주" ? "gwangjufc2020_s" :
            teamListU18F2022[i] == "김포" ? "gimpofc2022_s" :
            teamListU18F2022[i] == "김천" ? "gimcheonsangmu_s" :
            teamListU18F2022[i] == "강원" ? "gangwonfc_s" :
            teamListU18F2022[i] == "FC서울" ? "fcseoul_s" :
            teamListU18F2022[i] == "안양" ? "fcanyang_s" :
            teamListU18F2022[i] == "대전" ? "daejeonhana2020_s" :
            teamListU18F2022[i] == "대구" ? "daegufc2013_s" :
            teamListU18F2022[i] == "충남아산" ? "chungnamasan_s" :
            teamListU18F2022[i] == "충북청주" ? "chungbukcheongju_s" :
            teamListU18F2022[i] == "천안" ? "cheonancity2023_s" :
            teamListU18F2022[i] == "부산" ? "busanipark2012_s" :
            teamListU18F2022[i] == "부천" ? "bucheonfc_s" :
            teamListU18F2022[i] == "안산" ? "ansangreeners_s" :
            "dummy";

            $("#standingsU18F > table > tbody").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>")

            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU18F2022[i]);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU18F2022[i]);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(wListU18F2022[i]);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)").text(dListU18F2022[i]);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(7)").text(lListU18F2022[i]);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(8)").text(goalSListU18F2022[i]);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(9)").text(goalCListU18F2022[i]);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(10)").text(diffListU18F2022[i]);

        if (j == 0) {
            if (i >= j && i <= (j + 2)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU18F2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU18F2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(goalSListU18F2022[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(1)").attr("class", "sefc");
            };
        } else if (j == (teamListU18F2022.length - 1)) {
            if (i >= (j - 2) && i <= j) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(3)").text(teamListU18F2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(4)").text(ptsListU18F2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(5)").text(goalSListU18F2022[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(3)").attr("class", "sefc");
            };
        } else {
            if (i >= (j - 1) && i <= (j + 1)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(3)").text(teamListU18F2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(4)").text(ptsListU18F2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(5)").text(goalSListU18F2022[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(2)").attr("class", "sefc");
            };
        };

        if (teamListU18F2022[i] == "서울E") {
            $("#standingsU18F").find("tbody > tr:nth-of-type(" + (i + 1) + ")").attr("class", "sefc");
        };
    };

    $("#standingsU18F").css("display", "none")

    teamListU18S2022 = Object.values(U18S2022.team);
    ptsListU18S2022 = Object.values(U18S2022.pts);
    wListU18S2022 = Object.values(U18S2022.w);
    dListU18S2022 = Object.values(U18S2022.d);
    lListU18S2022 = Object.values(U18S2022.l);
    goalSListU18S2022 = Object.values(U18S2022.goalS);
    goalCListU18S2022 = Object.values(U18S2022.goalC);
    diffListU18S2022 = Object.values(U18S2022.diff);

    j = teamListU18S2022.indexOf("서울E");

    for (i = 0; i < teamListU18S2022.length; i++) {
        emblem = 
            teamListU18S2022[i] == "서울E" ? "seouleland_s" :
            teamListU18S2022[i] == "울산" ? "ulsanhyundai2016_s" :
            teamListU18S2022[i] == "수원삼성" ? "suwonsamsung_s" :
            teamListU18S2022[i] == "수원FC" ? "suwonfc2016_s" :
            teamListU18S2022[i] == "성남" ? "seongnamfc2014_s" :
            teamListU18S2022[i] == "포항" ? "pohangsteelers_s" :
            teamListU18S2022[i] == "전남" ? "jeonnamdragons2022_s" :
            teamListU18S2022[i] == "전북" ? "jeonbukhyundai2018_s" :
            teamListU18S2022[i] == "제주" ? "jejuutd_s" :
            teamListU18S2022[i] == "인천" ? "incheonutd_s" :
            teamListU18S2022[i] == "경남" ? "gyeongnamfc2010_s" :
            teamListU18S2022[i] == "광주" ? "gwangjufc2020_s" :
            teamListU18S2022[i] == "김포" ? "gimpofc2022_s" :
            teamListU18S2022[i] == "김천" ? "gimcheonsangmu_s" :
            teamListU18S2022[i] == "강원" ? "gangwonfc_s" :
            teamListU18S2022[i] == "FC서울" ? "fcseoul_s" :
            teamListU18S2022[i] == "안양" ? "fcanyang_s" :
            teamListU18S2022[i] == "대전" ? "daejeonhana2020_s" :
            teamListU18S2022[i] == "대구" ? "daegufc2013_s" :
            teamListU18S2022[i] == "충남아산" ? "chungnamasan_s" :
            teamListU18S2022[i] == "충북청주" ? "chungbukcheongju_s" :
            teamListU18S2022[i] == "천안" ? "cheonancity2023_s" :
            teamListU18S2022[i] == "부산" ? "busanipark2012_s" :
            teamListU18S2022[i] == "부천" ? "bucheonfc_s" :
            teamListU18S2022[i] == "안산" ? "ansangreeners_s" :
            "dummy";

            $("#standingsU18S > table > tbody").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>")

            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU18S2022[i]);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU18S2022[i]);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(wListU18S2022[i]);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)").text(dListU18S2022[i]);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(7)").text(lListU18S2022[i]);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(8)").text(goalSListU18S2022[i]);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(9)").text(goalCListU18S2022[i]);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(10)").text(diffListU18S2022[i]);

        if (j == 0) {
            if (i >= j && i <= (j + 2)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU18S2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU18S2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(goalSListU18S2022[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(1)").attr("class", "sefc");
            };
        } else if (j == (teamListU18S2022.length - 1)) {
            if (i >= (j - 2) && i <= j) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(3)").text(teamListU18S2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(4)").text(ptsListU18S2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(5)").text(goalSListU18S2022[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(3)").attr("class", "sefc");
            };
        } else {
            if (i >= (j - 1) && i <= (j + 1)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(3)").text(teamListU18S2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(4)").text(ptsListU18S2022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(5)").text(goalSListU18S2022[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(2)").attr("class", "sefc");
            };
        };

        if (teamListU18S2022[i] == "서울E") {
            $("#standingsU18S").find("tbody > tr:nth-of-type(" + (i + 1) + ")").attr("class", "sefc");
        };
    };

    teamListU152022 = Object.values(U152022.team);
    ptsListU152022 = Object.values(U152022.pts);
    wListU152022 = Object.values(U152022.w);
    dListU152022 = Object.values(U152022.d);
    lListU152022 = Object.values(U152022.l);
    goalSListU152022 = Object.values(U152022.goalS);
    goalCListU152022 = Object.values(U152022.goalC);
    diffListU152022 = Object.values(U152022.diff);

    j = teamListU152022.indexOf("서울E");

    for (i = 0; i < teamListU152022.length; i++) {
        emblem = 
            teamListU152022[i] == "서울E" ? "seouleland_s" :
            teamListU152022[i] == "울산" ? "ulsanhyundai2016_s" :
            teamListU152022[i] == "수원삼성" ? "suwonsamsung_s" :
            teamListU152022[i] == "수원FC" ? "suwonfc2016_s" :
            teamListU152022[i] == "성남" ? "seongnamfc2014_s" :
            teamListU152022[i] == "포항" ? "pohangsteelers_s" :
            teamListU152022[i] == "전남" ? "jeonnamdragons2022_s" :
            teamListU152022[i] == "전북" ? "jeonbukhyundai2018_s" :
            teamListU152022[i] == "제주" ? "jejuutd_s" :
            teamListU152022[i] == "인천" ? "incheonutd_s" :
            teamListU152022[i] == "경남" ? "gyeongnamfc2010_s" :
            teamListU152022[i] == "광주" ? "gwangjufc2020_s" :
            teamListU152022[i] == "김포" ? "gimpofc2022_s" :
            teamListU152022[i] == "김천" ? "gimcheonsangmu_s" :
            teamListU152022[i] == "강원" ? "gangwonfc_s" :
            teamListU152022[i] == "FC서울" ? "fcseoul_s" :
            teamListU152022[i] == "안양" ? "fcanyang_s" :
            teamListU152022[i] == "대전" ? "daejeonhana2020_s" :
            teamListU152022[i] == "대구" ? "daegufc2013_s" :
            teamListU152022[i] == "충남아산" ? "chungnamasan_s" :
            teamListU152022[i] == "충북청주" ? "chungbukcheongju_s" :
            teamListU152022[i] == "천안" ? "cheonancity2023_s" :
            teamListU152022[i] == "부산" ? "busanipark2012_s" :
            teamListU152022[i] == "부천" ? "bucheonfc_s" :
            teamListU152022[i] == "안산" ? "ansangreeners_s" :
            "dummy";

            $("#standingsU15 > div > table > tbody").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>")

            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU152022[i]);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU152022[i]);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(wListU152022[i]);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)").text(dListU152022[i]);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(7)").text(lListU152022[i]);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(8)").text(goalSListU152022[i]);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(9)").text(goalCListU152022[i]);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(10)").text(diffListU152022[i]);

        if (j == 0) {
            if (i >= j && i <= (j + 2)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU152022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU152022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(goalSListU152022[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(1)").attr("class", "sefc");
            };
        } else if (j == (teamListU152022.length - 1)) {
            if (i >= (j - 2) && i <= j) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(3)").text(teamListU152022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(4)").text(ptsListU152022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(5)").text(goalSListU152022[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(3)").attr("class", "sefc");
            };
        } else {
            if (i >= (j - 1) && i <= (j + 1)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(3)").text(teamListU152022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(4)").text(ptsListU152022[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(5)").text(goalSListU152022[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(2)").attr("class", "sefc");
            };
        };

        if (teamListU152022[i] == "서울E") {
            $("#standingsU15").find("tbody > tr:nth-of-type(" + (i + 1) + ")").attr("class", "sefc");
        };
    };
};