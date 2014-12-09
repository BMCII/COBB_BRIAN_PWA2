/*  
	Your Project Title
	Author: Brian Cobb
*/
//alert("hello");
$(function() {

//=========================================== Drop down login  =======================================================//

    $(document).ready(function () {
        $('#login p').click(function () {
            $('#login-form').slideToggle(300);
            $(this).toggleClass('close');
        });
    });

//================================================= toolTip  =========================================================//

    $('.masterToolTip').hover(function () {

        //================== hover code ===================//

        var title = $(this).attr('title');                      //declare var title to hold title attribute
        $(this).data('tipText', title).removeAttr('title');      //save var title as data and remove attribute
        $('<p class = "toolTip"></p>')                          //create HTML <p> element
            .text(title)                                        //add var title as text in <p> element
            .appendTo('body')                                   //add <p> element to body
            .fadeIn('slow');                                    //fade in <p> element

        //================ off hover code =================//

    }, function () {
        $(this).attr('title', $(this).data('tipText'));          //add attribute title with "tipText data"
        $('.toolTip').remove();                                  //remove tooTip
    })

        //=============== toolTip position ================//

        .mousemove(function (e) {
            var mousex = e.pageX + 10;                          //create variable to hold x position
            var mousey = e.pageY + 5;                           //create variable to hold y position
            $('.toolTip').css({top: mousey, left: mousex});       //select toolTip ans change css
        });

//============================================= End toolTip  =========================================================//

//================================================= modal ============================================================//

    $('.modalClick').on('click', function (event) {               //select modalClick and run function on click
        event.preventDefault();                                 //
        $('#overlay')
            .fadeIn()
            .find('#modal')
            .fadeIn();
    });

    $('.close').on('click', function (event) {
        event.preventDefault();
        $('#overlay')
            .fadeOut()
            .find('#modal')
            .fadeOut();
    });

    $('.mystatus').mouseover(function () {
        $(this).fadeTo(100, .3);
    });

    $('.mystatus').mouseout(function(){
        $(this).fadeTo(100, 1);
    });



//============================================= End modal ============================================================//

//============================================== Tabbed Accordion ====================================================//

    $('#tabs p').hide().eq(0).show();
    //$('#tabs p:not(:first)').hide();

    $('#tabs-nav li').click(function(e){
        e.preventDefault();
        $('#tabs p').hide();

        $('#tabs-nav .current').removeClass("current");
        $(this).addClass('current');
        var clicked = $(this).find('a:first').attr('href');

        $('#tabs ' + clicked).fadeIn('fast');
    }).eq(0).addClass('current');

//========================================== End Tabbed Accordion ====================================================//

}); // end private scope




