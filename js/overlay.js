// Overlay Menu

var header = document.getElementById('header');
var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('closeMenu');
var workOverlay = document.getElementById('workOverlay');
var portfolioOverlay = document.getElementById('portfolioOverlay');
var aboutOverlay = document.getElementById('aboutOverlay');

// document.getElementById('header').addEventListener('click', function() {
//     overlay.classList.add('show-menu');
//     header.classList.add('hide-header');
//     overlay.classList.remove('close-menu');
//     header.classList.remove('show-header');
// });


// WORK SECTION



document.getElementById('work').addEventListener('click', function() {
    workOverlay.classList.add('show-work');
    header.classList.add('hide-header');
    workOverlay.classList.remove('close-menu');
    header.classList.remove('show-header');
});

document.getElementById('closeMenu').addEventListener('click', function() {
    workOverlay.classList.remove('show-work');
    header.classList.remove('hide-header');
    header.classList.add('show-header');
    workOverlay.classList.add('close-menu');
});


// PORTFOLIO SECTION


document.getElementById('portfolio').addEventListener('click', function() {
    portfolioOverlay.classList.add('show-portfolio');
    header.classList.add('hide-header');
    portfolioOverlay.classList.remove('close-menu');
    header.classList.remove('show-header');
});

document.getElementById('closeFolio').addEventListener('click', function() {
    portfolioOverlay.classList.remove('show-portfolio');
    header.classList.remove('hide-header');
    header.classList.add('show-header');
    portfolioOverlay.classList.add('close-menu');
});


// ABOUT SECTION


document.getElementById('about').addEventListener('click', function() {
    aboutOverlay.classList.add('show-about');
    header.classList.add('hide-header');
    aboutOverlay.classList.remove('close-menu');
    header.classList.remove('show-header');
});

document.getElementById('closeAbout').addEventListener('click', function() {
    aboutOverlay.classList.remove('show-about');
    header.classList.remove('hide-header');
    header.classList.add('show-header');
    aboutOverlay.classList.add('close-menu');
});



// CONTACT SECTION


document.getElementById('contact').addEventListener('click', function() {
    contactOverlay.classList.add('show-contact');
    header.classList.add('hide-header');
    contactOverlay.classList.remove('close-menu');
    header.classList.remove('show-header');
});

document.getElementById('closeContact').addEventListener('click', function() {
    contactOverlay.classList.remove('show-contact');
    header.classList.remove('hide-header');
    header.classList.add('show-header');
    contactOverlay.classList.add('close-menu');
});
