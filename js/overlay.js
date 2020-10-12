// Overlay Menu

var header = document.getElementById('header');
var overlay = document.getElementById('overlay');
var closeWork = document.getElementById('closeWork');
var workOverlay = document.getElementById('workOverlay');
var portfolioOverlay = document.getElementById('portfolioOverlay');
var portfolioButton= document.getElementById('portfolio-button');
var contactOverlay = document.getElementById('contactOverlay');
var footerOverlay = document.getElementById('footerOverlay')

var aboutOverlay = document.getElementById('aboutOverlay');

var items = ['hka', 'midionze', 'castaway', 'street'];

// document.getElementById('header').addEventListener('click', function() {
//     overlay.classList.add('show-menu');
//     header.classList.add('hide-header');
//     overlay.classList.remove('close-menu');
//     header.classList.remove('show-header');
// });


// LOADING PAGE (JQUERY)


// $(document).ready(function() {
//     // PAGE IS FULLY LOADED  
//     // FADE OUT YOUR OVERLAYING DIV
//     setTimeout(() => {
//         $('#loading-overlay').fadeOut('fast');
//         console.log('loaded');
//     }, 3000);
//  });


// WORK SECTION



document.getElementById('work').addEventListener('click', function() {
    workOverlay.classList.add('show-work');
    header.classList.add('hide-header');
    workOverlay.classList.remove('close-menu');
    header.classList.remove('show-header');
    workOverlay.classList.remove('hide-work');
});

document.getElementById('closeWork').addEventListener('click', function() {
    workOverlay.classList.remove('show-work');
    header.classList.remove('hide-header');
    header.classList.add('show-header');
    workOverlay.classList.add('close-menu');
});

document.getElementById('portfolio-button-work').addEventListener('click', function() {
    portfolioOverlay.classList.add('show-portfolio');
    header.classList.add('hide-header');
    portfolioOverlay.classList.remove('close-menu');
    header.classList.remove('show-header');
    workOverlay.classList.add('hide-work');
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
    workOverlay.classList.add('hide-work');
});


// PORTFOLIO ITEMS


items.forEach((item) => 
document.getElementById(item+'-button').addEventListener('click', function() {  
    document.getElementById('portfolio-item '+item).classList.add('show-portfolio-item');
    header.classList.add('hide-header');
    header.classList.remove('show-header');
}),)

items.forEach((item) => 
document.getElementById('close-'+item).addEventListener('click', function() {
    document.getElementById('portfolio-item '+item).classList.remove('show-portfolio-item');
     header.classList.add('hide-header');
     header.classList.remove('show-header');
 }),)

items.forEach((item) => 
document.getElementById('portfolio-button '+item).addEventListener('click', function() {
    document.getElementById('portfolio-item '+item).classList.remove('show-portfolio-item');
}),)

items.forEach((item) => 
document.getElementById('contact-button '+item).addEventListener('click', function() {
    document.getElementById('portfolio-item '+item).classList.remove('show-portfolio-item');
    portfolioOverlay.classList.remove('show-portfolio');
    contactOverlay.classList.add('show-contact');
    contactOverlay.classList.remove('close-menu');
}),)

items.forEach((item) => 
document.getElementById('home-button '+item).addEventListener('click', function() {
    window.location.reload();
}),)


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


// FOOTER 


document.getElementById('terms').addEventListener('click', function() {
    footerOverlay.classList.add('show-footer');
    header.classList.add('hide-header-full');
    footerOverlay.classList.remove('close-menu');
    header.classList.remove('show-header');
});

document.getElementById('policy').addEventListener('click', function() {
    footerOverlay.classList.add('show-footer');
    header.classList.add('hide-header-full');
    footerOverlay.classList.remove('close-menu');
    header.classList.remove('show-header');
});

document.getElementById('closeFooter').addEventListener('click', function() {
    footerOverlay.classList.remove('show-footer');
    header.classList.remove('hide-header-full');
    header.classList.add('show-header');
    footerOverlay.classList.add('close-menu');
});

// document.getElementById('closeContact').addEventListener('click', function() {
//     contactOverlay.classList.remove('show-contact');
//     header.classList.remove('hide-header');
//     header.classList.add('show-header');
//     contactOverlay.classList.add('close-menu');
// });
