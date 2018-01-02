
var jsf = require ('jsonfile');
var filename ='jsonfile.json'
var fs = require('fs')
var $ = require('jquery');

function error() {

	$('#error0').hide();
	$('#error01').hide();
	$('#error02').hide();
	$('#error03').hide();
	

}

$(function(){
	error()
	function write(){
		var obj = {
			Number: $('#number').val(),
			Number_of_holes: $('#holes').val(),
			First_Name: $('#first_name').val(),
			Date_of_Game: $('#date_of_games').val(),
			Last_Name: $('#last_name').val(),
			Booking_Date: $('#booking_date').val(),
			Guest1: $('#guest1').val(),
			Personal_Transport: $('#personal').val(),
			Guest2: $('#guest2').val(),
			Number_of_Golf: $('#golf').val(),
			Guest3: $('#guest3').val(),
			Number_of_Guest: $('#number_of_guest').val()
		}

		if (!fs.existsSync(filename)) {
    	jsf.writeFileSync(filename, [])
    	}
		var arr = jsf.readFileSync(filename);
		arr.push(obj);
		jsf.writeFileSync(filename,arr,{spaces:1});	
	}

	$('#error0').hide();
	$('#error01').hide();
	$('#error02').hide();
	$('#error03').hide();
	

	$('#save').click(function(){
		// $('#error0').show();

		modules();
		
		if ($result === false /*|| $('body *').hasClass('error')*/) {
		$('#error01').hide();
		$('#error02').hide();
		$('#error03').hide();
		$('#error0').show();	

		}

		else {
		write();
		$('#success').show();
		} 
	})

	var result = true;

/**************************************/

	$('#number').on('keyup',function(){
		let mn = $('#number').val();
		let ms = mn.toString();
		if (ms.length > 6) {
			var c = ms.substr((Number(ms.length)-6), 6);
			$('#number').val(c);
		} 
		else if (ms.length !== 6) {
			$('#error02').show();
			$result = false
		}
		else if (ms.length === 6) {
			$('#error02').hide();
			$result = true
		}
	})

	function modules() {
		let number = 0;
		let mn = $('#number').val();
		let ms = mn.toString();
		for(var i = 0; i< ms.length; i++){
		    let x = 6 - i;
		    number += Number(ms[i]) * x;
		}

		if ((number % 11) !== 0 || ms.length !== 6) {
		    $('#error03').show()
		    $result = false
		}
		
		else if ((number % 11) === 0 && ms.length === 6) {
		  	$('#error03').hide()	
		  	$result = true
		}

		return $result
	}


});
