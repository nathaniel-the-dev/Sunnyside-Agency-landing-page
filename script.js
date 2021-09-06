'use strict';

const menu = document.querySelector('#menu');

function toggleMenu(show) {
	menu.className = 'nav nav__links';

	requestAnimationFrame(() => menu.classList.add(show ? 'showing' : 'hidden'));
}

function handleClick(e) {
	const menuButton = e.target.closest('#menuButton');
	const isShowing = menu.classList.contains('showing');

	if (!e.target.closest('#menu') && !menuButton && isShowing) toggleMenu(false);

	if (menuButton) toggleMenu(!isShowing);
}

document.addEventListener('click', handleClick);
