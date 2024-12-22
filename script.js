let currentIndex = 0;
const slidesToShow = 3; // Number of images to show at once
const totalSlides = 8; // Total number of images
const totalPages = Math.ceil(totalSlides / slidesToShow);

document.getElementById('totalPages').innerText = totalPages;

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= totalPages) {
        currentIndex = totalPages - 1;
    }

    const gallery = document.querySelector('.gallery');
    const offset = -currentIndex * (100 / slidesToShow);
    gallery.style.transform = `translateX(${offset}%)`;

    document.getElementById('currentPage').innerText = currentIndex + 1;
}
