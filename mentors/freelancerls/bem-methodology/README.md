# BEM Methodology

BEM (Block, Element, Modifier) methodology is based on the principle of partitioning the interface into independent blocks. It allows easy and quick make a page of any complexity and to reuse already existing code.

## Block
**Block** — independient component of the page which can be used several times.<br/>
<br/>
Before naming block class, we have to answer the question *«What is it?»*<br/>
<br/>
Names are written in **lowercase Latin letters**.<br/>
<br/>
Words are separated by a **hyphen *(-)***<br/>
<br/>
In CSS for blocks **you shouldn't use external geometry and positioning**. Thus, block becomes independent and it can be reused.<br/>
<br/>
For example:
```html
<div class="title"></div>
<form action="#" class="search-form"></form>
```
```sass
.title {
  text-transform: uppercase
  font-size: 34px
  letter-spacing: 8.95px
  // Don't do this:
  margin: 0 0 20px 0
  padding: 0 20px 
}
```
Blocks can be nested. Any nesting level is allowed. Example:
```html
<!-- "about" block -->
<div class="about">
  <!-- "title" nested block -->
  <div class="title"></div>
  <!-- "subtitle" nested block -->
  <div class="subtitle"></div>
</div>
```
## Element
**Element** — integral part of the block. Can't be used apart!<br/>
<br/>
Name of element also must answer the question *«What is it?»*.<br/>
<br/>
It has following syntax **(2 underscores)**:
```html
<!-- "menu" block -->
<nav class="menu">
  <!-- "link" element of "menu" block -->
  <a href="" class="menu__link"></a>
  <!-- "link" element of "menu" block -->
  <a href="" class="menu__link"></a>
  <!-- "link" element of "menu" block -->
  <a href="" class="menu__link"></a>
  <!-- "link" element of "menu" block -->
  <a href="" class="menu__link"></a>
</nav>
```
Blocks can be nested. Any nesting level is allowed.<br/>
Element is always a part of the block. **Hierarchy naming is not allowed!**<br/>
For example:
```html
<!-- Correct -->
<!-- "row" block -->
<div class="row">
  <!-- "column" element -->
  <div class="row__column">
    <!-- "item" element -->
    <div class="row__item"></div>
  </div>
</div>

<!-- Incorrect -->
<!-- "row" block -->
<div class="row">
  <!-- "column" element -->
  <div class="row__column">
    <!-- "item" element -->
    <div class="row__column__item"></div>
  </div>
</div>
```

## Usage tips for block and element:
- Use **block** when:
  - A piece of code is already used again.
  - At the same time, it shouldn't depend on other page's components.
- Use **element** when:
  - Piece of code **won't be used again**.
## Modifier
Used for style modifying of block or element. It's useful, when you need **to accent a certain object from lots of the same**.<br/>
<br/>
Name of modifier must describe state or appereance of the object.<br/>
<br/>
Modifier is **additionally** written to block or element class name by duplicating main class and adding modifier name:
```html
<!-- "menu" block -->
<nav class="menu">
  <!-- "item" element and "active" modifier -->
  <a href="" class="menu__item menu__item--active">Home</a>
  <!-- "item" element -->
  <a href="" class="menu__item">About Us</a>
  <!-- "item" element -->
  <a href="" class="menu__item">Portfolio</a>
  <!-- "item" element -->
  <a href="" class="menu__item">Contacts</a>
</nav>
```
## Mix
Allows to use both block and element in the same object.
```html
<!-- "about" block -->
<div class="about">
  <!-- "title" element -->
  <div class="about__title title"></div>
  <!-- "subtitle" element -->
  <div class="about__subtitle subtitle"></div>
</div>
```
This approach allows to set external geometry or positioning in element, and, at the same time, keep block generic.<br>
Thus, block is independent and can be reused.
