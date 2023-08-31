$(".open-bars").click(function () { 
    $('nav').animate({width:'40vw'},1500);
    
});
$(".close-icon span").click(function () { 
    $('nav').animate({width:'0%'},1500);

});

// Accordion
$(".detail p").eq(0).slideDown(500);
$(".detail h3").click(function (e) { 
  $('.detail p').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);    
});


// Duration (count down)
$(document).ready(function() {
    // Define the event date
    const eventDate = new Date("2023-10-25T00:00:00").getTime();
  
    // Update the countdown every second
    const countdownInterval = setInterval(function() {
      const now = new Date().getTime();
      const timeRemaining = eventDate - now;
  
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      $(".days").text(`${days} Days`);
      $(".hours").text(`${hours} Hours`);
      $(".minutes").text(`${minutes} Minutes`);
      $(".seconds").text(`${seconds} Seconds`);

    }, 1000);
  });

// Charachters
$("textarea").on("input", function() {
    var maxChars = 100;
    var inputText = $(this).val();

    if (inputText.length > maxChars) {
      $(this).val(inputText.slice(0, maxChars));
      inputText = inputText.slice(0, maxChars);
    }
  
    var remainingChars = maxChars - inputText.length;
    $("form .num").text(remainingChars);
  });
