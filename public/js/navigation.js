const navBtn = document.querySelector('.navigation__button');
const navBar = document.querySelector('.navigation__menu');

// const backGround = document.querySelector('.navigation__background');

// navBar.style.display = "none"

const show = () => {

	if (navBar.style.display === 'none') {
		navBar.style.display = 'block';

		navBar.ontransitionend = () => {
			navBar.style.display = 'block';
		};
	} else {
		navBar.ontransitionend = () => {
			navBar.style.display = 'none';
		};
	}
}

navBtn.addEventListener('click', show);
