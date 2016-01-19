var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}; 

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
 // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.turboCharge = function(){
  this.timeBetweenSteps/=2;
};

Dancer.prototype.move = function(newX, newY) {
  this.top = newY;
  this.left = newX;
  setPosition(this.top, this.left);
};

Dancer.prototype.collisionAction = function(){};

Dancer.prototype.collisionCheck = function(otherDancer) {
  var distance = function(top1, top2, left1, left2) {
    return Math.sqrt(Math.pow(top1-top2, 2) + Math.pow(left1-left2));
  };
  if (distance(this.top, otherDancer.top, this.left, otherDancer.left)) {
    this.collisionAction(otherDancer);
  }
};