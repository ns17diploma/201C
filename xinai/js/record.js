var jsf = require('jsonfile');
var filename = 'jsfile.json'
var chunk = require ('chunk')
var $ = require('jquery');


$(function(){

  let members = jsf.readFileSync(filename)

  if (members.length > 0) {

    let member_page_groups = chunk(members, 10)

    make_table(member_page_groups[0])

    if (member_page_groups.length > 1) {
      create_pagination(member_page_groups)
    }
  }
})

function make_table(members)
{
	var html_insert_table = ""
	for (var i in members) {

		html_insert_table = html_insert_table +
							'<tr><td>' + members[i].Membership_Number+ '</td>' + 
							'<td>' + members[i].Number_of_Holes + '</td>' +
							'<td>' + members[i].First_Name + '</td>' + 
							'<td>' + members[i].Last_Name + '</td>' +
	 						'<td>' + members[i].Date_of_Game+ '</td>' + 
	 						'<td>' + members[i].Booking_of_Date + '</td>' + 
	 						'<td>' + members[i].Guest_1 + '</td>' + 
	 						'<td>' + members[i].Guest_2 + '</td>' + 
	 						'<td>' + members[i].Guest_3 + '</td>' + 
	 						'<td>' + members[i].Personal_Transport_Buggy + '</td>' +
	 						'<td>' + members[i].Number_of_Golf_Bag_Trolleys+ '</td>' + 
	 						'<td>' + members[i].Number_of_Guests + '</td>' +'</tr>'; 

	}

	var html_table = '<table>' + 
						'<tr>' + 
							'<th>'+'Membership_Number'+'</th>'+
							'<th>'+'Number_of_Holes'+'</th>'+
							'<th>'+'First_Name'+'</th>'+
							'<th>'+'Last_Name'+'</th>'+
							'<th>'+'Date_of_Game'+'</th>'+
							'<th>'+'Booking_of_Date'+'</th>'+
							'<th>'+'Guest_1'+'</th>'+
							'<th>'+'Guest_2'+'</th>'+
							'<th>'+'Guest_3'+'</th>'+
							'<th>'+'Personal_Transport_Buggy'+'</th>'+
							'<th>'+'Number_of_Golf_Bag_Trolleys'+'</th>'+
							'<th>'+'Number_of_Guests'+'</th>'+
						'</tr>'+
							html_insert_table + '</table>';

	$('section#content').html(html_table);
};

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