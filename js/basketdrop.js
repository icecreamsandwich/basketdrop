/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    dropped = false;
    //make draggable elements
    $("#draggable").draggable();
    //make container droppables
    $(".basketContainer2").droppable({
        drop: function (event, ui) {
            // alert("dropped to container2")
            dropped = true;
            $(this)
                .addClass("ui-state-highlight")
                .css("background-color", "#50D050")
                .find("p")
                .html("Dropped!");
        }
    });
    $(".binBasket").droppable({
        drop: function (event, ui) {
            // alert("dropped bin")
            dropped = true;
            $(this)
                .addClass("ui-state-highlight")
                .css("background-color", "yellowgreen")
                .find("p")
                .html("Dropped!");
        }
    });
    //add elements to the basket1 by default
    $.post("db_oprations.php", {
        data: '',
        action: 'loadbasket1'
    }, function (result) {
        if (result) {
            var jsonObjArray = $.parseJSON(result);
            $.each(jsonObjArray, function (index, value) {
                userName = value.user_name;
                user_Id = value.id;
                $(".basketSelect1").append('<option class="option_regform" value="' + user_Id + '">' + userName + '</option>');
            });
        } else {
            console.log("no items found!")
        }
    });
    $.post("db_oprations.php", {
        data: '',
        action: 'loadbasket2'
    }, function (result) {
        var jsonObjArray = $.parseJSON(result);
        $.each(jsonObjArray, function (index, value) {
            userName = value.group_name;
            user_Id = value.id;
            $(".basketSelect2").append('<option class="option_regform" value="' + user_Id + '">' + userName + '</option>');
        });
    });
    //load draggable elements to conatainer1
    $("#basketSelect1").on('change', function () {
        //create droppable span elements and fill in text area
        //take user items from the db
        $.post("db_oprations.php", {
            data: '',
            action: 'loadbasketContainer'
        }, function (result) {
            var jsonObjArray = $.parseJSON(result);
            var elements = [];
            $.each(jsonObjArray, function (index, value) {
                var color = getRandomColor();
                userName = value.user_name;
                user_Id = value.id;
                var elmnts = $('<div id="" style="background-color:' + color + '" class="draggable ui-widget-content">' + userName + '</div>');
                elements.push(elmnts);
            });
            $(".basketContainer1").html(elements);
            $(".draggable").draggable({

                revert: function (dropped) {
                    alert(dropped)
                    // var dropped = dropped && dropped[0].id == "droppable";
                    if (!dropped)// alert("I'm reverting!");
                        return !dropped;
                }
            }).each(function () {
                var top = $(this).position().top;
                var left = $(this).position().left;
                $(this).data('orgTop', top);
                $(this).data('orgLeft', left);
            });
        });

    });

    //add elements to the basket1 by default
    $.post("db_oprations.php", {
        data: '',
        action: 'loadbasketContainer'
    }, function (result) {
        var jsonObjArray = $.parseJSON(result);
        var elements = [];
        $.each(jsonObjArray, function (index, value) {
            var color = getRandomColor();
            var userName = value.user_name;
            var user_Id = value.id;
            var price = value.price;
            var elmnts = $('<div data-price='+price+' id=' + user_Id + ' style="background-color:' + color +
                '" class="draggable ui-widget-content">' + userName +
                '</div><span class="span_btn" id='+user_Id+'><button id=' + user_Id + ' class="btn_cart">Add to cart</button></span>');
            elements.push(elmnts);
        });
        $(".basketContainer1").html(elements);
        $(".draggable").draggable();
        $(".btn_cart").on('click', function () {
            var x = $(this).position();
            console.log("Top: " + x.top + " Left: " + x.left);
            const id = $(this).attr('id')
            var itemName = $("div[id=" + id + "]").html()
            var price = $("div[id=" + id + "]").data('price')
            var b = $("#basketContainer2").position();
            console.log("Top: " + b.top + " Left: " + b.left)
            //calculate x and y to the cart div
            const rand = Math.floor(Math.random() * 15);
            var moveX = x.top > b.top ?   -(x.top - b.top)+10*rand : b.top - x.top;
            var moveY = x.left > b.left ?   x.left - b.left : b.left - x.left;
            console.log(moveX, moveY)
           $("div[id=" + id + "]").animate({top:moveX, left:moveY}, 1000, finished(id, itemName, price))
        })
        function finished(id, itemName, price) {
            /* $(this).removeClass("ui-draggable")
            $(this).removeClass("draggable") */
            $('span[id='+id+']').remove()
          //  alert("item added to cart")
          //apend items to the table and total it
          $('#cart_tbl tr:last').after('<tr><td>'+itemName+'</td><td>'+price+'</td></tr>');
        }
    });

    //load draggable elements to conatainer2
    $("#basketSelect2").change(function () {
        var groupId = $(this).val();
        $.post("db_oprations.php", {
            data: groupId,
            action: 'loadbasketContainer2'
        }, function (result) {
            var jsonObjArray = $.parseJSON(result);
            var elements = [];
            $.each(jsonObjArray, function (index, value) {
                var color = getRandomColor();
                userName = value.user_name;
                user_Id = value.id;
                var elmnts = $('<div id="" style="background-color:' + color + '" class="draggable ui-widget-content">' + userName + '</div>');
                elements.push(elmnts);
            });
            $(".basketContainer2").html(elements);
            $(".draggable").draggable();
        });

    });

    //droppable elements callbaack


    //delete elements on dropping bin basket


});

//random color generator to give the bg color for draggables
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#C8C4F8';
    /*    for (var i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
       } */
    //console.log(color)
    return color;
}

