var PhilDancer = function(top, left, timeBetweenSteps){
  this.i = 0;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer philDancer" src="images/unclePhil.png">');
  Dancer.prototype.setPosition.call(this,top,left);
};

PhilDancer.prototype = Object.create(Dancer.prototype);
PhilDancer.prototype.constructor = PhilDancer;

PhilDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if (this.i % 2 === 0) {
    this.$node.css({'transform':'rotate(330deg)'});
  } else {
    this.$node.css({'transform':'rotate(30deg)'});
  }
  this.i++;
};