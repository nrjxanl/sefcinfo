A2023 = {
    "team": ["부산", "김천", "김포", "부천", "경남", "충북청주", "전남", "안양", "성남", "충남아산", "서울E", "천안", "안산"],
    "pts": ["66", "64", "59", "54", "50", "48", "47", "45", "41", "39", "35", "24", "22"],
    "w": ["19", "20", "16", "15", "13", "12", "14", "12", "10", "11", "10", "5", "5"],
    "d": ["9", "4", "11", "9", "11", "12", "5", "9", "11", "6", "5", "9", "7"],
    "l": ["5", "9", "6", "10", "9", "9", "14", "12", "13", "17", "18", "19", "21"],
    "goalS": ["47", "67", "40", "40", "48", "35", "48", "50", "41", "37", "36", "32", "34"],
    "goalC": ["24", "36", "22", "32", "39", "38", "52", "48", "48", "45", "48", "58", "65"],
    "diff": ["23", "31", "18", "8", "9", "-3", "-4", "2", "-7", "-8", "-12", "-26", "-31"],
}
U18F2023 = {
    "team": ["FC서울", "수원FC", "강원", "인천", "성남", "수원삼성", "부천", "제주", "서울E", "안양", "안산", "김포"],
    "pts": ["25", "22", "21", "20", "20", "19", "18", "16", "13", "8", "6", "0"],
    "w": ["8", "7", "7", "6", "6", "5", "5", "5", "4", "2", "1", "0"],
    "d": ["1", "1", "0", "2", "2", "4", "3", "1", "1", "2", "3", "0"],
    "l": ["2", "3", "4", "3", "3", "2", "3", "5", "6", "7", "7", "11"],
    "goalS": ["32", "27", "26", "18", "19", "34", "19", "22", "21", "11", "9", "10"],
    "goalC": ["9", "12", "16", "11", "14", "16", "14", "22", "25", "30", "33", "46"],
    "diff": ["23", "15", "10", "7", "5", "18", "5", "0", "-4", "-19", "-24", "-36"],
}
U18S2023 = {
    "team": ["충남아산", "경남", "대전", "부산", "부천", "서울E", "김천", "안양", "제주", "천안", "김포", "안산"],
    "pts": ["21", "18", "14", "13", "13", "12", "11", "11", "7", "5", "2", "1"],
    "w": ["7", "6", "4", "4", "3", "3", "3", "3", "2", "1", "0", "0"],
    "d": ["0", "0", "2", "1", "4", "3", "2", "2", "1", "2", "2", "1"],
    "l": ["1", "2", "2", "2", "1", "2", "3", "3", "4", "3", "6", "7"],
    "goalS": ["24", "17", "15", "10", "17", "17", "17", "11", "9", "8", "4", "5"],
    "goalC": ["5", "4", "10", "4", "12", "13", "17", "20", "12", "13", "21", "23"],
    "diff": ["19", "13", "5", "6", "5", "4", "0", "-9", "-3", "-5", "-17", "-18"],
}
U152023 = {
    "team": ["수원삼성", "FC서울", "성남", "인천", "안산", "부천", "수원FC", "제주", "안양", "강원", "서울E", "김포"],
    "pts": ["50", "49", "48", "33", "30", "27", "26", "24", "16", "14", "10", "10"],
    "w": ["16", "16", "15", "9", "9", "8", "7", "6", "4", "4", "2", "3"],
    "d": ["2", "1", "3", "6", "3", "3", "5", "6", "4", "2", "4", "1"],
    "l": ["2", "2", "2", "5", "8", "9", "8", "8", "11", "14", "14", "16"],
    "goalS": ["81", "64", "66", "29", "34", "36", "40", "31", "17", "25", "16", "19"],
    "goalC": ["18", "15", "17", "20", "28", "35", "44", "39", "38", "70", "62", "72"],
    "diff": ["63", "49", "49", "9", "6", "1", "-4", "-8", "-21", "-45", "-46", "-53"],
}

function standings2023() {
    $("#standingsSeason_ > button").css({"color": "#000831", "background": "#fafafa"})
    $("#standingsSeason_ > button:contains(2023)").css({"color": "#fafafa", "background": "#000831"})
    $("#standingsA > div > table > tbody").empty();
    $("#standingsU18F > table > tbody").empty();
    $("#standingsU18S > table > tbody").empty();
    $("#standingsU15 > div > table > tbody").empty();

    teamListA2023 = Object.values(A2023.team);
    ptsListA2023 = Object.values(A2023.pts);
    wListA2023 = Object.values(A2023.w);
    dListA2023 = Object.values(A2023.d);
    lListA2023 = Object.values(A2023.l);
    goalSListA2023 = Object.values(A2023.goalS);
    goalCListA2023 = Object.values(A2023.goalC);
    diffListA2023 = Object.values(A2023.diff);

    j = teamListA2023.indexOf("서울E");

    for (i = 0; i < teamListA2023.length; i++) {
        emblem = 
            teamListA2023[i] == "서울E" ? "seouleland_s" :
            teamListA2023[i] == "울산" ? "ulsanhyundai2016_s" :
            teamListA2023[i] == "수원삼성" ? "suwonsamsung_s" :
            teamListA2023[i] == "수원FC" ? "suwonfc2016_s" :
            teamListA2023[i] == "성남" ? "seongnamfc2014_s" :
            teamListA2023[i] == "포항" ? "pohangsteelers_s" :
            teamListA2023[i] == "전남" ? "jeonnamdragons2022_s" :
            teamListA2023[i] == "전북" ? "jeonbukhyundai2018_s" :
            teamListA2023[i] == "제주" ? "jejuutd_s" :
            teamListA2023[i] == "인천" ? "incheonutd_s" :
            teamListA2023[i] == "경남" ? "gyeongnamfc2010_s" :
            teamListA2023[i] == "광주" ? "gwangjufc2020_s" :
            teamListA2023[i] == "김포" ? "gimpofc2022_s" :
            teamListA2023[i] == "김천" ? "gimcheonsangmu_s" :
            teamListA2023[i] == "강원" ? "gangwonfc_s" :
            teamListA2023[i] == "FC서울" ? "fcseoul_s" :
            teamListA2023[i] == "안양" ? "fcanyang_s" :
            teamListA2023[i] == "대전" ? "daejeonhana2020_s" :
            teamListA2023[i] == "대구" ? "daegufc2013_s" :
            teamListA2023[i] == "충남아산" ? "chungnamasan_s" :
            teamListA2023[i] == "충북청주" ? "chungbukcheongju_s" :
            teamListA2023[i] == "천안" ? "cheonancity2023_s" :
            teamListA2023[i] == "부산" ? "busanipark2012_s" :
            teamListA2023[i] == "부천" ? "bucheonfc_s" :
            teamListA2023[i] == "안산" ? "ansangreeners_s" :
            "dummy";

            $("#standingsA > div > table > tbody").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>")

            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListA2023[i]);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListA2023[i]);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(wListA2023[i]);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)").text(dListA2023[i]);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(7)").text(lListA2023[i]);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(8)").text(goalSListA2023[i]);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(9)").text(goalCListA2023[i]);
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(10)").text(diffListA2023[i]);

        if (j == 0) {
            if (i >= j && i <= (j + 2)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListA2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListA2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(goalSListA2023[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(1)").attr("class", "sefc");
            };
        } else if (j == (teamListA2023.length - 1)) {
            if (i >= (j - 2) && i <= j) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(3)").text(teamListA2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(4)").text(ptsListA2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(5)").text(goalSListA2023[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(3)").attr("class", "sefc");
            };
        } else {
            if (i >= (j - 1) && i <= (j + 1)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(3)").text(teamListA2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(4)").text(ptsListA2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(5)").text(goalSListA2023[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(2)").attr("class", "sefc");
            };
        };

        if (teamListA2023[i] == "서울E") {
            $("#standingsA").find("tbody > tr:nth-of-type(" + (i + 1) + ")").attr("class", "sefc");
        };
    };

    teamListU18F2023 = Object.values(U18F2023.team);
    ptsListU18F2023 = Object.values(U18F2023.pts);
    wListU18F2023 = Object.values(U18F2023.w);
    dListU18F2023 = Object.values(U18F2023.d);
    lListU18F2023 = Object.values(U18F2023.l);
    goalSListU18F2023 = Object.values(U18F2023.goalS);
    goalCListU18F2023 = Object.values(U18F2023.goalC);
    diffListU18F2023 = Object.values(U18F2023.diff);

    j = teamListU18F2023.indexOf("서울E");

    for (i = 0; i < teamListU18F2023.length; i++) {
        emblem = 
            teamListU18F2023[i] == "서울E" ? "seouleland_s" :
            teamListU18F2023[i] == "울산" ? "ulsanhyundai2016_s" :
            teamListU18F2023[i] == "수원삼성" ? "suwonsamsung_s" :
            teamListU18F2023[i] == "수원FC" ? "suwonfc2016_s" :
            teamListU18F2023[i] == "성남" ? "seongnamfc2014_s" :
            teamListU18F2023[i] == "포항" ? "pohangsteelers_s" :
            teamListU18F2023[i] == "전남" ? "jeonnamdragons2022_s" :
            teamListU18F2023[i] == "전북" ? "jeonbukhyundai2018_s" :
            teamListU18F2023[i] == "제주" ? "jejuutd_s" :
            teamListU18F2023[i] == "인천" ? "incheonutd_s" :
            teamListU18F2023[i] == "경남" ? "gyeongnamfc2010_s" :
            teamListU18F2023[i] == "광주" ? "gwangjufc2020_s" :
            teamListU18F2023[i] == "김포" ? "gimpofc2022_s" :
            teamListU18F2023[i] == "김천" ? "gimcheonsangmu_s" :
            teamListU18F2023[i] == "강원" ? "gangwonfc_s" :
            teamListU18F2023[i] == "FC서울" ? "fcseoul_s" :
            teamListU18F2023[i] == "안양" ? "fcanyang_s" :
            teamListU18F2023[i] == "대전" ? "daejeonhana2020_s" :
            teamListU18F2023[i] == "대구" ? "daegufc2013_s" :
            teamListU18F2023[i] == "충남아산" ? "chungnamasan_s" :
            teamListU18F2023[i] == "충북청주" ? "chungbukcheongju_s" :
            teamListU18F2023[i] == "천안" ? "cheonancity2023_s" :
            teamListU18F2023[i] == "부산" ? "busanipark2012_s" :
            teamListU18F2023[i] == "부천" ? "bucheonfc_s" :
            teamListU18F2023[i] == "안산" ? "ansangreeners_s" :
            "dummy";

            $("#standingsU18F > table > tbody").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>")

            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU18F2023[i]);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU18F2023[i]);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(wListU18F2023[i]);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)").text(dListU18F2023[i]);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(7)").text(lListU18F2023[i]);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(8)").text(goalSListU18F2023[i]);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(9)").text(goalCListU18F2023[i]);
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(10)").text(diffListU18F2023[i]);

        if (j == 0) {
            if (i >= j && i <= (j + 2)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU18F2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU18F2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(goalSListU18F2023[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(1)").attr("class", "sefc");
            };
        } else if (j == (teamListU18F2023.length - 1)) {
            if (i >= (j - 2) && i <= j) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(3)").text(teamListU18F2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(4)").text(ptsListU18F2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(5)").text(goalSListU18F2023[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(3)").attr("class", "sefc");
            };
        } else {
            if (i >= (j - 1) && i <= (j + 1)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(3)").text(teamListU18F2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(4)").text(ptsListU18F2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(5)").text(goalSListU18F2023[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(2)").attr("class", "sefc");
            };
        };

        if (teamListU18F2023[i] == "서울E") {
            $("#standingsU18F").find("tbody > tr:nth-of-type(" + (i + 1) + ")").attr("class", "sefc");
        };
    };

    $("#standingsU18F").css("display", "none")

    teamListU18S2023 = Object.values(U18S2023.team);
    ptsListU18S2023 = Object.values(U18S2023.pts);
    wListU18S2023 = Object.values(U18S2023.w);
    dListU18S2023 = Object.values(U18S2023.d);
    lListU18S2023 = Object.values(U18S2023.l);
    goalSListU18S2023 = Object.values(U18S2023.goalS);
    goalCListU18S2023 = Object.values(U18S2023.goalC);
    diffListU18S2023 = Object.values(U18S2023.diff);

    j = teamListU18S2023.indexOf("서울E");

    for (i = 0; i < teamListU18S2023.length; i++) {
        emblem = 
            teamListU18S2023[i] == "서울E" ? "seouleland_s" :
            teamListU18S2023[i] == "울산" ? "ulsanhyundai2016_s" :
            teamListU18S2023[i] == "수원삼성" ? "suwonsamsung_s" :
            teamListU18S2023[i] == "수원FC" ? "suwonfc2016_s" :
            teamListU18S2023[i] == "성남" ? "seongnamfc2014_s" :
            teamListU18S2023[i] == "포항" ? "pohangsteelers_s" :
            teamListU18S2023[i] == "전남" ? "jeonnamdragons2022_s" :
            teamListU18S2023[i] == "전북" ? "jeonbukhyundai2018_s" :
            teamListU18S2023[i] == "제주" ? "jejuutd_s" :
            teamListU18S2023[i] == "인천" ? "incheonutd_s" :
            teamListU18S2023[i] == "경남" ? "gyeongnamfc2010_s" :
            teamListU18S2023[i] == "광주" ? "gwangjufc2020_s" :
            teamListU18S2023[i] == "김포" ? "gimpofc2022_s" :
            teamListU18S2023[i] == "김천" ? "gimcheonsangmu_s" :
            teamListU18S2023[i] == "강원" ? "gangwonfc_s" :
            teamListU18S2023[i] == "FC서울" ? "fcseoul_s" :
            teamListU18S2023[i] == "안양" ? "fcanyang_s" :
            teamListU18S2023[i] == "대전" ? "daejeonhana2020_s" :
            teamListU18S2023[i] == "대구" ? "daegufc2013_s" :
            teamListU18S2023[i] == "충남아산" ? "chungnamasan_s" :
            teamListU18S2023[i] == "충북청주" ? "chungbukcheongju_s" :
            teamListU18S2023[i] == "천안" ? "cheonancity2023_s" :
            teamListU18S2023[i] == "부산" ? "busanipark2012_s" :
            teamListU18S2023[i] == "부천" ? "bucheonfc_s" :
            teamListU18S2023[i] == "안산" ? "ansangreeners_s" :
            "dummy";

            $("#standingsU18S > table > tbody").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>")

            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU18S2023[i]);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU18S2023[i]);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(wListU18S2023[i]);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)").text(dListU18S2023[i]);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(7)").text(lListU18S2023[i]);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(8)").text(goalSListU18S2023[i]);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(9)").text(goalCListU18S2023[i]);
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(10)").text(diffListU18S2023[i]);

        if (j == 0) {
            if (i >= j && i <= (j + 2)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU18S2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU18S2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(goalSListU18S2023[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(1)").attr("class", "sefc");
            };
        } else if (j == (teamListU18S2023.length - 1)) {
            if (i >= (j - 2) && i <= j) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(3)").text(teamListU18S2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(4)").text(ptsListU18S2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(5)").text(goalSListU18S2023[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(3)").attr("class", "sefc");
            };
        } else {
            if (i >= (j - 1) && i <= (j + 1)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(3)").text(teamListU18S2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(4)").text(ptsListU18S2023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(5)").text(goalSListU18S2023[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(2)").attr("class", "sefc");
            };
        };

        if (teamListU18S2023[i] == "서울E") {
            $("#standingsU18S").find("tbody > tr:nth-of-type(" + (i + 1) + ")").attr("class", "sefc");
        };
    };

    teamListU152023 = Object.values(U152023.team);
    ptsListU152023 = Object.values(U152023.pts);
    wListU152023 = Object.values(U152023.w);
    dListU152023 = Object.values(U152023.d);
    lListU152023 = Object.values(U152023.l);
    goalSListU152023 = Object.values(U152023.goalS);
    goalCListU152023 = Object.values(U152023.goalC);
    diffListU152023 = Object.values(U152023.diff);

    j = teamListU152023.indexOf("서울E");

    for (i = 0; i < teamListU152023.length; i++) {
        emblem = 
            teamListU152023[i] == "서울E" ? "seouleland_s" :
            teamListU152023[i] == "울산" ? "ulsanhyundai2016_s" :
            teamListU152023[i] == "수원삼성" ? "suwonsamsung_s" :
            teamListU152023[i] == "수원FC" ? "suwonfc2016_s" :
            teamListU152023[i] == "성남" ? "seongnamfc2014_s" :
            teamListU152023[i] == "포항" ? "pohangsteelers_s" :
            teamListU152023[i] == "전남" ? "jeonnamdragons2022_s" :
            teamListU152023[i] == "전북" ? "jeonbukhyundai2018_s" :
            teamListU152023[i] == "제주" ? "jejuutd_s" :
            teamListU152023[i] == "인천" ? "incheonutd_s" :
            teamListU152023[i] == "경남" ? "gyeongnamfc2010_s" :
            teamListU152023[i] == "광주" ? "gwangjufc2020_s" :
            teamListU152023[i] == "김포" ? "gimpofc2022_s" :
            teamListU152023[i] == "김천" ? "gimcheonsangmu_s" :
            teamListU152023[i] == "강원" ? "gangwonfc_s" :
            teamListU152023[i] == "FC서울" ? "fcseoul_s" :
            teamListU152023[i] == "안양" ? "fcanyang_s" :
            teamListU152023[i] == "대전" ? "daejeonhana2020_s" :
            teamListU152023[i] == "대구" ? "daegufc2013_s" :
            teamListU152023[i] == "충남아산" ? "chungnamasan_s" :
            teamListU152023[i] == "충북청주" ? "chungbukcheongju_s" :
            teamListU152023[i] == "천안" ? "cheonancity2023_s" :
            teamListU152023[i] == "부산" ? "busanipark2012_s" :
            teamListU152023[i] == "부천" ? "bucheonfc_s" :
            teamListU152023[i] == "안산" ? "ansangreeners_s" :
            "dummy";

            $("#standingsU15 > div > table > tbody").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>")

            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU152023[i]);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU152023[i]);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(wListU152023[i]);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)").text(dListU152023[i]);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(7)").text(lListU152023[i]);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(8)").text(goalSListU152023[i]);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(9)").text(goalCListU152023[i]);
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(10)").text(diffListU152023[i]);

        if (j == 0) {
            if (i >= j && i <= (j + 2)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU152023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU152023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(goalSListU152023[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(1)").attr("class", "sefc");
            };
        } else if (j == (teamListU152023.length - 1)) {
            if (i >= (j - 2) && i <= j) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(3)").text(teamListU152023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(4)").text(ptsListU152023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(5)").text(goalSListU152023[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(3)").attr("class", "sefc");
            };
        } else {
            if (i >= (j - 1) && i <= (j + 1)) {
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(1)").text(i + 1);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(3)").text(teamListU152023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(4)").text(ptsListU152023[i]);
                $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(5)").text(goalSListU152023[i]);
                $("#standingsHome").find("tbody > tr:nth-of-type(2)").attr("class", "sefc");
            };
        };

        if (teamListU152023[i] == "서울E") {
            $("#standingsU15").find("tbody > tr:nth-of-type(" + (i + 1) + ")").attr("class", "sefc");
        };
    };
};

// 순위 불러오기
if($("#standingsA").length || $("#standingsHome").length) {
    standings2023();
};