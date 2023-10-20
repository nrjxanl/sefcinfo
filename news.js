data = {
    "type": ["news", "news", "news", "news", "news", "news", "news", "news", "news", "news", "news", "news", "news"],
    "title1": ["프로축구 서울 이랜드, 몽골 어린이들과 축구 클리닉", "서울 이랜드, 켄싱턴리조트 가평만의 ‘어린이 축구왕 패키지’ 성료", "서울 이랜드 FC U-12, 가시마 앤틀러스와 첫 해외 대회 출전", "서울 이랜드 FC x 이화여대 출격! ‘K리그 퀸컵 우승을 향해’", "'아찔했던 상황' 쓰러진 서울이랜드 유정완 위한 양 팀 선수들의 대처", "'첫 선발' 서울이랜드 박준영 &quot;훗날 동명이인 박준영과 같이 뛰었으면&quot;", "'3연패' 서울이랜드 박충균 &quot;연이은 부상? 다각도로 검토해 봐야&quot;", "'갑작스러운 부상 변수' 서울이랜드 박충균이 머리 아픈 이유", "서울 이랜드 FC 이재익, ‘AG 금메달’ 목에 걸어", "서울 이랜드 FC , ‘오프라이스’ 브랜드 데이 진행", "서울 이랜드 FC X 뉴발란스, 2023 레울컵 성료", "'11위 추락' 서울이랜드 박충균 &quot;그라운드 컨디션? 정상 경기 어려웠어&quot;", "'경각심 강조' 서울이랜드 박충균이 '강원 5-4 경기' 꺼낸 사연"],
    "title2": ["", "", "", "", "", "", "", "", "", "", "", "", ""],
    "title3": ["", "", "", "", "", "", "", "", "", "", "", "", ""],
    "imgUrl": ["https://image.newsis.com/2023/10/19/NISI20231019_0001390090_web.jpg?rnd=20231019130902", "https://seoulelandfc.com/resource/upload/tmp/2023/10/8b98b2578ff9dfa1f5255f9d877f9f5c_20231015.jpg", "https://seoulelandfc.com/resource/upload/tmp/2023/10/b48ef05bedf45b33ea36f12654b709f4_20231012.jpg", "https://seoulelandfc.com/resource/upload/tmp/2023/10/9198e0fb1581ded85114d80856e04291_20231009.jpg", "https://cdn.sports-g.com/news/photo/202310/204512_45695_1444.jpg", "https://cdn.sports-g.com/news/photo/202310/204505_45691_241.jpg", "https://cdn.sports-g.com/news/photo/202310/204508_45688_515.jpg", "https://cdn.sports-g.com/news/photo/202310/204501_45680_1251.jpg", "https://seoulelandfc.com/resource/upload/tmp/2023/10/c11cf4d984ed71360b84fa0919c32af1_20231009.jpg", "https://seoulelandfc.com/resource/upload/tmp/2023/10/5e7b54c8a1c64843e02b6a80f670704b_20231004.jpeg", "https://seoulelandfc.com/resource/upload/tmp/2023/10/486baaaeaf02146af6116247455a6685_20231004.jpg", "https://cdn.sports-g.com/news/photo/202309/204404_45546_3950.jpg", "https://cdn.sports-g.com/news/photo/202309/204398_45537_69.jpg"],
    "url": ["https://newsis.com/view/?id=NISX20231019_0002488927&cID=10503&pID=10500", "https://www.seoulelandfc.com/fanzone/news_view?b_id=962", "https://www.seoulelandfc.com/fanzone/news_view?b_id=961", "https://www.seoulelandfc.com/fanzone/news_view?b_id=960", "https://www.sports-g.com/news/articleView.html?idxno=204512", "https://www.sports-g.com/news/articleView.html?idxno=204505", "https://www.sports-g.com/news/articleView.html?idxno=204508", "https://www.sports-g.com/news/articleView.html?idxno=204501", "https://www.seoulelandfc.com/fanzone/news_view?b_id=959", "https://www.seoulelandfc.com/fanzone/news_view?b_id=958", "https://www.seoulelandfc.com/fanzone/news_view?b_id=957", "https://www.sports-g.com/news/articleView.html?idxno=204404", "https://www.sports-g.com/news/articleView.html?idxno=204398"],
}

dataList = Object.values(data.type);

if (dataList.length <= 5) {
    $("#showMore").css("display", "none");
}

if (dataList[0] == "news") {
    $("#news").append("<div class='news'><p></p></div>");
    $(".news:nth-of-type(1)").css({"background": "linear-gradient(180deg, #ffffff00 60%, #000000 100%), url(" + data.imgUrl[0] + ") no-repeat center center / cover"}).attr("onclick", "window.open('" + data.url[0] + "')")
    $(".news:nth-of-type(1) > p").text(data.title1[0].replaceAll("&quot;", '"'));
    i = 1;
} else {
    i = 0;
};

for (i = i; i < 5; i++) {

    emblem1 = 
        data.title2[i] == "서울 이랜드 FC" ? "seouleland_s" :
        data.title2[i] == "울산 현대 축구단" ? "ulsanhyundai2016_s" :
        data.title2[i] == "수원 삼성 블루윙즈" ? "suwonsamsung_s" :
        data.title2[i] == "수원 FC" ? "suwonfc2016_s" :
        data.title2[i] == "성남 FC" ? "seongnamfc2014_s" :
        data.title2[i] == "포항 스틸러스" ? "pohangsteelers_s" :
        data.title2[i] == "전남 드래곤즈" ? "jeonnamdragons2022_s" :
        data.title2[i] == "전북 현대 모터스" ? "jeonbukhyundai2018_s" :
        data.title2[i] == "제주 유나이티드" ? "jejuutd_s" :
        data.title2[i] == "인천 유나이티드" ? "incheonutd_s" :
        data.title2[i] == "경남 FC" ? "gyeongnamfc2010_s" :
        data.title2[i] == "광주 FC" ? "gwangjufc2020_s" :
        data.title2[i] == "김포 FC" ? "gimpofc2022_s" :
        data.title2[i] == "김천 상무 FC" ? "gimcheonsangmu_s" :
        data.title2[i] == "강원 FC" ? "gangwonfc_s" :
        data.title2[i] == "FC 서울" ? "fcseoul_s" :
        data.title2[i] == "FC 안양" ? "fcanyang_s" :
        data.title2[i] == "대전 하나 시티즌" ? "daejeonhana2020_s" :
        data.title2[i] == "대구 FC" ? "daegufc2013_s" :
        data.title2[i] == "충남아산 FC" ? "chungnamasan_s" :
        data.title2[i] == "충북청주 FC" ? "chungbukcheongju_s" :
        data.title2[i] == "천안 시티 FC" ? "cheonancity2023_s" :
        data.title2[i] == "부산 아이파크" ? "busanipark2012_s" :
        data.title2[i] == "부천 FC 1995" ? "bucheonfc_s" :
        data.title2[i] == "안산 그리너스" ? "ansangreeners_s" :
    "dummy";

    emblem2 = 
        data.title3[i] == "서울 이랜드 FC" ? "seouleland_s" :
        data.title3[i] == "울산 현대 축구단" ? "ulsanhyundai2016_s" :
        data.title3[i] == "수원 삼성 블루윙즈" ? "suwonsamsung_s" :
        data.title3[i] == "수원 FC" ? "suwonfc2016_s" :
        data.title3[i] == "성남 FC" ? "seongnamfc2014_s" :
        data.title3[i] == "포항 스틸러스" ? "pohangsteelers_s" :
        data.title3[i] == "전남 드래곤즈" ? "jeonnamdragons2022_s" :
        data.title3[i] == "전북 현대 모터스" ? "jeonbukhyundai2018_s" :
        data.title3[i] == "제주 유나이티드" ? "jejuutd_s" :
        data.title3[i] == "인천 유나이티드" ? "incheonutd_s" :
        data.title3[i] == "경남 FC" ? "gyeongnamfc2010_s" :
        data.title3[i] == "광주 FC" ? "gwangjufc2020_s" :
        data.title3[i] == "김포 FC" ? "gimpofc2022_s" :
        data.title3[i] == "김천 상무 FC" ? "gimcheonsangmu_s" :
        data.title3[i] == "강원 FC" ? "gangwonfc_s" :
        data.title3[i] == "FC 서울" ? "fcseoul_s" :
        data.title3[i] == "FC 안양" ? "fcanyang_s" :
        data.title3[i] == "대전 하나 시티즌" ? "daejeonhana2020_s" :
        data.title3[i] == "대구 FC" ? "daegufc2013_s" :
        data.title3[i] == "충남아산 FC" ? "chungnamasan_s" :
        data.title3[i] == "충북청주 FC" ? "chungbukcheongju_s" :
        data.title3[i] == "천안 시티 FC" ? "cheonancity2023_s" :
        data.title3[i] == "부산 아이파크" ? "busanipark2012_s" :
        data.title3[i] == "부천 FC 1995" ? "bucheonfc_s" :
        data.title3[i] == "안산 그리너스" ? "ansangreeners_s" :
    "dummy";

    if (dataList[i] == "news") {
        $("#news").append("<div class='news'><div><img></div><p></p></div>");
        $(".news:nth-of-type(" + (i + 1) + ")").attr("onclick", "window.open('" + data.url[i] + "')");
        $(".news:nth-of-type(" + (i + 1) + ") > div > img").attr("src", data.imgUrl[i]);
        $(".news:nth-of-type(" + (i + 1) + ") > p").text(data.title1[i].replaceAll("&quot;", '"'));
    } else if (dataList[i] == "rumour") {
        $("#news").append("<div class='rumour'><div><div><img></div><p></p><p style='opacity: 0.8'>루머</p></div><div><p></p><div><img></div><img src='./files/rightarrow.png'><div><img></div><p></p></div></div>");
        $(".rumour:nth-of-type(" + (i + 1) + ")").attr("onclick", "location.href='./" + data.imgUrl[i] + "'");
        $(".rumour:nth-of-type(" + (i + 1) + ") > div:nth-of-type(1) > div > img").attr("src", "./files/" + data.imgUrl[i] + ".png");
        $(".rumour:nth-of-type(" + (i + 1) + ") > div:nth-of-type(1) > p:nth-of-type(1)").text(data.title1[i]);
        $(".rumour:nth-of-type(" + (i + 1) + ") > div:nth-of-type(2) > p:nth-of-type(1)").text(data.title2[i]);
        $(".rumour:nth-of-type(" + (i + 1) + ") > div:nth-of-type(2) > p:nth-of-type(2)").text(data.title3[i]);
        $(".rumour:nth-of-type(" + (i + 1) + ") > div:nth-of-type(2) > div:nth-of-type(1) > img").attr("src", "./files/" + emblem1 + ".png");
        $(".rumour:nth-of-type(" + (i + 1) + ") > div:nth-of-type(2) > div:nth-of-type(2) > img").attr("src", "./files/" + emblem2 + ".png");
    } else if (dataList[i] == "official") {
        $("#news").append("<div class='official'><div><div><img></div><p></p><p>공식 발표</p></div><div><p></p><div><img></div><img src='./files/rightarrow.png'><div><img></div><p></p></div></div>");
        $(".official:nth-of-type(" + (i + 1) + ")").attr("onclick", "location.href='./" + data.imgUrl[i] + "'");
        $(".official:nth-of-type(" + (i + 1) + ") > div:nth-of-type(1) > div > img").attr("src", "./files/" + data.imgUrl[i] + ".png");
        $(".official:nth-of-type(" + (i + 1) + ") > div:nth-of-type(1) > p:nth-of-type(1)").text(data.title1[i]);
        $(".official:nth-of-type(" + (i + 1) + ") > div:nth-of-type(2) > p:nth-of-type(1)").text(data.title2[i]);
        $(".official:nth-of-type(" + (i + 1) + ") > div:nth-of-type(2) > p:nth-of-type(2)").text(data.title3[i]);
        $(".official:nth-of-type(" + (i + 1) + ") > div:nth-of-type(2) > div:nth-of-type(1) > img").attr("src", "./files/" + emblem1 + ".png");
        $(".official:nth-of-type(" + (i + 1) + ") > div:nth-of-type(2) > div:nth-of-type(2) > img").attr("src", "./files/" + emblem2 + ".png");
    };
};

j = 5;
k = 5;
function showMore() {
    k += 5;
    for (j = j; j < k; j++) {
        if (dataList[j] == "news") {
            $("#news").append("<div class='news'><div><img></div><p></p></div>");
            $(".news:nth-of-type(" + (j + 1) + ")").attr("onclick", "window.open('" + data.url[j] + "')");
            $(".news:nth-of-type(" + (j + 1) + ") > div > img").attr("src", data.imgUrl[j]);
            $(".news:nth-of-type(" + (j + 1) + ") > p").text(data.title1[j].replaceAll("&quot;", '"'));
        };
        if (dataList[j] == undefined) {
            $("#showMore").css("display", "none");
        };
    };
};

for (i = 0; i < 3; i++) {
    $("#latestNews").append("<div><p></p></div>")
    $("#latestNews > div:nth-of-type(" + (i + 1) + ")").css({"background": "linear-gradient(180deg, #ffffff00 60%, #000000 100%), url(" + data.imgUrl[i] + ") no-repeat center center / cover"}).attr("onclick", "window.open('" + data.url[0] + "')")
    $("#latestNews > div:nth-of-type("  + (i + 1) + ") > p").text(data.title1[i].replaceAll("&quot;", '"'));
};

$("#latestNews").append("<a href='./news'><div style='width: 5vw; height: 200px; display: flex; align-items: center; justify-content: center;'><img src='./files/rightarrow.png' style='width: 3vw'></div></a>")