<section class="unit">
    <div class="container">
        <div class="unit__inner">
            <h1 class="unit__title">
                Selected unit
            </h1>
            <div class="unit__unit-card unit-card">
                <div class="unit-card__image">
                    <img src="<?php echo $unit['image']; ?>" alt="">
                </div>
                <div class="unit-card__info">
                    <h2 class="unit-card__name">
                        <?php echo $unit['name']; ?>
                    </h2>
                    <div class="unit-card__description">
                        <?php echo $unit['description']; ?>
                    </div>
                    <div class="unit-card__price">
                        Price: <?php echo $unit['price']; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>