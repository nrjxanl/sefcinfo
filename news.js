data = {
    "type": ["news", "news", "news", "news", "news", "news", "news", "news", "news", "news", "news"],
    "title1": ["서울 이랜드 FC U-12, 가시마 앤틀러스와 첫 해외 대회 출전", "서울 이랜드 FC x 이화여대 출격! ‘K리그 퀸컵 우승을 향해’", "'아찔했던 상황' 쓰러진 서울이랜드 유정완 위한 양 팀 선수들의 대처", "'첫 선발' 서울이랜드 박준영 &quot;훗날 동명이인 박준영과 같이 뛰었으면&quot;", "'3연패' 서울이랜드 박충균 &quot;연이은 부상? 다각도로 검토해 봐야&quot;", "'갑작스러운 부상 변수' 서울이랜드 박충균이 머리 아픈 이유", "서울 이랜드 FC 이재익, ‘AG 금메달’ 목에 걸어", "서울 이랜드 FC , ‘오프라이스’ 브랜드 데이 진행", "서울 이랜드 FC X 뉴발란스, 2023 레울컵 성료", "'11위 추락' 서울이랜드 박충균 &quot;그라운드 컨디션? 정상 경기 어려웠어&quot;", "'경각심 강조' 서울이랜드 박충균이 '강원 5-4 경기' 꺼낸 사연"],
    "title2": ["", "", "", "", "", "", "", "", "", "", ""],
    "imgUrl": ["https://seoulelandfc.com/resource/upload/tmp/2023/10/b48ef05bedf45b33ea36f12654b709f4_20231012.jpg", "https://seoulelandfc.com/resource/upload/tmp/2023/10/9198e0fb1581ded85114d80856e04291_20231009.jpg", "https://cdn.sports-g.com/news/photo/202310/204512_45695_1444.jpg", "https://cdn.sports-g.com/news/photo/202310/204505_45691_241.jpg", "https://cdn.sports-g.com/news/photo/202310/204508_45688_515.jpg", "https://cdn.sports-g.com/news/photo/202310/204501_45680_1251.jpg", "https://seoulelandfc.com/resource/upload/tmp/2023/10/c11cf4d984ed71360b84fa0919c32af1_20231009.jpg", "https://seoulelandfc.com/resource/upload/tmp/2023/10/5e7b54c8a1c64843e02b6a80f670704b_20231004.jpeg", "https://seoulelandfc.com/resource/upload/tmp/2023/10/486baaaeaf02146af6116247455a6685_20231004.jpg", "https://cdn.sports-g.com/news/photo/202309/204404_45546_3950.jpg", "https://cdn.sports-g.com/news/photo/202309/204398_45537_69.jpg"],
    "url": ["https://www.seoulelandfc.com/fanzone/news_view?b_id=961", "https://www.seoulelandfc.com/fanzone/news_view?b_id=960", "https://www.sports-g.com/news/articleView.html?idxno=204512", "https://www.sports-g.com/news/articleView.html?idxno=204505", "https://www.sports-g.com/news/articleView.html?idxno=204508", "https://www.sports-g.com/news/articleView.html?idxno=204501", "https://www.seoulelandfc.com/fanzone/news_view?b_id=959", "https://www.seoulelandfc.com/fanzone/news_view?b_id=958", "https://www.seoulelandfc.com/fanzone/news_view?b_id=957", "https://www.sports-g.com/news/articleView.html?idxno=204404", "https://www.sports-g.com/news/articleView.html?idxno=204398"],
}

dataList = Object.values(data.type);

if (dataList.length <= 5) {
    $("#showMore").css("display", "none");
}

if (dataList[0] == "news") {
    $("#news").append("<div class='news'></p></div>");
    $(".news:nth-of-type(1)").css({"background": "linear-gradient(180deg, #ffffff00 60%, #000000 100%), url(" + data.imgUrl[0] + ")", "background-size": "cover"}).attr("onclick", "window.open('" + data.url[0] + "')")
    $(".news:nth-of-type(1) > p").text(data.title1[0].replaceAll("&quot;", '"'));

    for (i = 1; i < 5; i++) {
        if (dataList[i] == "news") {
            $("#news").append("<div class='news'><div><img></div><p></p></div>");
            $(".news:nth-of-type(" + (i + 1) + ")").attr("onclick", "window.open('" + data.url[i] + "')");
            $(".news:nth-of-type(" + (i + 1) + ") > div > img").attr("src", data.imgUrl[i]);
            $(".news:nth-of-type(" + (i + 1) + ") > p").text(data.title1[i].replaceAll("&quot;", '"'));
        };
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