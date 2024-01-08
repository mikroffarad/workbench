<section class="goods">
    <div class="container">
        <div class="goods__inner">
            <h1 class="goods__title">In stock</h1>
            <ul class="goods__unit-list unit-list">
                <?php foreach ($goods as $good): ?>
                    <li class="unit-list__item unit-list-item">
                        <div class="unit-list-item__image">
                            <img src="<?php echo $good['image']; ?>" alt="">
                        </div>
                        <h2 class="unit-list-item__name">
                        <?php echo $good['name']; ?>
                        </h2>
                        <div class="unit-list-item__description">
                            <?php echo $good['description']; ?>
                        </div>
                        <div class="unit-list-item__price">
                            Price: <?php echo $good['price']; ?>
                        </div>
                        <a class="unit-list-item__more-btn" href="index.php?page=unit&id=<?php echo $good['id']; ?>">
                            Learn More
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
</section>