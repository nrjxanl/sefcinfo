data = {
    "gangwonfc": ["0", "3", "5", "10", "17"],
    "gyeongnamfc2010": ["10", "8", "7", "29", "28"],
    "goyanghifc": ["4", "3", "1", "15", "7"],
    "goyangzaicro": ["4", "3", "1", "15", ""],
    "gwangjufc2020": ["0", "3", "9", "8", "28"],
    "gwangjufc2010": ["0", "3", "9", "8", "28"],
    "gimcheonsangmu": ["1", "1", "4", "5", "10"],
    "gimpofc2022": ["3", "2", "1", "11", "4"],
    "daegufc2013": ["1", "4", "3", "6", "10"],
    "daejeoncitizen2003": ["9", "7", "11", "29", "30"],
    "daejeonhana2020": ["9", "7", "11", "29", "30"],
    "busanipark2012": ["6", "6", "15", "34", "52"],
    "bucheonfc": ["17", "7", "9", "56", "30"],
    "sangjusangmu": ["1", "1", "2", "6", "7"],
    "seongnamfc2014": ["3", "5", "2", "13", "11"],
    "suwonfc2016": ["5", "6", "9", "23", "30"],
    "suwonfc2003": ["5", "6", "9", "23", "30"],
    "asanmugunghwa": ["1", "3", "8", "9", "25"],
    "ansangreeners": ["12", "8", "5", "36", "24"],
    "ansanmugunghwa": ["2", "4", "2", "8", "8"],
    "ansanpolice": ["2", "4", "2", "8", "8"],
    "jeonnamdragons2014": ["2", "10", "5", "15", "22"],
    "jeonnamdragons2022": ["2", "10", "5", "15", "22"],
    "jejuutd": ["0", "1", "2", "4", "6"],
    "cheonancity2023": ["1", "1", "0", "3", "2"],
    "chungnamasan": ["2", "4", "7", "8", "13"],
    "chungbukcheongju": ["0", "0", "2", "3", "5"],
    "chungjuhummel": ["6", "1", "1", "17", "7"],
    "fcanyang": ["7", "9", "17", "34", "48"],
    }    

hrefH = $("#matchScore > div:nth-of-type(1)").find("img").attr("src").replace("./files/", "").replace("_s.png", "");
hrefA = $("#matchScore > div:nth-of-type(3)").find("img").attr("src").replace("./files/", "").replace("_s.png", "");

if(hrefH == "seouleland") {
    sefc = hrefH;
    opp = hrefA;
} else if(hrefA == "seouleland") {
    sefc = hrefA;
    opp = hrefH;
};

dataList = Object.keys(data);
index = dataList.indexOf(opp, 0);

w = Number(data[Object.keys(data)[index]][0]);
d = Number(data[Object.keys(data)[index]][1]);
l = Number(data[Object.keys(data)[index]][2]);

wWidth = 70 * w / (w + d + l) + "vw";
dWidth = 70 * d / (w + d + l) + "vw";
lWidth = 70 * l / (w + d + l) + "vw";

$("#matchH2H").append("<div><p></p><p></p><p></p></div>")

$("#matchH2H > div").find("p:nth-of-type(1)").text(w + "승").css({"width": wWidth, "background": "#174fff"});
$("#matchH2H > div").find("p:nth-of-type(2)").text(d + "무").css({"width": dWidth, "background": "#c8c8c8"});
$("#matchH2H > div").find("p:nth-of-type(3)").text(l + "패").css({"width": lWidth, "background": "#f00"});