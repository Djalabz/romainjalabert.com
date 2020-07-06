// Overlay Menu

var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('closeMenu');

document.getElementById('menuSend').addEventListener('click', function() {
    overlay.classList.add('show-menu');
});

document.getElementById('closeMenu').addEventListener('click', function() {
    overlay.classList.remove('show-menu');
});

