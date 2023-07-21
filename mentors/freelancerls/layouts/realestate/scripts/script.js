const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  
  // Navigation arrows
  navigation: {
    nextEl: '.body-main-block__arrow.swiper-button-next',
    prevEl: '.body-main-block__arrow.swiper-button-prev',
  },
});

// Switch between tabs

const tabNavigationItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.tabs-deals__tab');

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let targetActiveIndex = null;
  if (targetElement.closest('.tabs-deals__button')) {
    tabNavigationItems.forEach((tabNavigationItem, index) => {
      if (tabNavigationItem.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavigationItem.classList.remove('active');
      }
      if (tabNavigationItem === targetElement) {
        targetActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    tabItems[targetActiveIndex].classList.add('active');
    tabItems[currentActiveIndex].classList.remove('active')
  }
});

