window.onload = function() {
    setTimeout (function() {
        scrollTo(0, 0);
    }, 100);
}

function playerA() {
    document.getElementById("playerA").style.display = "block";
    document.getElementById("playerU18").style.display = "none";
    document.getElementById("playerU15").style.display = "none";
}

function playerU18() {
    document.getElementById("playerA").style.display = "none";
    document.getElementById("playerU18").style.display = "block";
    document.getElementById("playerU15").style.display = "none";
}

function playerU15() {
    document.getElementById("playerA").style.display = "none";
    document.getElementById("playerU18").style.display = "none";
    document.getElementById("playerU15").style.display = "block";
}