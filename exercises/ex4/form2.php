<!DOCTYPE html>
<html>

<head>
    <title>forms</title>
</head>

<body>
    <h2>Welcome <?php echo $_GET["fullName"]; ?></h2>
    <h3>


        <?php
        $bday = new DateTime($_GET["birthday"]);
        $today = new Datetime(date('m.d.y'));
        $diff = $today->diff($bday);
        echo "your Age is: " . $diff->y ." Years" ." , " . $diff->m ."  Months" . " , " . $diff->d." Days" 
        ?>

    </h3>

</body>

</html>