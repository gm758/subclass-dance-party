var SmithDancer = function(top, left, timeBetweenSteps){
  this.i = 0;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer smithDancer" src="images/willsmith.png">');
  Dancer.prototype.setPosition.call(this,top,left);
};

SmithDancer.prototype = Object.create(Dancer.prototype);
SmithDancer.prototype.constructor = SmithDancer;

SmithDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if (this.i % 2 === 0) {
    this.$node.css({'transform':'rotate(330deg)'});
  } else {
    this.$node.css({'transform':'rotate(30deg)'});
  }
  this.i++;
};