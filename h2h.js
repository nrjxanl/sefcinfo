data = {
    "gangwonfc": ["dd5828", "ffffff", "0", "3", "5", "10", "17"],
    "gyeongnamfc2010": ["e83827", "f5cd21", "10", "8", "8", "30", "31"],
    "goyanghifc": ["171c61", "b31d23", "4", "3", "1", "15", "7"],
    "goyangzaicro": ["171c61", "b31d23", "4", "3", "1", "15", ""],
    "gwangjufc2020": ["ffd24f", "c41230", "0", "3", "9", "8", "28"],
    "gwangjufc2010": ["ffd24f", "c41230", "0", "3", "9", "8", "28"],
    "gimcheonsangmu": ["002649", "c5a775", "1", "1", "4", "5", "10"],
    "gimpofc2022": ["203d41", "cdb161", "3", "2", "2", "12", "6"],
    "daegufc2013": ["59b8f6", "000000", "1", "4", "3", "6", "10"],
    "daejeoncitizen2003": ["9b2743", "041e42", "9", "7", "11", "29", "30"],
    "daejeonhana2020": ["007e6e", "9b2743", "9", "7", "11", "29", "30"],
    "busanipark2012": ["ff0d00", "ffffff", "6", "6", "15", "34", "52"],
    "bucheonfc": ["ac2424", "ffffff", "17", "7", "10", "56", "31"],
    "sangjusangmu": ["ed1a2e", "ffffff", "1", "1", "2", "6", "7"],
    "seongnamfc2014": ["000000", "ffffff", "3", "5", "2", "13", "11"],
    "suwonfc2016": ["00396f", "eb0028", "5", "6", "9", "23", "30"],
    "suwonfc2003": ["00396f", "eb0028", "5", "6", "9", "23", "30"],
    "asanmugunghwa": ["ffe806", "0a2a3b", "1", "3", "8", "9", "25"],
    "ansangreeners": ["00979c", "0a2a3b", "12", "8", "6", "39", "28"],
    "ansanmugunghwa": ["161270", "fcd715", "2", "4", "2", "8", "8"],
    "ansanpolice": ["f0c018", "183090", "2", "4", "2", "8", "8"],
    "jeonnamdragons2014": ["ffde00", "6900e5", "3", "10", "5", "16", "22"],
    "jeonnamdragons2022": ["ffde00", "000000", "3", "10", "5", "16", "22"],
    "jejuutd": ["f58026", "ffffff", "0", "1", "2", "4", "6"],
    "cheonancity2023": ["5dacd8", "ffffff", "1", "1", "1", "3", "5"],
    "chungnamasan": ["f4cd1c", "093c91", "2", "4", "8", "8", "14"],
    "chungbukcheongju": ["1c235a", "e8343d", "1", "0", "2", "4", "5"],
    "chungjuhummel": ["0f6b39", "ffffff", "6", "1", "1", "17", "7"],
    "fcanyang": ["4f1b87", "cda55f", "7", "9", "17", "34", "48"],
}

hrefH = $("#matchScore > div:nth-of-type(1)").find("img").attr("src").replace("./files/", "").replace("_s.png", "");
hrefA = $("#matchScore > div:nth-of-type(3)").find("img").attr("src").replace("./files/", "").replace("_s.png", "");

if (hrefH == "seouleland") {
    sefc = hrefH;
    opp = hrefA;
} else if (hrefA == "seouleland") {
    sefc = hrefA;
    opp = hrefH;
};

dataList = Object.keys(data);
index = dataList.indexOf(opp, 0);

w = Number(data[Object.keys(data)[index]][2]);
d = Number(data[Object.keys(data)[index]][3]);
l = Number(data[Object.keys(data)[index]][4]);
goalS = Number(data[Object.keys(data)[index]][5]);
goalC = Number(data[Object.keys(data)[index]][6]);

wPct = (100 * w / (w + d + l)).toFixed(1) + "%";
dPct = (100 * d / (w + d + l)).toFixed(1) + "%";
lPct = (100 * l / (w + d + l)).toFixed(1) + "%";
goalSpG = "경기당 " + (goalS / (w + d + l)).toFixed(1);
goalCpG = "경기당 " + (goalC / (w + d + l)).toFixed(1);

goalSGrd = ((100 * goalS / (goalS + goalC)) - 5) + "%";
goalCGrd = (100 * goalS / (goalS + goalC)) + "%";

oppBg = "#" + (data[Object.keys(data)[index]][0]);
oppText = "#" + (data[Object.keys(data)[index]][1]);

if ($("#matchScore > div:nth-of-type(1)").find("img").attr("src").replace("./files/", "").replace("_s.png", "") == "seouleland") {
    wGrd = ((100 * w / (w + d + l)) - 5) + "%";
    dGrd1 = (100 * w / (w + d + l)) + "%";
    dGrd2 = ((100 * (w + d) / (w + d + l)) - 5) + "%";
    lGrd = (100 * (w + d) / (w + d + l)) + "%";

    h2hGradient = "linear-gradient(105deg, #000831 " + wGrd + ", #c8c8c8 " + dGrd1 + dGrd2 + ", " + oppBg + " " + lGrd + ")";
    goalGradient = "linear-gradient(105deg, #000831 " + goalSGrd + ", " + oppBg + " " + goalCGrd + ")";

    if (d == 0) {
        h2hGradient = "linear-gradient(105deg, #000831 " + wGrd + ", " + oppBg + " " + lGrd + ")";
    };

    if (l == 0) {
        h2hGradient = "linear-gradient(105deg, #000831 " + wGrd + ", " + "#c8c8c8" + " " + dGrd1 + ")";
    };

    $("#matchH2H").append("<div><p></p></div><div><div><p></p><div><p>승리</p><p></p></div></div><div><p></p><div><p>무승부</p><p></p></div></div><div><p></p><div><p>패배</p><p></p></div></div></div><div><p></p></div><div><div><p></p><div><p>득점</p><p></p></div></div><div><p></p><div><p>실점</p><p></p></div></div></div>");

    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)").text(w);
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)").text(d);
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > p:nth-of-type(1)").text(l);
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > div > p:nth-of-type(2)").text(wPct);
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > div > p:nth-of-type(2)").text(dPct);
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > div > p:nth-of-type(2)").text(lPct);
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > p:nth-of-type(1)").text(goalS);
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > p:nth-of-type(1)").text(goalC);
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > div > p:nth-of-type(2)").text(goalSpG);
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > div > p:nth-of-type(2)").text(goalCpG);

    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": "#000831", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"});
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": "#c8c8c8", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"});
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": oppBg, "color": oppText, "display": "flex", "align-items": "center", "justify-content": "center"});
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": "#000831", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"});
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": oppBg, "color": oppText, "display": "flex", "align-items": "center", "justify-content": "center"});
} else {
    wGrd = (100 * (d + l) / (w + d + l)) + "%";
    dGrd1 = ((100 * (d + l) / (w + d + l)) - 5) + "%";
    dGrd2 = (100 * l / (w + d + l)) + "%";
    lGrd = ((100 * l / (w + d + l)) - 5) + "%";

    h2hGradient = "linear-gradient(105deg, " + oppBg + " " + lGrd + ", #c8c8c8 " + dGrd1 + dGrd2 + ", #000831 " + wGrd + ")";
    goalGradient = "linear-gradient(105deg, " + oppBg + " " + goalCGrd + ", #000831 " + goalSGrd + ")";

    if (d == 0) {
        h2hGradient = "linear-gradient(105deg, " + oppBg + " " + lGrd + ", #000831 " + wGrd + ")";
    };

    if (l == 0) {
        h2hGradient = "linear-gradient(105deg, " + oppBg + " " + dGrd2 + ", " + "#c8c8c8" + " " + wGrd + ")";
    };

    $("#matchH2H").append("<div><p></p></div><div><div><p></p><div><p>패배</p><p></p></div></div><div><p></p><div><p>무승부</p><p></p></div></div><div><p></p><div><p>승리</p><p></p></div></div></div><div><p></p></div><div><div><p></p><div><p>실점</p><p></p></div></div><div><p></p><div><p>득점</p><p></p></div></div></div>");

    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)").text(l);
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)").text(d);
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > p:nth-of-type(1)").text(w);
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > div > p:nth-of-type(2)").text(lPct);
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > div > p:nth-of-type(2)").text(dPct);
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > div > p:nth-of-type(2)").text(wPct);
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > p:nth-of-type(1)").text(goalC);
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > p:nth-of-type(1)").text(goalS);
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > div > p:nth-of-type(2)").text(goalCpG);
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > div > p:nth-of-type(2)").text(goalSpG);

    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": oppBg, "color": oppText, "display": "flex", "align-items": "center", "justify-content": "center"});
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": "#c8c8c8", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"});
    $("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": "#000831", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"});
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": oppBg, "color": oppText, "display": "flex", "align-items": "center", "justify-content": "center"});
    $("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > p:nth-of-type(1)").css({ "width": "10vw", "height": "10vw", "font-size": "16px", "border-radius": "10px", "background": "#000831", "color": "#fafafa", "display": "flex", "align-items": "center", "justify-content": "center"});
};

$("#matchH2H > div:nth-of-type(1) > p").css({ "width": "80vw", "height": "2vw", "background-image": h2hGradient});

$("#matchH2H > div:nth-of-type(2)").css({ "display": "flex", "justify-content": "flex-start", "margin-top": "5vw"});
$("#matchH2H > div:nth-of-type(2) > div").css({ "display": "flex"});
$("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1)").css("margin-left", "10vw");
$("#matchH2H > div:nth-of-type(2) > div > div > p:nth-of-type(1)").css({ "height": "4vw", "font-weight": "400", "padding": "1vw 0 0 2vw", "text-align": "left", "display": "flex", "align-items": "center"});
$("#matchH2H > div:nth-of-type(2) > div:nth-of-type(1) > div > p:nth-of-type(2)").css({ "height": "4vw", "font-weight": "400", "text-align": "left", "padding": "0 8vw 0 2vw", "display": "flex", "align-items": "center"});
$("#matchH2H > div:nth-of-type(2) > div:nth-of-type(2) > div > p:nth-of-type(2)").css({ "height": "4vw", "font-weight": "400", "text-align": "left", "padding": "0 8vw 0 2vw", "display": "flex", "align-items": "center"});
$("#matchH2H > div:nth-of-type(2) > div:nth-of-type(3) > div > p:nth-of-type(2)").css({ "height": "4vw", "font-weight": "400", "text-align": "left", "padding": "0 8vw 0 2vw", "display": "flex", "align-items": "center"});

$("#matchH2H > div:nth-of-type(3) > p").css({ "width": "80vw", "height": "2vw", "background-image": goalGradient});

$("#matchH2H > div:nth-of-type(4)").css({ "display": "flex", "justify-content": "flex-start", "margin-top": "5vw"});
$("#matchH2H > div:nth-of-type(4) > div").css({ "display": "flex"});
$("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1)").css("margin-left", "10vw");
$("#matchH2H > div:nth-of-type(4) > div > div > p:nth-of-type(1)").css({ "height": "4vw", "font-weight": "400", "padding": "1vw 0 0 2vw", "text-align": "left", "display": "flex", "align-items": "center"});
$("#matchH2H > div:nth-of-type(4) > div:nth-of-type(1) > div > p:nth-of-type(2)").css({ "height": "4vw", "font-weight": "400", "text-align": "left", "padding": "0 8vw 0 2vw", "display": "flex", "align-items": "center"});
$("#matchH2H > div:nth-of-type(4) > div:nth-of-type(2) > div > p:nth-of-type(2)").css({ "height": "4vw", "font-weight": "400", "text-align": "left", "padding": "0 8vw 0 2vw", "display": "flex", "align-items": "center"});