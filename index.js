// open
let hamburger = document.getElementById('hamburgerMenu')
hamburger.addEventListener('click', function () {
    console.log("c")
    document.getElementById('headerHamburger').style.transform = "translateY(0)"
})

// close
let hamburgerClose = document.getElementById('fa-xmark')
hamburgerClose.addEventListener('click', function () {
    console.log("close")
    document.getElementById('headerHamburger').style.transform = "translateY(-350px)"
})


// 

let getSwitchBtn = document.querySelectorAll(".switchBtn");
// play
let getPlayIconCon = document.getElementById('playIconCon')
let getInnerO = document.getElementById('innerO');
let getPlayInnerZ = document.getElementById('innerZ');
let faPlay = document.getElementById('fa-play');
//heart
let hearIconCon = document.getElementById('hearIconCon');
let faHeart = document.getElementById('fa-heart')


getSwitchBtn[1].addEventListener('click', function () {
    document.getElementById("arrowGreen").style.display = "none",
    document.getElementById("arrowBerry").style.display = "none",
    document.getElementById("arrowPurple").style.display = "block",
        getPlayIconCon.style.backgroundColor = "#f6ecf9";
    getInnerO.style.backgroundColor = "#ecd8f3";
    getPlayInnerZ.style.backgroundColor = "#D0A0E0";
    faPlay.style.color = "#D0A0E0";
    hearIconCon.style.backgroundColor = "#f6ecf9";
    faHeart.style.backgroundColor = "#D0A0E0";
})

getSwitchBtn[0].addEventListener('click', function () {
    document.getElementById("arrowGreen").style.display = "block",
    document.getElementById("arrowBerry").style.display = "none",
    document.getElementById("arrowPurple").style.display = "none",
        getPlayIconCon.style.backgroundColor = "#0b50361c";
    getInnerO.style.backgroundColor = "#0b50361c";
    getPlayInnerZ.style.backgroundColor = "#0B5036";
    faPlay.style.color = "#0B5036";
    hearIconCon.style.backgroundColor = "#0b50361c";
    faHeart.style.backgroundColor = "#0B5036";
})

getSwitchBtn[2].addEventListener('click', function () {
    document.getElementById("arrowGreen").style.display = "none",
    document.getElementById("arrowBerry").style.display = "block",
    document.getElementById("arrowPurple").style.display = "none",
        getPlayIconCon.style.backgroundColor = "#f1dada";
    getInnerO.style.backgroundColor = "#f1dada";
    getPlayInnerZ.style.backgroundColor = "#D28787";
    faPlay.style.color = "#D28787";
    hearIconCon.style.backgroundColor = "#f1dada";
    faHeart.style.backgroundColor = "#D28787";
})