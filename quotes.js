let slideIndex = 0;
const totalSlides = 10; // Number of slides

showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("testimonial-slide");

    // Reset slideIndex if it goes out of bounds
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides and remove active class
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active", "prev-slide", "next-slide");
        slides[i].style.display = "none";
    }

    // Display current slide with active class
    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add("active");

    // Determine prev and next slide indices
    let prevIndex = slideIndex - 1 >= 0 ? slideIndex - 1 : slides.length - 1;
    let nextIndex = slideIndex + 1 < slides.length ? slideIndex + 1 : 0;

    // Display prev slide
    slides[prevIndex].style.display = "block";
    slides[prevIndex].classList.add("prev-slide");

    // Display next slide
    slides[nextIndex].style.display = "block";
    slides[nextIndex].classList.add("next-slide");
}
