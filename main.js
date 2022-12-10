
let slide = document.getElementById("images");

let arrSlide = ["images/photo-1.jpg", "images/photo-2.jpg", "images/photo-3.jpg", "images/photo-4.jpg", "images/photo-5.jpg", "images/photo-6.jpg"]

let i = 0;

function slideShow() {
    slide.setAttribute('src' ,arrSlide[i]);

    if(i == arrSlide.length -1){
        i = 0;
    } else {
        i++;
    }

    setTimeout(function(){
    
        slideShow();
    },3000)
}
slideShow()



