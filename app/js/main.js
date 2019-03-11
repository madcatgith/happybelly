$(document).ready(function($) {
	$('.card[data-detail]').click(function(event) {
		event.preventDefault();
		var details = '#'+$(this).data('detail');
		$(this).find('h2').hide();
		$(details).addClass('show');
	});

	$('.detail').click(function(event){
		event.preventDefault();
		var caller=$(this).attr('id');
		$(this).removeClass('show');
		$('.card[data-detail="'+caller+'"]').find('h2').show();
	});

	$('.card[data-animate]').hover(function(){
		var object = document.getElementById($(this).data('animate'));
		var svgDoc = object.contentDocument;
		var svgElem = svgDoc.getElementById("blinchik");
		svgElem.setAttribute("class","animate");
	},function(){
		var object = document.getElementById($(this).data('animate'));
		var svgDoc = object.contentDocument;
		var svgElem = svgDoc.getElementById("blinchik");
		svgElem.classList.remove("animate");
	});
});