// JavaScript source code

// ‰æ‘œ‚ğ“Ç‚İ‚Ş //
const pics_src = ["image1.png", "image2.jpg", "image3.png", "image4.jfif", "image5.jfif", "image6.jfif", "image7.jfif"];

// ‰æ‘œ‚ğƒXƒ‰ƒCƒh‚³‚¹‚é”Ô† //
let num = -1;


function slideshow_timer() {
    if (num === 6) {
        num = 0;
    }
    else {
        num++;
    }
    document.getElemetnById("mypic").src = pics_src[num];
}

setInterval(slideshow_timer, 1000);