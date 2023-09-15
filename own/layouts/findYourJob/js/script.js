"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;

	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open')
	}
}

// Button toggle switcher
document.addEventListener('DOMContentLoaded', function () {
	const buttons = document.querySelectorAll('.item-navigation');

	buttons.forEach(function (button) {
		button.addEventListener('click', function () {
			// Remove the 'active' class from all buttons
			buttons.forEach(function (btn) {
				btn.classList.remove('active');
			});

			// Add the 'active' class to the clicked button
			this.classList.add('active');
		});
	});
});

// Categories list
const categoriesList = [
	{
		"icon": "design",
		"title": "Design"
	},
	{
		"icon": "develop",
		"title": "Development"
	},
]

const buttonNavigationNode = document.createElement("button");
buttonNavigationNode.classList.add("")
