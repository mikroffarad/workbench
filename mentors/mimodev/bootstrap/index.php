<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php 
        $movies = [
            [
                'title' => 'Naruto: Shippuuden',
                'description' => 'Synopsis: It has been two and a half years since Naruto
                Uzumaki left Konohagakure, the Hidden Leaf Village, for intense
                training following events which fueled his desire to be
                stronger.'
            ],
            [
                'title' => 'The Last: Naruto the Movie',
                'description' => 'Synopsis: Two years have passed since the end of the Fourth
                Great Ninja War. Konohagakure has remained in a state of peace
                and harmony'   
            ]
        ]
    ?>
    <div class="container-fluid text-center">
        <h1>Naruto: Shippuuden</h1>
        <div class="row">
            <?php foreach ($movies as $item): ?>   
                <div class="col-6">
                    <h4>
                        <?php echo $item['title']; ?>
                    </h4>
                    <p>
                        <?php echo $item['description']; ?>
                    </p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</body>
</html>