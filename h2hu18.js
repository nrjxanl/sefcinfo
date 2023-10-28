data = {
    "gangwonfc": ["dd5828", "ffffff", "2", "3", "10", "17", "29"],
    "gyeongnamfc": ["e83827", "f5cd21", "0", "1", "3", "2", "9"],
    "goyanghifc": ["171c61", "b31d23", "0", "0", "0", "0", "0"],
    "goyangzaicro": ["171c61", "b31d23", "1", "0", "1", "2", "2"],
    "gwangjufc": ["ffd24f", "c41230", "0", "0", "5", "0", "23"],
    "gimcheonsangmu": ["002649", "c5a775", "2", "1", "1", "9", "3"],
    "gimpofc": ["203d41", "cdb161", "4", "0", "0", "18", "3"],
    "daegufc": ["59b8f6", "000000", "1", "0", "5", "4", "18"],
    "daejeoncitizen": ["9b2743", "041e42", "2", "2", "0", "8", "6"],
    "daejeonhana": ["007e6e", "9b2743", "2", "2", "0", "8", "6"],
    "busanipark": ["ff0d00", "ffffff", "0", "2", "3", "5", "10"],
    "bucheonfc": ["ac2424", "ffffff", "3", "2", "11", "15", "38"],
    "sangjusangmu": ["ed1a2e", "ffffff", "0", "0", "0", "0", "0"],
    "seongnamfc": ["000000", "ffffff", "4", "1", "10", "12", "39"],
    "suwonfc": ["00396f", "eb0028", "3", "2", "9", "18", "31"],
    "asanmugunghwa": ["ffe806", "0a2a3b", "0", "1", "0", "1", "1"],
    "ansangreeners": ["00979c", "0a2a3b", "5", "5", "5", "19", "19"],
    "ansanmugunghwa": ["161270", "fcd715", "2", "1", "0", "9", "3"],
    "ansanpolice": ["f0c018", "183090", "0", "0", "0", "0", "0"],
    "jeonnamdragons": ["ffde00", "000000", "0", "1", "2", "0", "6"],
    "jejuutd": ["f58026", "ffffff", "2", "3", "11", "15", "39"],
    "cheonancity": ["5dacd8", "ffffff", "0", "1", "0", "2", "2"],
    "chungnamasan": ["f4cd1c", "093c91", "3", "0", "0", "8", "4"],
    "chungbukcheongju": ["1c235a", "e8343d", "0", "0", "0", "0", "0"],
    "chungjuhummel": ["0f6b39", "ffffff", "0", "0", "0", "0", "0"],
    "fcanyang": ["4f1b87", "cda55f", "4", "0", "14", "18", "37"],
    "ulsanhyundai": ["003f98", "f9be00", "1", "0", "1", "3", "3"],
    "pocheoncitizen": ["FF4500", "15063c", "0", "0", "0", "0", "0"],
    "daejeonkorail": ["0b60ad", "93c4ed", "0", "0", "0", "0", "0"],
    "fcseoul": ["b5191a", "000000", "0", "2", "10", "6", "33"],
    "incheonutd": ["004f9e", "231815", "1", "4", "9", "17", "34"],
    "suwonsamsung": ["194996", "ffffff", "0", "0", "11", "7", "41"],
    "irihs": ["ffffff", "f1ab12", "1", "0", "0", "4", "2"],
    "ganggyeongchs": ["757473", "fefc2d", "1", "0", "0", "3", "1"],
    "dongducheonfc": ["cf261f", "ffffff", "1", "0", "0", "2", "1"],
    "pohangsteelers": ["e70012", "000000", "0", "0", "2", "2", "6"],
    "hwaseongfootballcentre": ["f11914", "ffffff", "1", "0", "0", "2", "1"],
    "acewayfc": ["000000", "ffffff", "1", "0", "0", "1", "0"],
    "bugyeonghs": ["e98a1c", "ffffff", "0", "0", "1", "0", "3"],
    "suwonhs": ["013087", "ffffff", "1", "0", "0", "2", "0"],
    "gwacheonhs": ["243251", "fce404", "0", "1", "0", "2", "2"],
    "youngunhs": ["773523", "ffffff", "0", "0", "1", "1", "2"],
    "boinhs": ["a52a2a", "ebb767", "0", "0", "1", "2", "5"],
    "gyeonggiahs": ["2481bb", "ffffff", "0", "0", "1", "1", "2"],
    "seoulgwangjinfc": ["054393", "dcbc5a", "2", "0", "0", "15", "0"],
    "pajukorea": ["8b0029", "d6cabc", "2", "0", "0", "7", "1"],
    "unhohs": ["1e90ff", "ffffff", "1", "0", "0", "7", "0"],
    "jeonbukhyundai": ["034f36", "ffdd00", "0", "0", "2", "0", "7"],
    "hongcheonfc": ["efda9c", "ffffff", "1", "0", "0", "2", "1"],
    "chojihs": ["019241", "fff500", "1", "0", "0", "1", "0"],
    "soongsilhs": ["122a4a", "ffffff", "1", "0", "0", "5", "1"],
}

hrefH = $("#matchScore > div:nth-of-type(1)").find("img").attr("src").replace("./files/", "").replace("_s.png", "").replace(/[0-9]/g, "");
hrefA = $("#matchScore > div:nth-of-type(3)").find("img").attr("src").replace("./files/", "").replace("_s.png", "").replace(/[0-9]/g, "");

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

oppBg = "#" + (data[Object.keys(data)[index]][0]);
oppText = "#" + (data[Object.keys(data)[index]][1]);

if ($("#matchScore > div:nth-of-type(1)").find("img").attr("src").replace("./files/", "").replace("_s.png", "") == "seouleland") {
    grd1 = ((100 * w / (w + d + l))) + "%";
    grd2 = ((100 * (w + d) / (w + d + l))) + "%";
    goalGrd = (100 * goalS / (goalS + goalC)) + "%";

    h2hGradient = "linear-gradient(105deg, #000831 " + grd1 + ", #c8c8c8 " + grd1 + ", #c8c8c8 " + grd2 + ", " + oppBg + " " + grd2 + ")";
    goalGradient = "linear-gradient(105deg, #000831 " + goalGrd + ", " + oppBg + " " + goalGrd + ")";

    if (d == 0) {
        h2hGradient = "linear-gradient(105deg, #000831 " + grd1 + ", " + oppBg + " " + grd1 + ")";
    };

    if (l == 0) {
        h2hGradient = "linear-gradient(105deg, #000831 " + grd1 + ", " + "#c8c8c8" + " " + grd1 + ")";
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
    grd1 = (100 * l / (w + d + l)) + "%";
    grd2 = (100 * (d + l) / (w + d + l)) + "%";
    goalGrd = (100 * goalC / (goalS + goalC)) + "%";

    h2hGradient = "linear-gradient(105deg, " + oppBg + " " + grd1 + ", #c8c8c8 " + grd1 + ", #c8c8c8 " + grd2 + ", #000831 " + grd2 + ")";
    goalGradient = "linear-gradient(105deg, " + oppBg + " " + goalGrd + ", #000831 " + goalGrd + ")";

    if (d == 0) {
        h2hGradient = "linear-gradient(105deg, " + oppBg + " " + grd1 + ", #000831 " + grd1 + ")";
    };

    if (l == 0) {
        h2hGradient = "linear-gradient(105deg, #c8c8c8 " + grd1 + ", #000831 " + grd1 + ")";
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