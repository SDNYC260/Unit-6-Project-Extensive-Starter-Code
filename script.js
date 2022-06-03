$(".reply-yes").click(function() {  
    $(".homer-reply").text("GREAT NOW GO TO THE NEXT QUESTION");
    $(".reply-yes").css("background-color", "yellow");
});

$(".reply-no").click(function() {  
    $(".homer-reply").text("OK LEAVE WYATT AND SEVERO SUFFERING");
    $(".reply-no").css("background-color", "red");
});
$(".reply-sh").click(function() {  
    $(".homer-reply").text("GOOD CHOICE NOW KEEP ON GOING");
    $(".reply-sh").css("background-color", "blue");
});
$(".reply-s").click(function() {  
    $(".homer-reply").text("TERRIBLE CHOICE");
    $(".reply-s").css("background-color", "red");
});
$(".reply-b").click(function() {  
    $(".homer-reply").text("WELL WE WILL BE HERE FOR ANOTHER 3 YEARS");
    $(".reply-b").css("background-color", "yellow");
});
$(".reply-d").click(function() {  
    $(".homer-reply").text("JUST LEAVE US HERE");
    $(".reply-d").css("background-color", "orange");
});

