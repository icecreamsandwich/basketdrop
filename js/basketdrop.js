/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    //make draggable elements
    $("#draggable").draggable();
    //make container droppables
    $( ".basketContainer2" ).droppable({
        drop: function( event, ui ) {
            alert("dropped to container2")
            $( this )
            .addClass( "ui-state-highlight" )
            .find( "p" )
            .html( "Dropped!" );
        }
    });
    $( ".binBasket" ).droppable({
        drop: function( event, ui ) {
            alert("dropped bin")
            $( this )
            .addClass( "ui-state-highlight" )
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
                userName = value.user_name;
                user_Id = value.id;
                var elmnts = $('<div id="" class="draggable ui-widget-content">'+userName+'</div>');
                elements.push(elmnts);
            });
             $(".basketContainer1").html(elements);
            $(".draggable").draggable();
        });
       
        //        var html = $('<div id="draggable" class="ui-widget-content">draggable</div>');
        //        // $(html).insertAfter('.basketSelect1');
        //        $(".basketContainer1").html(html);
        
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
        
            $.each(jsonObjArray, function(index, value) { 
                userName = value.user_name;
                user_Id = value.id;
                var elements = $('<div id="" class="draggable ui-widget-content">'+userName+'</div>');
                $(".basketContainer2").html(elements);              
            });
            $(".draggable").draggable();
        });
        
    });
    
//droppable elements callbaack
    
    
//delete elements on dropping bin basket
    
});
