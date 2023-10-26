goal = {
    "player": ["브루노", "호난", "이시헌", "유정완", "차승현", "변경준", "송시우", "이동률", "한용수", "박정인", "츠바사", "곽성욱"],
    "id": ["20230195", "20230194", "20190015", "20180207", "20230193", "20210175", "20160058", "20190131", "20120007", "20190048", "20180293", "20160059"],
    "goal": ["9", "7", "6", "5", "3", "3", "2", "2", "1", "1", "1", "1"],
}
assist = {
    "player": ["변경준", "이인재", "브루노", "이상민", "이동률", "호난", "김수안", "조동재", "이시헌", "차승현", "김민규", "유정완", "반토안"],
    "id": ["20210175", "20170208", "20230195", "20170011", "20190131", "20230194", "20140322", "20220118", "20190015", "20230193", "20170153", "20180207", "20230196"],
    "assist": ["4", "3", "3", "3", "3", "2", "1", "1", "1", "1", "1", "1", "1"],
}

goalp1 = goal.player[0];
goalid1 = goal.id[0];
goal1 = goal.goal[0];
goalp2 = goal.player[1];
goalid2 = goal.id[1];
goal2 = goal.goal[1];
goalp3 = goal.player[2];
goalid3 = goal.id[2];
goal3 = goal.goal[2];

assistp1 = assist.player[0];
assistid1 = assist.id[0];
assist1 = assist.assist[0];
assistp2 = assist.player[1];
assistid2 = assist.id[1];
assist2 = assist.assist[1];
assistp3 = assist.player[2];
assistid3 = assist.id[2];
assist3 = assist.assist[2];

$("#goalRanking > a > div > div > img").attr("src", "./files/" + goalid1 + ".png");
$("#goalRanking > a > div > p").html("<span>득점 1위</span>" + goalp1 + "<span>" + goal1 + "득점</span>");
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(1) > div > p:nth-of-type(2)").html(goalp2 + "<span> | " + goal2 + "득점</span>");
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(2) > div > p:nth-of-type(2)").html(goalp3 + "<span> | " + goal3 + "득점</span>");

for (i = 0; i < goal.player.length; i++) {
    $("#goalRankingPopup > div").append("<a><div><p></p><div><img></div><p></p></div></a>");
};

function goalRanking() {
    $("#goalRankingPopup").css("display", "block");
    for (i = 0; i < goal.player.length; i++) {
        rank = goal.goal.indexOf(goal.goal[i], 0);
        $("#goalRankingPopup > div > a:nth-of-type(" + (i + 1) + ")").attr("href", "./" + goal.id[i])
        $("#goalRankingPopup > div > a:nth-of-type(" + (i + 1) + ") > div > div > img").attr("src", "./files/" + goal.id[i] + ".png");
        $("#goalRankingPopup > div > a:nth-of-type(" + (i + 1) + ") > div > p:nth-of-type(1)").text(rank + 1);
        $("#goalRankingPopup > div > a:nth-of-type(" + (i + 1) + ") > div > p:nth-of-type(2)").html(goal.player[i] + "<span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + goal.goal[i] + "득점</span>");
    };
};

$("#assistRanking > a > div > div > img").attr("src", "./files/" + assistid1 + ".png");
$("#assistRanking > a > div > p").html("<span>도움 1위</span>" + assistp1 + "<span>" + assist1 + "도움</span>");
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(1) > div > p:nth-of-type(2)").html(assistp2 + "<span> | " + assist2 + "도움</span>");
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(2) > div > p:nth-of-type(2)").html(assistp3 + "<span> | " + assist3 + "도움</span>");

for (i = 0; i < assist.player.length; i++) {
    $("#assistRankingPopup > div").append("<a><div><p></p><div><img></div><p></p></div></a>");
};

function assistRanking() {
    $("#assistRankingPopup").css("display", "block");
    for (i = 0; i < assist.player.length; i++) {
        rank = assist.assist.indexOf(assist.assist[i], 0);
        $("#assistRankingPopup > div > a:nth-of-type(" + (i + 1) + ")").attr("href", "./" + assist.id[i])
        $("#assistRankingPopup > div > a:nth-of-type(" + (i + 1) + ") > div > div > img").attr("src", "./files/" + assist.id[i] + ".png");
        $("#assistRankingPopup > div > a:nth-of-type(" + (i + 1) + ") > div > p:nth-of-type(1)").text(rank + 1);
        $("#assistRankingPopup > div > a:nth-of-type(" + (i + 1) + ") > div > p:nth-of-type(2)").html(assist.player[i] + "<span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + assist.assist[i] + "도움</span>");
    };
};

function closePopup() {
    $("#goalRankingPopup").css("display", "none");
    $("#assistRankingPopup").css("display", "none");
};