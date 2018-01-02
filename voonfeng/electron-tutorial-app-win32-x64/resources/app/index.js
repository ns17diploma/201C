let jsf = require('jsonfile');
    let file = 'jsfile.json';
    var $ = require('jquery');

    $('.cancel').on('click',function(){
      location.reload();
    })

    //Membership Number
    //check membership data
    $('.errormassage').hide();
    $('.errormassage0').hide();
    $('.modulus').hide();
    $('#check').on('keyup',function(){

        for(a = 7; a < 10000; ++a)
        var x = this.value;
        var status = false;
        var y = x.toString();


      let totalmn = 0;
      for(var i = 0; i < x.length ; i++){
        let b = 6 - i;
        totalmn += x[i] * b;


       if ((totalmn % 11) == 0) {
          status = true;
          $('.modulus').hide();
          $('#errormembership').removeClass('error');
        }else{
          status = false;
          $('.modulus').show();
          $('#errormembership').addClass('error');
        }
      }
      
        var input_e = x.replace(/[^0-9\.]/g,'');
        if (input_e = input_e){
          status = true;
          $('.errormassage').hide();;
          $('#errormembership').removeClass('error');
        }else{
          status = false;
          $('.errormassage').show();
          $('#errormembership').addClass('error'); 
        }

        if (y.length > 6){
        var z = y.substr((Number(y.length)-a), 6);
        document.getElementById('check').value = z;
        }

        if (y.length < 6){
        status = false;
          $('.errormassage0').show();
          $('#errormembership').addClass('error');
        }else{
          status = true;
          $('.errormassage0').hide();;
          $('#errormembership').removeClass('error');
        }

        
      }) 


    //First name
    $('.errormassage1').hide();
    $('#firstname').on('keyup',function(){
      var str = this.value;
      var status = false;
      var abcd = str.search(/^[a-zA-Z]+$/);
      if (abcd != -1) {
        status = true;
        $('#errorfirstname').removeClass('error');
        $('.errormassage1').hide();
     }else{
        status = false;
        $('#errorfirstname').addClass('error');
        $('.errormassage1').show();
     }
    })


    //Last name
    $('.errormassage2').hide();
    $('#lastname').on('keyup',function(){
      var str = this.value;
      var status = false;
      var abcd = str.search(/^[a-zA-Z]+$/);
      if (abcd != -1) {
        status = true;
        $('#errorlastname').removeClass('error');
        $('.errormassage2').hide();
     }else{
        status = false;
        $('#errorlastname').addClass('error');
        $('.errormassage2').show();
     }
    })

    //Date of Game
    $('.errormassage3').hide();
    var elem = $("#dateofgame");
    if(elem) elem.val(elem.val().substr(0,10));
    $('#dateofgame').on('keyup', function(){
      if (elem.val().length > 10){
        elem.val(elem.val().substr(0, 10));
        status = false;
        $('#errordateofgame').addClass('error');
        $('.errormassage3').show();
      }else{
        status = true;
        $('#errordateofgame').removeClass('error');
        $('.errormassage3').hide();
      }           
    });


    //Booking Date
    $('.errormassage4').hide();
    var elem2 = $("#bookingdate");
    if(elem2) elem2.val(elem2.val().substr(0,10));
    $('#bookingdate').on('keyup', function(){
      if (elem2.val().length > 10){
        elem2.val(elem2.val().substr(0, 10));
        status = false;
        $('#errorbookingdate').addClass('error');
        $('.errormassage4').show();
      }else{
        status = true;
        $('#errorbookingdate').removeClass('error');
        $('.errormassage4').hide();
      }           
    });

    //guest1
    $('.errormassage5').hide();
    $('#guest1').on('keyup',function(){
    var status = false;
    if($(this).val() === ""){
        status = false;
        $('#errorguest1').addClass('error');
      $('.errormassage5').show();
      } else {
        status = true;
        $('#errorguest1').removeClass('error');
      $('.errormassage5').hide();
      }
    })

    //Personal Transport(Buggy)
    $('.errormassage6').hide();
    $('#personal').on('keyup',function(){
    var status = false;
    if($(this).val() === ""){
        status = false;
        $('#errorpersonal').addClass('error');
      $('.errormassage6').show();
      } else {
        status = true;
        $('#errorpersonal').removeClass('error');
      $('.errormassage6').hide();
      }
    })

    //guest2
    $('.errormassage7').hide();
    $('#guest2').on('keyup',function(){
    var status = false;
    if($(this).val() === ""){
        status = false;
        $('#errorguest2').addClass('error');
      $('.errormassage7').show();
      } else {
        status = true;
        $('#errorguest2').removeClass('error');
      $('.errormassage7').hide();
      }
    })

    //guest3
    $('.errormassage8').hide();
    $('#guest3').on('keyup',function(){
    var status = false;
    if($(this).val() === ""){
        status = false;
        $('#errorguest3').addClass('error');
      $('.errormassage8').show();
      } else {
        status = true;
        $('#errorguest3').removeClass('error');
      $('.errormassage8').hide();
      }
    })

    //Number of Guests
    $('.errormassage9').hide();
    $('#numberguests').on('keyup',function(){
    var status = false;
    if($(this).val() === ""){
        status = false;
        $('#errorguests').addClass('error');
      $('.errormassage9').show();
      } else {
        status = true;
        $('#errorguests').removeClass('error');
      $('.errormassage9').hide();
      }
    })

    //save button
    $('.inputcheck').hide();
    $('.save').on('click',function(vilidate){
      if($('.field').hasClass('error') || $('.common').val() === ""){
        $('.inputcheck').show();
      }else{
        $('.inputcheck').hide();
        var obj = {
          Membership_Number:$('.input_membershipnumber').val(),
          Number_of_Holes:$('.input_holes').val(),
          First_Name:$('.input_firstname').val(),
          Last_Name:$('.input_lastname').val(),
          Date_of_Game:$('.input_dateofgame').val(),
          Booking_Date:$('.input_bookingdate').val(),
          Personal_Transport_Buggy:$('.input_personal').val(),
          Number_of_Golf_Bag_Trolleys:$('.input_golf').val(),
          Guest1:$('.input_guest1').val(),
          Guest2:$('.input_guest2').val(),
          Guest3:$('.input_guest3').val(),
          Number_of_Guests:$('.input_guests').val()
        }
        var arr = jsf.readFileSync(file);
        arr.push(obj);
        jsf.writeFile('jsfile.json',arr, function (err){

        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal 
        modal.style.display = "block";
        

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
        });
      }
    })

    function vilidate()
    {
      if ($('common').each()) {
      if ($('.common').val() === "" || $('.common1').val() === "" ){
        status = false;
        $('.inputcheck').show();
        
      }else{
        status = true;
        $('.inputcheck').hide();
      }
    }
    return status;
  }