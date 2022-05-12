const sideMenu = document.querySelector('.left-sidebar');
const menuBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');


// Opens Side Menu Bar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

// Closes Side Menu Bar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});