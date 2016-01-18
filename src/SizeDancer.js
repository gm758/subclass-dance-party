var SizeDancer = function(top, left, timeBetweenSteps){
  this.size = 10;
  Dancer.call(this, top, left, timeBetweenSteps);
};

SizeDancer.prototype = Object.create(Dancer.prototype);
SizeDancer.prototype.constructor = SizeDancer;

SizeDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var randomSize = Math.floor(Math.random()*50);
  this.$node.css({'border-width': randomSize});
};
