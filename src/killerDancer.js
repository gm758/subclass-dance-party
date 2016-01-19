var KillerDancer = function(top, left, timeBetweenSteps){
  this.horizontalMovement = Math.floor(Math.random()*5 + 1);
  this.verticalMovement = Math.floor(Math.random()*5 + 1);             
  Dancer.call(this, top, left, 10);
  this.$node = $('<img class="dancer killerDancer" src="images/carlton.gif">');
  Dancer.prototype.setPosition.call(this,top,left);
};

KillerDancer.prototype = Object.create(Dancer.prototype);
KillerDancer.prototype.constructor = KillerDancer;

KillerDancer.prototype.move = function() {
  if (this.top < 5 || this.top > $('body').height() - 5) {
    this.verticalMovement *= -1;
  }
  if (this.left < 5 || this.left > $('body').width() - 5) {
    this.horizontalMovement *= -1;
  }
  this.top += this.verticalMovement;
  this.left += this.horizontalMovement;
  this.setPosition(this.top, this.left);
};

KillerDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.collisionCheck(window.dancers);
  this.move();
};


KillerDancer.prototype.collisionAction = function(otherDancer){
  if (this != otherDancer) {
    window.dancers[otherDancer.$node.data('dancer')] = undefined;
    otherDancer.$node.remove();    

    var currentHeight = this.$node.height();
    var newHeight = 100*(currentHeight*1.1)/$('body').height();
    if (newHeight > 100) {
      newHeight = 100;
    }
    this.$node.css({'height':newHeight+'%'});
  }
};

KillerDancer.prototype.collisionCheck = function(otherDancers) {
 
  //distance helper function to calculate distance between 2 dancers 
  var distance = function(thisDancer, otherDancer) {
    return Math.sqrt(Math.pow(thisDancer.top-otherDancer.top, 2) + Math.pow(thisDancer.left-otherDancer.left, 2));
  };

  //loop though the dancers arry and check if any of them are within 5px
  for(var i = 0;i<otherDancers.length;i++){
    if(otherDancers[i]){
      if(distance(this,otherDancers[i])<100){
        this.collisionAction(otherDancers[i]);
      }      
    }    
  }
};