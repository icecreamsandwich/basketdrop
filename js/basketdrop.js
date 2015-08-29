/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    dropped = false;
    //make draggable elements
    $("#draggable").draggable();
    //make container droppables
    $( ".basketContainer2" ).droppable({
        drop: function( event, ui ) {
            alert("dropped to container2")
            dropped =true;
            $( this )
            .addClass( "ui-state-highlight" )
            .css("background-color","#50D050")
            .find( "p" )
            .html( "Dropped!" );
        }
    });
    $( ".binBasket" ).droppable({
        drop: function( event, ui ) {
            alert("dropped bin")
            dropped =true;
            $( this )
            .addClass( "ui-state-highlight" )
            .css("background-color","yellowgreen")
            .find( "p" )
            .html( "Dropped!" );
        }
    });
    //add elements to the basket1 by default
    $.post("db_oprations.php", {
        data: '',
        action : 'loadbasket1'
    }, function(result) {
        var jsonObjArray = $.parseJSON(result);
        //        $("#basketSelect1").empty();
        //        $("#basketSelect1").append('<option class="option_regform" value="">Select Users</option>');
        $.each(jsonObjArray, function(index, value) { 
            userName = value.user_name;
            user_Id = value.id;
            $(".basketSelect1").append('<option class="option_regform" value="' + user_Id + '">' + userName + '</option>');
        });
    });
    $.post("db_oprations.php", {
        data: '',
        action : 'loadbasket2'
    }, function(result) {
        var jsonObjArray = $.parseJSON(result);
        //        $("#basketSelect2").empty();
        //        $("#basketSelect2").append('<option class="option_regform" value="">Select User group</option>');
        $.each(jsonObjArray, function(index, value) {
            userName = value.group_name;
            user_Id = value.id;
            $(".basketSelect2").append('<option class="option_regform" value="' + user_Id + '">' + userName + '</option>');
        });
    });
    //load draggable elements to conatainer1
    $("#basketSelect1").on('change',function(){ 
        //create droppable span elements and fill in text area
        //take user items from the db
        $.post("db_oprations.php", {
            data: '',
            action : 'loadbasketContainer'
        }, function(result) {
            var jsonObjArray = $.parseJSON(result);
            var elements  =[];
            $.each(jsonObjArray, function(index, value) {
                var color = getRandomColor();
                userName = value.user_name;
                user_Id = value.id;
                var elmnts = $('<div id="" style="background-color:'+color+'" class="draggable ui-widget-content">'+userName+'</div>');
                elements.push(elmnts);
            });
            $(".basketContainer1").html(elements);
            $(".draggable").draggable({ 
               
                revert:  function(dropped) {  
                    alert(dropped)
                    // var dropped = dropped && dropped[0].id == "droppable";
                    if(!dropped)// alert("I'm reverting!");
                        return !dropped;
                } 
            }).each(function() {
                var top = $(this).position().top;
                var left = $(this).position().left;
                $(this).data('orgTop', top);
                $(this).data('orgLeft', left);
            });
        });
       
    });
    
    //add elements to the basket2 by default
    
    
    //load draggable elements to conatainer2
    $("#basketSelect2").change(function(){
        var groupId = $(this).val();
        $.post("db_oprations.php", {
            data: groupId,
            action : 'loadbasketContainer2'
        }, function(result) {
            var jsonObjArray = $.parseJSON(result);
            var elements  =[];
            $.each(jsonObjArray, function(index, value) {   
                var color = getRandomColor();
                userName = value.user_name;
                user_Id = value.id;
                var elmnts = $('<div id="" style="background-color:'+color+'" class="draggable ui-widget-content">'+userName+'</div>');
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
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}