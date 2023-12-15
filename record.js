data = [
    ["강정묵", 20180211, 1, 0, 0],
    ["곽성욱", 20160059, 9, 1, 0],
    ["김민규2", 20170153, 33, 0, 1],
    ["김수안", 20140322, 13, 0, 1],
    ["김원식", 20120052, 29, 0, 0],
    ["김정환", 20160151, 13, 0, 0],
    ["문정인", 20170029, 27, 0, 0],
    ["박경민", 20180156, 7, 0, 0],
    ["박정인", 20190048, 17, 1, 0],
    ["박준영1", 20220117, 3, 0, 0],
    ["박준영2", 20220124, 6, 0, 0],
    ["박창환", 20210138, 23, 0, 0],
    ["반토안", 20230196, 11, 0, 1],
    ["변경준", 20210175, 34, 3, 4],
    ["브루노", 20230195, 33, 9, 3],
    ["서보민", 20140126, 27, 0, 0],
    ["송시우", 20160058, 19, 2, 0],
    ["유정완", 20180207, 33, 5, 1],
    ["윤보상", 20160074, 6, 0, 0],
    ["이동률", 20190131, 22, 2, 3],
    ["이상민2", 20170011, 38, 0, 3],
    ["이시헌", 20190015, 25, 6, 1],
    ["이인재", 20170208, 25, 0, 3],
    ["이재익", 20180105, 22, 0, 0],
    ["이정문", 20190199, 8, 0, 0],
    ["조동재", 20220118, 15, 0, 1],
    ["주현성", 20210142, 5, 0, 0],
    ["차승현", 20230193, 26, 3, 1],
    ["츠바사", 20180293, 18, 1, 0],
    ["한용수", 20120007, 4, 1, 0],
    ["헤난", 20230263, 0, 0, 0],
    ["호난", 20230194, 30, 7, 2],
    ["황인택", 20220184, 0, 0, 0],
    ["황정욱", 20190062, 4, 0, 0],
    ["황태현", 20180186, 15, 0, 0],
]

appIndex = data.toSorted((a, b) => b[2] - a[2])
goalIndex = data.toSorted((a, b) => b[3] - a[3])
assistIndex = data.toSorted((a, b) => b[4] - a[4])

// 홈 화면
appn1 = appIndex[0][0]
appid1 = appIndex[0][1]
app1 = appIndex[0][2]
appn2 = appIndex[1][0]
appid2 = appIndex[1][1]
app2 = appIndex[1][2]
appn3 = appIndex[2][0]
appid3 = appIndex[2][1]
app3 = appIndex[2][2]

goaln1 = goalIndex[0][0]
goalid1 = goalIndex[0][1]
goal1 = goalIndex[0][3]
goaln2 = goalIndex[1][0]
goalid2 = goalIndex[1][1]
goal2 = goalIndex[1][3]
goaln3 = goalIndex[2][0]
goalid3 = goalIndex[2][1]
goal3 = goalIndex[2][3]

assistn1 = assistIndex[0][0]
assistid1 = assistIndex[0][1]
assist1 = assistIndex[0][4]
assistn2 = assistIndex[1][0]
assistid2 = assistIndex[1][1]
assist2 = assistIndex[1][4]
assistn3 = assistIndex[2][0]
assistid3 = assistIndex[2][1]
assist3 = assistIndex[2][4]

$("#appRanking > div:nth-of-type(1) > a:nth-of-type(1)").attr("href", "./" + appid1)
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(1) > div > p:nth-of-type(2)").html(appn1.replace(/[0-9]/g, "") + "<span> | " + app1 + "경기</span>")
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(1) > div > div > img").attr("src", "https://sefc.info/files/" + appid1 + ".png")
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(2)").attr("href", "./" + appid2)
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(2) > div > p:nth-of-type(2)").html(appn2.replace(/[0-9]/g, "") + "<span> | " + app2 + "경기</span>")
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(2) > div > div > img").attr("src", "https://sefc.info/files/" + appid2 + ".png")
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(3)").attr("href", "./" + appid3)
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(3) > div > p:nth-of-type(2)").html(appn3.replace(/[0-9]/g, "") + "<span> | " + app3 + "경기</span>")
$("#appRanking > div:nth-of-type(1) > a:nth-of-type(3) > div > div > img").attr("src", "https://sefc.info/files/" + appid3 + ".png")

$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(1)").attr("href", "./" + goalid1)
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(1) > div > p:nth-of-type(2)").html(goaln1.replace(/[0-9]/g, "") + "<span> | " + goal1 + "득점</span>")
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(1) > div > div > img").attr("src", "https://sefc.info/files/" + goalid1 + ".png")
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(2)").attr("href", "./" + goalid2)
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(2) > div > p:nth-of-type(2)").html(goaln2.replace(/[0-9]/g, "") + "<span> | " + goal2 + "득점</span>")
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(2) > div > div > img").attr("src", "https://sefc.info/files/" + goalid2 + ".png")
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(3)").attr("href", "./" + goalid3)
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(3) > div > p:nth-of-type(2)").html(goaln3.replace(/[0-9]/g, "") + "<span> | " + goal3 + "득점</span>")
$("#goalRanking > div:nth-of-type(1) > a:nth-of-type(3) > div > div > img").attr("src", "https://sefc.info/files/" + goalid3 + ".png")

$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(1)").attr("href", "./" + assistid1)
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(1) > div > p:nth-of-type(2)").html(assistn1.replace(/[0-9]/g, "") + "<span> | " + assist1 + "도움</span>")
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(1) > div > div > img").attr("src", "https://sefc.info/files/" + assistid1 + ".png")
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(2)").attr("href", "./" + assistid2)
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(2) > div > p:nth-of-type(2)").html(assistn2.replace(/[0-9]/g, "") + "<span> | " + assist2 + "도움</span>")
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(2) > div > div > img").attr("src", "https://sefc.info/files/" + assistid2 + ".png")
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(3)").attr("href", "./" + assistid3)
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(3) > div > p:nth-of-type(2)").html(assistn3.replace(/[0-9]/g, "") + "<span> | " + assist3 + "도움</span>")
$("#assistRanking > div:nth-of-type(1) > a:nth-of-type(3) > div > div > img").attr("src", "https://sefc.info/files/" + assistid3 + ".png")

if ($(window).width() < 768) {
    $("#appRanking > div:nth-of-type(1) > a > div").css("margin-left", "calc((90vw - " + $("#appRanking > div:nth-of-type(1) > a:nth-of-type(1) > div").width() + "px) / 2")
    $("#goalRanking > div:nth-of-type(1) > a > div").css("margin-left", "calc((90vw - " + $("#goalRanking > div:nth-of-type(1) > a:nth-of-type(1) > div").width() + "px) / 2")
    $("#assistRanking > div:nth-of-type(1) > a > div").css("margin-left", "calc((90vw - " + $("#assistRanking > div:nth-of-type(1) > a:nth-of-type(1) > div").width() + "px) / 2")
} else {
    $("#appRanking > div:nth-of-type(1) > a > div").css("margin-left", "calc((360px - " + $("#appRanking > div:nth-of-type(1) > a:nth-of-type(1) > div").width() + "px) / 2")
    $("#goalRanking > div:nth-of-type(1) > a > div").css("margin-left", "calc((360px - " + $("#goalRanking > div:nth-of-type(1) > a:nth-of-type(1) > div").width() + "px) / 2")
    $("#assistRanking > div:nth-of-type(1) > a > div").css("margin-left", "calc((360px - " + $("#assistRanking > div:nth-of-type(1) > a:nth-of-type(1) > div").width() + "px) / 2")
}

// 기록 창
for (i = 0; i < appIndex.length; i++) {
    $("#recordsA > .appRecord").append("<div><a><div><p>" + (i + 1) + "</p><div><img src='https://sefc.info/files/" + appIndex[i][1] + ".png'></div><p>" + appIndex[i][0].replace(/[0-9]/g, "") + "<span> | " + appIndex[i][2] + "경기</span></p></div></a>")
}
for (i = 0; i < goalIndex.length; i++) {
    $("#recordsA > .goalRecord").append("<div><a><div><p>" + (i + 1) + "</p><div><img src='https://sefc.info/files/" + goalIndex[i][1] + ".png'></div><p>" + goalIndex[i][0].replace(/[0-9]/g, "") + "<span> | " + goalIndex[i][3] + "득점</span></p></div></a>")
}
for (i = 0; i < assistIndex.length; i++) {
    $("#recordsA > .assistRecord").append("<div><a><div><p>" + (i + 1) + "</p><div><img src='https://sefc.info/files/" + assistIndex[i][1] + ".png'></div><p>" + assistIndex[i][0].replace(/[0-9]/g, "") + "<span> | " + assistIndex[i][4] + "도움</span></p></div></a>")
}

if ($(window).width() < 768) {
    $(".appRecord > div").css("margin-left", "12vw")
    $(".goalRecord > div").css("margin-left", "12vw")
    $(".assistRecord > div").css("margin-left", "12vw")
} else {
    $(".appRecord > div").css("margin-left", "48px")
    $(".goalRecord > div").css("margin-left", "48px")
    $(".assistRecord > div").css("margin-left", "48px")
}