//  Check off specific todos by clikcing

$("ul").on("click", "li", function () {
 $(this).toggleClass("completed");
});

//  click on X to delete To-do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
      $(this).remove();
    });
    event.stopPropagation();

});
$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        //grab new todo text
        var todoText = $(this).val();
        $(this).val("");
        // create new li and add ul
        $("ul").append("<li><span><i class='fas fa-dumpster'></i></span>" + todoText + "</li>")
        
    }
});
$(".fa-pen").click(function() {
    $("input[type='text']").fadeToggle();
});

// Remove all Li // 
$(".fa-recycle").click(function() {
    $("li").remove();
});

//Background Image Change //
$(".fa-fill-drip").click(function() {
    $("body").toggleClass("backgroundColor backgroundColor1");
    $("h1").toggleClass("heading heading1");

});
// Change Text size
$(".fa-text-height").click(function() {
    $("ul").toggleClass("ulLargeText");
});



// Getting Email to Log to the console.
$("form").on('keypress', function(mail) {
	// if(mail.which == 13) {
		mail.preventDefault();
		//getting data from html file
		var email = $("#email").val().trim();
	     var list = $("ul").text();
	//data to be sent 
	     var data = {
			email,
			 list
		}
		 //sending data to server
		$.post("/email", data, function(){
			console.log("Server recieve our data");
		});
	
	//Console Log the results of enter
	var x = document.getElementById("email").value;
         console.log(x);
	 var y = $( "ul" ).each(function(todolist) {
	console.log( todolist + " : " + $( this ).text() );
	});
	// clear input *Still in work*
	// $("form").val("");
});




