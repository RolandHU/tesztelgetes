var fnev = document.getElementById("fnev");
var fnevClass = document.getElementsByClassName("fnev");
var szoveg = document.getElementById("szoveg");
var bele = false;
fnev.addEventListener("focusin", valami);
fnev.addEventListener("focusout", valami);

function valami() {
    if (bele == false) {
        bele = true;
        szoveg.style.color = "rgb(184, 24, 184)";
        szoveg.style.display = "block";
        fnev.classList.add("fnev")
    } else {
        bele = false;
        szoveg.style.color = "gray";
        szoveg.style.display = "none";
        fnev.classList.remove("fnev")
    }
}