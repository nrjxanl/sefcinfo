window.showLoadError = function (msg) {
    const message = msg || '데이터를 불러오지 못했습니다.';
    const $target = $('#actualContents');
    if ($target.length) {
        if ($target.find('.load-error-msg').length === 0) {
            $target.prepend(`<p class="load-error-msg" style="width:100%; text-align:center; padding:80px 16px; box-sizing:border-box; font-size:16px; font-weight:600; color:#000060;"></p>`);
        }
        $target.find('.load-error-msg').text(message);
    }
};

function beforeLoading() {
    if ($('#menu').length > 0) return;

    // 메뉴
    $(`body`).append(`
        <div id='menu' glass='true'>
            <div transl='y'>
                <img src='/files/home.svg'>
                홈
            </div>
            <div transl='y'>
                <img src='/files/fixtures.svg'>
                일정
            </div>
            <div transl='y'>
                <img src='/files/players.svg'>
                선수단
            </div>
            <div transl='y'>
                <img src='/files/stats.svg'>
                기록
            </div>
            <div transl='y'>
                <img src='/files/standings.svg'>
                순위
            </div>
            <div transl='y'>
                <img src='/files/chants.svg'>
                응원가
            </div>
            <div transl='y'>
                <img src='/files/stadium.svg'>
                직관 가이드
            </div>
            <div transl='y'>
                <img src='/files/matchlog.svg'>
                직관 기록
            </div>
            <div transl='y'>
                <img src='/files/wallpaper.svg'>
                배경화면
            </div>
            <div id='selectLang'>
                <img src='/files/lang.svg'>
                <div>
                    <p l='ko'>KO</p>
                    <p l='en'>EN</p>
                    <p l='pt'>PT</p>
                    <p l='es'>ES</p>
                    <p l='jp'>JP</p>
                </div>
            </div>
            <a href='https://naver.me/GlJ18AQh' target='_blank' rel='noopener noreferrer' transl='y'>오류 제보 및 건의</a>
            <img class='bannerMenu' src='/files/banner_1.jpg'>
        </div>
        <div id='menuBg' glass='true'>
        </div>
    `);
    
    // 메뉴 내 현재 페이지 이름 강조
    const activeFilter = "brightness(0) saturate(100%) invert(8%) sepia(76%) saturate(5175%) hue-rotate(242deg) brightness(71%) contrast(125%)";
    if ($("#prevMatch").length) {
        $("#menu > div:nth-of-type(1)").css("color", "#000060");
        $("#menu > div:nth-of-type(1) > img").css("filter", activeFilter);
    } else if ($(".fixturesButton").length || $("#matchScore").length) {
        $("#menu > div:nth-of-type(2)").css("color", "#000060");
        $("#menu > div:nth-of-type(2) > img").css("filter", activeFilter);
    } else if ($(".playerButton").length || $("#playerInfo").length) {
        $("#menu > div:nth-of-type(3)").css("color", "#000060");
        $("#menu > div:nth-of-type(3) > img").css("filter", activeFilter);
    } else if ($(".statsButton").length) {
        $("#menu > div:nth-of-type(4)").css("color", "#000060");
        $("#menu > div:nth-of-type(4) > img").css("filter", activeFilter);
    } else if ($(".standingsButton").length) {
        $("#menu > div:nth-of-type(5)").css("color", "#000060");
        $("#menu > div:nth-of-type(5) > img").css("filter", activeFilter);
    } else if ($("#team").length || $("#chantsName").length || $("#chantsList").length || $("#chantsPlayer").length) {
        $("#menu > div:nth-of-type(6)").css("color", "#000060");
        $("#menu > div:nth-of-type(6) > img").css("filter", activeFilter);
    } else if ($("#selectStadium").length || $("#stadium").length || $("#stadiumSvg").length || $("#subway").length || $("#bus").length || $("#parking").length || $("#addFnb").length) {
        $("#menu > div:nth-of-type(7)").css("color", "#000060");
        $("#menu > div:nth-of-type(7) > img").css("filter", activeFilter);
    } else if ($("#matchlogSelect").length) {
        $("#menu > div:nth-of-type(8)").css("color", "#000060");
        $("#menu > div:nth-of-type(8) > img").css("filter", activeFilter);
    } else if ($("#wallpaperCanvas").length) {
        $("#menu > div:nth-of-type(9)").css("color", "#000060");
        $("#menu > div:nth-of-type(9) > img").css("filter", activeFilter);
    }

    // 상단 클릭 시 홈으로 이동
    $('header > div:nth-of-type(2)').click(function () {
        window.location = '/';
    });

    // 언어 선택 버튼
    if (localStorage.getItem('lang') == null) localStorage.setItem('lang', 'ko');

    $(`#menu > div:nth-last-of-type(1) > div > p[l='${localStorage.getItem('lang')}']`).css('font-weight', '900');

    $('#menu > div:nth-last-of-type(1) > div > p').filter(function () {
        return $(this).css('font-weight') == 600;
    }).css('display', 'none');

    const el = $('#menu > div:nth-last-of-type(1) > div');

    $('#menu > div:nth-last-of-type(1)').click(function () {
        const cnt = el.find('p').filter(function () {
            return $(this).css('display') == 'block';
        }).length;

        if (cnt == 1) el.find('p').css('display', 'block');
        else el.find('p').filter(function () {
            return $(this).css('font-weight') == 600;
        }).css('display', 'none');
    });

    $('#menu > div:nth-last-of-type(1) > div > p').click(function () {
        const cnt = el.find('p').filter(function () {
            return $(this).css('display') == 'block';
        }).length;

        if (cnt > 1) {
            localStorage.setItem('lang', $(this).attr('l'));
            $('#menu > div:nth-last-of-type(1) > div > p').css('font-weight', '600');
            $(this).css('font-weight', '900');

            console.log(`${$(this).attr('l')}로 언어 변경`);

            window.location.reload();
        }
    });

    // 메뉴 닫기
    $('#menuBg').click(function () {
        $("#menuBg").animate({ opacity: "0" }, 200, function () {
            $("#menuBg").css("display", "none");
        });
        $("#menu").animate({ left: "-60vw" }, 200);
    });

    // 메뉴 버튼 클릭 시 페이지 이동
    $("#menu > div:nth-of-type(1)").click(function () {
        window.location = "/";
    });
    $("#menu > div:nth-of-type(2)").click(function () {
        window.location = "/fixtures";
    });
    $("#menu > div:nth-of-type(3)").click(function () {
        window.location = "/players";
    });
    $("#menu > div:nth-of-type(4)").click(function () {
        window.location = "/stats";
    });
    $("#menu > div:nth-of-type(5)").click(function () {
        window.location = "/standings";
    });
    $("#menu > div:nth-of-type(6)").click(function () {
        window.location = "/chants";
    });
    $("#menu > div:nth-of-type(7)").click(function () {
        window.location = "/stadium";
    });
    $("#menu > div:nth-of-type(8)").click(function () {
        window.location = "/matchlog";
    });
    $("#menu > div:nth-of-type(9)").click(function () {
        window.location = "/wallpaper";
    });

    // 배너 클릭 시 페이지 이동
    $(".bannerMenu:nth-of-type(1), .bannerFixtures").click(function () {
        window.open("https://linktr.ee/sefcnuevo", "_blank", "noopener,noreferrer");
    });
    $(".instaMenu:nth-of-type(1)").click(function () {
        window.open("https://www.instagram.com/sefcinfo/", "_blank", "noopener,noreferrer");
    });

    // 미완성 기능 숨기기
    $('#menu > div:nth-of-type(n + 9)').css('display', 'none');
}

function afterLoading() {
    // 스켈레톤 애니메이션
    if ($(window).width() < 768) {
        setTimeout(function () {
            $('#skeletonMobile').css('display', 'none');
            $('#actualContents').css('display', 'block');
        }, 300);
    } else {
        setTimeout(function () {
            $('#skeletonPC').css('display', 'none');
            if ($('#standingsA').length || $('#chantsName').length) {
                $('#actualContents').css('flex-direction', 'column');
            }
            $('#actualContents').css('display', 'flex');
        }, 300);
    }

    // 트래킹 쿼리스트링 제거 (fbclid, utm_*)
    const trackingParams = ['fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id', 'gclid'];
    if (window.location.search && trackingParams.some(p => window.location.search.includes(p))) {
        const url = new URL(window.location.href);
        const rawSearch = url.search.slice(1);
        const cleaned = rawSearch
            .split('&')
            .filter(part => {
                const key = part.split('=')[0];
                return part !== '' && !trackingParams.includes(key);
            })
            .join('&');
        const nextSearch = cleaned ? '?' + cleaned : '';
        history.replaceState(null, '', url.pathname + nextSearch + url.hash);
    }

    // 화면 너비 300px 이하일 때 경고
    if ($(window).width() < 300 && $('#smallScreenWarn').length === 0) {
        $('body').append(`<div id='smallScreenWarn' style='width: 80vw; height: 65px; padding: 0 10vw; background: #faf6f5; position: fixed; bottom: 0; left: 0; font-size: 14px; font-weight: 300; z-index: 300; display: flex; align-items: center; justify-content: center;'>기기의 화면 크기가 작아 페이지가 정상적으로 보이지 않을 수 있습니다.</div>`);
    }

    // 매년 7월 7일 메인 로고, 배너 변경
    if (new Date().getMonth() == 6 && new Date().getDate() == 7) {
        $("header > div:nth-of-type(2) > img").attr("src", "/files/july7th.svg");
        $(".bannerMenu:nth-of-type(1)").attr("src", "/files/july7th_1.png").css("pointer-events", "none");
        $(".bannerFixtures > img").attr("src", "/files/july7th_2.png").parent().css("pointer-events", "none");
    }

    // 모바일 버전에서 일정 페이지 배너 숨기기
    if ($(window).width() < 768) {
        $(".bannerFixtures").css("display", "none");
    }

    // 새로고침 시 맨 위로 이동
    history.scrollRestoration = 'manual';
}

// 메뉴 열기
function menu() {
    $("#menuBg").css("display", "block").animate({ opacity: "1" }, 200);
    $("#menu").animate({ left: "0" }, 200);
}

// 화면 크기 변경 시
let before = $(window).width();
$(window).resize(function () {
    const after = $(window).width();
    if ((after >= 768 && before < 768) || (after < 768 && before >= 768)) {
        location.reload();
    }
});

// 푸터
if (localStorage.getItem('footer') == null) {
    $('body').append(`<footer glass='true'><p>이 웹사이트는 팬이 운영하는 비공식 팬 페이지이며,<br>제공되는 데이터는 정확성을 보장하지 않습니다.</p><img src='/files/x.svg'></footer>`);
}

$('footer > img').click(function () {
    localStorage.setItem('footer', 'x');
    $('footer').css('display', 'none');
});
