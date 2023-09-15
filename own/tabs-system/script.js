// Клас для типів вакансій
class VacancyType {
    constructor(icon, title, vacancies) {
        this.icon = icon;
        this.title = title;
        this.vacancies = vacancies;
        this.tabButton = this.generateTabButton();
        this.vacancyBlock = this.generateVacancyBlock();
    }

    // Метод для генерації HTML кнопки вкладки
    generateTabButton() {
        const button = document.createElement('button');
        button.classList.add('tab-button');
        button.setAttribute('data-type', this.title.toLowerCase());
        button.innerHTML = `<img src="${this.icon}" alt="${this.title}">${this.title}`;
        return button;
    }

    // Метод для генерації HTML блоку з вакансіями
    generateVacancyBlock() {
        const block = document.createElement('div');
        block.classList.add('vacancy');
        block.classList.add('hidden'); // Приховуємо блок за замовчуванням
        block.setAttribute('data-type', this.title.toLowerCase());
        this.vacancies.forEach(vacancy => {
            const vacancyElement = document.createElement('div');
            vacancyElement.innerHTML = `
                <h3>${vacancy.companyName} (${this.title})</h3>
                <p>Назва компанії: ${vacancy.companyName}</p>
                <p>Заробітна плата: ${vacancy.salary}</p>
                <p>Вимоги: ${vacancy.requirements}</p>
            `;
            block.appendChild(vacancyElement);
        });
        return block;
    }
}

// Завантажуємо дані з JSON-файлу та обробляємо їх
fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const vacancyTypes = data.vacancyTypes;

        // Створюємо об'єкти типів вакансій та додаємо їх до сторінки
        vacancyTypes.forEach(typeData => {
            const vacancyType = new VacancyType(typeData.icon, typeData.title, typeData.vacancies);

            const tabsContainer = document.querySelector('.tabs');
            const vacanciesContainer = document.querySelector('.vacancies');

            tabsContainer.appendChild(vacancyType.tabButton);
            vacanciesContainer.appendChild(vacancyType.vacancyBlock);
        });

        // Додаємо обробник подій для кнопок вкладок
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Визначаємо, чи вже має кнопка клас 'active'
                const isActive = button.classList.contains('active');
                tabButtons.forEach(tabButton => {
                    tabButton.classList.remove('active'); // Видаляємо клас 'active' у всіх кнопок
                });
                if (!isActive) {
                    button.classList.add('active'); // Додаємо клас 'active' лише якщо кнопка не має його
                }

                // Показуємо/приховуємо блоки вакансій відповідно до натиснутої кнопки
                const type = button.getAttribute('data-type');
                const vacancyBlocks = document.querySelectorAll('.vacancy');
                vacancyBlocks.forEach(vacancy => {
                    if (vacancy.getAttribute('data-type') === type) {
                        if (!isActive) {
                            vacancy.classList.remove('hidden'); // Показуємо блок, якщо кнопка активна
                        } else {
                            vacancy.classList.add('hidden'); // Приховуємо блок, якщо кнопка неактивна
                        }
                    } else {
                        vacancy.classList.add('hidden');
                    }
                });
            });
        });

        // Додаємо обробник подій для блоків вакансій
        const vacancyBlocks = document.querySelectorAll('.vacancy');
        vacancyBlocks.forEach(block => {
            block.addEventListener('click', () => {
                if (block.classList.contains('active')) {
                    block.classList.remove('active');
                } else {
                    block.classList.add('active');
                }
            });
        });
    })
    .catch(error => {
        console.error('Помилка завантаження даних з JSON:', error);
    });
