/*  
 Your Project Title
 Author: Brian Cobb
 */
//alert("hello");
$(function() {

//=========================================== Drop down login  =======================================================//

    $('#login p')
        .click(function() {
            $('#login-form')
                .slideToggle(300);
            $(this)
                .toggleClass('close');
        });

//================================================= toolTip  =========================================================//

    $('.masterToolTip')
        .hover(function() {
            //================== hover code ===================//
            var title = $(this)
                .attr('title'); //declare var title to hold title attribute
            $(this)
                .data('tipText', title)
                .removeAttr('title'); //save var title as data and remove attribute
            $('<p class = "toolTip"></p>') //create HTML <p> element
                .text(title) //add var title as text in <p> element
                .appendTo('body') //add <p> element to body
                .fadeIn('slow'); //fade in <p> element
            //================ off hover code =================//
        }, function() {
            $(this)
                .attr('title', $(this)
                    .data('tipText')); //add attribute title with "tipText data"
            $('.toolTip')
                .remove(); //remove tooTip
        })
            //=============== toolTip position ================//
        .mousemove(function(e) {
            var mousex = e.pageX + 10; //create variable to hold x position
            var mousey = e.pageY + 5; //create variable to hold y position
            $('.toolTip')
                .css({
                    top: mousey,
                    left: mousex
                }); //select toolTip ans change css
        });

//============================================= End toolTip  =========================================================//
//================================================= modal ============================================================//

    $('.modalClick')
        .on('click', function(event) { //select modalClick and run function on click
            event.preventDefault(); //prevent page from reloading
            $('#overlay') //select id overlay
                .fadeIn() //fade overlay in
                .find('#modal') //find id modal
                .fadeIn(); //fade modal in
        });
    $('.close')
        .on('click', function(event) {
            event.preventDefault();
            $('#overlay')
                .fadeOut()
                .find('#modal')
                .fadeOut();
        });
    $('.mystatus')
        .mouseover(function() {
            $(this)
                .fadeTo(100, .3);
        });
    $('.mystatus')
        .mouseout(function() {
            $(this)
                .fadeTo(100, 1);
        });

//============================================= End modal ============================================================//
//============================================== Tabbed Accordion ====================================================//

    $('#tabs p')
        .hide()
        .eq(0)
        .show();
    //$('#tabs p:not(:first)').hide();
    $('#tabs-nav li')
        .click(function(e) {
            e.preventDefault();
            $('#tabs p')
                .hide();
            $('#tabs-nav .current')
                .removeClass("current");
            $(this)
                .addClass('current');
            var clicked = $(this)
                .find('a:first')
                .attr('href');
            $('#tabs ' + clicked)
                .fadeIn('fast');
        })
        .eq(0)
        .addClass('current');

//========================================== End Tabbed Accordion ====================================================//
//================================================== login/Out =======================================================//

    //====== LogIn =====//
    $('#signinButton')
        .click(function() {
            var user = $('#user')
                .val();
            var pass = $('#pass')
                .val();
            console.log("this notifies if password is working");
            $.ajax({
                url: 'xhr/login.php',
                type: 'post',
                dataType: 'json',
                data: {
                    username: user,
                    password: pass
                },
                success: function(response) {
                    console.log("Test User");
                    if (response.error) {
                        alert(response.error);
                    } else {
                        window.location.assign('admin.html');
                    };
                }
            });
        });
    //====== LogOut =====//
    $('#logOut')
        .click(function(e) {
            e.preventDefault;
            $.get('xhr/logout.php', function() {
                alert("goodbye");
                window.location.assign('index.html');
            })
        });

//================================================= End Login ========================================================//
//================================================= Registration =====================================================//

    $('#register')
        .on('click', function() {
            console.log("hey");
            var firstname = $('#first')
                    .val(),
                lastname = $('#last')
                    .val(),
                username = $('#userName')
                    .val(),
                email = $('#email')
                    .val(),
                password = $('#password')
                    .val();
            console.log(firstname + ' ' + lastname + ' ' + username + ' ' + password);
            $.ajax({
                url: 'xhr/register.php',
                type: 'post',
                dataType: 'json',
                data: {
                    firstname: firstname,
                    lastname: lastname,
                    username: username,
                    email: email,
                    password: password
                },
                success: function(response) {
                    if (response.error) {
                        alert(response.error);
                    } else {
                        window.location.assign('admin.html');
                    }
                }
            });
        });

//============================================= End Registration =====================================================//
//============================================== Dynamic Buttons =====================================================//

    //    //====== admin =====//
    //
    //
    //    $('').on('click',function(e){
    //        e.preventDefault();
    //        window.location.assign('.html')
    //    });
    //
    //
    //    //====== index =====//
    //
    //    $('').on('click',function(e){
    //        e.preventDefault();
    //        window.location.assign('.html')
    //    });
    //
    //    $('').on('click',function(e){
    //        e.preventDefault();
    //        window.location.assign('.html')
    //    });
    //
    //    $('').on('click',function(e){
    //        e.preventDefault();
    //        window.location.assign('.html')
    //    });
    //
    //    //====== projects =====//
    //
    $('.projectsbtn')
        .on('click', function(e) {
            e.preventDefault();
            window.location.assign('projects.html')
        });
    //
    //    $('').on('click',function(e){
    //        e.preventDefault();
    //        window.location.assign('.html')
    //    });
    //
    //    //====== register =====//
    //
    //    $('').on('click',function(e){
    //        e.preventDefault();
    //        window.location.assign('.html')
    //    });
    //
    //    $('').on('click',function(e){
    //        e.preventDefault();
    //        window.location.assign('.html')
    //    });

//===========================================End Dynamic Buttons =====================================================//
//=========================================== User Name Display ======================================================//

    $.getJSON("xhr/check_login.php", function(data) {
        console.log(data);
        $.each(data, function(key, val) {
            console.log(val.first_name);
            $(".userid")
                .html("welcome User: " + val.first_name);
        })
    });

//========================================End User Name Display ======================================================//
//========================================== Add Projects ============================================================//

    //====== project info =====//
    $('#addButton')
        .on('click', function(e) {
            e.preventDefault();
            console.log('pls');
            var projName = $('#projectName')
                    .val(),
                projDesc = $('#projectDescription')
                    .val(),
                projDue = $('#projectDueDate')
                    .val(),
                status = $('input[name = "status"]:checked')
                    .prop("id");
            $.ajax({
                url: 'xhr/new_project.php',
                type: 'post',
                dataType: 'json',
                data: {
                    projectName: projName,
                    projectDescription: projDesc,
                    dueDate: projDue,
                    status: status
                },
                success: function(response) {
                    console.log('testing');
                    if (response.error) {
                        alert(response.error);
                    } else {
                        window.location.assign("projects.html");
                    };
                }
            });
        });
    //====== get projects =====//
    var projects = function() {
        $.ajax({
            url: 'xhr/get_projects.php',
            type: 'get',
            dataType: 'json',
            success: function(response) {
                if (response.error) {
                    console.log(response.error);
                } else {
                    for (var i = 0, j = response.projects.length; i < j; i++) {
                         var result = response.projects[i];
                        $(".projects")
                            .append('<div style = "border:1px solid black">' +
                                "<input class='projectid' type='hidden' value='" + result.id +
                                "'>" + "Project Name: " + result.projectName + "<br>" +
                                "Project Description: " + result.projectDescription + "<br>" +
                                "Project Status: " + result.status + "<br>" +
                                '<button class="deletebtn">Delete</button>' +
                                '<button class="editbtn">Edit</button>' + '</div><br>');
                    };
                    $('.deletebtn')
                        .on('click', function(e) {
                            var pid = $(this)
                                .parent()
                                .find(".projectid")
                                .val();
                            console.log('test delete');
                            $.ajax({
                                url: 'xhr/delete_project.php',
                                data: {
                                    projectID: pid
                                },
                                type: 'POST',
                                dataType: 'json',
                                success: function(response) {
                                    console.log('test success');
                                    if (response.error) {
                                        alert(response.error);
                                    } else {
                                        //console.log(result.id);
                                        window.location.assign('projects.html')
                                    };
                                }
                            });
                        }); //end delete
                }
            }
        })
    };
    projects();

//=======================================End Add Projects ============================================================//
//======================================= Account Update =============================================================//

    var updateAcct = function(){
        console.log('pulls user info');
        $.ajax({
            url: 'xhr/get_user.php',
            type:'get',
            dataType: 'json',
            success: function(response){
                if(response.error) {
                    console.log(response.error);
                }else{
                    var updatefirstname = response.user.first_name;
                    var updatelastname = response.user.last_name;
                    var updateemail = response.user.email;
                    //var retrievedNote = response.user.avatar
                    $('#updatefirstname').val(updatefirstname);
                    $('#updatelastname').val(updatelastname);
                    $('#updateemail').val(updateemail);
                    //$('#notes').text(retrievedNote);
                };
            }
        });
        $('#updateAcctBtn').on('click',function(e){
            e.preventDefault();
            var changedfirstname = $('#updatefirstname').val();
            var changedlastname = $('#updatelastname').val();
            var changedemail = $('#updateemail').val();
            $.ajax({
                url: 'xhr/update_user.php',
                type: 'post',
                dataType: 'json',
                data: {
                    first_name: changedfirstname,
                    last_name: changedlastname,
                    email: changedemail
                },
                success: function(response){
                    if(response.error){
                        console.log(response.error);
                    }else{
                        console.log('account updated');
                    };
                }
            });
        });
    };

    updateAcct();


//======================================= Account Update =============================================================//
//======================================= Date Picker ================================================================//

   $( "#projectDueDate" ).datepicker();

//====================================End Date Picker ================================================================//


    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

    $( "#wrapper" ).draggable();

});

 // end private scope