// Sticky Navbar
window.addEventListener('scroll', () => {
	var scroll = window.scrollY;
	var element = document.getElementById('navigation');
    var logoElement = document.getElementById('logo');
	if (scroll < 10) {
        element.classList.remove('sticky');
		logoElement.classList.remove('sticky-logo');
	} else {
        element.classList.add('sticky');
		logoElement.classList.add('sticky-logo');
	}
});

// Mobile View
function toggleNavbar() {
	var navBar_togglerElement = document.getElementById('navbar-toggler');
	navBar_togglerElement.classList.toggle('active');
	var navOneElement = document.getElementById('navbarOne');
	navOneElement.classList.toggle('show');
}

// Togle on link
function removeClass() {
	var navOneElement = document.getElementById('navbarOne');
	navOneElement.classList.remove('show');
	var navBar_togglerElement = document.getElementById('navbar-toggler');
	navBar_togglerElement.classList.toggle('active');
}
