// Ваш JSON з даними
const data = {
	"Дизайн": {
		"typeIcon": "images/categories/design.svg",
		"vacanciesList": [
			{
				"companyIcon": "images/companies/01.svg",
				"jobTitle": "Графічний дизайнер",
				"location": "Київ",
				"salary": "40 000 ₴",
				"requirements": ["Adobe Photoshop", "Adobe Illustrator"],
				"link": "https://example.com/vacancy1"
			},
			{
				"companyIcon": "images/companies/02.svg",
				"jobTitle": "Веб-дизайнер",
				"location": "Львів",
				"salary": "45 000 ₴",
				"requirements": ["HTML", "CSS", "Adobe XD"],
				"link": "https://example.com/vacancy2"
			},
			{
				"companyIcon": "images/companies/03.svg",
				"jobTitle": "UI/UX дизайнер",
				"location": "Харків",
				"salary": "50 000 ₴",
				"requirements": ["User Research", "Wireframing", "Prototyping"],
				"link": "https://example.com/vacancy3"
			},
			{
				"companyIcon": "images/companies/04.svg",
				"jobTitle": "Мобільний дизайнер",
				"location": "Одеса",
				"salary": "45 000 ₴",
				"requirements": ["Mobile App Design", "Sketch", "InVision"],
				"link": "https://example.com/vacancy4"
			}
		]
	},
	"Розробка": {
		"typeIcon": "images/categories/develop.svg",
		"vacanciesList": [
			{
				"companyIcon": "images/companies/05.svg",
				"jobTitle": "Front-end розробник",
				"location": "Київ",
				"salary": "50 000 ₴",
				"requirements": ["HTML", "CSS", "JavaScript"],
				"link": "https://example.com/vacancy5"
			},
			{
				"companyIcon": "images/companies/06.svg",
				"jobTitle": "Back-end розробник",
				"location": "Львів",
				"salary": "55 000 ₴",
				"requirements": ["Node.js", "Express", "MongoDB"],
				"link": "https://example.com/vacancy6"
			},
			{
				"companyIcon": "images/companies/07.svg",
				"jobTitle": "Full-stack розробник",
				"location": "Харків",
				"salary": "60 000 ₴",
				"requirements": ["React", "Node.js", "MongoDB"],
				"link": "https://example.com/vacancy7"
			},
			{
				"companyIcon": "images/companies/08.svg",
				"jobTitle": "DevOps інженер",
				"location": "Одеса",
				"salary": "55 000 ₴",
				"requirements": ["Docker", "Kubernetes", "CI/CD"],
				"link": "https://example.com/vacancy8"
			}
		]
	},
	"Копірайтинг": {
		"typeIcon": "images/categories/copywriting.svg",
		"vacanciesList": [
			{
				"companyIcon": "images/companies/09.svg",
				"jobTitle": "Копірайтер",
				"location": "Київ",
				"salary": "30 000 ₴",
				"requirements": ["Створення контенту", "SEO-оптимізація"],
				"link": "https://example.com/vacancy9"
			},
			{
				"companyIcon": "images/companies/10.svg",
				"jobTitle": "Технічний письменник",
				"location": "Львів",
				"salary": "35 000 ₴",
				"requirements": ["Технічна публікація", "Редактура"],
				"link": "https://example.com/vacancy10"
			},
			{
				"companyIcon": "images/companies/11.svg",
				"jobTitle": "Копірайтер-редактор",
				"location": "Харків",
				"salary": "40 000 ₴",
				"requirements": ["Редактура", "Створення продаючого контенту"],
				"link": "https://example.com/vacancy11"
			},
			{
				"companyIcon": "images/companies/12.svg",
				"jobTitle": "Соціальний медіа копірайтер",
				"location": "Одеса",
				"salary": "35 000 ₴",
				"requirements": ["Соціальні мережі", "Творчий підхід"],
				"link": "https://example.com/vacancy12"
			}
		]
	},
	"Безпека": {
		"typeIcon": "images/categories/security.svg",
		"vacanciesList": [
			{
				"companyIcon": "images/companies/13.svg",
				"jobTitle": "Системний адміністратор",
				"location": "Київ",
				"salary": "45 000 ₴",
				"requirements": ["Linux", "Network Security"],
				"link": "https://example.com/vacancy13"
			},
			{
				"companyIcon": "images/companies/14.svg",
				"jobTitle": "Інформаційний аналітик",
				"location": "Львів",
				"salary": "50 000 ₴",
				"requirements": ["Пошук інформації", "Аналіз даних"],
				"link": "https://example.com/vacancy14"
			},
			{
				"companyIcon": "images/companies/15.svg",
				"jobTitle": "Ethical Hacker",
				"location": "Харків",
				"salary": "55 000 ₴",
				"requirements": ["Penetration Testing", "Security Tools"],
				"link": "https://example.com/vacancy15"
			},
			{
				"companyIcon": "images/companies/16.png",
				"jobTitle": "Інформаційний безпеки аналітик",
				"location": "Одеса",
				"salary": "50 000 ₴",
				"requirements": ["Cybersecurity", "Incident Response"],
				"link": "https://example.com/vacancy16"
			}
		]
	},
	"Відео": {
		"typeIcon": "images/categories/video.svg",
		"vacanciesList": [
			{
				"companyIcon": "images/companies/17.svg",
				"jobTitle": "Відеограф",
				"location": "Київ",
				"salary": "40 000 ₴",
				"requirements": ["Відеомонтаж", "Креативність"],
				"link": "https://example.com/vacancy17"
			},
			{
				"companyIcon": "images/companies/18.svg",
				"jobTitle": "Відеоредактор",
				"location": "Львів",
				"salary": "45 000 ₴",
				"requirements": ["Adobe Premiere Pro", "After Effects"],
				"link": "https://example.com/vacancy18"
			},
			{
				"companyIcon": "images/companies/19.svg",
				"jobTitle": "Аніматор",
				"location": "Харків",
				"salary": "50 000 ₴",
				"requirements": ["2D анімація", "Adobe Animate"],
				"link": "https://example.com/vacancy19"
			},
			{
				"companyIcon": "images/companies/01.svg",
				"jobTitle": "Відеооператор",
				"location": "Одеса",
				"salary": "45 000 ₴",
				"requirements": ["Камераменство", "Відеозйомка"],
				"link": "https://example.com/vacancy20"
			}
		]
	},
	"Освіта": {
		"typeIcon": "images/categories/education.svg",
		"vacanciesList": [
			{
				"companyIcon": "images/companies/02.svg",
				"jobTitle": "Викладач англійської мови",
				"location": "Київ",
				"salary": "35 000 ₴",
				"requirements": ["Високий рівень англійської", "Педагогічний досвід"],
				"link": "https://example.com/vacancy21"
			},
			{
				"companyIcon": "images/companies/03.svg",
				"jobTitle": "Онлайн-наставник",
				"location": "Львів",
				"salary": "40 000 ₴",
				"requirements": ["Викладання онлайн курсів", "Експерт в галузі"],
				"link": "https://example.com/vacancy22"
			},
			{
				"companyIcon": "images/companies/04.svg",
				"jobTitle": "Тренер",
				"location": "Харків",
				"salary": "45 000 ₴",
				"requirements": ["Підготовка навчальних програм", "Спорт"],
				"link": "https://example.com/vacancy23"
			},
			{
				"companyIcon": "images/companies/05.svg",
				"jobTitle": "Експерт-консультант",
				"location": "Одеса",
				"salary": "40 000 ₴",
				"requirements": ["Консультації студентів", "Експертна галузь"],
				"link": "https://example.com/vacancy24"
			}
		]
	}
};

// Отримати елементи DOM для кнопок і вакансій
const categoriesNav = document.querySelector(".categories__navigation");
const vacanciesList = document.querySelector(".vacancies__list");



// Функція для створення кнопок категорій з JSON
function createCategoryButtons() {
	let isFirst = true;
	for (const category in data) {
		const button = document.createElement("button");
		button.className = "categories__button button-navigation";
		button.type = "button";

		if (isFirst) {
			button.classList.add("active");
			isFirst = false;
		}

		button.innerHTML = `
				<img class="button-navigation__icon" src="${data[category].typeIcon}" alt="">
				<span class="button-navigation__link">${category}</span>
				`;

		button.addEventListener("click", () => {
			// При кліку на кнопку відображаємо відповідні вакансії
			displayVacancies(data[category].vacanciesList);
		});

		categoriesNav.appendChild(button);
	}
}

// Функція для відображення вакансій
function displayVacancies(vacancies) {
	vacanciesList.innerHTML = "";
	vacancies.forEach(vacancy => {
		const vacancyItem = document.createElement("li");
		vacancyItem.className = "vacancies__item item-vacancies";

		vacancyItem.innerHTML = `
		<div class="item-vacancies__col">
			<div class="item-vacancies__company">
				<div class="item-vacancies__logo">
					<img src="${vacancy.companyIcon}" alt="logo-company">
				</div>
				<div class="item-vacancies__about">
					<h3 class="item-vacancies__job-title title title--small">${vacancy.jobTitle}</h3>
					<p class="item-vacancies__location">${vacancy.location}</p>
				</div>
			</div>
			<div class="item-vacancies__salary">
				${vacancy.salary}
			</div>
		</div>
		<div class="item-vacancies__col">
			<div class="item-vacancies__hint hint">
				<div class="hint__text">Вимоги:</div>
				<ul class="hint__list">
					${vacancy.requirements.map(item => `<li class="hint__item">${item}</li>`).join("")}
				</ul>
			</div>
			<a href="${vacancy.link}" class="item-vacancies__link" target="_blank">Подробиці →</a>
		</div>
		`;

		vacanciesList.appendChild(vacancyItem);
	});
}

// Виклик функції для створення кнопок категорій
createCategoryButtons();

// Відображення вакансій для першої категорії за замовчуванням
displayVacancies(data["Дизайн"].vacanciesList);

// Отримати всі кнопки категорій
const categoryButtons = document.querySelectorAll(".categories__button");

// Додати обробник кліку до кожної кнопки
categoryButtons.forEach(button => {
	button.addEventListener("click", () => {
		// Зняти виділення з усіх кнопок
		categoryButtons.forEach(btn => {
			btn.classList.remove("active");
		});

		// Виділити обрану кнопку
		button.classList.add("active");

		// Отримати ім'я категорії з тексту кнопки
		const categoryName = button.querySelector(".button-navigation__link").textContent;

		// Відображення вакансій для обраної категорії
		displayVacancies(data[categoryName].vacanciesList);
	});
});

// Виклик функції для виділення активної вкладки і відображення вакансій для першої категорії за замовчуванням
categoryButtons["Дизайн"].click(); // Симулюємо клік на першу кнопку для початкового виділення