function showMySkype() {
    const element = document.getElementById('ShowSkype');

    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function exploreMore() {
    const dots = document.getElementById("dots");
    const exploreText = document.getElementById("explore");
    const exploreBtn = document.getElementById("expBtn");

    if(dots.style.display === "none") {
        dots.style.display = "inline";
        exploreBtn.innerHTML = "Explore";
        exploreText.style.display = "none";
    } else {
        dots.style.display = "none";
        exploreBtn.innerHTML = "Hide";
        exploreText.style.display = "inline";
    }
}


const getbutton = document.getElementById('getUpBtn');
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if(document.body.scrollTop > 50 && document.body.scrollTop <2900 || document.documentElement.scrollTop > 50 && document.documentElement.scrollTop <2900 ) {
        getbutton.style.display ="block";
    } else {
        getbutton.style.display ="none";
    }
}

function getUp() {
    document.documentElement.scrollTop=0;
}
