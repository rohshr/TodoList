//check off clicked items
$("ul").on("click", "li", function () { //adding event listner for element that exists in a page to account for elements that are not there yet
    $(this).toggleClass("checked");
});

//remove todo item when delete key pressed
$("ul").on("click", ".delete", function (event) {
    $(this).parent().fadeOut(200, function () {
        $(this).remove();
      });
    event.stopPropagation();
});

$("#new-todo").keypress(function(event) {
    if(event.which == 13){ //checking if enter key is pressed
        var todoText = $(this).val(); //extracting the value in the input

        //create a new todo item out of the input text
        addItem(todoText);

        //clearing input
        $(this).val("");
    }
});

$("#add").click(function () { 
    var todoText = $("#new-todo").val(); //extracting the value in the input

    //create a new todo item out of the input text
    addItem(todoText);

    //clearing input
    $("#new-todo").val("");
});

function addItem(todoText) {
    if (todoText != "")
        $("#list").append("<li>" + todoText + "<span class='delete'><i class='far fa-trash-alt'></i></span></li>");
}

//editing the title of the list
$("#list-title").focus(function() {
    $(this).select();
});

$("#list-title").keypress(function (event) { 
    if(event.which == 13) {
        $(this).attr("value", $(this).val());
        $(this).blur();
    }
});