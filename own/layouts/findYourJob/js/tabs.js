// Ваш JSON з даними
const data = {
		"design": {
				"pathToIcon": "images/categories/design.svg",
				"vacancies": [
						{
								"companyIcon": "images/companies/logo-company.png",
								"jobTitle": "Назва вакансії 1",
								"location": "Місцезнаходження 1",
								"salary": "Зарплата 1",
								"requirements": ["Вимога 1", "Вимога 2"],
								"link": "Посилання 1"
						},
						// Додайте інші вакансії для категорії1
				]
		},
		"cybersecurity": {
			"pathToIcon": "images/categories/design.svg",
			"vacancies": [
					{
							"companyIcon": "images/companies/logo-company.png",
							"jobTitle": "Назва вакансії 2",
							"location": "Місцезнаходження 1",
							"salary": "Зарплата 1",
							"requirements": ["Вимога 1", "Вимога 2"],
							"link": "Посилання 1"
					},
					// Додайте інші вакансії для категорії1
			]
	},
		
};

// Отримати елементи DOM для кнопок і вакансій
const categoriesNav = document.querySelector(".categories__navigation");
const vacanciesList = document.querySelector(".vacancies__list");

// Функція для створення кнопок категорій з JSON
function createCategoryButtons() {
		for (const category in data) {
				const button = document.createElement("button");
				button.className = "categories__button button-navigation";
				button.type = "button";

				button.innerHTML = `
				<img class="button-navigation__icon" src="${data[category].pathToIcon}" alt="">
				<span class="button-navigation__link">${category}</span>
				`;

				button.addEventListener("click", () => {
						// При кліку на кнопку відображаємо відповідні вакансії
						displayVacancies(data[category].vacancies);
				});

				categoriesNav.appendChild(button);
		}
}

// Функція для відображення вакансій
function displayVacancies(vacancies) {
		vacanciesList.innerHTML = "";

		vacancies.forEach(vacancy => {
				const vacancyItem = document.createElement("div");
				vacancyItem.className = "vacancies__item item-vacancies";

				vacancyItem.innerHTML = `
					<div class="item-vacancies__logo">
						<img src="${vacancy.icon}" alt="">
					</div >
					<div class="item-vacancies__title">
						${vacancy.jobTitle}
					</div>
					<div class="item-vacancies__location">
						${vacancy.location}
					</div>
					<div class="item-vacancies__price price-item-vacancies">
						${vacancy.salary}
					</div>
					<div class="item-vacancies__hint hint">
						<div class="hint__text">
								Требования:
						</div>
						<ul class="hint__list">
						${vacancy.requirements.map(item => `<li class="hint__item">${item}</li>`).join("")}
						</ul>
					</div>
					<a href="${vacancy.link}" class="item-vacancies__link">Подробнее</a>
				`;

				vacanciesList.appendChild(vacancyItem);
		});
}

// Виклик функції для створення кнопок категорій
createCategoryButtons();

// Відображення вакансій для першої категорії за замовчуванням
displayVacancies(data["design"].vacancies);
