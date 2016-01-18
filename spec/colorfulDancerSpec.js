describe("colorfulDancer", function() {

  var colorfulDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorfulDancer = new ColorfulDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(colorfulDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should change colors", function() {
    sinon.spy(colorfulDancer.$node, 'css');
    colorfulDancer.step();
    expect(colorfulDancer.$node.css.called).to.be.true;
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(colorfulDancer, "step");
      expect(colorfulDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(colorfulDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(colorfulDancer.step.callCount).to.be.equal(2);
    });
  });
});
