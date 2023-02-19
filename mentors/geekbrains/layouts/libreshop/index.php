<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LibreShop</title>
    <link rel="stylesheet" href="styles/css/style.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="logoname">
                    <div class="logoname__logo">
                        <img src="images/header/logo.png" alt="">
                    </div>
                    <div class="logoname__name">
                        LibreShop
                    </div>
                </div>
                <nav class="header-nav">
                    <ul class="header-nav__list">
                        <li class="header-nav__item">
                            <a class="header-nav__link" href="index.php">Main</a>
                        </li>
                        <li class="header-nav__item">
                            <a class="header-nav__link" href="index.php?page=goods">Goods</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <main class="main">
        <?php
            error_reporting (E_ALL ^ E_NOTICE);
            
            include 'goods-db.php';

            $page = $_GET['page'];

            if (!isset($_GET['page'])) {
                require("templates/main.php");
            } 
            elseif ($page == "goods") {
                require("templates/goods.php");
            } 
            elseif ($page == "unit") {
                $id = $_GET['id'];
                $good = [];
                foreach ($goods as $unit) {
                    if ($unit['id'] == $id) {
                        $good == $unit;
                        break;
                    }
                }
                require("templates/unit.php");
            }
        ?>
    </main>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__top footer-top">
                    <div class="footer-top__contacts contacts"> 
                        <div class="contacts__contact">
                            <div class="contacts__icon icon">
                                <img src="images/footer/contacts/envelope.svg" alt="">
                            </div>
                            <div>
                                pine64@gmail.com
                            </div>
                        </div>
                        <div class="contacts__contact">
                            <div class="contacts__icon icon">
                                <img src="images/footer/contacts/phone-call.svg" alt="">
                            </div>
                            <div>
                                +380123456789
                            </div>
                        </div>
                        <div class="contacts__contact">
                            <div class="contacts__icon icon">
                                <img src="images/footer/contacts/placeholder.svg" alt="">
                            </div>
                            <div>
                                Mr John Smith. 132, My Street, Kingston, New York 12401.
                            </div>
                        </div>
                    </div>
                    <nav class="footer-top__nav nav">
                        <ul class="nav__list">
                            <li class="nav__item">
                                <a class="nav__link" href="/">Main</a>
                            </li>
                            <li class="nav__item">
                                <a class="nav__link" href="index.php?page=goods">Goods</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="footer__bottom footer-bottom">
                    <div class="footer-bottom__social social">
                        <ul class="social__list social-list">
                            <li class="social-list__item social-list-item">
                                <a href="social-list-item__link">
                                    <div class="icon">
                                        <img src="images/footer/social/vk-social-logotype.svg" alt="">
                                    </div>
                                </a>
                            </li>
                            <li class="social-list__item social-list-item">
                                <a href="social-list-item__link">
                                    <div class="icon">
                                        <img src="images/footer/social/google-plus-social-logotype.svg" alt="">
                                    </div>
                                </a>
                            </li>
                            <li class="social-list__item social-list-item">
                                <a href="social-list-item__link">
                                    <div class="icon">
                                        <img src="images/footer/social/facebook-logo.svg" alt="">
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-bottom__copyright">
                        <p>© Brandshop</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>