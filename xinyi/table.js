
var jsonfile = require('jsonfile')
var filename = ('jsonfile.js');
var $ = require('jquery');
var chunk = require('chunk')

$(function(){
	let numbers = jsonfile.readFileSync(filename)
	if (numbers.length>0){
		let number_page = chunk(numbers,10) 
		make_table(number_page[0])
		if (number_page.length>1){
			create_pagination(number_page)
		}
	}	
});

function make_table(numbers){
	var html_table_inside =""
	for(var i in numbers){
		html_table_inside = html_table_inside +'<tr><td>'+numbers[i].Membership_Number+'</td>'+
												'<td>'+numbers[i].Number_of_holes+'</td>'+
												'<td>'+numbers[i].First_name+'</td>'+
												'<td>'+numbers[i].Last_name+'</td>'+
												'<td>'+numbers[i].Date_of_Game+'</td>'+
												'<td>'+numbers[i].Booking_game+'</td>'+
												'<td>'+numbers[i].Guest_1+'</td>'+
												'<td>'+numbers[i].Guest_2+'</td>'+
												'<td>'+numbers[i].Guest_3+'</td>'+
												'<td>'+numbers[i].personal_transport+'</td>'+
												'<td>'+numbers[i].numbers_of_golf_bag_trolleys+'</td>'+
												'<td>'+numbers[i].Number_of_guest+'</td>'+'</tr>'
	}

	var html_table = '<table>'+
						'<tr>'+
							'<th>'+'Membership_Number'+'</th>'+
							'<th>'+'Number_of_holes'+'</th>'+
							'<th>'+'First_name'+'</th>'+
							'<th>'+'Last_name'+'</th>'+
							'<th>'+'Date_of_Game'+'</th>'+
							'<th>'+'Booking_game'+'</th>'+
							'<th>'+'Guest_1'+'</th>'+
							'<th>'+'Guest_2'+'</th>'+
							'<th>'+'Guest_3'+'</th>'+
							'<th>'+'personal_transport'+'</th>'+
							'<th>'+'numbers_of_golf_bag_trolleys'+'</th>'+
							'<th>'+'Number_of_guest'+'</th>'+
						'</tr>'
					+ html_table_inside + '</table>'

	$('section#content').html(html_table);
}

function create_pagination(pages){
	$('#number-pagination').html('')

	for (var i = 0; i < pages.length; i++){
		let item_html = `<span class="item" data-page="${i}">${i+1}</span>`
		$('#number-pagination').append(item_html)
	}
	$('#number-pagination span.item').click(function(){
		$this = $(this)
		make_table(pages[$this.data('page')]);
	})
}