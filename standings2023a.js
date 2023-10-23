data = {
    "team": ["부산", "김천", "김포", "부천", "경남", "충북청주", "전남", "안양", "성남", "충남아산", "서울E", "천안", "안산"],
    "pts": ["66", "64", "59", "54", "50", "48", "47", "45", "41", "39", "35", "24", "22"],
    "w": ["19", "20", "16", "15", "13", "12", "14", "12", "10", "11", "10", "5", "5"],
    "d": ["9", "4", "11", "9", "11", "12", "5", "9", "11", "6", "5", "9", "7"],
    "l": ["5", "9", "6", "10", "9", "9", "14", "12", "13", "17", "18", "19", "21"],
    "goalS": ["47", "67", "40", "40", "48", "35", "48", "50", "41", "37", "36", "32", "34"],
    "goalC": ["24", "36", "22", "32", "39", "38", "52", "48", "48", "45", "48", "58", "65"],
    "diff": ["23", "31", "18", "8", "9", "-3", "-4", "2", "-7", "-8", "-12", "-26", "-31"],
}

teamList = Object.values(data.team);
ptsList = Object.values(data.pts);
wList = Object.values(data.w);
dList = Object.values(data.d);
lList = Object.values(data.l);
goalSList = Object.values(data.goalS);
goalCList = Object.values(data.goalC);
diffList = Object.values(data.diff);

j = teamList.indexOf("서울E");

for (i = 0; i < teamList.length; i++) {
    emblem = 
        teamList[i] == "서울E" ? "seouleland_s" :
        teamList[i] == "울산" ? "ulsanhyundai2016_s" :
        teamList[i] == "수원삼성" ? "suwonsamsung_s" :
        teamList[i] == "수원FC" ? "suwonfc2016_s" :
        teamList[i] == "성남" ? "seongnamfc2014_s" :
        teamList[i] == "포항" ? "pohangsteelers_s" :
        teamList[i] == "전남" ? "jeonnamdragons2022_s" :
        teamList[i] == "전북" ? "jeonbukhyundai2018_s" :
        teamList[i] == "제주" ? "jejuutd_s" :
        teamList[i] == "인천" ? "incheonutd_s" :
        teamList[i] == "경남" ? "gyeongnamfc2010_s" :
        teamList[i] == "광주" ? "gwangjufc2020_s" :
        teamList[i] == "김포" ? "gimpofc2022_s" :
        teamList[i] == "김천" ? "gimcheonsangmu_s" :
        teamList[i] == "강원" ? "gangwonfc_s" :
        teamList[i] == "FC서울" ? "fcseoul_s" :
        teamList[i] == "안양" ? "fcanyang_s" :
        teamList[i] == "대전" ? "daejeonhana2020_s" :
        teamList[i] == "대구" ? "daegufc2013_s" :
        teamList[i] == "충남아산" ? "chungnamasan_s" :
        teamList[i] == "충북청주" ? "chungbukcheongju_s" :
        teamList[i] == "천안" ? "cheonancity2023_s" :
        teamList[i] == "부산" ? "busanipark2012_s" :
        teamList[i] == "부천" ? "bucheonfc_s" :
        teamList[i] == "안산" ? "ansangreeners_s" :
        "dummy";
        $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
        $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
        $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamList[i]);
        $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsList[i]);
        $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(wList[i]);
        $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)").text(dList[i]);
        $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(7)").text(lList[i]);
        $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(8)").text(goalSList[i]);
        $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(9)").text(goalCList[i]);
        $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(10)").text(diffList[i]);

    if (j == 0) {
        if (i >= j && i <= (j + 2)) {
            $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
            $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
            $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamList[i]);
            $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsList[i]);
            $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(goalSList[i]);
            $("#standingsHome").find("tbody > tr:nth-of-type(1)").attr("class", "sefc");
        };
    } else if (j == (teamList.length - 1)) {
        if (i >= (j - 2) && i <= j) {
            $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(1)").text(i + 1);
            $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
            $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(3)").text(teamList[i]);
            $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(4)").text(ptsList[i]);
            $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 3)) + ") > td:nth-of-type(5)").text(goalSList[i]);
            $("#standingsHome").find("tbody > tr:nth-of-type(3)").attr("class", "sefc");
        };
    } else {
        if (i >= (j - 1) && i <= (j + 1)) {
            $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(1)").text(i + 1);
            $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");
            $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(3)").text(teamList[i]);
            $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(4)").text(ptsList[i]);
            $("#standingsHome").find("tr:nth-of-type(" + (i - (j - 2)) + ") > td:nth-of-type(5)").text(goalSList[i]);
            $("#standingsHome").find("tbody > tr:nth-of-type(2)").attr("class", "sefc");
        };
    };

    if (teamList[i] == "서울E") {
        $("#standingsA").find("tbody > tr:nth-of-type(" + (i + 1) + ")").attr("class", "sefc");
    };
};