/*  
	Your Project Title
	Author: Brian Cobb
*/
//alert("hello");
$(function() {

//================================================= toolTip  =========================================================//

    $('.masterToolTip').hover(function(){

        //================== hover code ===================//

        var title = $(this).attr('title');                      //declare var title to hold title attribute
        $(this).data('tipText',title).removeAttr('title');      //save var title as data and remove attribute
        $('<p class = "toolTip"></p>')                          //create HTML <p> element
            .text(title)                                        //add var title as text in <p> element
            .appendTo('body')                                   //add <p> element to body
            .fadeIn('slow');                                    //fade in <p> element

        //================ off hover code =================//

    },function() {
        $(this).attr('title', $(this).data('tipText'));         //add attribute title with "tipText data"
        $('.toolTip').remove();                                  //remove tooTip
    })

        //=============== toolTip position ================//

        .mousemove(function(e){
            var mousex = e.pageX + 10;                          //create variable to hold x position
            var mousey = e.pageY + 5;                           //create variable to hold y position
            $('.toolTip').css({top:mousey, left:mousex});      //select toolTip ans change css
        });

//==============================================End toolTip  =========================================================//
	
}); // end private scope




