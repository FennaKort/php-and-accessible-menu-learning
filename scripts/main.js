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
		topnav.setAttribute('inert', '');
		topnav.style.transition = 'none'; //necessary to ensure mobile nav panel doesn't appear when crossing breakpoints
	}
	else {
		// is tablet/desktop
		console.log('is tablet/desktop');
		topnav.removeAttribute('inert');
	}
}

function openMobileNav(){
	topnavOpen.setAttribute('aria-expanded', 'true');
	topnav.removeAttribute('inert'); 
	topnav.removeAttribute('style'); //removes transition=none so transition works on open/close
	main.setAttribute('inert', ''); 
	disableBodyScroll(body);
	topnavOpen.focus();
}

function closeMobileNav(){
	topnavOpen.setAttribute('aria-expanded', 'false');
	topnav.setAttribute('inert', '');
	main.removeAttribute('inert');
	enableBodyScroll(body);
	topnavOpen.focus();
	setTimeout(() => { //resets transition=none after 0.5s delay: allows close transition to run, then disallows transition again to ensure mobile nav panel doesn't show when crossing breakpoints
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