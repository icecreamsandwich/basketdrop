<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>Basket Drop</title>
            <link href="css/style.css" rel="stylesheet" type="text/css"/>
            <link href="css/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
            <script src="js/jquery-1.9.0.js" type="text/javascript" lang="javascript"></script>
            <script src="js/jquery-ui.min.js" type="text/javascript" lang="javascript"></script>
            <script src="js/basketdrop.js"  type="text/javascript"></script>

    </head>
    <body>
        <h2 align="center">Basket Drop </h2>
        <div class="wrapper">        
        <div class="basket1wrapper">
            <select class="basketSelect1" id="basketSelect1">
                <option value="">--Please select a user--</option>
            </select>
            <br/>
            <!-- Elements container for basket1 -->
            <div class="basketContainer1" >
            </div>
        </div>
        <div class="baslet2wrapper">
            <select class="basketSelect2" id="basketSelect2">
                <option value="">--Please select a user group--</option>
            </select>
            <br/>
            <!-- Elements container for basket2 -->
           
            <div class="basketContainer2">
                 <p>Drop here</p>
            </div>
        </div>

        <br/><br/> <br/><br/>
        <div class="binBasket">
            <!-- The bin basket container -->
            <p>bin basket</p>
        </div>
        <!--        <div id="draggable" class="ui-widget-content">draggable</div>-->
        <?php
        // put your code here
        ?>
        </div>
    </body>
</html>
