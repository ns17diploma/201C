var jsonfile = require('jsonfile');
var file = "data.json";
var fs = require('fs');
 window.jQuery = window.$ = require('jquery');
//var $ = require('jquery');
var chunk = require('chunk');

$(function(){


  if(!fs.existsSync(file)) {
    jsonfile.writeFileSync(file, [])
  }

  var data = jsonfile.readFileSync(file)
  if (data.length === 0) {
    alert('NO ANY MEMBER NOW')
  } else {
    addTable(0)
  }

  function makeAll(btnNum) {
    for (var j = 0; j < btnNum; j++) {
      let theBtn = '<button type="button" class="pageBtn" value="' 
      + (Number(j) + 1) + '">' + (Number(j) + 1) + '</button>'
      $('#allBtn').append(theBtn);
      let showMember = chunk(data, 10)
    }
  }

  function addTable(x) {
    let theData = jsonfile.readFileSync(file);
    let showMember = chunk(data, 10)
    $('#listTable').html("");
    let theMembers = showMember[x];
    if (theMembers.length > 0) {
    for (var i = 0; i < theMembers.length; i++) {

          let members = `<tr>
                  <td>${theMembers[i]['membership_number']}</td>
                  <td>${theMembers[i]['personal_transport']}</td>
                  <td>${theMembers[i]['first_name']}</td>
                  <td>${theMembers[i]['last_name']}</td>
                  <td>${theMembers[i]['guest1']}</td>
                  <td>${theMembers[i]['guest2']}</td>
                  <td>${theMembers[i]['guest3']}</td>
                  <td>${theMembers[i]['guest_number']}</td>
                  <td>${theMembers[i]['holes_number']}</td>
                  <td>${theMembers[i]['game_date']}</td>
                  <td>${theMembers[i]['booking_date']}</td>
                  <td>${theMembers[i]['bagTroll_number']}</td>
                  </tr>`
          $('#listTable').append(members);  
        }}
        makeAll(showMember.length);

    }

    $('.pageBtn').click(function(){
      $this = $(this)
      addTable(Number($this.val()) - 1)   
    })
})