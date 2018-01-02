var jsonfile = require('jsonfile');
var file = "data.json";
var fs = require('fs');
var $ = require('jquery');

if (!fs.existsSync(file)) {
  fs.mkdirSync('allData')
  fs.writeFileSync(file, '[]')
}

var data = "";

function create() {
  var x = Math.floor((Math.random() * 999996) + 1);

  var digit = x.toString();
  var mul = 6;
  var sum = 0;
  for (var i = 0; i < digit.length; i++) {
    sum += (digit[i] * mul);
    mul--
  }

  if (digit.length === 6 && (sum % 11) === 0) {
    document.getElementById('membership_number').value = x; 
  } else {
    create();
  }
}

function validation () {

    if(!fs.existsSync(file)) {
    jsonfile.writeFileSync(file, [])
  }


  var membership_number = document.getElementById('membership_number').value;
  var first_name = document.getElementById('first_name').value;
  var last_name = document.getElementById('last_name').value;
  var guest1 = document.getElementById('guest1').value;
  var guest2 = document.getElementById('guest2').value;
  var guest3 = document.getElementById('guest3').value;
  var guest_number = document.getElementById('guest_number').value;
  var game_date = document.getElementById('game_date').value;
  var booking_date = document.getElementById('booking_date').value; 

  //let number = document.getElementById('memberNum').value; 
  var digit = membership_number.toString();
  var mul = 6;
  var sum = 0;
  for (var i = 0; i < digit.length; i++) {
    sum += (digit[i] * mul);
    mul--
  }
  
  var point = 0
  
  if (digit.length === 6 && (sum % 11) === 0) {
    point++;
  } else {
    document.getElementById('label_membership_number').style.display = 'block';
    document.getElementById('error_membership_number').classList.add("error");
  }
  if (first_name != "") {
    point++;
  } else {
    document.getElementById('label_first_name').style.display = 'block';
    document.getElementById('error_first_name').classList.add("error");
  }
  if (last_name != "") {
    point++;
  }else {
    document.getElementById('label_last_name').style.display = 'block';
    document.getElementById('error_last_name').classList.add("error");
  }
  if (guest1 != "") {
    point++;
  }else {
    document.getElementById('label_guest1').style.display = 'block';
    document.getElementById('error_guest1').classList.add("error");
  }
  if (guest2 != "") {
    point++;
  }else {
    document.getElementById('label_guest2').style.display = 'block';
    document.getElementById('error_guest2').classList.add("error");
  }
  if (guest3 != "") {
    point++;
  }else {
    document.getElementById('label_guest3').style.display = 'block';
    document.getElementById('error_guest3').classList.add("error");
  }
  if (guest_number != "") {
    point++;
  } else {
    document.getElementById('label_guest_number').style.display = 'block';
    document.getElementById('error_guest_number').classList.add("error");
  } 
  if (game_date != "") {
    point++;
  } else {
    document.getElementById('label_game_date').style.display = 'block';
    document.getElementById('error_game_date').classList.add("error");
  }
  if (booking_date != "") {
    point++;
  } else {
    document.getElementById('label_booking_date').style.display = 'block';
    document.getElementById('error_booking_date').classList.add("error");
  }

  if (point == 9) {
    submitform();
    document.getElementById('myModal').style.display = "block";
  }
}

var newData = {}

function submitform() {

  newData.membership_number = document.getElementById('membership_number').value;
  newData.personal_transport = document.getElementById('personal_transport').value;
  newData.first_name = document.getElementById('first_name').value;
  newData.last_name = document.getElementById('last_name').value;
  newData.guest1 = document.getElementById('guest1').value;
  newData.guest2 = document.getElementById('guest2').value;
  newData.guest3 = document.getElementById('guest3').value;
  newData.guest_number = document.getElementById('guest_number').value;
  newData.holes_number = document.getElementById('holes_number').value;
  newData.game_date = document.getElementById('game_date').value;
  newData.booking_date = document.getElementById('booking_date').value;
  newData.bagTroll_number = document.getElementById('bagTroll_number').value;


  let data = jsonfile.readFileSync(file);
  data.push(newData); 

  jsonfile.writeFile(file, data, {spaces:2,EOL:'\r\n'}, function (err) {
    console.error(err);
    return;
  })
}

/*Function For Modal*/
function clickSpan() {
    document.getElementById('myModal').style.display = "none";
}function clickSpan() {
  location.reload();
}