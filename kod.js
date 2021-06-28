var fnev = document.getElementById("fnev");
var fnevClass = document.getElementsByClassName("fnev");
var szoveg = document.getElementById("szoveg");
var sp = document.getElementById("sp");
var bele = false;
fnev.addEventListener("focusin", valami);
fnev.addEventListener("focusout", valami);

function valami() {
    if (bele == false) {
        bele = true;
        if (fnev.value == "") {
            sp.style.top = "11px";
            sp.style.animation = "none";
            sp.style.display = "block";
            sp.style.zIndex = "1";
            sp.style.color = "rgb(184, 24, 184)";
            sp.style.animation = "animacio 0.2s";
            sp.style.animationFillMode = "forwards";
        } else {
            sp.style.animation = "none";
            sp.style.display = "block";
            sp.style.top = "-8px";
        }
    } else {
        bele = false;
        if (fnev.value == "") {
            sp.style.top = "-8px";
            sp.style.animation = "none";
            sp.style.display = "block";
            sp.style.zIndex = "-1";
            sp.style.color = "gray";
            sp.style.animation = "animacio2 0.2s";
            sp.style.animationFillMode = "forwards";
        } else {
            sp.style.animation = "none";
            sp.style.display = "none";
            sp.style.top = "11px";
        }
    }
}