data = {
    "R1": ["62.25", "37.75", "16", "9", "7", "9", "9", "15", "0", "2", "0", "0", "0", "0", "6", "1", "9", "17", "0", "2"],
    "R2": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R3": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R4": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R5": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R6": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R7": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R8": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R9": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R10": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R11": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R12": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R13": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R14": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R15": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R16": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R17": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R18": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R19": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R20": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R21": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R22": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R23": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R24": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R25": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R26": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R27": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R28": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R29": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R30": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R31": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R32": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R33": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R34": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R35": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R36": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R37": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R38": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "R39": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
}

round = $("#round").text().replace(/[^0-9]/g, "");
dataList = Object.keys(data);
index = dataList.indexOf("R" + round);

posH = (data[Object.keys(data)[index]][0]);
posA = (data[Object.keys(data)[index]][1]);
shotH = (data[Object.keys(data)[index]][2]);
shotA = (data[Object.keys(data)[index]][3]);
sotH = (data[Object.keys(data)[index]][4]);
sotA = (data[Object.keys(data)[index]][5]);
foulH = (data[Object.keys(data)[index]][6]);
foulA = (data[Object.keys(data)[index]][7]);
ycH = (data[Object.keys(data)[index]][8]);
ycA = (data[Object.keys(data)[index]][9]);
rcH = (data[Object.keys(data)[index]][10]);
rcA = (data[Object.keys(data)[index]][11]);
yc2ndH = (data[Object.keys(data)[index]][12]);
yc2ndA = (data[Object.keys(data)[index]][13]);
ckH = (data[Object.keys(data)[index]][14]);
ckA = (data[Object.keys(data)[index]][15]);
fkH = (data[Object.keys(data)[index]][16]);
fkA = (data[Object.keys(data)[index]][17]);
offsideH = (data[Object.keys(data)[index]][18]);
offsideA = (data[Object.keys(data)[index]][19]);

posHGauge = 100 * posH / 100;
posAGauge = 100 * posA / 100;
shotHGauge = 100 * shotH / 30;
shotAGauge = 100 * shotA / 30;
sotHGauge = 100 * sotH / 20;
sotAGauge = 100 * sotA / 20;
foulHGauge = 100 * foulH / 30;
foulAGauge = 100 * foulA / 30;
ycHGauge = 100 * ycH / 10;
ycAGauge = 100 * ycA / 10;
rcHGauge = 100 * rcH / 10;
rcAGauge = 100 * rcA / 10;
yc2ndHGauge = 100 * yc2ndH / 10;
yc2ndAGauge = 100 * yc2ndA / 10;
ckHGauge = 100 * ckH / 30;
ckAGauge = 100 * ckA / 30;
fkHGauge = 100 * fkH / 30;
fkAGauge = 100 * fkA / 30;
offsideHGauge = 100 * offsideH / 10;
offsideAGauge = 100 * offsideA / 10;

pos = $("#matchStat > table > tbody > tr:nth-of-type(1)");
shot = $("#matchStat > table > tbody > tr:nth-of-type(2)");
sot = $("#matchStat > table > tbody > tr:nth-of-type(3)");
foul = $("#matchStat > table > tbody > tr:nth-of-type(4)");
yc = $("#matchStat > table > tbody > tr:nth-of-type(5)");
rc = $("#matchStat > table > tbody > tr:nth-of-type(6)");
yc2nd = $("#matchStat > table > tbody > tr:nth-of-type(7)");
ck = $("#matchStat > table > tbody > tr:nth-of-type(8)");
fk = $("#matchStat > table > tbody > tr:nth-of-type(9)");
offside = $("#matchStat > table > tbody > tr:nth-of-type(10)");

pos.find("td:nth-child(2)").text(posH + "%");
pos.find("td:nth-child(4)").text(posA + "%");
shot.find("td:nth-child(2)").text(shotH);
shot.find("td:nth-child(4)").text(shotA);
sot.find("td:nth-child(2)").text(sotH);
sot.find("td:nth-child(4)").text(sotA);
foul.find("td:nth-child(2)").text(foulH);
foul.find("td:nth-child(4)").text(foulA);
yc.find("td:nth-child(2)").text(ycH);
yc.find("td:nth-child(4)").text(ycA);
rc.find("td:nth-child(2)").text(rcH);
rc.find("td:nth-child(4)").text(rcA);
yc2nd.find("td:nth-child(2)").text(yc2ndH);
yc2nd.find("td:nth-child(4)").text(yc2ndA);
ck.find("td:nth-child(2)").text(ckH);
ck.find("td:nth-child(4)").text(ckA);
fk.find("td:nth-child(2)").text(fkH);
fk.find("td:nth-child(4)").text(fkA);
offside.find("td:nth-child(2)").text(offsideH);
offside.find("td:nth-child(4)").text(offsideA);