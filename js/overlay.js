// Overlay Menu

var header = document.getElementById('header');
var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('closeMenu');

document.getElementById('header').addEventListener('click', function() {
    overlay.classList.add('show-menu');
    header.classList.add('hide-header');
});

document.getElementById('closeMenu').addEventListener('click', function() {
    overlay.classList.remove('show-menu');
});

