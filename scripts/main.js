import {
        clearAllBodyScrollLocks,
        disableBodyScroll,
        enableBodyScroll,
      } from 'https://cdn.jsdelivr.net/gh/rick-liruixin/body-scroll-lock-upgrade@v1.1.0/lib/index.esm.js';
const topnavOpen = document.querySelector('#topnavOpen')
const isMobile = window.matchMedia('(width < 50em)');
const topnav = document.querySelector('#topnav');
const body = document.querySelector('body');
const main = document.querySelector('main');

function setupMobileNav(isMobile){
	if (isMobile.matches){
		// is mobile
		console.log('is mobile');
		closeMobileNav();
		// topnav.setAttribute('inert', '');
		topnav.style.transition = 'none';
	}
	else {
		// is tablet/desktop
		console.log('is tablet/desktop');
		// closeMobileNav();
		topnav.removeAttribute('inert');
	}
}

function openMobileNav(){
	topnavOpen.setAttribute('aria-expanded', 'true');
	topnav.removeAttribute('inert'); 
	topnav.removeAttribute('style');
	main.setAttribute('inert', ''); 
	disableBodyScroll(body);
	topnavClose.focus();
}

function closeMobileNav(){
	topnavOpen.setAttribute('aria-expanded', 'false');
	topnav.setAttribute('inert', '');
	main.removeAttribute('inert');
	enableBodyScroll(body);
	topnavOpen.focus();

	setTimeout(() => { // i think this isn't finished because the browser console gives an error that siteTimeout isn't defined. BUT even with this error, it IS functioning to ensure the mobile Nav isn't shown when changing breakpoints. 
	// oh lol it's just supposed to be a function called "setTimeout" but I'd dictated "siteTimeout"
		topnav.style.transition = 'none';
	}, 500);
}

setupMobileNav(isMobile); //checks to determine whether it is necessary to set up the mobile nav based on viewport width

isMobile.addEventListener('deviceorientation', setupMobileNav(isMobile)); //rechecks when device orientation changes

isMobile.addEventListener('change', function(e){
	setupMobileNav(e); //rechecks when device viewport width changes
}); 

topnavOpen.addEventListener('click', 
	()=> {
	let navState = topnavOpen.getAttribute('aria-expanded')
	if (navState === 'false')
		openMobileNav()
	else
		closeMobileNav()
})