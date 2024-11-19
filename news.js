data = {
    0: ["공식 발표", "박충균 감독", "서울 이랜드 FC", "계약 해지", "", "https://www.instagram.com/p/C0QtLR0siL-/", "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/2023/K31/player_19970055.png"],
    1: ["루머", "김도균 감독", "수원 FC", "서울 이랜드 FC", "FM코리아", "https://www.fmkorea.com/6455138597", "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/2023/K29/player_19990058.png"],
    2: ["루머", "피터", "충북청주 FC", "서울 이랜드 FC", "FM코리아", "https://www.fmkorea.com/6495339297", "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/2023/K37/player_20230211.png"],
    3: ["공식 발표", "김도균 감독", "FA", "서울 이랜드 FC", "", "https://www.instagram.com/p/C00nyZ_r-CA/", "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/2023/K29/player_19990058.png"],
    4: ["루머", "이재익", "서울 이랜드 FC", "전북 현대 모터스", "스포츠동아", "https://sports.donga.com/article/all/20231214/122622539/2", "./files/20180105.png"],
    5: ["루머", "이승우", "수원 FC", "서울 이랜드 FC", "KBS", "https://news.kbs.co.kr/news/pc/view/view.do?ncd=7842496&ref=A", "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/2023/K29/player_20220042.png"],
    6: ["루머", "피터", "충북청주 FC", "서울 이랜드 FC", "썰호정", "https://www.youtube.com/watch?v=vJ04kDJTvfw", "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/2023/K37/player_20230211.png"],
    7: ["루머", "박민서", "경남 FC", "서울 이랜드 FC", "썰호정", "https://www.youtube.com/watch?v=vJ04kDJTvfw", "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/2023/K20/player_20190022.png"],
}

function news() {
    emblem1 = 
        data[i][2] == "서울 이랜드 FC" ? "seouleland_s" :
        data[i][2] == "울산 현대 축구단" ? "ulsanhyundai2016_s" :
        data[i][2] == "수원 삼성 블루윙즈" ? "suwonsamsung_s" :
        data[i][2] == "수원 FC" ? "suwonfc2016_s" :
        data[i][2] == "성남 FC" ? "seongnamfc2014_s" :
        data[i][2] == "포항 스틸러스" ? "pohangsteelers_s" :
        data[i][2] == "전남 드래곤즈" ? "jeonnamdragons2022_s" :
        data[i][2] == "전북 현대 모터스" ? "jeonbukhyundai2018_s" :
        data[i][2] == "제주 유나이티드" ? "jejuutd_s" :
        data[i][2] == "인천 유나이티드" ? "incheonutd_s" :
        data[i][2] == "경남 FC" ? "gyeongnamfc2010_s" :
        data[i][2] == "광주 FC" ? "gwangjufc2020_s" :
        data[i][2] == "김포 FC" ? "gimpofc2022_s" :
        data[i][2] == "김천 상무 FC" ? "gimcheonsangmu_s" :
        data[i][2] == "강원 FC" ? "gangwonfc_s" :
        data[i][2] == "FC 서울" ? "fcseoul_s" :
        data[i][2] == "FC 안양" ? "fcanyang_s" :
        data[i][2] == "대전 하나 시티즌" ? "daejeonhana2020_s" :
        data[i][2] == "대구 FC" ? "daegufc2013_s" :
        data[i][2] == "충남아산 FC" ? "chungnamasan_s" :
        data[i][2] == "충북청주 FC" ? "chungbukcheongju_s" :
        data[i][2] == "천안 시티 FC" ? "cheonancity2023_s" :
        data[i][2] == "부산 아이파크" ? "busanipark2012_s" :
        data[i][2] == "부천 FC 1995" ? "bucheonfc_s" :
        data[i][2] == "안산 그리너스" ? "ansangreeners_s" :
    "dummy";

    emblem2 = 
        data[i][3] == "서울 이랜드 FC" ? "seouleland_s" :
        data[i][3] == "울산 현대 축구단" ? "ulsanhyundai2016_s" :
        data[i][3] == "수원 삼성 블루윙즈" ? "suwonsamsung_s" :
        data[i][3] == "수원 FC" ? "suwonfc2016_s" :
        data[i][3] == "성남 FC" ? "seongnamfc2014_s" :
        data[i][3] == "포항 스틸러스" ? "pohangsteelers_s" :
        data[i][3] == "전남 드래곤즈" ? "jeonnamdragons2022_s" :
        data[i][3] == "전북 현대 모터스" ? "jeonbukhyundai2018_s" :
        data[i][3] == "제주 유나이티드" ? "jejuutd_s" :
        data[i][3] == "인천 유나이티드" ? "incheonutd_s" :
        data[i][3] == "경남 FC" ? "gyeongnamfc2010_s" :
        data[i][3] == "광주 FC" ? "gwangjufc2020_s" :
        data[i][3] == "김포 FC" ? "gimpofc2022_s" :
        data[i][3] == "김천 상무 FC" ? "gimcheonsangmu_s" :
        data[i][3] == "강원 FC" ? "gangwonfc_s" :
        data[i][3] == "FC 서울" ? "fcseoul_s" :
        data[i][3] == "FC 안양" ? "fcanyang_s" :
        data[i][3] == "대전 하나 시티즌" ? "daejeonhana2020_s" :
        data[i][3] == "대구 FC" ? "daegufc2013_s" :
        data[i][3] == "충남아산 FC" ? "chungnamasan_s" :
        data[i][3] == "충북청주 FC" ? "chungbukcheongju_s" :
        data[i][3] == "천안 시티 FC" ? "cheonancity2023_s" :
        data[i][3] == "부산 아이파크" ? "busanipark2012_s" :
        data[i][3] == "부천 FC 1995" ? "bucheonfc_s" :
        data[i][3] == "안산 그리너스" ? "ansangreeners_s" :
    "dummy";

    if (data[i][0] == "공식 발표") {
        if (emblem1 == "dummy" || emblem2 == "dummy") {
            $("#news").append("<a href='" + data[i][5] + "' target='_blank'><div><div><div><img src='" + data[i][6] + "'></div><div><div><img src='./files/" + emblem2 + ".png'></div></div></div><div><p style='color: #000060; font-weight: 900;'>" + data[i][0] + "</p><p>" + data[i][1] + "</p></div><p>" + data[i][2] + " » " + data[i][3] + "</p></div></a>")
        } else {
            $("#news").append("<a href='" + data[i][5] + "' target='_blank'><div><div><div><img src='" + data[i][6] + "'></div><div><div><img src='./files/" + emblem1 + ".png'></div><p>»</p><div><img src='./files/" + emblem2 + ".png'></div></div></div><div><p style='color: #000060; font-weight: 900;'>" + data[i][0] + "</p><p>" + data[i][1] + "</p></div><p>" + data[i][2] + " » " + data[i][3] + "</p></div></a>")
        }
    } else {
        $("#news").append("<a href='" + data[i][5] + "' target='_blank'><div><div><div><img src='" + data[i][6] + "'></div><div><div><img src='./files/" + emblem1 + ".png'></div><p>»</p><div><img src='./files/" + emblem2 + ".png'></div></div></div><div><p>" + data[i][0] + "</p><p>" + data[i][1] + "</p></div><p>" + data[i][4] + " | " + data[i][2] + " » " + data[i][3] + "</p></div></a>")
    }
}

for (i = (Object.keys(data).length - 1); i > (Object.keys(data).length - 6); i--) {
    news()
}

function showMore() {
    for (i = i; i > (i - 5); i--) {
        news()

        if (i <= 0) {
            $("#showMore").css("display", "none")
        }
    }
}