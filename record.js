data = {
    "name": ["강정묵", "곽성욱", "김민규2", "김수안", "김원식", "김정환", "문정인", "박경민", "박정인", "박준영1", "박준영2", "박창환", "반토안", "변경준", "브루노", "서보민", "송시우", "유정완", "윤보상", "이동률", "이상민2", "이시헌", "이인재", "이재익", "이정문", "조동재", "주현성", "차승현", "츠바사", "한용수", "헤난", "호난", "황인택", "황정욱", "황태현"],
    "id": ["20180211", "20160059", "20170153", "20140322", "20120052", "20160151", "20170029", "20180156", "20190048", "20220117", "20220124", "20210138", "20230196", "20210175", "20230195", "20140126", "20160058", "20180207", "20160074", "20190131", "20170011", "20190015", "20170208", "20180105", "20190199", "20220118", "20210142", "20230193", "20180293", "20120007", "20230263", "20230194", "20220184", "20190062", "20180186"],
    "app": ["1", "9", "32", "12", "29", "13", "27", "6", "16", "2", "6", "23", "11", "33", "33", "27", "18", "33", "6", "22", "37", "25", "24", "22", "8", "14", "4", "26", "17", "4", "0", "29", "0", "4", "15"],
    "goal": ["0", "1", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "3", "9", "0", "2", "5", "0", "2", "0", "6", "0", "0", "0", "0", "0", "3", "1", "1", "0", "7", "0", "0", "0"],
    "assist": ["0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "1", "4", "3", "0", "0", "1", "0", "3", "3", "1", "3", "0", "0", "1", "0", "1", "0", "0", "0", "2", "0", "0", "0"],
}

appIndex = Object.values(data.app).sort((a, b) => (b - a))
goalIndex = Object.values(data.goal).sort((a, b) => (b - a))
assistIndex = Object.values(data.assist).sort((a, b) => (b - a))

app1Index = data.app.indexOf(appIndex[0])
if (appIndex[0] == appIndex[1]) {
    app2Index = data.app.indexOf(appIndex[1], app1Index + 1)
} else {
    app2Index = data.app.indexOf(appIndex[1])
}
if (appIndex[1] == appIndex[2]) {
    app3Index = data.app.indexOf(appIndex[2], app2Index + 2)
} else {
    app3Index = data.app.indexOf(appIndex[2])
}

goal1Index = data.goal.indexOf(goalIndex[0])
if (goalIndex[0] == goalIndex[1]) {
    goal2Index = data.goal.indexOf(goalIndex[1], goal1Index + 1)
} else {
    goal2Index = data.goal.indexOf(goalIndex[1])
}
if (goalIndex[1] == goalIndex[2]) {
    goal3Index = data.goal.indexOf(goalIndex[2], goal2Index + 2)
} else {
    goal3Index = data.goal.indexOf(goalIndex[2])
}

assist1Index = data.assist.indexOf(assistIndex[0])
if (assistIndex[0] == assistIndex[1]) {
    assist2Index = data.assist.indexOf(assistIndex[1], assist1Index + 1)
} else {
    assist2Index = data.assist.indexOf(assistIndex[1])
}
if (assistIndex[1] == assistIndex[2]) {
    assist3Index = data.assist.indexOf(assistIndex[2], assist2Index + 2)
} else {
    assist3Index = data.assist.indexOf(assistIndex[2])
}

appp1 = data.name[app1Index];
appid1 = data.id[app1Index];
app1 = data.app[app1Index];
appp2 = data.name[app2Index];
appid2 = data.id[app2Index];
app2 = data.app[app2Index];
appp3 = data.name[app3Index];
appid3 = data.id[app3Index];
app3 = data.app[app3Index];

goalp1 = data.name[goal1Index];
goalid1 = data.id[goal1Index];
goal1 = data.goal[goal1Index];
goalp2 = data.name[goal2Index];
goalid2 = data.id[goal2Index];
goal2 = data.goal[goal2Index];
goalp3 = data.name[goal3Index];
goalid3 = data.id[goal3Index];
goal3 = data.goal[goal3Index];

assistp1 = data.name[assist1Index];
assistid1 = data.id[assist1Index];
assist1 = data.assist[assist1Index];
assistp2 = data.name[assist2Index];
assistid2 = data.id[assist2Index];
assist2 = data.assist[assist2Index];
assistp3 = data.name[assist3Index];
assistid3 = data.id[assist3Index];
assist3 = data.assist[assist3Index];

$("#appRanking > div:nth-of-type(1) > a:nth-of-type(1)").attr("href", "./" + appid1);
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(1) > div > p:nth-of-type(2)").html(appp1.replace(/[0-9]/g, "") + "<span> | " + app1 + "경기</span>");
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(1) > div > div > img").attr("src", "./files/" + appid1 + ".png")
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(2)").attr("href", "./" + appid2);
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(2) > div > p:nth-of-type(2)").html(appp2.replace(/[0-9]/g, "") + "<span> | " + app2 + "경기</span>");
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(2) > div > div > img").attr("src", "./files/" + appid2 + ".png")
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(3)").attr("href", "./" + appid3);
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(3) > div > p:nth-of-type(2)").html(appp3.replace(/[0-9]/g, "") + "<span> | " + app3 + "경기</span>");
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(3) > div > div > img").attr("src", "./files/" + appid3 + ".png")

$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(1)").attr("href", "./" + goalid1);
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(1) > div > p:nth-of-type(2)").html(goalp1.replace(/[0-9]/g, "") + "<span> | " + goal1 + "득점</span>");
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(1) > div > div > img").attr("src", "./files/" + goalid1 + ".png")
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(2)").attr("href", "./" + goalid2);
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(2) > div > p:nth-of-type(2)").html(goalp2.replace(/[0-9]/g, "") + "<span> | " + goal2 + "득점</span>");
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(2) > div > div > img").attr("src", "./files/" + goalid2 + ".png")
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(3)").attr("href", "./" + goalid3);
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(3) > div > p:nth-of-type(2)").html(goalp3.replace(/[0-9]/g, "") + "<span> | " + goal3 + "득점</span>");
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(3) > div > div > img").attr("src", "./files/" + goalid3 + ".png")

$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(1)").attr("href", "./" + assistid1);
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(1) > div > p:nth-of-type(2)").html(assistp1.replace(/[0-9]/g, "") + "<span> | " + assist1 + "도움</span>");
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(1) > div > div > img").attr("src", "./files/" + assistid1 + ".png")
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(2)").attr("href", "./" + assistid2);
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(2) > div > p:nth-of-type(2)").html(assistp2.replace(/[0-9]/g, "") + "<span> | " + assist2 + "도움</span>");
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(2) > div > div > img").attr("src", "./files/" + assistid2 + ".png")
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(3)").attr("href", "./" + assistid3);
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(3) > div > p:nth-of-type(2)").html(assistp3.replace(/[0-9]/g, "") + "<span> | " + assist3 + "도움</span>");
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(3) > div > div > img").attr("src", "./files/" + assistid3 + ".png")

if ($(window).width() < 768) {
    $("#appRanking > div:nth-of-type(1) > a > div").css("margin-left", "calc((90vw - " + $("#appRanking > div:nth-of-type(1) > a:nth-of-type(1) > div").width() + "px) / 2")
    $("#goalRanking > div:nth-of-type(1) > a > div").css("margin-left", "calc((90vw - " + $("#goalRanking > div:nth-of-type(1) > a:nth-of-type(1) > div").width() + "px) / 2")
    $("#assistRanking > div:nth-of-type(1) > a > div").css("margin-left", "calc((90vw - " + $("#assistRanking > div:nth-of-type(1) > a:nth-of-type(1) > div").width() + "px) / 2")
} else {
    $("#appRanking > div:nth-of-type(1) > a > div").css("margin-left", "calc((360px - " + $("#appRanking > div:nth-of-type(1) > a:nth-of-type(1) > div").width() + "px) / 2")
    $("#goalRanking > div:nth-of-type(1) > a > div").css("margin-left", "calc((360px - " + $("#goalRanking > div:nth-of-type(1) > a:nth-of-type(1) > div").width() + "px) / 2")
    $("#assistRanking > div:nth-of-type(1) > a > div").css("margin-left", "calc((360px - " + $("#assistRanking > div:nth-of-type(1) > a:nth-of-type(1) > div").width() + "px) / 2")
}