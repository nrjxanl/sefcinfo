data = {
    "20180211": ["188", "19960321", "r", "gk", "mook__2"],
    "20170029": ["193", "19980316", "l", "gk", "_lnjung_"],
    "20210142": ["184", "19990331", "r", "gk", "hyyynnnn_"],
    "20160074": ["185", "19930909", "r", "gk", "bosang_93"],
    "20180186": ["179", "19990129", "r", "lb,rb", "taehyeon9.9"],
    "20170153": ["188", "19980401", "r", "cb", "_min_kyu_"],
    "20120007": ["184", "19900505", "r", "cb", ""],
    "20230193": ["173", "20000226", "r", "rb", "chasoong13"],
    "20180105": ["185", "19990521", "l", "lb,cb", "__leejaeik"],
    "20220117": ["187", "20030618", "r", "cb,dm", "jun0_s_"],
    "20220118": ["180", "20030516", "l", "lm,lb", "_jaedongcho"],
    "20190062": ["189", "20000317", "r", "cb", "jw_drake2000"],
    "20180156": ["174", "19990802", "r", "lb,lm,rm", "kyungmin_82"],
    "20190199": ["194", "19980318", "r", "cf,dm,cb", "jungmoon_42"],
    "20170208": ["187", "19920513", "l", "lb,cb", "_jae_203"],
    "20170011": ["175", "19950502", "r", "cm,dm,rb", "lsmiiiiin"],
    "20140126": ["175", "19900622", "r", "lw,lm,lb,rw", "seobomin7"],
    "20160059": ["166", "19930712", "r", "cm", "g_seong_uk"],
    "20120052": ["185", "19911105", "r", "dm,cb", "15wonsik"],
    "20180207": ["177", "19960405", "r", "cf,lw,rw,am,cm", "jeongwani_"],
    "20190015": ["177", "19980504", "r", "lw,rw,am", "si.heony_"],
    "20210138": ["174", "20011121", "r", "cm,rm", "pch1121"],
    "20230195": ["177", "19980201", "l", "am,cm,rm", "_bruno.oliveira98"],
    "20180293": ["173", "19900408", "r", "am,cm", "tsuba0408"],
    "20190131": ["174", "20000609", "l", "lw,rw", ""],
    "20190048": ["178", "20001007", "r", "cf,lw,rw", "jeung_in_"],
    "20210175": ["181", "20020408", "r", "rw", "g_jun_16"],
    "20230194": ["195", "19950422", "r", "cf", "ronandavid95"],
    "20140322": ["192", "19930610", "r", "cf,cb", "hashsuan29"],
    "20160058": ["174", "19930828", "l", "lw,rw,am", "sw_time19"],
    "20220124": ["174", "20030606", "r", "lw,rw", "pppjjy66"],
    }

dataList = Object.keys(data)
id = window.location.href.replace(/[^0-9]/g, "")
index = dataList.indexOf(id)
pos = data[Object.keys(data)[index]][3].split(",")

$("#playerPers > div:nth-of-type(1) > p:nth-of-type(1)").text(data[Object.keys(data)[index]][0] + "cm")
$("#playerPers > div:nth-of-type(2) > p:nth-of-type(2)").text(data[Object.keys(data)[index]][1].substr(0, 4) + "-" + data[Object.keys(data)[index]][1].substr(4, 2) + "-" + data[Object.keys(data)[index]][1].substr(6, 2))
$("#playerPers > div:nth-of-type(3) > p:nth-of-type(1)").text(data[Object.keys(data)[index]][2].replace("r", "오른발").replace("l", "왼발"))

if (data[Object.keys(data)[index]][4] !== "") {
    $("#playerInfo > a").attr("href", "https://instagram.com/" + data[Object.keys(data)[index]][4])
} else {
    $("#playerInfo > a").attr("href", "#")
}

for (i = 0; i < pos.length; i++) {
    $("#" + pos[i]).attr("pos", "o")
}