import {
        clearAllBodyScrollLocks,
        disableBodyScroll,
        enableBodyScroll,
      } from 'https://cdn.jsdelivr.net/gh/rick-liruixin/body-scroll-lock-upgrade@v1.1.0/lib/index.esm.js';
const topnavOpen = document.querySelector('#topnavOpen')
const topnavClose = document.querySelector('#topnavClose')
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
	topnav.setAttribute('inert', ''); //i think there was something in the video about making a separate wrapper for the mobile Nav - maybe the fact that we're supposed to be setting inert on it is likely the reason? 
		// not sure that would make a difference because wouldn't setting inert on a wrapper element still cause its content to be inert?
	// rn this is setting inert on the nav element as a whole whenever the mobile Nav is not open - inert is being set on main when mobile Nav IS open, which is intended behaviour for mobile Nav being open 
	main.removeAttribute('inert');
	enableBodyScroll(body);
	topnavOpen.focus();

	setTimeout(() => { // i think this isn't finished because the browser console gives an error that siteTimeout isn't defined. BUT even with this error, it IS functioning to ensure the mobile Nav isn't shown when changing breakpoints. 
	// oh lol it's just supposed to be a function called "setTimeout" but I'd dictated "siteTimeout"
		topnav.style.transition = 'none';
	}, 500);
}

setupMobileNav(isMobile);

isMobile.addEventListener('deviceorientation', setupMobileNav(isMobile));

topnavOpen.addEventListener('click', ()=> {
	topnavOpen.getAttribute('aria-expanded') == 'false' ?
		topnavOpen.setAttribute('aria-expanded', 'true') :
		topnavOpen.setAttribute('aria-expanded', 'false')
})

isMobile.addEventListener('change', function(e){
	setupMobileNav(e); //event fires any time isMobile's breakpoint is crossed; currently not working correctly - 21 aug - what did I mean by this lol???
});