var person = function(){
	
}
/**********************************************/
/*GET MEMBER DATA VALUE*/

class Member{

	constructor(
                 MembershipNumber,
                 FirstName,
                 LastName,
                 BagTrolleys,
                 Guest1,
                 Guest2,
                 Guest3,
                 DateOfGames,
                 BookingDate,
                 NumberHoles,	
                 PersonalTransport
                 	
                 ){

		this.MembershipNumber = MembershipNumber
		this.FirstName = FirstName
		this.LastName = LastName
		this.BagTrolleys = BagTrolleys
		this.Guest1 = Guest1
		this.Guest2 = Guest2
		this.Guest3 = Guest3
		this.DateOfGames = DateOfGames
		this.BookingDate = BookingDate
		this.NumberHoles = NumberHoles
		this.PersonalTransport = PersonalTransport

	}
        
       transformObj(){
	return{
		'MembershipNumber' : this.MembershipNumber,
		'FirstName' : this.FirstName,
		'LastName' : this.LastName,
		'BagTrolleys' : this.BagTrolleys,
		'Guest1' : this.Guest1,
		'Guest2' : this.Guest2,
		'Guest3' : this.Guest3,
		'DateOfGames' : this.DateOfGames,
		'BookingDate' : this.BookingDate,
		'NumberHoles' : this.NumberHoles,
		'PersonalTransport' : this.PersonalTransport	
	}
}
}

module.exports = Member