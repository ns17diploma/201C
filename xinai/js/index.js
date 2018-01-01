var jsf = require('jsonfile');
var filename = 'jsfile.json';	
var fs = require('fs')
var $ = require('jquery');

$ (function () {
	$('#error0').hide();
	$('#error00').hide();
	$('#error01').hide();
	$('#error02').hide();
	var $result = false

	//save button
	$('#save').click(function(){
		verifyError()
		validate()
	 	if ($result === false || $('body *').hasClass('error')) {
			console.log('ERROR')	
			$('#error00').hide();
		}
		else {
			submitform();
			$('#error00').show();
			console.log("YES")
		} 
	})

	function verifyError() {
		//input error
		$('.input').each(function(){
			$this = $(this)
			if ($this.val() === "") {
				$this.addClass('error')
				$('#error0').show();
				$result = false
			} else {
				$('#error0').hide();
				$('body *').removeClass('error')
				$result = true				
			}
			return $result
		})
	}

	$('#number1').on('keyup',function(){
		let mn = $('#number1').val();
		let ms = mn.toString();
		if (ms.length > 6) {
			var c = ms.substr((Number(ms.length)-6), 6);
			$('#number1').val(c);
		} 
		else if (ms.length !== 6) {
			$('#error02').show();
		}
		else if (ms.length === 6) {
			$('#error02').hide();
		}
	})

	function validate() {
		let number = 0;
		let mn = $('#number1').val();
		let ms = mn.toString();
		for(var i = 0; i< ms.length; i++){
		    let x = 6 - i;
		    number += Number(ms[i]) * x;
		}
		if ((number % 11) !== 0 || ms.length !== 6) {
		   $('#error01').show()
		    $result = false
		}
		
		else if ((number % 11) === 0 && ms.length === 6) {
			$('#error02').hide()
		  	$('#error01').hide()
		  	$result = true
		}
		return $result
	}

	function submitform(){

		var obj = {
				Membership_Number: $('#number1').val(),
				Number_of_Holes: $('#holes').val(),
				First_Name: $('#first').val(),
				Last_Name: $('#last').val(),
				Date_of_Game: $('#game').val(),
				Booking_of_Date: $('#booking').val(),
				Guest_1: $('#guest1').val(),
				Guest_2: $('#guest2').val(),
				Guest_3: $('#guest3').val(),
				Personal_Transport_Buggy:  $('#transport').val(),
				Number_of_Golf_Bag_Trolleys: $('#trolleys').val(),
				Number_of_Guests: $('#guest').val()
		}

		if (!fs.existsSync(filename)) {
    		jsf.writeFileSync(filename, []);
  		}		
		var arr = jsf.readFileSync(filename);
		arr.push(obj);
		jsf.writeFileSync(filename,arr,{spaces: 1, EOL:'\r\n'});
	}	
});
