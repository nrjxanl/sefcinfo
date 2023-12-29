data = {"202303010": {"comp": "k2", "round": "1라운드", "home": "서울E", "away": "충북청주", "homeScore": "2", "awayScore": "3", "homeScorer": "70' 브루노<br>75' 츠바사", "awayScorer": "8' 파울리뉴<br>50' 문상윤<br>63' 조르지", "hl": "Vb43tL5wJjk", "GK": {0: ["20160074", "6.5"]}, "DF": {0: ["20180156", "6.2"], 1: ["20170208", "6.0"], 2: ["20180105", "6.2"], 3: ["20140126", "6.4"]}, "MF": {0: ["20190015", "6.1"], 1: ["20170011", "6.9"], 2: ["20180293", "7.5"], 3: ["20160151", "6.4"]}, "FW": {0: ["20230194", "8.0p"], 1: ["20230196", "6.5"]}, "SUB": {0: ["20170029", "-"], 1: ["20180186", "6.4"], 2: ["20120007", "6.7"], 3: ["20160059", "6.2"], 4: ["20120052", "8.0"], 5: ["20230195", "6.1"], 6: ["20190131", "-"]}, }}
player2023 = {"20180211": ["강정묵", "1"], "20170029": ["문정인", "23"], "20210142": ["주현성", "31"], "20160074": ["윤보상", "77"], "20180186": ["황태현", "2"], "20170153": ["김민규2", "3"], "20120007": ["한용수", "4"], "20230193": ["차승현", "13"], "20180105": ["이재익", "14"], "20220184": ["황인택", "18"], "20220117": ["박준영1", "20"], "20220118": ["조동재", "27"], "20190062": ["황정욱", "28"], "20180156": ["박경민", "33"], "20190199": ["이정문", "42"], "20170208": ["이인재", "92"], "20170011": ["이상민2", "6"], "20140126": ["서보민", "7"], "20160059": ["곽성욱", "8"], "20120052": ["김원식", "15"], "20180207": ["유정완", "17"], "20190015": ["이시헌", "21"], "20210138": ["박창환", "30"], "20230195": ["브루노", "40"], "20180293": ["츠바사", "44"], "20230196": ["반토안", "9"], "20190131": ["이동률", "10"], "20160151": ["김정환", "11"], "20190048": ["박정인", "11"], "20210175": ["변경준", "16"], "20230263": ["헤난", "19"], "20230194": ["호난", "22"], "20140322": ["김수안", "29"], "20160058": ["송시우", "82"], "20220124": ["박준영2", "90"]}

match = JSON.parse(localStorage.getItem("match"))
id = match.id
dataList = data[id]

homeImg = dataList["home"].replace("서울E", "seouleland_s").replace("울산", "ulsanhyundai2016_s").replace("수원삼성", "suwonsamsung_s").replace("수원FC", "suwonfc2016_s").replace("성남", "seongnamfc2014_s").replace("포항", "pohangsteelers_s").replace("전남", "jeonnamdragons2022_s").replace("전북", "jeonbukhyundai2018_s").replace("제주", "jejuutd_s").replace("인천", "incheonutd_s").replace("경남", "gyeongnamfc2010_s").replace("광주", "gwangjufc2020_s").replace("김포", "gimpofc2022_s").replace("김천", "gimcheonsangmu_s").replace("강원", "gangwonfc_s").replace("FC서울", "fcseoul_s").replace("안양", "fcanyang_s").replace("대전", "daejeonhana2020_s").replace("대구", "daegufc2013_s").replace("충남아산", "chungnamasan_s").replace("충북청주", "chungbukcheongju_s").replace("천안", "cheonancity2023_s").replace("부산", "busanipark2012_s").replace("부천", "bucheonfc_s").replace("안산", "ansangreeners_s").replace("파주고려", "pajukorea_s").replace("홍천FC", "hongcheonfc_s").replace("초지고", "chojihs_s").replace("숭실고", "soongsilhs_s")
awayImg = dataList["away"].replace("서울E", "seouleland_s").replace("울산", "ulsanhyundai2016_s").replace("수원삼성", "suwonsamsung_s").replace("수원FC", "suwonfc2016_s").replace("성남", "seongnamfc2014_s").replace("포항", "pohangsteelers_s").replace("전남", "jeonnamdragons2022_s").replace("전북", "jeonbukhyundai2018_s").replace("제주", "jejuutd_s").replace("인천", "incheonutd_s").replace("경남", "gyeongnamfc2010_s").replace("광주", "gwangjufc2020_s").replace("김포", "gimpofc2022_s").replace("김천", "gimcheonsangmu_s").replace("강원", "gangwonfc_s").replace("FC서울", "fcseoul_s").replace("안양", "fcanyang_s").replace("대전", "daejeonhana2020_s").replace("대구", "daegufc2013_s").replace("충남아산", "chungnamasan_s").replace("충북청주", "chungbukcheongju_s").replace("천안", "cheonancity2023_s").replace("부산", "busanipark2012_s").replace("부천", "bucheonfc_s").replace("안산", "ansangreeners_s").replace("파주고려", "pajukorea_s").replace("홍천FC", "hongcheonfc_s").replace("초지고", "chojihs_s").replace("숭실고", "soongsilhs_s")
compImg = dataList["comp"].replace("k2", "kleague40_s").replace("fa", "facup_s").replace("kj8f", "kleague40_s").replace("kj8s", "kleague40_s").replace("kj5", "kleague40_s").replace("mcst", "mcst_s").replace("kf8", "kfa_s").replace("kyc8", "kleagueyouthchampionship_s").replace("kyc5", "kleagueyouthchampionship_s").replace("yd", "kfa_s")

$("#matchScore > div:nth-child(1)").html("<img src='./files/" + homeImg + ".png'><p>" + dataList["home"] + "</p><p>" + dataList["homeScorer"] + "</p>")
$("#matchScore > div:nth-child(2) > div > img").attr("src", "./files/" + compImg + ".png")
$("#matchScore > div:nth-child(3)").html("<img src='./files/" + awayImg + ".png'><p>" + dataList["away"] + "</p><p>" + dataList["awayScorer"] + "</p>")

$("#homeScore").text(dataList["homeScore"])
$("#awayScore").text(dataList["awayScore"])
$("#round").text(dataList["round"])
$("#date").text(id.substr(0, 4) + "." + id.substr(4, 2) + "." + id.substr(6,2) + ".")

$("#highlight").html("<a href='https://youtu.be/" + dataList["hl"] + "' target='_blank'><img src='http://img.youtube.com/vi/" + dataList["hl"] + "/mqdefault.jpg'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png'></a>")

if (id.substr(8, 1) == "0") {
    $("#startingXI").html("<img src='https://sefc.info/files/field.png'><table><tr id='fw'></tr><tr id='mf'></tr><tr id='df'></tr><tr id='gk'></tr></table>")
    $("#sub").html("<table><thead><tr><th>교체 명단</th></tr></thead><tbody></tbody></table>")
    for (i = 0; i < Object.keys(dataList["GK"]).length; i++) {
        $("#gk").append("<td id='" + dataList["GK"][i][0].replace(/[^0-9]/g, "") +"'></td>")
        $("#" + dataList["GK"][i][0]).html("<div><img src='https://sefc.info/files/" + dataList["GK"][i][0] + ".png'></div><p><span>" + player2023[dataList["GK"][i][0]][1] + "</span>" + player2023[dataList["GK"][i][0]][0].replace(/[A-Z,0-9]/g, "") + "</p><p>" + dataList["GK"][i][1].replace(/[a-z]/g, "") + "</p>")
    }
    for (i = 0; i < Object.keys(dataList["DF"]).length; i++) {
        $("#df").append("<td id='" + dataList["DF"][i][0].replace(/[^0-9]/g, "") +"'></td>")
        $("#" + dataList["DF"][i][0]).html("<div><img src='https://sefc.info/files/" + dataList["DF"][i][0] + ".png'></div><p><span>" + player2023[dataList["DF"][i][0]][1] + "</span>" + player2023[dataList["DF"][i][0]][0].replace(/[A-Z,0-9]/g, "") + "</p><p>" + dataList["DF"][i][1].replace(/[a-z]/g, "") + "</p>")
    }
    for (i = 0; i < Object.keys(dataList["MF"]).length; i++) {
        $("#mf").append("<td id='" + dataList["MF"][i][0].replace(/[^0-9]/g, "") +"'></td>")
        $("#" + dataList["MF"][i][0]).html("<div><img src='https://sefc.info/files/" + dataList["MF"][i][0] + ".png'></div><p><span>" + player2023[dataList["MF"][i][0]][1] + "</span>" + player2023[dataList["MF"][i][0]][0].replace(/[A-Z,0-9]/g, "") + "</p><p>" + dataList["MF"][i][1].replace(/[a-z]/g, "") + "</p>")
    }
    for (i = 0; i < Object.keys(dataList["FW"]).length; i++) {
        $("#fw").append("<td id='" + dataList["FW"][i][0].replace(/[^0-9]/g, "") +"'></td>")
        $("#" + dataList["FW"][i][0]).html("<div><img src='https://sefc.info/files/" + dataList["FW"][i][0] + ".png'></div><p><span>" + player2023[dataList["FW"][i][0]][1] + "</span>" + player2023[dataList["FW"][i][0]][0].replace(/[A-Z,0-9]/g, "") + "</p><p>" + dataList["FW"][i][1].replace(/[a-z]/g, "") + "</p>")
    }
    for (i = 0; i < Object.keys(dataList["SUB"]).length; i++) {
        $("#sub > table").append("<tr><td id='" + dataList["SUB"][i][0].replace(/[^0-9]/g, "") +"'></td></tr>")
        $("#" + dataList["SUB"][i][0]).html("<div><img src='https://sefc.info/files/" + dataList["SUB"][i][0] + ".png'></div><p><span>" + player2023[dataList["SUB"][i][0]][1] + "</span>" + player2023[dataList["SUB"][i][0]][0] + "</p><p>" + dataList["SUB"][i][1] + "</p>");
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