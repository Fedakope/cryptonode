$(document).ready(function() {

	// Event listener
	$("#modalexokbutton").on("click", function() {
		var exchangename = $('#exchangename').val()
		$.ajax({
			url: "/exchanges",
			method: "post",
			data: { name: exchangename },
			dataType: "json",
			success: function(resultats, status) {
				console.log(resultats);
			}});
	});




});