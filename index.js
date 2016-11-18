$(document).ready(function (){

// An array that stores the seat numbers that a user has selected
var selectedSeats = [];
// An array that stores user information on form submit
var userInfo = [];

// A handler for when a user clicks on a seat with a class of Open or Selected
$('.seats').on('click', function(){
	
	var seatNumber = " " + $(this).attr('id').toUpperCase(); 
	var seatClass = $(this).attr('class');
	var formOpacity = $('#form').css('opacity');
	
	// Push the seat number to our selectedSeats array
	if(seatClass === 'seats open'){
		selectedSeats.push(seatNumber);
		
	// Sets form opacity to 1 if the current opacity is set to 0. This makes the form visible.
		if(formOpacity === '0'){
			$('#form').css('opacity', '1');
	};	 
	
	//Remove seats from the selectedSeats array if they have a class of selected and are clicked again.
	}
		else if(seatClass === 'seats selected'){
		selectedSeats = jQuery.grep(selectedSeats, function(e){
			return e !== seatNumber;
		});
	};

	//Make form disappear when all seats are unselected
	if (selectedSeats.length < 1) {
		$('#form').css('opacity', '0');
	}
	
	//'Seat(s) Selected' field is populated with clicked seat's ID value
	$('#seatsToBeReserved').val(selectedSeats);

	//Toggle seat class between 'open' and 'selected'
	$(this).toggleClass('open selected');
	
});
	
// An event handler for when the 'reservebutton' is clicked
	$('#reservebutton').on('click', function(){
		var name = $('#name').val();
		var reservedSeats = $('#seatsToBeReserved').val();
		
		// Stores the users' name and the seat numbers to an object, which is pushed to an array
		var userObject = {
			name: name,
			seat: reservedSeats
		};
		userInfo.push(userObject);
		console.log(userInfo);

		// Clears out the form fields
		$('#name').val('');
		$('#seatsToBeReserved').val('');

		$('.selected').removeClass('selected').addClass('reserved');

	// Hides the form	
	$('#form').css('opacity', '0');

	// Clears the selectedSeats array
	selectedSeats = [];	

});


//document.body wrapper
});