function myFunction() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var number = document.getElementById('number').value;
	var country = document.getElementById('country').value;
	var package = document.getElementById('package').value;
	var message = document.getElementById('message').value;
	console.log(name);
	// var email = $('#email').val();
	// var number = $('#number').val();
	// var country = $('#country').val();
	// var package = $('#package').val();
	// var message = $('#message').val();
	if(name == '' || email == '' || number == '' || country == '' || package == '' || message == '')
	{
		return true;	
	}
	alert("Please wait your package is being booked......Thank you for choosing Us!!");
	return false;
}