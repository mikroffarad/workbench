<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online shop</title>
    <link rel="stylesheet" href="styles/css/style.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="logoname">
                    <div class="logoname__logo">
                        <img src="images/header/logo.svg" alt="">
                    </div>
                    <div class="logoname__name">
                        PinePhone
                    </div>
                </div>
                <nav class="header-nav">
                    <ul class="header-nav__list">
                        <li class="header-nav__item">
                            <a class="header-nav__link" href="/">Main</a>
                        </li>
                        <li class="header-nav__item">
                            <a class="header-nav__link" href="index.php?page=shop">Shop</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <main>
        <?php
            $goods = [
                [
                    "id" => 1,
                    "image" => "https://www.pine64.org/wp-content/uploads/2021/10/PPP_main_page.png",
                    "name" => "PinePhone Pro",
                    "description" => "Meet the PinePhone Pro, our flagship smartphone and the best way to experience mainline Linux on a mobile device",
                    "price" => "$399"
                ]
                ,
                [
                    "id" => 2,
                    "image" => "https://slimbook.es/images/new/executive/img/test_executive.png",
                    "name" => "KDE Slimbook",
                    "description" => "The Linux ultrabook with a Ryzen 5700U processor and KDE's full-featured Plasma desktop running on KDE Neon and with access to hundreds of Open Source programs and utilities",
                    "price" => "$1050"
                ]
                ,
                [
                    "id" => 3,
                    "image" => "https://www.distrelec.ch/Web/WebShopImages/landscape_large/09/fa/banana-pi-30011509fa.jpg",
                    "name" => "Banana Pi",
                    "description" => "The Banana Pi hardware runs Android, Debian Linux, Ubuntu Linux, OpenSuse linux and images that run on the Raspberry Pi and Cubieboard. Banana PI has a Gigabit Ethernet port and a SATA socket. It can run with Android 4.2.2 smoothly. It can easily run games as it supports 1080P high definition video output.",
                    "price" => "$52"
                ]
            ];

            $page = $_GET['page'];
            if (!isset($page)) {
                require("templates/main.php");
            } 
            elseif ($page == "shop") {
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
                        <div class="contacts__contact email">
                            <div class="contacts__icon email__icon icon">
                                <img src="images/footer/contacts/envelope.svg" alt="">
                            </div>
                            <div class="email__value">
                                pine64@gmail.com
                            </div>
                        </div>
                        <div class="contacts__contact phone">
                            <div class="contacts__icon phone__icon icon">
                                <img src="images/footer/contacts/phone-call.svg" alt="">
                            </div>
                            <div class="phone__value">
                                +380123456789
                            </div>
                        </div>
                        <div class="contacts__contact address">
                            <div class="contacts__icon address__icon icon">
                                <img src="images/footer/contacts/placeholder.svg" alt="">
                            </div>
                            <div class="address__value">
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
                                <a class="nav__link" href="index.php?page=shop">Shop</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="footer__bottom footer-bottom">
                    <div class="footer-bottom__social social">
                        <ul class="social__list social-list">
                            <li class="social-list__item social-list-item">
                                <a href="social-list-item__link">
                                    <div class="social-list-item__icon icon">
                                        <img src="images/footer/social/vk-social-logotype.svg" alt="">
                                    </div>
                                </a>
                            </li>
                            <li class="social-list__item social-list-item">
                                <a href="social-list-item__link">
                                    <div class="social-list-item__icon icon">
                                        <img src="images/footer/social/google-plus-social-logotype.svg" alt="">
                                    </div>
                                </a>
                            </li>
                            <li class="social-list__item social-list-item">
                                <a href="social-list-item__link">
                                    <div class="social-list-item__icon icon">
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