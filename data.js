// 경기 정보
data = {"202303010": {"comp": "k2", "round": "1라운드", "home": "서울E", "away": "충북청주", "homeScore": "2", "awayScore": "3", "homeScorer": "70' 브루노<br>75' 츠바사", "awayScorer": "8' 파울리뉴<br>50' 문상윤<br>63' 조르지", "hl": "Vb43tL5wJjk", "GK": {0: ["20160074", "6.5"]}, "DF": {0: ["20180156", "6.2"], 1: ["20170208", "6.0"], 2: ["20180105", "6.2"], 3: ["20140126", "6.4"]}, "MF": {0: ["20190015", "6.1"], 1: ["20170011", "6.9"], 2: ["20180293", "7.5"], 3: ["20160151", "6.4"]}, "FW": {0: ["20230194", "8.0p"], 1: ["20230196", "6.5"]}, "SUB": {0: ["20170029", "-"], 1: ["20180186", "6.4"], 2: ["20120007", "6.7"], 3: ["20160059", "6.2"], 4: ["20120052", "-"], 5: ["20230195", "8.0"], 6: ["20190131", "6.1"]}, }}

// 선수 이름, 등번호
player2023 = {"20180211": ["강정묵", "1"], "20170029": ["문정인", "23"], "20210142": ["주현성", "31"], "20160074": ["윤보상", "77"], "20180186": ["황태현", "2"], "20170153": ["김민규2", "3"], "20120007": ["한용수", "4"], "20230193": ["차승현", "13"], "20180105": ["이재익", "14"], "20220184": ["황인택", "18"], "20220117": ["박준영1", "20"], "20220118": ["조동재", "27"], "20190062": ["황정욱", "28"], "20180156": ["박경민", "33"], "20190199": ["이정문", "42"], "20170208": ["이인재", "92"], "20170011": ["이상민2", "6"], "20140126": ["서보민", "7"], "20160059": ["곽성욱", "8"], "20120052": ["김원식", "15"], "20180207": ["유정완", "17"], "20190015": ["이시헌", "21"], "20210138": ["박창환", "30"], "20230195": ["브루노", "40"], "20180293": ["츠바사", "44"], "20230196": ["반토안", "9"], "20190131": ["이동률", "10"], "20160151": ["김정환", "11"], "20190048": ["박정인", "11"], "20210175": ["변경준", "16"], "20230263": ["헤난", "19"], "20230194": ["호난", "22"], "20140322": ["김수안", "29"], "20160058": ["송시우", "82"], "20220124": ["박준영2", "90"]}

match = JSON.parse(localStorage.getItem("match"))
id = match.id
dataList = data[id]

// 상대 전적
if (id.substr(8, 1) == "0") {
    h2h = {"gangwonfc": ["dd5828", "ffffff", "0", "3", "6", "10", "19"], "gyeongnamfc": ["e83827", "f5cd21", "10", "8", "8", "30", "31"], "goyanghifc": ["171c61", "b31d23", "4", "3", "1", "15", "7"], "goyangzaicro": ["171c61", "b31d23", "4", "3", "1", "15", "7"], "gwangjufc": ["ffd24f", "c41230", "0", "3", "9", "8", "28"], "gimcheonsangmu": ["002649", "c5a775", "1", "1", "5", "5", "11"], "gimpofc": ["203d41", "cdb161", "3", "2", "2", "12", "6"], "daegufc": ["59b8f6", "000000", "1", "4", "3", "6", "10"], "daejeoncitizen": ["9b2743", "041e42", "9", "7", "11", "29", "30"], "daejeonhana": ["007e6e", "9b2743", "9", "7", "11", "29", "30"], "busanipark": ["ff0d00", "ffffff", "6", "6", "15", "34", "52"], "bucheonfc": ["ac2424", "ffffff", "19", "7", "10", "65", "32"], "sangjusangmu": ["ed1a2e", "ffffff", "1", "1", "2", "6", "7"], "seongnamfc": ["000000", "ffffff", "3", "5", "3", "13", "13"], "suwonfc": ["00396f", "eb0028", "5", "6", "9", "23", "30"], "asanmugunghwa": ["ffe806", "0a2a3b", "1", "3", "8", "9", "25"], "ansangreeners": ["00979c", "0a2a3b", "12", "8", "6", "39", "28"], "ansanmugunghwa": ["161270", "fcd715", "2", "4", "2", "8", "8"], "ansanpolice": ["f0c018", "183090", "2", "4", "2", "8", "8"], "jeonnamdragons": ["ffde00", "000000", "3", "10", "5", "16", "22"], "jejuutd": ["f58026", "ffffff", "0", "1", "3", "6", "9"], "cheonancity": ["5dacd8", "ffffff", "1", "1", "1", "3", "5"], "chungnamasan": ["f4cd1c", "093c91", "2", "4", "8", "8", "14"], "chungbukcheongju": ["1c235a", "e8343d", "1", "0", "2", "4", "5"], "chungjuhummel": ["0f6b39", "ffffff", "6", "1", "1", "17", "7"], "fcanyang": ["4f1b87", "cda55f", "7", "9", "18", "34", "51"], "sunmoonuniv": ["006a79", "d31945", "1", "0", "0", "2", "0"], "ulsanhyundai": ["003f98", "f9be00", "0", "1", "0", "1", "1"], "hwaseongfc": ["ff5f00", "00205b", "1", "0", "0", "2", "0"], "sungkyunkwanuniv": ["2e4e3f", "ffffff", "0", "1", "0", "2", "2"], "pocheoncitizen": ["FF4500", "15063c", "0", "0", "1", "0", "1"], "koreauniv": ["8b0029", "d6cabc", "0", "1", "0", "0", "0"], "honamuniv": ["00505a", "dcbe19", "1", "0", "0", "1", "0"], "daejeonkorail": ["0b60ad", "93c4ed", "0", "0", "1", "0", "2"], "changwonfc": ["013690", "00a54f", "1", "1", "0", "2", "1"], "songwolfc": ["263266", "38b7b7", "1", "0", "0", "5", "0"], "fcseoul": ["b5191a", "000000", "1", "0", "0", "1", "0"],}
} else if (id.substr(8, 1) == "8") {
    h2h = {"gangwonfc": ["dd5828", "ffffff", "2", "3", "10", "17", "29"], "gyeongnamfc": ["e83827", "f5cd21", "0", "1", "3", "2", "9"], "goyanghifc": ["171c61", "b31d23", "0", "0", "0", "0", "0"], "goyangzaicro": ["171c61", "b31d23", "1", "0", "1", "2", "2"], "gwangjufc": ["ffd24f", "c41230", "0", "0", "5", "0", "23"], "gimcheonsangmu": ["002649", "c5a775", "2", "1", "1", "9", "3"], "gimpofc": ["203d41", "cdb161", "5", "0", "0", "22", "7"], "daegufc": ["59b8f6", "000000", "1", "0", "5", "4", "18"], "daejeoncitizen": ["9b2743", "041e42", "2", "2", "0", "8", "6"], "daejeonhana": ["007e6e", "9b2743", "2", "2", "0", "8", "6"], "busanipark": ["ff0d00", "ffffff", "0", "2", "3", "5", "10"], "bucheonfc": ["ac2424", "ffffff", "3", "2", "11", "15", "38"], "sangjusangmu": ["ed1a2e", "ffffff", "0", "0", "0", "0", "0"], "seongnamfc": ["000000", "ffffff", "4", "1", "10", "12", "39"], "suwonfc": ["00396f", "eb0028", "3", "2", "9", "18", "31"], "asanmugunghwa": ["ffe806", "0a2a3b", "0", "1", "0", "1", "1"], "ansangreeners": ["00979c", "0a2a3b", "5", "5", "5", "19", "19"], "ansanmugunghwa": ["161270", "fcd715", "2", "1", "0", "9", "3"], "ansanpolice": ["f0c018", "183090", "0", "0", "0", "0", "0"], "jeonnamdragons": ["ffde00", "000000", "0", "1", "2", "0", "6"], "jejuutd": ["f58026", "ffffff", "3", "3", "11", "17", "40"], "cheonancity": ["5dacd8", "ffffff", "0", "1", "0", "2", "2"], "chungnamasan": ["f4cd1c", "093c91", "3", "0", "0", "8", "4"], "chungbukcheongju": ["1c235a", "e8343d", "0", "0", "0", "0", "0"], "chungjuhummel": ["0f6b39", "ffffff", "0", "0", "0", "0", "0"], "fcanyang": ["4f1b87", "cda55f", "4", "0", "14", "18", "37"], "ulsanhyundai": ["003f98", "f9be00", "1", "0", "1", "3", "3"], "pocheoncitizen": ["FF4500", "15063c", "0", "0", "0", "0", "0"], "daejeonkorail": ["0b60ad", "93c4ed", "0", "0", "0", "0", "0"], "fcseoul": ["b5191a", "000000", "0", "2", "10", "6", "33"], "incheonutd": ["004f9e", "231815", "1", "4", "9", "17", "34"], "suwonsamsung": ["194996", "ffffff", "0", "0", "11", "7", "41"], "irihs": ["ffffff", "f1ab12", "1", "0", "0", "4", "2"], "ganggyeongchs": ["757473", "fefc2d", "1", "0", "0", "3", "1"], "dongducheonfc": ["cf261f", "ffffff", "1", "0", "0", "2", "1"], "pohangsteelers": ["e70012", "000000", "0", "0", "2", "2", "6"], "hwaseongfootballcentre": ["f11914", "ffffff", "1", "0", "0", "2", "1"], "acewayfc": ["000000", "ffffff", "1", "0", "0", "1", "0"], "bugyeonghs": ["e98a1c", "ffffff", "0", "0", "1", "0", "3"], "suwonhs": ["013087", "ffffff", "1", "0", "0", "2", "0"], "gwacheonhs": ["243251", "fce404", "0", "1", "0", "2", "2"], "youngunhs": ["773523", "ffffff", "0", "0", "1", "1", "2"], "boinhs": ["a52a2a", "ebb767", "0", "0", "1", "2", "5"], "gyeonggiahs": ["2481bb", "ffffff", "0", "0", "1", "1", "2"], "seoulgwangjinfc": ["054393", "dcbc5a", "2", "0", "0", "15", "0"], "pajukorea": ["8b0029", "d6cabc", "2", "0", "0", "7", "1"], "unhohs": ["1e90ff", "ffffff", "1", "0", "0", "7", "0"], "jeonbukhyundai": ["034f36", "ffdd00", "0", "0", "2", "0", "7"], "hongcheonfc": ["efda9c", "ffffff", "1", "0", "0", "2", "1"], "chojihs": ["019241", "fff500", "1", "0", "0", "1", "0"], "soongsilhs": ["122a4a", "ffffff", "1", "0", "0", "5", "1"],}
} else {
    h2h = {"gangwonfc": ["dd5828", "ffffff", "7", "1", "2", "20", "9"], "gyeongnamfc": ["e83827", "f5cd21", "1", "1", "0", "2", "0"], "gimcheonsangmu": ["002649", "c5a775", "1", "1", "0", "3", "1"], "gimpofc": ["203d41", "cdb161", "1", "1", "1", "1", "6"], "daegufc": ["59b8f6", "000000", "0", "0", "1", "0", "1"], "daejeoncitizen": ["9b2743", "041e42", "0", "0", "1", "0", "1"], "daejeonhana": ["007e6e", "9b2743", "0", "0", "1", "0", "1"], "busanipark": ["ff0d00", "ffffff", "1", "1", "1", "4", "5"], "bucheonfc": ["ac2424", "ffffff", "1", "5", "3", "10", "14"], "sangjusangmu": ["ed1a2e", "ffffff", "1", "1", "1", "2", "3"], "seongnamfc": ["000000", "ffffff", "3", "0", "6", "9", "18"], "suwonfc": ["00396f", "eb0028", "3", "2", "5", "16", "23"], "suwonfcp": ["00396f", "eb0028", "0", "1", "1", "2", "3"], "ansangreeners": ["00979c", "0a2a3b", "7", "0", "2", "30", "9"], "jeonnamdragons": ["ffde00", "000000", "0", "2", "1", "7", "9"], "jejuutd": ["f58026", "ffffff", "3", "4", "4", "16", "22"], "chungnamasan": ["f4cd1c", "093c91", "2", "3", "0", "15", "7"], "fcanyang": ["4f1b87", "cda55f", "5", "2", "1", "23", "8"], "ulsanhyundai": ["003f98", "f9be00", "0", "1", "2", "2", "5"], "fcseoul": ["b5191a", "000000", "4", "0", "7", "18", "27"], "incheonutd": ["004f9e", "231815", "3", "2", "4", "11", "13"], "suwonsamsung": ["194996", "ffffff", "1", "1", "8", "5", "26"], "pohangsteelers": ["e70012", "000000", "1", "0", "2", "1", "9"], "boinms": ["a52a2a", "ebb767", "1", "0", "1", "3", "3"], "jeonbukhyundai": ["034f36", "ffdd00", "0", "0", "1", "2", "5"],}
}

//////////////////////////////////////////////////

// 경기 세부 정보 화면

homeImg = dataList["home"].replace("서울E", "seouleland_s").replace("울산", "ulsanhyundai2016_s").replace("수원삼성", "suwonsamsung_s").replace("수원FC", "suwonfc2016_s").replace("성남", "seongnamfc2014_s").replace("포항", "pohangsteelers_s").replace("전남", "jeonnamdragons2022_s").replace("전북", "jeonbukhyundai2018_s").replace("제주", "jejuutd_s").replace("인천", "incheonutd_s").replace("경남", "gyeongnamfc2010_s").replace("광주", "gwangjufc2020_s").replace("김포", "gimpofc2022_s").replace("김천", "gimcheonsangmu_s").replace("강원", "gangwonfc_s").replace("FC서울", "fcseoul_s").replace("안양", "fcanyang_s").replace("대전", "daejeonhana2020_s").replace("대구", "daegufc2013_s").replace("충남아산", "chungnamasan_s").replace("충북청주", "chungbukcheongju_s").replace("천안", "cheonancity2023_s").replace("부산", "busanipark2012_s").replace("부천", "bucheonfc_s").replace("안산", "ansangreeners_s").replace("파주고려", "pajukorea_s").replace("홍천FC", "hongcheonfc_s").replace("초지고", "chojihs_s").replace("숭실고", "soongsilhs_s")
awayImg = dataList["away"].replace("서울E", "seouleland_s").replace("울산", "ulsanhyundai2016_s").replace("수원삼성", "suwonsamsung_s").replace("수원FC", "suwonfc2016_s").replace("성남", "seongnamfc2014_s").replace("포항", "pohangsteelers_s").replace("전남", "jeonnamdragons2022_s").replace("전북", "jeonbukhyundai2018_s").replace("제주", "jejuutd_s").replace("인천", "incheonutd_s").replace("경남", "gyeongnamfc2010_s").replace("광주", "gwangjufc2020_s").replace("김포", "gimpofc2022_s").replace("김천", "gimcheonsangmu_s").replace("강원", "gangwonfc_s").replace("FC서울", "fcseoul_s").replace("안양", "fcanyang_s").replace("대전", "daejeonhana2020_s").replace("대구", "daegufc2013_s").replace("충남아산", "chungnamasan_s").replace("충북청주", "chungbukcheongju_s").replace("천안", "cheonancity2023_s").replace("부산", "busanipark2012_s").replace("부천", "bucheonfc_s").replace("안산", "ansangreeners_s").replace("파주고려", "pajukorea_s").replace("홍천FC", "hongcheonfc_s").replace("초지고", "chojihs_s").replace("숭실고", "soongsilhs_s")
compImg = dataList["comp"].replace("k2", "kleague40_s").replace("fa", "facup_s").replace("kj8f", "kleague40_s").replace("kj8s", "kleague40_s").replace("kj5", "kleague40_s").replace("mcst", "mcst_s").replace("kf8", "kfa_s").replace("kyc8", "kleagueyouthchampionship_s").replace("kyc5", "kleagueyouthchampionship_s").replace("yd", "kfa_s")

// 점수
$("#matchScore > div:nth-child(1)").html("<img src='./files/" + homeImg + ".png'><p>" + dataList["home"] + "</p><p>" + dataList["homeScorer"] + "</p>")
$("#matchScore > div:nth-child(2) > div > img").attr("src", "./files/" + compImg + ".png")
$("#matchScore > div:nth-child(3)").html("<img src='./files/" + awayImg + ".png'><p>" + dataList["away"] + "</p><p>" + dataList["awayScorer"] + "</p>")

$("#homeScore").text(dataList["homeScore"])
$("#awayScore").text(dataList["awayScore"])
$("#round").text(dataList["round"])
$("#date").text(id.substr(0, 4) + "." + id.substr(4, 2) + "." + id.substr(6,2) + ".")

// 정보
$("#highlight").html("<a href='https://youtu.be/" + dataList["hl"] + "' target='_blank'><img src='http://img.youtube.com/vi/" + dataList["hl"] + "/mqdefault.jpg'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png'></a>")


// 라인업
if (id.substr(8, 1) == "0") {
    $("#startingXI").html("<img src='https://sefc.info/files/field.png'><table><tr id='fw'></tr><tr id='mf'></tr><tr id='df'></tr><tr id='gk'></tr></table>")
    $("#sub").html("<table><thead><tr><th>교체 명단</th></tr></thead><tbody></tbody></table>")
    for (i = 0; i < Object.keys(dataList["GK"]).length; i++) {
        href = "location.href='./players/" + dataList["GK"][i][0] + "'";

        $("#gk").append("<td id='" + dataList["GK"][i][0].replace(/[^0-9]/g, "") + "'></td>")
        $("#" + dataList["GK"][i][0]).html("<div><img src='https://sefc.info/files/" + dataList["GK"][i][0] + ".png'></div><p><span>" + player2023[dataList["GK"][i][0]][1] + "</span>" + player2023[dataList["GK"][i][0]][0].replace(/[A-Z,0-9]/g, "") + "</p><p>" + dataList["GK"][i][1].replace(/[a-z]/g, "") + "</p>")
        $("#" + dataList["GK"][i][0]).attr("onclick", href)

        if (dataList["GK"][i][1].replace(/[^a-z]/g, "") == "p") {
            $("#" + dataList["GK"][i][0] + " > p:nth-of-type(2)").css("background", "#174fff")
            $("#potm").html("<p>경기 최고의 선수</p><a href='./players/" + dataList["GK"][i][0] + "'><div><div><img src='https://sefc.info/files/" + dataList["GK"][i][0] + ".png'></div><p><span>" + player2023[dataList["GK"][i][0]][1] + "</span>" + player2023[dataList["GK"][i][0]][0].replace(/[A-Z,0-9]/g, "") + "</p><p class='potm'>" + dataList["GK"][i][1].replace(/[a-z]/g, "") + "</p></div></a>")
        }
    }
    for (i = 0; i < Object.keys(dataList["DF"]).length; i++) {
        href = "location.href='./players/" + dataList["DF"][i][0] + "'";

        $("#df").append("<td id='" + dataList["DF"][i][0].replace(/[^0-9]/g, "") + "'></td>")
        $("#" + dataList["DF"][i][0]).html("<div><img src='https://sefc.info/files/" + dataList["DF"][i][0] + ".png'></div><p><span>" + player2023[dataList["DF"][i][0]][1] + "</span>" + player2023[dataList["DF"][i][0]][0].replace(/[A-Z,0-9]/g, "") + "</p><p>" + dataList["DF"][i][1].replace(/[a-z]/g, "") + "</p>")
        $("#" + dataList["DF"][i][0]).attr("onclick", href)

        if (dataList["DF"][i][1].replace(/[^a-z]/g, "") == "p") {
            $("#" + dataList["DF"][i][0] + " > p:nth-of-type(2)").css("background", "#174fff")
            $("#potm").html("<p>경기 최고의 선수</p><a href='./players/" + dataList["DF"][i][0] + "'><div><div><img src='https://sefc.info/files/" + dataList["DF"][i][0] + ".png'></div><p><span>" + player2023[dataList["DF"][i][0]][1] + "</span>" + player2023[dataList["DF"][i][0]][0].replace(/[A-Z,0-9]/g, "") + "</p><p class='potm'>" + dataList["DF"][i][1].replace(/[a-z]/g, "") + "</p></div></a>")
        }
    }
    for (i = 0; i < Object.keys(dataList["MF"]).length; i++) {
        href = "location.href='./players/" + dataList["MF"][i][0] + "'";

        $("#mf").append("<td id='" + dataList["MF"][i][0].replace(/[^0-9]/g, "") + "'></td>")
        $("#" + dataList["MF"][i][0]).html("<div><img src='https://sefc.info/files/" + dataList["MF"][i][0] + ".png'></div><p><span>" + player2023[dataList["MF"][i][0]][1] + "</span>" + player2023[dataList["MF"][i][0]][0].replace(/[A-Z,0-9]/g, "") + "</p><p>" + dataList["MF"][i][1].replace(/[a-z]/g, "") + "</p>")
        $("#" + dataList["MF"][i][0]).attr("onclick", href)

        if (dataList["MF"][i][1].replace(/[^a-z]/g, "") == "p") {
            $("#" + dataList["MF"][i][0] + " > p:nth-of-type(2)").css("background", "#174fff")
            $("#potm").html("<p>경기 최고의 선수</p><a href='./players/" + dataList["MF"][i][0] + "'><div><div><img src='https://sefc.info/files/" + dataList["MF"][i][0] + ".png'></div><p><span>" + player2023[dataList["MF"][i][0]][1] + "</span>" + player2023[dataList["MF"][i][0]][0].replace(/[A-Z,0-9]/g, "") + "</p><p class='potm'>" + dataList["MF"][i][1].replace(/[a-z]/g, "") + "</p></div></a>")
        }
    }
    for (i = 0; i < Object.keys(dataList["FW"]).length; i++) {
        href = "location.href='./players/" + dataList["FW"][i][0] + "'";

        $("#fw").append("<td id='" + dataList["FW"][i][0].replace(/[^0-9]/g, "") + "'></td>")
        $("#" + dataList["FW"][i][0]).html("<div><img src='https://sefc.info/files/" + dataList["FW"][i][0] + ".png'></div><p><span>" + player2023[dataList["FW"][i][0]][1] + "</span>" + player2023[dataList["FW"][i][0]][0].replace(/[A-Z,0-9]/g, "") + "</p><p>" + dataList["FW"][i][1].replace(/[a-z]/g, "") + "</p>")
        $("#" + dataList["FW"][i][0]).attr("onclick", href)

        if (dataList["FW"][i][1].replace(/[^a-z]/g, "") == "p") {
            $("#" + dataList["FW"][i][0] + " > p:nth-of-type(2)").css("background", "#174fff")
            $("#potm").html("<p>경기 최고의 선수</p><a href='./players/" + dataList["FW"][i][0] + "'><div><div><img src='https://sefc.info/files/" + dataList["FW"][i][0] + ".png'></div><p><span>" + player2023[dataList["FW"][i][0]][1] + "</span>" + player2023[dataList["FW"][i][0]][0].replace(/[A-Z,0-9]/g, "") + "</p><p class='potm'>" + dataList["FW"][i][1].replace(/[a-z]/g, "") + "</p></div></a>")
        }
    }
    for (i = 0; i < Object.keys(dataList["SUB"]).length; i++) {
        href = "location.href='./players/" + dataList["SUB"][i][0] + "'";

        $("#sub > table").append("<tr><td id='" + dataList["SUB"][i][0].replace(/[^0-9]/g, "") + "'></td></tr>")
        $("#" + dataList["SUB"][i][0]).html("<div><img src='https://sefc.info/files/" + dataList["SUB"][i][0] + ".png'></div><p><span>" + player2023[dataList["SUB"][i][0]][1] + "</span>" + player2023[dataList["SUB"][i][0]][0] + "</p><p>" + dataList["SUB"][i][1] + "</p>")
        $("#" + dataList["SUB"][i][0]).attr("onclick", href)

        if (dataList["SUB"][i][1].replace(/[^a-z]/g, "") == "p") {
            $("#" + dataList["SUB"][i][0] + " > p:nth-of-type(2)").css("background", "#174fff")
            $("#potm").html("<p>경기 최고의 선수</p><a href='./players/" + dataList["SUB"][i][0] + "'><div><div><img src='https://sefc.info/files/" + dataList["SUB"][i][0] + ".png'></div><p><span>" + player2023[dataList["SUB"][i][0]][1] + "</span>" + player2023[dataList["SUB"][i][0]][0].replace(/[A-Z,0-9]/g, "") + "</p><p class='potm'>" + dataList["SUB"][i][1].replace(/[a-z]/g, "") + "</p></div></a>")
        }
    }
}

$("#startingXI > table > tbody > tr").each(function() {
    if ($(window).width() < 768) {
        width = 70 / $(this).find("td").length + "vw"
        $(this).find("td").css("width", width)
    } else {
        width = 280 / $(this).find("td").length + "px"
        $(this).find("td").css("width", width)    
    }
})

if ($(window).width() < 768) {
    $("#potm").css({"width": "74vw", "padding": "1vw 3vw 2vw 3vw", "margin-left": "10vw", "border-radius": "20px", "box-shadow": "0 0 3px 2px #00083120"})
} else {
    $("#potm").css({"width": "296px", "padding": "4px 12px 8px 12px", "margin-left": "40px", "border-radius": "20px", "box-shadow": "0 0 3px 2px #00083120"})
}

// 전적

hrefH = homeImg.replace("_s", "")
hrefA = awayImg.replace("_s", "")

if (hrefH == "seouleland") {
    sefc = hrefH
    opp = hrefA
} else if (hrefA == "seouleland") {
    sefc = hrefA
    opp = hrefH
}

h2hList = Object.keys(h2h)
index = h2hList.indexOf(opp, 0)

w = Number(h2h[Object.keys(h2h)[index]][2])
d = Number(h2h[Object.keys(h2h)[index]][3])
l = Number(h2h[Object.keys(h2h)[index]][4])
goalS = Number(h2h[Object.keys(h2h)[index]][5])
goalC = Number(h2h[Object.keys(h2h)[index]][6])

wPct = (100 * w / (w + d + l)).toFixed(1) + "%"
dPct = (100 * d / (w + d + l)).toFixed(1) + "%"
lPct = (100 * l / (w + d + l)).toFixed(1) + "%"
goalSpG = "경기당 " + (goalS / (w + d + l)).toFixed(1)
goalCpG = "경기당 " + (goalC / (w + d + l)).toFixed(1)

oppBg = "#" + (h2h[Object.keys(h2h)[index]][0])
oppText = "#" + (h2h[Object.keys(h2h)[index]][1])

if ($("#matchScore > div:nth-of-type(1)").find("img").attr("src").replace("https://sefc.info/files/", "").replace("_s.png", "") == "seouleland") {
    grd1 = ((100 * w / (w + d + l))) + "%"
    grd2 = ((100 * (w + d) / (w + d + l))) + "%"
    goalGrd = (100 * goalS / (goalS + goalC)) + "%"

    h2hGradient = "linear-gradient(105deg, #000831 " + grd1 + ", #c8c8c8 " + grd1 + ", #c8c8c8 " + grd2 + ", " + oppBg + " " + grd2 + ")"
    goalGradient = "linear-gradient(105deg, #000831 " + goalGrd + ", " + oppBg + " " + goalGrd + ")"

    if (d == 0) {
        h2hGradient = "linear-gradient(105deg, #000831 " + grd1 + ", " + oppBg + " " + grd1 + ")"
    }

    if (l == 0) {
        h2hGradient = "linear-gradient(105deg, #000831 " + grd1 + ", " + "#c8c8c8" + " " + grd1 + ")"
    }

    $("#matchH2H").prepend("<div><p></p></div><div><div><p></p><div><p>승리</p><p></p></div></div><div><p></p><div><p>무승부</p><p></p></div></div><div><p></p><div><p>패배</p><p></p></div></div></div><div><p></p></div><div><div><p></p><div><p>득점</p><p></p></div></div><div><p></p><div><p>실점</p><p></p></div></div></div>")

    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)").text(w)
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)").text(d)
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > p:nth-of-type(1)").text(l)
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > div > p:nth-of-type(2)").text(wPct)
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > div > p:nth-of-type(2)").text(dPct)
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > div > p:nth-of-type(2)").text(lPct)
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > p:nth-of-type(1)").text(goalS)
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > p:nth-of-type(1)").text(goalC)
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > div > p:nth-of-type(2)").text(goalSpG)
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > div > p:nth-of-type(2)").text(goalCpG)

    if ($(window).width() < 768) {
        $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": "#000831", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": "#c8c8c8", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": oppBg, "color": oppText, "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": "#000831", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": oppBg, "color": oppText, "display": "flex", "align-items": "center", "justify-content": "center"})
    } else {
        $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)").css({ "width": "40px", "height": "40px", "font-size": "16px", "border-radius": "10px", "background": "#000831", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)").css({ "width": "40px", "height": "40px", "font-size": "16px", "border-radius": "10px", "background": "#c8c8c8", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > p:nth-of-type(1)").css({ "width": "40px", "height": "40px", "font-size": "16px", "border-radius": "10px", "background": oppBg, "color": oppText, "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > p:nth-of-type(1)").css({ "width": "40px", "height": "40px", "font-size": "16px", "border-radius": "10px", "background": "#000831", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > p:nth-of-type(1)").css({ "width": "40px", "height": "40px", "font-size": "16px", "border-radius": "10px", "background": oppBg, "color": oppText, "display": "flex", "align-items": "center", "justify-content": "center"})    
    }
} else {
    grd1 = (100 * l / (w + d + l)) + "%"
    grd2 = (100 * (d + l) / (w + d + l)) + "%"
    goalGrd = (100 * goalC / (goalS + goalC)) + "%"

    h2hGradient = "linear-gradient(105deg, " + oppBg + " " + grd1 + ", #c8c8c8 " + grd1 + ", #c8c8c8 " + grd2 + ", #000831 " + grd2 + ")"
    goalGradient = "linear-gradient(105deg, " + oppBg + " " + goalGrd + ", #000831 " + goalGrd + ")"

    if (d == 0) {
        h2hGradient = "linear-gradient(105deg, " + oppBg + " " + grd1 + ", #000831 " + grd1 + ")"
    }

    if (l == 0) {
        h2hGradient = "linear-gradient(105deg, " + oppBg + " " + grd1 + ", " + "#c8c8c8" + " " + grd1 + ")"
    }

    $("#matchH2H").append("<div><p></p></div><div><div><p></p><div><p>패배</p><p></p></div></div><div><p></p><div><p>무승부</p><p></p></div></div><div><p></p><div><p>승리</p><p></p></div></div></div><div><p></p></div><div><div><p></p><div><p>실점</p><p></p></div></div><div><p></p><div><p>득점</p><p></p></div></div></div>")

    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)").text(l)
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)").text(d)
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > p:nth-of-type(1)").text(w)
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > div > p:nth-of-type(2)").text(lPct)
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > div > p:nth-of-type(2)").text(dPct)
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > div > p:nth-of-type(2)").text(wPct)
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > p:nth-of-type(1)").text(goalC)
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > p:nth-of-type(1)").text(goalS)
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > div > p:nth-of-type(2)").text(goalCpG)
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > div > p:nth-of-type(2)").text(goalSpG)

    if ($(window).width() < 768) {
        $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": oppBg, "color": oppText, "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": "#c8c8c8", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": "#000831", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": oppBg, "color": oppText, "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": "#000831", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"})
    } else {
        $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)").css({ "width": "40px", "height": "40px", "font-size": "16px", "border-radius": "10px", "background": oppBg, "color": oppText, "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)").css({ "width": "40px", "height": "40px", "font-size": "16px", "border-radius": "10px", "background": "#c8c8c8", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > p:nth-of-type(1)").css({ "width": "40px", "height": "40px", "font-size": "16px", "border-radius": "10px", "background": "#000831", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > p:nth-of-type(1)").css({ "width": "40px", "height": "40px", "font-size": "16px", "border-radius": "10px", "background": oppBg, "color": oppText, "display": "flex", "align-items": "center", "justify-content": "center"})
        $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > p:nth-of-type(1)").css({ "width": "40px", "height": "40px", "font-size": "16px", "border-radius": "10px", "background": "#000831", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"})
    }
}

if ($(window).width() < 768) {
    $("#matchH2H > div:nth-of-type(1) > p").css({ "width": "80vw", "height": "2vw", "background-image": h2hGradient})

    $("#matchH2H > div:nth-of-type(2)").css({ "display": "flex", "justify-content": "flex-start", "margin-top": "5vw"})
    $("#matchH2H > div:nth-of-type(2) > div").css({ "display": "flex"})
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1)").css("margin-left", "10vw")
    $("#matchH2H > div:nth-of-type(2) > div > div > p:nth-of-type(1)").css({ "height": "4vw", "font-weight": "400", "padding": "1vw 0 0 2vw", "text-align": "left", "display": "flex", "align-items": "center"})
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > div > p:nth-of-type(2)").css({ "height": "4vw", "font-weight": "400", "text-align": "left", "padding": "0 8vw 0 2vw", "display": "flex", "align-items": "center"})
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > div > p:nth-of-type(2)").css({ "height": "4vw", "font-weight": "400", "text-align": "left", "padding": "0 8vw 0 2vw", "display": "flex", "align-items": "center"})
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > div > p:nth-of-type(2)").css({ "height": "4vw", "font-weight": "400", "text-align": "left", "padding": "0 8vw 0 2vw", "display": "flex", "align-items": "center"})
    
    $("#matchH2H > div:nth-of-type(3) > p").css({ "width": "80vw", "height": "2vw", "background-image": goalGradient})
    
    $("#matchH2H > div:nth-of-type(4)").css({ "display": "flex", "justify-content": "flex-start", "margin-top": "5vw"})
    $("#matchH2H > div:nth-of-type(4) > div").css({ "display": "flex"})
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1)").css("margin-left", "10vw")
    $("#matchH2H > div:nth-of-type(4) > div > div > p:nth-of-type(1)").css({ "height": "4vw", "font-weight": "400", "padding": "1vw 0 0 2vw", "text-align": "left", "display": "flex", "align-items": "center"})
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > div > p:nth-of-type(2)").css({ "height": "4vw", "font-weight": "400", "text-align": "left", "padding": "0 8vw 0 2vw", "display": "flex", "align-items": "center"})
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > div > p:nth-of-type(2)").css({ "height": "4vw", "font-weight": "400", "text-align": "left", "padding": "0 8vw 0 2vw", "display": "flex", "align-items": "center"})
} else {
    $("#matchH2H > div:nth-of-type(1) > p").css({ "width": "320px", "height": "8px", "background-image": h2hGradient})

    $("#matchH2H > div:nth-of-type(2)").css({ "display": "flex", "justify-content": "flex-start", "margin-top": "20px"})
    $("#matchH2H > div:nth-of-type(2) > div").css({ "display": "flex"})
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1)").css("margin-left", "40px")
    $("#matchH2H > div:nth-of-type(2) > div > div > p:nth-of-type(1)").css({ "height": "16px", "font-weight": "400", "padding": "4px 0 0 8px", "text-align": "left", "display": "flex", "align-items": "center"})
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > div > p:nth-of-type(2)").css({ "height": "16px", "font-weight": "400", "text-align": "left", "padding": "0 32px 0 8px", "display": "flex", "align-items": "center"})
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > div > p:nth-of-type(2)").css({ "height": "16px", "font-weight": "400", "text-align": "left", "padding": "0 32px 0 8px", "display": "flex", "align-items": "center"})
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > div > p:nth-of-type(2)").css({ "height": "16px", "font-weight": "400", "text-align": "left", "padding": "0 32px 0 8px", "display": "flex", "align-items": "center"})

    $("#matchH2H > div:nth-of-type(3) > p").css({ "width": "320px", "height": "8px", "background-image": goalGradient})

    $("#matchH2H > div:nth-of-type(4)").css({ "display": "flex", "justify-content": "flex-start", "margin-top": "20px"})
    $("#matchH2H > div:nth-of-type(4) > div").css({ "display": "flex"})
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1)").css("margin-left", "40px")
    $("#matchH2H > div:nth-of-type(4) > div > div > p:nth-of-type(1)").css({ "height": "16px", "font-weight": "400", "padding": "4px 0 0 8px", "text-align": "left", "display": "flex", "align-items": "center"})
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > div > p:nth-of-type(2)").css({ "height": "16px", "font-weight": "400", "text-align": "left", "padding": "0 32px 0 8px", "display": "flex", "align-items": "center"})
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > div > p:nth-of-type(2)").css({ "height": "16px", "font-weight": "400", "text-align": "left", "padding": "0 32px 0 8px", "display": "flex", "align-items": "center"})
}