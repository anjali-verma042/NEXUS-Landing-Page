
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let autoSlideInterval;

    function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

    function nextSlide() {
    showSlide(currentSlide + 1);
    resetAutoSlide();
}

    function prevSlide() {
    showSlide(currentSlide - 1);
    resetAutoSlide();
}

    function goToSlide(n) {
    showSlide(n);
    resetAutoSlide();
}

    function autoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

    function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

    // Start auto-sliding
    autoSlide();

    // Pause auto-slide on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

    sliderContainer.addEventListener('mouseleave', () => {
    autoSlide();
});