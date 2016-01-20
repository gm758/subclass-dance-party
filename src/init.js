$(document).ready(function() {
  window.dancers = [];
  var killerDancerCreated = false;
  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    if (dancerMakerFunctionName !== 'KillerDancer' || !killerDancerCreated) {
      if (dancerMakerFunctionName === 'KillerDancer') {
        killerDancerCreated = true;
      }
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      dancer.$node.attr('data-dancer', window.dancers.length);
      window.dancers.push(dancer);


      $('body').append(dancer.$node);
      
    }
  });
  
  $(".lineUp").on("click", function(){
    var currentTop = 5;
    for(var i=0;i<window.dancers.length;i++){
      dancers[i].setPosition(currentTop,5);
      currentTop += 2*parseInt(dancers[i].$node.css('border-width'));
    }
  });

  $(document).on('click', '.dancer', function() {
    var dancer = window.dancers[$(this).data('dancer')];
    console.log(dancer);
    dancer.turboCharge();
  });
  $(document).on('mouseenter', '.killerDancer', function(){
    $(this).css({'transform':'rotate(180deg)'});
  });        
  $(document).on('mouseleave', '.killerDancer', function(){
    $(this).css({'transform':'rotate(0deg)'});
  }); 
  
});

