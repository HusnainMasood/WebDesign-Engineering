$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.fight-button').click(clickedFightButton);
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {
      name: "Horse", 
      weight: 20, 
      happiness: 10, 
      fights: 0
    };
  
    function clickedTreatButton() {
      pet_info.happiness++; // Increase pet happiness
      pet_info.weight++; // Increase pet weight
                     
      checkAndUpdatePetInfoInHtml();
      $("#weight").fadeIn(500);
      $("#weight").fadeOut(500);
      
      $(".treat-button").click(function(){
        $("img").animate({
          height: 'toggle'
        });
      }); 
    }
    
    function clickedPlayButton() {
      pet_info.happiness++; // Increase pet happiness
      pet_info.weight--; // Decrease pet weight
      
      checkAndUpdatePetInfoInHtml();
      $("#play").fadeIn(500);
      $("#play").fadeOut(500);
      
      $(".play-button").click(function(){
        $("img").animate({
          width: 'toggle'
        });
      }); 
    }
    
    function clickedExerciseButton() {  
      pet_info.happiness--; // Decrease pet happiness
      pet_info.weight--; // Decrease pet weight
      
      checkAndUpdatePetInfoInHtml();
      $("#exercise").fadeIn(500);
      $("#exercise").fadeOut(500);
      
      $(".exercise-button").click(function(){
        $("img").hide();
      }); 
    }

    function clickedFightButton() {
      pet_info.happiness--; // Decrease pet happiness
      pet_info.weight--; // Decrease pet weight
      pet_info.fights++;
      
      checkAndUpdatePetInfoInHtml();
      $("#fight").fadeIn(500);
      $("#fight").fadeOut(500);
        
      $(".exercise-button").click(function(){
        $("img").show();
      }); 

    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if(pet_info.weight <= 0)
      {
          pet_info.weight = 0;
      }
      
      if(pet_info.happiness <= 0)
      {
          pet_info.happiness = 0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.fights').text(pet_info['fights']);
    }

    // Iterate over a jQuery object, executing a function for each matched element. 
    // This function is executing for the li element to change the font
    $( ".pet" ).click(function() {
      $( "li" ).each(function() {
        $( this ).toggleClass( "example" );
      });
    });

    // Attach a handler to an event for the elements.
    // This function is putting a handler to an event of the li element
    $( "li" ).bind( "mouseenter mouseleave", function( event ) {
      $( this ).toggleClass( "over" );
    });
  