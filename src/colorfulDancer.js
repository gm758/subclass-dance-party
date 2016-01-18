var ColorfulDancer = function(top, left, timeBetweenSteps){
  this.colors = ['blue','green','red','orange','pink'];
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColorfulDancer.prototype = Object.create(Dancer.prototype);
ColorfulDancer.prototype.constructor = ColorfulDancer;

ColorfulDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var randomIndex = Math.floor(Math.random() * this.colors.length);
  this.$node.css({'border-color': this.colors[randomIndex]});
};