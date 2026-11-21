$(document).ready(function () {
    beforeLoading();

    if ($("#wallpaperName").length) {
        function getKitSuffix() {
            const src = $("#wallpaperBg").attr("src") || "";
            if (src === "./files/awaykit.jpg") return "n";
            if (src === "./files/gkhomekit.jpg") return "b";
            return "w";
        }

        function wallpaperLetterSpacing() {
            const len = $("#wallpaperName").text().length;
            if (len === 1) {
                $("#wallpaperName").css({ "letter-spacing": "0", "margin-left": "0" });
            } else if (len === 2) {
                $("#wallpaperName").css({ "letter-spacing": "4.5vh", "margin-left": "4.5vh" });
            } else if (len === 3) {
                $("#wallpaperName").css({ "letter-spacing": "1.2vh", "margin-left": "1.2vh" });
            } else if (len === 4) {
                $("#wallpaperName").css({ "letter-spacing": ".3vh", "margin-left": ".3vh" });
            } else {
                $("#wallpaperName").css({ "letter-spacing": "0", "margin-left": "0" });
            }
        }

        function renderWallpaperNum() {
            const rawInput = String($("#numInput").val() || "");
            let digits = rawInput.replace(/[^0-9]/g, "");

            if (digits.length > 2) {
                digits = digits.slice(0, 2);
                $("#numInput").val(digits);
            } else if (rawInput !== "" && rawInput !== digits) {
                $("#numInput").val(digits);
            }

            if (digits !== "") {
                const clamped = Math.max(0, Math.min(99, parseInt(digits, 10)));
                if (String(clamped) !== digits && !(digits.length === 2 && digits.startsWith("0"))) {
                    digits = String(clamped);
                    $("#numInput").val(digits);
                }
            }

            const displayNum = digits.length === 0 ? "20" : digits;
            const suffix = getKitSuffix();

            $("#wallpaperNum").empty();
            for (let i = 0; i < displayNum.length; i++) {
                $("#wallpaperNum").append(`<img src='./files/${displayNum[i]}${suffix}.png'>`);
            }
        }

        $("#wallpaperButton > button:nth-of-type(1)").click(function () {
            $("#wallpaperBg").attr("src", "./files/homekit.jpg");
            $("#wallpaperName").css("color", "#fff");
            $("#wallpaperCanvas > div").css("background", "#132847");
            renderWallpaperNum();
        });

        $("#wallpaperButton > button:nth-of-type(2)").click(function () {
            $("#wallpaperBg").attr("src", "./files/awaykit.jpg");
            $("#wallpaperName").css("color", "#132847");
            $("#wallpaperCanvas > div").css("background", "#fff");
            renderWallpaperNum();
        });

        $("#wallpaperButton > button:nth-of-type(3)").click(function () {
            $("#wallpaperBg").attr("src", "./files/gkhomekit.jpg");
            $("#wallpaperName").css("color", "#000");
            $("#wallpaperCanvas > div").css("background", "#c9ec61");
            renderWallpaperNum();
        });

        $("#wallpaperButton > button:nth-of-type(4)").click(function () {
            $("#wallpaperBg").attr("src", "./files/gkawaykit.jpg");
            $("#wallpaperName").css("color", "#fff");
            $("#wallpaperCanvas > div").css("background", "#000");
            renderWallpaperNum();
        });

        $("#wallpaperButton > button").click(function () {
            $("#wallpaperButton > button").css({ "border": "1px solid #faf6f580", "color": "#05090a", "background": "#faf6f580" });
            $(this).css({ "border": "1px solid #000060c0", "color": "#faf6f5", "background": "#000060c0" });
        });

        $("#nameInput").on("propertychange change keyup paste input", function () {
            const val = $("#nameInput").val();
            $("#wallpaperName").text(val.length === 0 ? "김오규" : val);
            wallpaperLetterSpacing();
        });

        $("#numInput").on("propertychange change keyup paste input", function () {
            renderWallpaperNum();
        });

        const saveImg = (uri, filename) => {
            const link = document.createElement("a");
            document.body.appendChild(link);
            link.href = uri;
            link.download = filename;
            link.click();
            document.body.removeChild(link);
        };

        // 다운로드
        const downloadBtn = document.getElementById("wallpaperDownload");
        if (downloadBtn) {
            downloadBtn.addEventListener("click", () => {
                const targetElement = document.querySelector("#wallpaperCanvas > div");
                if (!targetElement || typeof html2canvas !== "function") {
                    alert("이미지 저장 기능을 불러오지 못했습니다.");
                    return;
                }

                try {
                    html2canvas(targetElement, {
                        scale: 8,
                        backgroundColor: null,
                        useCORS: true,
                        allowTaint: false
                    }).then(canvas => {
                        try {
                            const finalCanvas = document.createElement("canvas");
                            finalCanvas.width = 1800;
                            finalCanvas.height = 4000;
                            const ctx = finalCanvas.getContext("2d");

                            ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 1800, 4000);

                            const dataURL = finalCanvas.toDataURL("image/jpeg", 1.0);
                            saveImg(dataURL, "wallpaper.jpg");
                        } catch (error) {
                            alert("이미지 저장 실패: " + error.message);
                        }
                    }).catch(error => {
                        alert("이미지 저장 실패: " + error.message);
                    });
                } catch (error) {
                    alert("이미지 저장 실패: " + error.message);
                }
            });
        }

        // 처음 접속 시 홈 유니폼 + 김오규(20) 마킹으로 설정
        $("#wallpaperButton > button:nth-of-type(1)").click();
        wallpaperLetterSpacing();

        // 모바일 버전 버튼 텍스트 축약
        if ($(window).width() < 768) {
            const lang = localStorage.getItem("lang") || "ko";
            if (lang === "ko") {
                $("#wallpaperButton > button:nth-of-type(1)").text("홈");
                $("#wallpaperButton > button:nth-of-type(2)").text("원정");
                $("#wallpaperButton > button:nth-of-type(3)").text("GK 홈");
                $("#wallpaperButton > button:nth-of-type(4)").text("GK 원정");
            } else if (lang === "en") {
                $("#wallpaperButton > button:nth-of-type(1)").text("Home");
                $("#wallpaperButton > button:nth-of-type(2)").text("Away");
                $("#wallpaperButton > button:nth-of-type(3)").text("GK Home");
                $("#wallpaperButton > button:nth-of-type(4)").text("GK Away");
            } else if (lang === "pt") {
                $("#wallpaperButton > button:nth-of-type(1)").text("1ª");
                $("#wallpaperButton > button:nth-of-type(2)").text("2ª");
                $("#wallpaperButton > button:nth-of-type(3)").text("GK 1ª");
                $("#wallpaperButton > button:nth-of-type(4)").text("GK 2ª");
            } else if (lang === "es") {
                $("#wallpaperButton > button:nth-of-type(1)").text("1ª");
                $("#wallpaperButton > button:nth-of-type(2)").text("2ª");
                $("#wallpaperButton > button:nth-of-type(3)").text("PT 1ª");
                $("#wallpaperButton > button:nth-of-type(4)").text("PT 2ª");
            } else if (lang === "jp") {
                $("#wallpaperButton > button:nth-of-type(1)").text("ホーム");
                $("#wallpaperButton > button:nth-of-type(2)").text("アウェイ");
                $("#wallpaperButton > button:nth-of-type(3)").text("GK ホーム");
                $("#wallpaperButton > button:nth-of-type(4)").text("GK アウェイ");
            }
        }
    }

    afterLoading();
});
