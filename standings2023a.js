data = {
    "team": ["부산", "김천", "김포", "부천", "경남", "전남", "충북청주", "안양", "성남", "충남아산", "서울E", "안산", "천안"],
    "pts": ["63", "61", "56", "53", "49", "47", "47", "44", "41", "36", "35", "22", "21"],
    "w": ["18", "19", "15", "15", "13", "14", "12", "12", "10", "10", "10", "5", "4"],
    "d": ["9", "4", "11", "8", "10", "5", "11", "8", "11", "6", "5", "7", "9"],
    "l": ["5", "9", "6", "10", "9", "13", "8", "12", "12", "16", "18", "20", "19"],
    "goalS": ["45", "60", "38", "39", "47", "47", "32", "49", "40", "33", "36", "31", "29"],
    "goalC": ["23", "33", "21", "31", "38", "50", "34", "47", "45", "41", "48", "58", "57"],
    "diff": ["22", "27", "17", "8", "9", "-3", "-2", "2", "-5", "-8", "-12", "-27", "-28"],
}

teamList = Object.values(data.team);
ptsList = Object.values(data.pts);
wList = Object.values(data.w);
dList = Object.values(data.d);
lList = Object.values(data.l);
goalSList = Object.values(data.goalS);
goalCList = Object.values(data.goalC);
diffList = Object.values(data.diff);

for (i = 0; i < $("#standingsA > div > table > tbody > tr").length; i++) {
    $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1);
    $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamList[i]);
    $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsList[i]);
    $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(wList[i]);
    $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)").text(dList[i]);
    $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(7)").text(lList[i]);
    $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(8)").text(goalSList[i]);
    $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(9)").text(goalCList[i]);
    $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(10)").text(diffList[i]);

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

    $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='./files/" + emblem + ".png'>");

    if (teamList[i] == "서울E") {
        $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ")").attr("class", "sefc")
    };
};