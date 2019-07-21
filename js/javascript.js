//make document load when everything ready
$(document).ready(function() {

    //When submit is pressed, run function 'cityChange' 
       //not 'form' but '#submit-btn' because if form, clicking the whole bar would react. Only want submit button
       $("#submit-btn").click(function(event) {
        // Prevent a form submission using the event.preventDefault() function    
        event.preventDefault();
       
        
    //create variable for city and use .val to get value from user-input
       var city = $("#city-type").val();
     // if else statements on cities and change text based on how user writes cities.
     
     //if user enters New York, New York City, NYC...
     //change bg to nyc.jpg
     if (city === "new york" || city === "new york city" || city === "nyc") {
         //use attr. to change the class to the picture
         //   $("body").removeClass();
         //   $("body").addClass("nyc")
         $("body").attr("class", "nyc")  //essentially, this does the same as removeClass and add class, but changes the class to the image itself?
     } 
     //if user enters San Francisco, SF, Bay Area...
     //change bg to sf.jpg
     else if (city ==="san francisco" || city === "bay area" || city === "sf") {
         $("body").removeClass();
         $("body").attr("class", "sf")
     }
     //if user enters Los Angeles, LA or LAX...
     //change bg to la.jpg
     else if (city === "los angeles" || city === "la" || city === "lax") {
         $("body").removeClass();
         $("body").attr("class", "la")
     }
     //if user enters Austin, or ATX...
     //change bg to austin.jpg
     else if (city === "austin" || city === "atx") {
         $("body").removeClass();
         $("body").attr("class", "austin")
     }
     //if user enters Sydney or SYD...
     //change bg  to sydney.jpg
     else if (city === "sydney" || city ==="syd") {
         $("body").removeClass();
         $("body").attr("class", "sydney")
     }
     $("form").trigger("reset");
   
   }); //this closing bracket is for event.default
    
   }); //this one is the document ready.     
   