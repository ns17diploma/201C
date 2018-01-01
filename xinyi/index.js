
var fs = require('fs');
var jsf = require('jsonfile');
var filename = ('jsonfile.js');
var $ = require ('jquery');
var jQuery = $;
var chunk = require('chunk');

$(function(){
	if (!fs.existsSync(filename)){
		jsf.writeFileSync(filename,[])
	}
	$('#error00').hide();
	$('#error01').hide();
	$('#error02').hide();
	$('#error03').hide();

	var $result = true
	$('#button').click(function(){
		checkValidate()
		check()
		if($result === true){
			$('#error01').hide();
			$('#error00').show();
			checkform();
		}
		else{
			$('#error01').show();
		}
	})



	function checkform(){
		var obj = {
			Membership_Number:$('#input_membership').val(),
			Number_of_holes:$('#input_number_holes').val(),
			First_name:$('#input_first').val(),
			Last_name:$('#input_last').val(),
			Date_of_Game:$('#input_date_game').val(),
			Booking_game:$('#input_booking').val(),
			Guest_1:$('#input_guest1').val(),
			Guest_2:$('#input_guest2').val(),
			Guest_3:$("#input_guest3").val(),
			personal_transport:$('#input_transport').val(),
			numbers_of_golf_bag_trolleys:$("#input_golfbags").val(),
			Number_of_guest:$("#input_guest").val()
		}
		if (!fs.existsSync(filename)) {
			jsf.writeFileSync(filename,[])
		}
		var arr=jsf.readFileSync(filename);
		console.log(arr)
		arr.push(obj);
		jsf.writeFileSync(filename,arr,{spaces:2});
	};

	function check(){
		$('input').each(function(){
			let input = $(this)
			if (input.val() ===""){
				$('#error03').show();
				$result=false
			}
			else{
				$('#error03').hide();
				$result=true
			}
			return $result
		})
	}

	$('#input_membership').on('keyup',function(){
		var x=this.value;
		var y=x.toString();
	
		if (y.length>5) {
			var z=y.substr((Number(y.length)-6),6);
			$('#input_membership').val(z);
		}

		if (y.length<6) {
			$('#error03').show();
			$return = false;
		}

		else{
			$('#error03').hide();
			$return = true;
		}
			return $result
	})
	
	function checkValidate(){
		let a = $('#input_membership').val();
		let b = a.toString();
		let c = 0;
	
		for (var i = 0; i < b.length; i++){
			let l = 6-i;
			c += Number(b[i]) * l ; 
		}
	
		if ((c % 11) !== 0 || b.length !== 6){
			$('#error02').show();
			return false
		}
	
		else if ((c % 11) === 0 && b.length === 6){
			// $('#input_membership').parent().removeClass('error')
			$('#error02').hide();
			return true
		}

	}

})

 	