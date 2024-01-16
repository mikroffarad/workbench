function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		const navBtnCloned = navBtn.cloneNode(true);

		navBtnCloned.style.position = "absolute";
		navBtnCloned.style.top = menuIcon.offsetTop + 'px';
		navBtnCloned.style.left = menuIcon.offsetLeft + 'px';
		navBtnCloned.onclick = function () {
			nav.classList.toggle('mobile-nav--open');
			menuIcon.classList.toggle('nav-icon--active');
			nav.removeChild(navBtnCloned)
		}

		nav.appendChild(navBtnCloned)

		document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;
