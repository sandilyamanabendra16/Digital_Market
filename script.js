document.getElementById('contactButton').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'flex';
});

// document.getElementById('closeButton').addEventListener('click', function() {
//     document.getElementById('popupForm').style.display = 'none';
// });

document.addEventListener('DOMContentLoaded', function() {
    const popupForm = document.getElementById('popupForm');
    const formContainer = document.getElementById('formContainer');

    popupForm.addEventListener('click', function(event) {
        // Check if the click is outside the form container
        if (!formContainer.contains(event.target) && event.target !== formContainer) {
            closePopup();
        }
    });

    function closePopup() {
        popupForm.style.display = 'none';
        // Or use a class to hide the popup:
        // popupForm.classList.remove('show');
    }
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.nav-button');
let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 25}%)`;
    navButtons.forEach((button, index) => {
        button.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3;
    updateSlider();
}

setInterval(nextSlide, 5000);

navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

function myfunction1() {
    // Get all the divs and images
    const divs = document.querySelectorAll('.cont_div');
    const images = document.querySelectorAll('.cont_img, .cont_img1, .cont_img2');

    // Reset all divs and hide all images
    divs.forEach(div => div.style.backgroundColor = '');
    images.forEach(img => img.style.display = 'none');

    // Get the clicked div
    const clickedDiv = event.currentTarget;

    // Change the clicked div's background color to red
    clickedDiv.style.backgroundColor = '#FF3147';

    // Determine which image to show based on the clicked div
    let imageToShow;
    if (clickedDiv.id === 'contdiv1') {
        imageToShow = document.querySelector('.cont_img1');
    } else if (clickedDiv.id === 'contdiv2') {
        imageToShow = document.querySelector('.cont_img');
    } else if (clickedDiv.id === 'contdiv3') {
        imageToShow = document.querySelector('.cont_img2');
    }

    // Show the corresponding image
    if (imageToShow) {
        imageToShow.style.display = 'block';
    }
}