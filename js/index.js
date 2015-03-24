
$(function () {

	var card1;
	var card2; 
	var numberOfMoves = 0;

	$(".card").click(function (e) {

		var $currentCard = $(this);
		var cardsSelected = $(".selected").length;



	});




	// use this function to display an alert if the user completes a wrong match
	// don't modify this function below!
	function showAlertAndUnselect() {
		setTimeout(function () {
			alert("Incorrect match!");
			$(".selected").removeClass('selected');
		}, 100);
	}
});