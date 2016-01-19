var KillerDancer = function(top, left, timeBetweenSteps){
  this.horizontalMovement = Math.floor(Math.random()*5 + 1);
  this.verticalMovement = Math.floor(Math.random()*5 + 1);             
  Dancer.call(this, top, left, 10);
  this.$node = $('<img class="dancer killerDancer" src="images/carlton.gif">');
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
    otherDancer.$node.toggle();
  }
};

KillerDancer.prototype.collisionCheck = function(otherDancers) {
 
  //distance helper function to calculate distance between 2 dancers 
  var distance = function(thisDancer, otherDancer) {
    return Math.sqrt(Math.pow(thisDancer.top-otherDancer.top, 2) + Math.pow(thisDancer.left-otherDancer.left, 2));
  };

  //loop though the dancers arry and check if any of them are within 5px
  for(var i = 0;i<otherDancers.length;i++){
    if(distance(this,otherDancers[i])<50){
      this.collisionAction(otherDancers[i]);
    }
  }
};