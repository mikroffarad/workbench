const mainNews = data.items.slice(0, 3);
const smallNews = data.items.slice(3, 12);

const mainNewsContainer = document.querySelector('.articles__big-column');
const smallNewsContainer = document.querySelector('.articles__small-column');

const createMainNewsItem = (item) => {
  // <template id="main-news-item">
//   <article className="main-article">
//     <div className="main-article__image-container">
//       <img className="main-article__image" src="./images/image2.jpg" alt="Photo news">
//     </div>
//     <div className="main-article__content">
// 				<span className="article-category main-article__category">
// 					Технологии
// 				</span>
//       <h2 className="main-article__title">
//         Как DJ Shadow попал в книгу рекордов Гиннеса из-за альбома
//       </h2>
//       <p className="main-article__text">
//         Технологические тренды меняют наш привычный мир. Глобальные корпорации задают новые тренды айтишникам на
//         разработку, а дизайнеров заставляю…
//       </p>
//       <span className="article-source main-article__source">
// 					Источник
// 				</span>
//     </div>
//   </article>
// </template>

  const article = document.createElement('article');

  const categoryData = data.categories.find((categoryItem) => categoryItem.id === item.category_id);
  const sourceData = data.sources.find((sourceItem) => sourceItem.id === item.source_id);

  const imageContainer = document.createElement('div');
  const image = document.createElement('img');
  const content = document.createElement('div');
  const category = document.createElement('span');
  const title = document.createElement('h2');
  const text = document.createElement('p');
  const source = document.createElement('span');

  imageContainer.appendChild(image);
  article.appendChild(imageContainer);
  content.appendChild(category);
  content.appendChild(title);
  content.appendChild(text);
  content.appendChild(source);
  article.appendChild(content);

  article.classList.add('main-article');
  imageContainer.classList.add('main-article__image-container');
  image.classList.add('main-article__image');
  content.classList.add('main-article__content');
  category.classList.add('article-category', 'main-article__category');
  title.classList.add('main-article__title');
  text.classList.add('main-article__text');
  source.classList.add('article-source', 'main-article__source');

  title.textContent = item.title
  image.src = item.image
  category.textContent = categoryData.name
  text.textContent = item.description;
  source.textContent = sourceData.name;

  return article;

}

const createSmallNewsItem = (item) => {

  // <template id="small-article-item">
//   <article className="small-article">
//     <h2 className="small-article__title">
//       В американском зоопарке празднуют рождение гориллы: видео
//     </h2>
//     <p className="small-article__caption">
// 				<span className="article-date small-article__date">
// 					12 июля
// 				</span>
//       <span className="article-source small-article__source">
// 					Источник
// 				</span>
//     </p>
//   </article>
// </template>

  const article = document.createElement('article');

  const sourceData = data.sources.find((sourceItem) => sourceItem.id === item.source_id);
  const dateData = new Date(item.date).toLocaleDateString('ru-RU', {
    month: 'long',
    day: 'numeric'
  });

  const title = document.createElement('h2');
  const caption = document.createElement('p');
  const date = document.createElement('span');
  const source = document.createElement('span');

  article.appendChild(title);
  article.appendChild(caption);
  caption.appendChild(date);
  caption.appendChild(source);


  article.classList.add('small-article');
  title.classList.add('small-article__title');
  caption.classList.add('small-article__caption');
  date.classList.add('article-date', 'small-article__date');
  source.classList.add('article-source', 'small-article__source');
  date.textContent = dateData;
  title.textContent = item.title;
  source.textContent = sourceData.name;

  return article;

}

mainNews.forEach((item) => {
  mainNewsContainer.appendChild(createMainNewsItem(item));
});
smallNews.forEach((item) => {
  smallNewsContainer.appendChild(createSmallNewsItem(item));
});