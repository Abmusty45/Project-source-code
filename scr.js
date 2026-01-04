let listItems = document.querySelector('.list-items');
let itemsBtn = document.querySelector('.items-btn');
let closeIcon = document.querySelector('.hero-close-icon');


itemsBtn.addEventListener('click', () => {
    listItems.classList.add('active');
})
closeIcon.addEventListener('click', () => {
    listItems.classList.remove('active');
})

document.addEventListener('DOMContentLoaded', () => {
    let heroImage = document.querySelector('.big-img');
    let thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', (e) => {
            let newImg = e.target.src;
            heroImage.src = newImg;
        });
    });
});

  
// apply theme to the page

const themeButtons = document.querySelectorAll('.theme-btn');
const htmlElement = document.documentElement;

// check if there's saved theme
const saveTheme = localStorage.getItem('theme');
applyTheme(saveTheme);


themeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const selectedTheme = this.getAttribute('data-theme');
        applyTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    });
});


function applyTheme(theme) {
    if(theme === 'light') {
        htmlElement.setAttribute('data-theme', 'light');

    } else if (theme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        
    }
};


















