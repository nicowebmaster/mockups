<?php
 $nb_test = 6;
?>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Mock desktop</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="laptop/style.css">
        <link rel="stylesheet" href="tests/<?php echo $nb_test; ?>/style.css">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </head>
    <body>
    <?php include "tests/".$nb_test."/index.php"; ?>
    </body>
</html>

