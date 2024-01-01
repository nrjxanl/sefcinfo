A2023 = {
    "team": ["김천", "부산", "김포", "경남", "부천", "안양", "전남", "충북청주", "성남", "충남아산", "서울E", "안산", "천안"],
    "pts": ["71", "70", "60", "57", "57", "54", "53", "52", "44", "42", "35", "25", "25"],
    "w": ["22", "20", "17", "15", "16", "15", "16", "13", "11", "12", "10", "6", "5"],
    "d": ["5", "10", "12", "13", "10", "9", "5", "13", "11", "6", "5", "7", "10"],
    "l": ["9", "6", "8", "10", "11", "12", "15", "10", "14", "18", "21", "23", "21"],
    "goalS": ["71", "50", "42", "55", "45", "58", "55", "37", "43", "39", "36", "40", "33"],
    "goalC": ["37", "29", "26", "44", "35", "51", "56", "42", "50", "46", "54", "72", "62"],
    "diff": ["34", "21", "16", "11", "10", "7", "-1", "-5", "-7", "-7", "-18", "-32", "-29"],
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
    "team": ["충남아산", "경남", "부천", "대전", "서울E", "부산", "안양", "김천", "제주", "안산", "천안", "김포"],
    "pts": ["27", "25", "19", "19", "18", "17", "16", "14", "11", "8", "7", "2"],
    "w": ["9", "8", "5", "5", "5", "5", "4", "4", "3", "2", "1", "0"],
    "d": ["0", "1", "4", "4", "3", "2", "4", "2", "2", "2", "4", "2"],
    "l": ["2", "2", "2", "2", "3", "4", "3", "5", "6", "7", "6", "9"],
    "goalS": ["30", "21", "23", "20", "24", "16", "15", "21", "13", "12", "14", "9"],
    "goalC": ["7", "6", "15", "14", "19", "15", "23", "22", "17", "26", "24", "30"],
    "diff": ["23", "15", "8", "6", "5", "1", "-8", "-1", "-4", "-14", "-10", "-21"],
}
U152023 = {
    "team": ["수원삼성", "FC서울", "성남", "인천", "안산", "수원FC", "제주", "부천", "안양", "강원", "김포", "서울E"],
    "pts": ["56", "55", "52", "36", "34", "29", "28", "27", "19", "17", "11", "10"],
    "w": ["18", "18", "16", "10", "10", "8", "7", "8", "5", "5", "3", "2"],
    "d": ["2", "1", "4", "6", "4", "5", "7", "3", "4", "2", "2", "4"],
    "l": ["2", "3", "2", "6", "8", "9", "8", "11", "13", "15", "17", "16"],
    "goalS": ["94", "74", "72", "32", "38", "42", "34", "38", "21", "30", "20", "17"],
    "goalC": ["18", "18", "18", "23", "29", "50", "41", "39", "49", "75", "81", "71"],
    "diff": ["76", "56", "54", "9", "9", "-8", "-7", "-1", "-28", "-45", "-61", "-54"],
}

function standings2023() {

    if ($("#standingsSeason_").length) {
        $("#standingsSeason_ > button").css({"color": "#000831", "background": "#fafafa"})
        $("#standingsSeason_ > button:contains(2023)").css({"color": "#fafafa", "background": "#000831"})
        $("#standingsA > div > table > tbody").empty()
        $("#standingsU18F > table > tbody").empty()
        $("#standingsU18S > table > tbody").empty()
        $("#standingsU15 > div > table > tbody").empty()
    }

    teamListA2023 = Object.values(A2023.team)
    ptsListA2023 = Object.values(A2023.pts)
    wListA2023 = Object.values(A2023.w)
    dListA2023 = Object.values(A2023.d)
    lListA2023 = Object.values(A2023.l)
    goalSListA2023 = Object.values(A2023.goalS)
    goalCListA2023 = Object.values(A2023.goalC)
    diffListA2023 = Object.values(A2023.diff)

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

        if ($(".standingsSeason").length) {
            $("#standingsA > div > table > tbody").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>")

            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").html("<p>" + (i + 1) + "</p>")
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>")
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListA2023[i])
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListA2023[i])
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(wListA2023[i])
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)").text(dListA2023[i])
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(7)").text(lListA2023[i])
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(8)").text(goalSListA2023[i])
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(9)").text(goalCListA2023[i])
            $("#standingsA").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(10)").text(diffListA2023[i])

            if (teamListA2023[i] == "서울E") {
                $("#standingsA").find("tbody > tr:nth-of-type(" + (i + 1) + ")").attr("class", "sefc")
            }
        }

        // 홈 화면
        if ($("#standingsHome").length) {
            if (teamListA2023.indexOf("서울E") == 0) { // 1위
                if (i >= teamListA2023.indexOf("서울E") && i <= (teamListA2023.indexOf("서울E") + 2)) {
                    $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").text(i + 1)
                    $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>")
                    $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListA2023[i])
                    $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListA2023[i])
                    $("#standingsHome").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(goalSListA2023[i])
                    $("#standingsHome").find("tbody > tr:nth-of-type(1)").attr("class", "sefc")
                }
            } else if (teamListA2023.indexOf("서울E") == (teamListA2023.length - 1)) { // 최하위
                if (i >= (teamListA2023.indexOf("서울E") - 2) && i <= teamListA2023.indexOf("서울E")) {
                    $("#standingsHome").find("tr:nth-of-type(" + (i - (teamListA2023.indexOf("서울E") - 3)) + ") > td:nth-of-type(1)").text(i + 1)
                    $("#standingsHome").find("tr:nth-of-type(" + (i - (teamListA2023.indexOf("서울E") - 3)) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>")
                    $("#standingsHome").find("tr:nth-of-type(" + (i - (teamListA2023.indexOf("서울E") - 3)) + ") > td:nth-of-type(3)").text(teamListA2023[i])
                    $("#standingsHome").find("tr:nth-of-type(" + (i - (teamListA2023.indexOf("서울E") - 3)) + ") > td:nth-of-type(4)").text(ptsListA2023[i])
                    $("#standingsHome").find("tr:nth-of-type(" + (i - (teamListA2023.indexOf("서울E") - 3)) + ") > td:nth-of-type(5)").text(goalSListA2023[i])
                    $("#standingsHome").find("tbody > tr:nth-of-type(3)").attr("class", "sefc")
                }
            } else { // 나머지
                if (i >= (teamListA2023.indexOf("서울E") - 1) && i <= (teamListA2023.indexOf("서울E") + 1)) {
                    $("#standingsHome").find("tr:nth-of-type(" + (i - (teamListA2023.indexOf("서울E") - 2)) + ") > td:nth-of-type(1)").text(i + 1)
                    $("#standingsHome").find("tr:nth-of-type(" + (i - (teamListA2023.indexOf("서울E") - 2)) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>")
                    $("#standingsHome").find("tr:nth-of-type(" + (i - (teamListA2023.indexOf("서울E") - 2)) + ") > td:nth-of-type(3)").text(teamListA2023[i])
                    $("#standingsHome").find("tr:nth-of-type(" + (i - (teamListA2023.indexOf("서울E") - 2)) + ") > td:nth-of-type(4)").text(ptsListA2023[i])
                    $("#standingsHome").find("tr:nth-of-type(" + (i - (teamListA2023.indexOf("서울E") - 2)) + ") > td:nth-of-type(5)").text(goalSListA2023[i])
                    $("#standingsHome").find("tbody > tr:nth-of-type(2)").attr("class", "sefc")
                }
            }
        }
    }

    if ($(".standingsSeason").length) {
        $("#standingsA > div > p").html("<span>1위</span>리그 우승, K리그1 승격<br><span>2위</span>K리그 승강 플레이오프 진출<br><span>3~5위</span>K리그2 승격 플레이오프 진출")

        $("#standingsA").find("tr:nth-of-type(1) > td:nth-of-type(1) > p").css("background", "#174fff")
        $("#standingsA").find("tr:nth-of-type(2) > td:nth-of-type(1) > p").css("background", "#0d2fa1")
        for (j = 3; j <= 5; j++) {
            $("#standingsA").find("tr:nth-of-type(" + j + ") > td:nth-of-type(1) > p").css("background", "#061b69")
        }
    
        $("#standingsA > div > p > span:nth-of-type(1)").css("color", "#174fff")
        $("#standingsA > div > p > span:nth-of-type(2)").css("color", "#0d2fa1")
        $("#standingsA > div > p > span:nth-of-type(3)").css("color", "#061b69")
    }

    if ($(".standingsSeason").length) {
        teamListU18F2023 = Object.values(U18F2023.team)
        ptsListU18F2023 = Object.values(U18F2023.pts)
        wListU18F2023 = Object.values(U18F2023.w)
        dListU18F2023 = Object.values(U18F2023.d)
        lListU18F2023 = Object.values(U18F2023.l)
        goalSListU18F2023 = Object.values(U18F2023.goalS)
        goalCListU18F2023 = Object.values(U18F2023.goalC)
        diffListU18F2023 = Object.values(U18F2023.diff)

        j = teamListU18F2023.indexOf("서울E")

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

            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").html("<p>" + (i + 1) + "</p>")
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>")
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU18F2023[i])
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU18F2023[i])
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(wListU18F2023[i])
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)").text(dListU18F2023[i])
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(7)").text(lListU18F2023[i])
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(8)").text(goalSListU18F2023[i])
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(9)").text(goalCListU18F2023[i])
            $("#standingsU18F").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(10)").text(diffListU18F2023[i])

            if (teamListU18F2023[i] == "서울E") {
                $("#standingsU18F").find("tbody > tr:nth-of-type(" + (i + 1) + ")").attr("class", "sefc")
            }

        }

        $("#standingsU18F > p").html("<span>1위</span>리그 우승, 후반기 A조 · 왕중왕전 진출<br><span>2~4위</span>후반기 A조 · 왕중왕전 진출<br><span>5~6위</span>후반기 A조 진출<br><span>7~12위</span>후반기 B조 진출")

        $("#standingsU18F").find("tr:nth-of-type(1) > td:nth-of-type(1) > p").css("background", "#174fff")
        for (j = 2; j <= 4; j++) {
            $("#standingsU18F").find("tr:nth-of-type(" + j + ") > td:nth-of-type(1) > p").css("background", "#0d2fa1")
        }
        for (j = 5; j <= 6; j++) {
            $("#standingsU18F").find("tr:nth-of-type(" + j + ") > td:nth-of-type(1) > p").css("background", "#061b69")
        }
        for (j = 7; j <= 12; j++) {
            $("#standingsU18F").find("tr:nth-of-type(" + j + ") > td:nth-of-type(1) > p").css("background", "#f00")
        }

        $("#standingsU18F > p > span:nth-of-type(1)").css("color", "#174fff")
        $("#standingsU18F > p > span:nth-of-type(2)").css("color", "#0d2fa1")
        $("#standingsU18F > p > span:nth-of-type(3)").css("color", "#061b69")
        $("#standingsU18F > p > span:nth-of-type(4)").css("color", "#f00")

        if (U18S2023.team.length !== 1) {
            document.getElementById("standingsU18F").style.display = "none"
            document.getElementById("standingsU18S").style.display = "block"
            $(".standingsDetail button:nth-child(1)").css("font-weight", 500)
            $(".standingsDetail button:nth-child(2)").css("font-weight", 900)
        } else {
            document.getElementById("standingsU18F").style.display = "block"
            document.getElementById("standingsU18S").style.display = "none"
            $(".standingsDetail button:nth-child(1)").css("font-weight", 900)
            $(".standingsDetail button:nth-child(2)").css("font-weight", 500).attr("disabled", "o")
        }

        teamListU18S2023 = Object.values(U18S2023.team)
        ptsListU18S2023 = Object.values(U18S2023.pts)
        wListU18S2023 = Object.values(U18S2023.w)
        dListU18S2023 = Object.values(U18S2023.d)
        lListU18S2023 = Object.values(U18S2023.l)
        goalSListU18S2023 = Object.values(U18S2023.goalS)
        goalCListU18S2023 = Object.values(U18S2023.goalC)
        diffListU18S2023 = Object.values(U18S2023.diff)

        j = teamListU18S2023.indexOf("서울E")

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

            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").html("<p>" + (i + 1) + "</p>")
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>")
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU18S2023[i])
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU18S2023[i])
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(wListU18S2023[i])
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)").text(dListU18S2023[i])
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(7)").text(lListU18S2023[i])
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(8)").text(goalSListU18S2023[i])
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(9)").text(goalCListU18S2023[i])
            $("#standingsU18S").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(10)").text(diffListU18S2023[i])

            if (teamListU18S2023[i] == "서울E") {
                $("#standingsU18S").find("tbody > tr:nth-of-type(" + (i + 1) + ")").attr("class", "sefc")
            }

        }

        $("#standingsU18S > p").html("<span>1위</span>리그 우승")

        $("#standingsU18S").find("tr:nth-of-type(1) > td:nth-of-type(1) > p").css("background", "#174fff")

        $("#standingsU18S > p > span:nth-of-type(1)").css("color", "#174fff")

        teamListU152023 = Object.values(U152023.team)
        ptsListU152023 = Object.values(U152023.pts)
        wListU152023 = Object.values(U152023.w)
        dListU152023 = Object.values(U152023.d)
        lListU152023 = Object.values(U152023.l)
        goalSListU152023 = Object.values(U152023.goalS)
        goalCListU152023 = Object.values(U152023.goalC)
        diffListU152023 = Object.values(U152023.diff)

        j = teamListU152023.indexOf("서울E")

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

            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)").html("<p>" + (i + 1) + "</p>")
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)").html("<img src='https://sefc.info/files/" + emblem + ".png'>")
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)").text(teamListU152023[i])
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)").text(ptsListU152023[i])
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)").text(wListU152023[i])
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)").text(dListU152023[i])
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(7)").text(lListU152023[i])
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(8)").text(goalSListU152023[i])
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(9)").text(goalCListU152023[i])
            $("#standingsU15").find("tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(10)").text(diffListU152023[i])

            if (teamListU152023[i] == "서울E") {
                $("#standingsU15").find("tbody > tr:nth-of-type(" + (i + 1) + ")").attr("class", "sefc")
            }

        }

        $("#standingsU15 > div > p").html("<span>1위</span>리그 우승")

        $("#standingsU15").find("tr:nth-of-type(1) > td:nth-of-type(1) > p").css("background", "#174fff")

        $("#standingsU15 > div > p > span:nth-of-type(1)").css("color", "#174fff")

    }

}

// 순위 불러오기
if($(".standingsSeason").length || $("#standingsHome").length) {
    standings2023()
}