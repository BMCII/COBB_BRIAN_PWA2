/*
Description: DESCRIPTION INFO GOES HERE
Author: Lyndon Modomo
Date: DATE GOES HERE
*/

$(function(){

	var leftNav = $('#contentleft'),//declare #contentleft as var leftNav
		rightNav = $('#contentright'),//declare #contentright as var rightNav
		leftNavUL = leftNav.find('ul'),//declare ul in leftNav as var leftNavUl
		rightNavUL = rightNav.find('ul')//declare ul in rightNav as var rightNavUl
	;	 

	leftNavUL.css('backgroundColor', '#ff9933');//change background color to orange
	//leftNavUL.css({backgroundColor: "orange"});

	console.log('Top Offset:', leftNavUL.offset().top);//get value of Top Offset
	console.log('Top Position:', leftNavUL.position().top);//get value of Top Position

	leftNavUL.find('li:eq(1)').css({marginLeft: 30});//add margin to 2nd list item

	leftNavUL.find('li:eq(3)').css({color: 'red'});//change 4th list item color to red

	console.log(leftNavUL.find('li').filter(':eq(3)').width());//get width of 4th list item

	var h3Right = rightNav.find('h3').css({float: 'right'});//declare var h3right and float h3 right

	h3Right.addClass('listhead');//add class "listhead" to var h3right

	console.log("listhead: ", h3Right.hasClass('listhead'));//check if class was added

	console.log(rightNavUL);//check value of rightNavUL

	rightNavUL
		.find('li')//find li in rightNav
		.children(':eq(2)')//find 3rd child
		.attr('href', 'http://www.us.playstation.com')//change href to playstation.com
	;

	rightNavUL
		.find('a')//find a in rightNav
		.not(':eq(0)')//exclude first a
		.attr('href', 'http://nogoogle.com')//change the rest of the 'a' to nogoogle.com
	;


});