data = {
    "gangwonfc": ["dd5828", "ffffff", "7", "1", "2", "20", "9"],
    "gyeongnamfc": ["e83827", "f5cd21", "1", "1", "0", "2", "0"],
    "gimcheonsangmu": ["002649", "c5a775", "1", "1", "0", "3", "1"],
    "gimpofc": ["203d41", "cdb161", "1", "1", "1", "1", "6"],
    "daegufc": ["59b8f6", "000000", "0", "0", "1", "0", "1"],
    "daejeoncitizen": ["9b2743", "041e42", "0", "0", "1", "0", "1"],
    "daejeonhana": ["007e6e", "9b2743", "0", "0", "1", "0", "1"],
    "busanipark": ["ff0d00", "ffffff", "1", "1", "1", "4", "5"],
    "bucheonfc": ["ac2424", "ffffff", "1", "5", "3", "10", "14"],
    "sangjusangmu": ["ed1a2e", "ffffff", "1", "1", "1", "2", "3"],
    "seongnamfc": ["000000", "ffffff", "3", "0", "6", "9", "18"],
    "suwonfc": ["00396f", "eb0028", "3", "2", "4", "14", "20"],
    "suwonfcp": ["00396f", "eb0028", "0", "1", "1", "2", "3"],
    "ansangreeners": ["00979c", "0a2a3b", "7", "0", "2", "30", "9"],
    "jeonnamdragons": ["ffde00", "000000", "0", "2", "1", "7", "9"],
    "jejuutd": ["f58026", "ffffff", "3", "4", "4", "16", "22"],
    "chungnamasan": ["f4cd1c", "093c91", "2", "3", "0", "15", "7"],
    "fcanyang": ["4f1b87", "cda55f", "5", "2", "1", "23", "8"],
    "ulsanhyundai": ["003f98", "f9be00", "0", "1", "2", "2", "5"],
    "fcseoul": ["b5191a", "000000", "4", "0", "7", "18", "27"],
    "incheonutd": ["004f9e", "231815", "3", "2", "4", "11", "13"],
    "suwonsamsung": ["194996", "ffffff", "1", "1", "8", "5", "26"],
    "pohangsteelers": ["e70012", "000000", "1", "0", "2", "1", "9"],
    "boinms": ["a52a2a", "ebb767", "1", "0", "1", "3", "3"],
    "jeonbukhyundai": ["034f36", "ffdd00", "0", "0", "1", "2", "5"],
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