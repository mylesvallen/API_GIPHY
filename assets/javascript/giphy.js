var topics = [
'nba finals',
'sneakers', 
'hip hop', 
'javascript',
'css',
'html',
'steve jobs',
'panda bears', 
'mercedes-benz',
'bmw',
'tesla',
];

//converts topics into buttons
function addBtn() {
	$('#buttonBox').empty();
	for (var i = 0; i < topics.length; i++) {
		var btn = $('<button>');
		btn.addClass('myButton');
		btn.attr('data-search', topics[i]);
		btn.append(topics[i]);
		$('#buttonBox').append(btn);
	};
};

//user create new topic(s)
function showNewBtn() {
	var typeText = $('#newTopic').val().trim();
	topics.push(typeText);
	addBtn();
	$('form').trigger('reset');
};





$(document).ready(function() {
	addBtn();

//on click it returns gif
$('button').on("click", function() {

	var topic = $(this).attr('data-search');

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" 
	+ topic + "&api_key=dc6zaTOxFJmzC&rating=pg&limit=5";   


	$.ajax({
		url: queryURL,
		method: "GET"
	})

	.done(function(response) {

		var results = response.data;

		for (var i = 0; i < results.length; i++) {
			
			var x = response.data[i].images.fixed_height.url;

			$('#topicImagesDiv').prepend
			('<img src="' + x + '">');
			


        }
    });

});

});