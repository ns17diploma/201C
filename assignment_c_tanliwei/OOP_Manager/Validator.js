////REQUIRE SOURCE

const $ = require('jquery')
const ViewManager = require('./ViewManager')
const vm = new ViewManager()
class Validator {

/*********************************************/
/**DATE OF GAMES YEARS NOT MORE THAN 5 DIGITS**/
DateOfGames(obj){

  if ($('#date_game').val().length > 10 ) {
        vm.error_message('#date_game', 'Incorrect Date of Join Format');
      }else{
        vm.remove_error_message('#date_game');
      }
      if ($('#booking_date').val().length > 10 ) {
        vm.error_message('#booking_date', 'Incorrect Date of Birth Format');
      }else{
        vm.remove_error_message('#booking_date');
      }
    }

/*********************************************/
/**MEMBERSHIP NUMBER MODULUS 11**/
MembershipNumber(obj){
      var modulus_eleven = 0;
      for(var i = 0; i<$('#member_number').val().length; i++){
        let x = 6 - i;
        modulus_eleven += $('#member_number').val()[i] * x;
      }
/*MEMBERSHIP NUMBER EQUAL 6 DIGITS*/
      if ($('#member_number').val().length != 6) {
        vm.error_message('#member_number', 'Membership Number is not 6 digits');
      }else{
        if (modulus_eleven % 11 != 0) {
          vm.error_message('#member_number', 'Membership Number is not a valid modulus 11 number');
        }else{
          vm.remove_error_message('#member_number');
        }
       
      }
    }
/*********************************************/
/**FIRST NAME COULD NOT BE NUMERIC**/
FirstName(obj){
      let first_name = $('#first_name').val().search(/^[a-zA-Z]+$/);
      if (first_name == -1) {
        vm.error_message('#first_name', 'Incorrect First Name Format');
      }else{
        vm.remove_error_message('#first_name');
      }
    }
/*********************************************/
/**LAST NAME COULD NOT BE NUMERIC**/
LastName(obj){
      let last_name = $('#last_name').val().search(/^[a-zA-Z]+$/);
      if (last_name == -1) {
        vm.error_message('#last_name', 'Incorrect Last Name Format');
      }else{
        vm.remove_error_message('#last_name');
      }
    }
/*********************************************/
/**GUEST CASE COULD NOT BE EMPTY**/
Guest1(obj){
      if ($('#guest_1').val() === "" ) {
        vm.error_message('#guest_1', 'Guest 1 Case is Empty');
      }else{
        vm.remove_error_message('#guest_1');
      }
    
      if ($('#guest_2').val() === "" ) {
        vm.error_message('#guest_2', 'Guest 2 Case is Empty');
      }else{
        vm.remove_error_message('#guest_2');
      }
    
      if ($('#guest_3').val() === "" ) {
        vm.error_message('#guest_3', 'Guest 3 Case is Empty');
      }else{
        vm.remove_error_message('#guest_3');
      }
    }
}
module.exports = Validator