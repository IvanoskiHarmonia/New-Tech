let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos && document.getElementById("navbar").style.top != "0") {
        document.getElementById("navbar").style.top = "0";
    } else if (prevScrollpos < currentScrollPos && document.getElementById("navbar").style.top != "-80px") {
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}