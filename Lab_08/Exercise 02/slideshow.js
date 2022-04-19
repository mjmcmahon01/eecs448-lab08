let index = 1;
showSlides(index);

function next() {
    if(index < 5) {
        index++;
    }
    else if(index == 5) {
        index = 1;
    }
    showSlides(index);
}

function previous() {
    if(index > 1) {
        index--;
    }
    else if(index == 1) {
        index = 5;
    }
    showSlides(index);
}

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index-1].style.display = "block";
}