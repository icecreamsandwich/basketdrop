<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Basket Drop</title>
    <link rel="icon" href="css/images/basket.png" type="image/gif" sizes="16x16">
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <link href="css/jquery-ui.min.css" rel="stylesheet" type="text/css" />
    <script src="js/jquery-1.9.0.js" type="text/javascript" lang="javascript"></script>
    <script src="js/jquery-ui.min.js" type="text/javascript" lang="javascript"></script>
    <script src="js/basketdrop.js" type="text/javascript"></script>

</head>

<body>
    <h2 align="center">Basket Drop </h2>
    <div class="wrapper">
        <div class="basket1wrapper">
            <!-- Elements container for basket1 -->
            <h3>Items</h3>
            <div class="basketContainer1">
            </div>
        </div>
        
        <div class="baslet2wrapper">
        <h3>Cart</h3>
            <div class="basketContainer2" id="basketContainer2">
               
            </div>
        </div>
       <!--  <div class="binBasket">
            <h3>Wish list items</h3>
        </div>
 -->
        <div class="cart_table">
        <h2>Price</h2>
        <table style="width:50%" id="cart_tbl">
            <tr>
                <th>Item</th>
                <th>price</th>
            </tr>
        </table>
        <div class="total"></div>
    </div>
    </div>
    
</body>

</html>