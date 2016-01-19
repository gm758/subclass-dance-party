var KillerDancer = function(top, left, timeBetweenSteps){
  this.horizontalMovement = Math.floor(Math.random()*5 + 1);
  this.verticalMovement = Math.floor(Math.random()*5 + 1);             
  Dancer.call(this, top, left, timeBetweenSteps);
};

KillerDancer.prototype = Object.create(Dancer.prototype);
KillerDancer.prototype.constructor = KillerDancer;

KillerDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.move(this.left + this.horizontalMovement, this.top + this.verticalMovement);
};