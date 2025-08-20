# About
This repository is a learning exercise in PHP and JavaScript, focusing on learning to use reusable components and develop accessible navigation menus. The project was began during my spring 2025 co-op work term, and is being continued on my own time. 
---
# April 2025
[x] adjust pages as per last meeting
[x] add dropdowns as per last meeting
[x] incorporate ul-li into nav
[x] would love to use php includes for menu - too complex to figure out right now, do after next meeting
# May 2025
[] need to figure out how to CLOSE dropdowns on click as well
[] want to make sure other LINKS are actually clickable while dropdowns are open on mobile - currently clicking anywhere outside the dropdown only closes the dropdown, and another click must be made - but a layout shift occurs. this doesn't occur on desktop so i think it must be something about giving them a relative position on clicking .dropdown-control on mobile
	maybe something to the effect of on top-nav-item click, change dropdown-content position to relative - but how to make sure it stays that way?	some pseudocode:
		if @media screen and width < 42em:
			upon clicking any top-nav-item:
				if .dropdown-content position=relative:
					set .dropdown-content position=relative
	OR:
		if @media screen and width < 42em:
			if .dropdown-content position=relative:
				set (something about removing body tab-index="-1"????)


Smallest text size: 16px
Line height: 32px (set in normalize.css)
	acceptable multiples:
		1rem (16px)
		0.5rem (8px)
		2rem (32px)
		but ultimately the TOTAL height of an element must add to a multiple of 32px!!
		but then later in the baseline article it talks about how using a half-baseline is actually more flexible - so baseline is 16px/1rem/1em?
Baseline: 16px
	smallest text: 16px
	typical line height: 32px

	header height: 4x baseline

//https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/
//https://www.w3.org/WAI/content-assets/wai-aria-practices/patterns/disclosure/examples/js/disclosureMenu.js