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

    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.add("prev-slide");
    } else {
        slides[slides.length - 1].style.display = "block";
        slides[slides.length - 1].classList.add("prev-slide");
    }

    if (slides[slideIndex + 1]) {
        slides[slideIndex + 1].style.display = "block";
        slides[slideIndex + 1].classList.add("next-slide");
    } else {
        slides[0].style.display = "block";
        slides[0].classList.add("next-slide");
    }
}

// Auto change slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
