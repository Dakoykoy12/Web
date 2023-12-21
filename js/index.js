function toggleMenu() {
    var menu = document.getElementById('nav-links'); 

    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        menu.style.width = '0'; 
    } else {
        menu.style.display = 'flex';
        menu.style.width = 'auto'; 
    }
}


window.addEventListener('resize', function () {
    var menu = document.getElementById('nav-links'); 

    if (window.innerWidth > 768) {
        menu.style.display = 'flex';
        menu.style.width = 'auto'; 
    } else {
        menu.style.display = 'none';
    }
});


if (window.innerWidth <= 768) {
    var menu = document.getElementById('nav-links'); 
    menu.style.display = 'none';
}