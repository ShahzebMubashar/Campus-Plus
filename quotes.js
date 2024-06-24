let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("testimonial-slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active", "prev-slide", "next-slide");
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add("active");

    let prevIndex = slideIndex - 1 >= 0 ? slideIndex - 1 : slides.length - 1;
    let nextIndex = slideIndex + 1 < slides.length ? slideIndex + 1 : 0;

    slides[prevIndex].style.display = "block";
    slides[prevIndex].classList.add("prev-slide");

    slides[nextIndex].style.display = "block";
    slides[nextIndex].classList.add("next-slide");
}

setInterval(() => {
    changeSlide(1);
}, 3000);