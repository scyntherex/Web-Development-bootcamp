// check off specific todis by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();	
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	//if the user hits 'enter'
	if(event.which === 13) {
		//create new li and add to ul
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-minus-circle'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus-square").click(function(){
	$("input[type='text']").fadeToggle();
});