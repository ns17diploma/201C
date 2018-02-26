var app_js = './app.js';
var chunk = require('chunk');
var jsf = require('jsonfile');
var $ = require('jquery');
var file = 'members.json'

$(function(){

  let members = jsf.readFileSync(file)

  if (members.length > 0) {    

    let member_page = chunk(members, 4)

    make_table(member_page[0])

    if (member_page.length > 1) {
      create_pagination(member_page)
    }
  }


})

function make_table(members)
{

  $('#members-table tbody').html('')
  for (var i in members) {

  let member_row_html = 
  '<tr><td>'+ members[i].MembershipNumber +'</td>'+
      '<td>'+ members[i].FirstName +'</td>'+
      '<td>'+ members[i].LastName +'</td>'+
      '<td>'+ members[i].BagTrolleys +'</td>'+
      '<td>'+ members[i].Guest1 +'</td>'+
      '<td>'+ members[i].Guest2 +'</td>'+
      '<td>'+ members[i].Guest3 +'</td>'+
      '<td>'+ members[i].DateOfGames +'</td>'+
      '<td>'+ members[i].BookingDate +'</td>'+
      '<td>'+ members[i].NumberHoles +'</td>'+
      '<td>'+ members[i].PersonalTransport +'</td>'+
  '</tr>';
    $('#members-table tbody').append(member_row_html)
  }
}

function create_pagination(pages) {

  $('#members-pagination').html('')

  for (var i = 0; i < pages.length; i++) {
    let item_html = `<span class="item" data-page="${i}">${i+1}</span>`
    $('#members-pagination').append(item_html)
  }
  $('#members-pagination span.item').click(function() {
    $this = $(this)
    make_table(pages[$this.data('page')]);
  });
}
