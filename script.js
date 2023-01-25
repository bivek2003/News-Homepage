let opens = document.getElementById('open-bar');
let newpage = document.getElementById('newpage');
let closes = document.getElementById('close-bar');
let body = document.querySelector('body');
let images = document.getElementById('webicon');
if (window.innerWidth >= 1024) {
    newpage.style.visibility = 'visible';
}
function clicked() {
    if (opens.id == 'open-bar') {
        newpage.style.visibility = "visible";
        newpage.style.width = "70%";
        setTimeout(() => {
            opens.style.content = "url('icon-menu-close.svg')";
        }, 200);
        opens.id = 'close-bar';
        body.style.background = "hsla(240, 100%, 5%, 0.5)";
        body.style.overflow = 'hidden';
        images.style.filter = "brightness(50%)";
    }
    else {
        newpage.style.width = '0';
        body.style.overflow = 'visible';
        images.style.filter = "brightness(100%)";
        body.style.background = 'white';
        setTimeout(() => {
            opens.style.content = "url(icon-menu.svg)";
        }, 200);
        opens.id = 'open-bar';
    }
}

