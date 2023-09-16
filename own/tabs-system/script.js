// Клас для вкладок
class Tab {
    constructor(icon, title, content) {
        this.icon = icon;
        this.title = title;
        this.content = content;
        this.tabButton = this.generateTabButton();
        this.tabContent = this.generateTabContent();
    }

    // Метод для генерації HTML кнопки вкладки
    generateTabButton() {
        const button = document.createElement('button');
        button.classList.add('tab-button');
        button.innerHTML = `<img src="${this.icon}" alt="${this.title}">${this.title}`;
        return button;
    }

    // Метод для генерації HTML блоку контенту вкладки
    generateTabContent() {
        const contentNode = document.createElement('div');
        contentNode.classList.add('tab-content-item');
        // Використовуємо appendChild для додавання вмісту
        contentNode.appendChild(this.content);
        return contentNode;
    }
}

// Загальна функція для завантаження даних з JSON та обробки їх
function loadDataAndInitializeTabs() {
    fetch('tabs.json')
        .then(response => response.json())
        .then(data => {
            const tabsData = data.tabs;

            // Створюємо об'єкти вкладок та додаємо їх до сторінки
            tabsData.forEach(tabData => {
                const tab = new Tab(tabData.icon, tabData.title, tabData.contentNode);

                const tabsContainer = document.querySelector('.tabs');
                const tabContentContainer = document.querySelector('.tab-content');

                tabsContainer.appendChild(tab.tabButton);
                tabContentContainer.appendChild(tab.tabContent);

                // Додаємо обробник подій для кнопок вкладок
                tab.tabButton.addEventListener('click', () => {
                    // Визначаємо, чи вже має кнопка клас 'active'
                    const isActive = tab.tabButton.classList.contains('active');

                    // Знімаємо клас 'active' у всіх кнопок
                    document.querySelectorAll('.tab-button').forEach(button => {
                        button.classList.remove('active');
                    });

                    // Додаємо/видаляємо клас 'active' для натиснутої кнопки
                    if (!isActive) {
                        tab.tabButton.classList.add('active');
                    }
                });
            });
        })
        .catch(error => {
            console.error('Помилка завантаження даних з JSON:', error);
        });
}

// Викликаємо функцію для завантаження даних та ініціалізації вкладок
loadDataAndInitializeTabs();