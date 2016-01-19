var ColorfulDancer = function(top, left, timeBetweenSteps){
  this.colors = ['blue','green','red','orange','pink'];
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColorfulDancer.prototype = Object.create(Dancer.prototype);
ColorfulDancer.prototype.constructor = ColorfulDancer;

ColorfulDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var randomIndex = Math.floor(Math.random() * this.colors.length);
  this.$node.css({'border-color': this.colors[randomIndex]});
};