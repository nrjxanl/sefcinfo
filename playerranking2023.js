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

$("#playerRanking > div:nth-of-type(1) > div:nth-of-type(1) > div > img").attr("src", "./files/" + goalid1 + ".png");
$("#playerRanking > div:nth-of-type(1) > div:nth-of-type(2) > div > img").attr("src", "./files/" + goalid2 + ".png");
$("#playerRanking > div:nth-of-type(1) > div:nth-of-type(3) > div > img").attr("src", "./files/" + goalid3 + ".png");
$("#playerRanking > div:nth-of-type(1) > div:nth-of-type(1) > p").html(goalp1 + "<span>" + goal1 + "득점</span>")
$("#playerRanking > div:nth-of-type(1) > div:nth-of-type(2) > p").html(goalp2 + "<span>" + goal2 + "득점</span>")
$("#playerRanking > div:nth-of-type(1) > div:nth-of-type(3) > p").html(goalp3 + "<span>" + goal3 + "득점</span>")

$("#playerRanking > div:nth-of-type(2) > div:nth-of-type(1) > div > img").attr("src", "./files/" + assistid1 + ".png");
$("#playerRanking > div:nth-of-type(2) > div:nth-of-type(2) > div > img").attr("src", "./files/" + assistid2 + ".png");
$("#playerRanking > div:nth-of-type(2) > div:nth-of-type(3) > div > img").attr("src", "./files/" + assistid3 + ".png");
$("#playerRanking > div:nth-of-type(2) > div:nth-of-type(1) > p").html(assistp1 + "<span>" + assist1 + "도움</span>")
$("#playerRanking > div:nth-of-type(2) > div:nth-of-type(2) > p").html(assistp2 + "<span>" + assist2 + "도움</span>")
$("#playerRanking > div:nth-of-type(2) > div:nth-of-type(3) > p").html(assistp3 + "<span>" + assist3 + "도움</span>")