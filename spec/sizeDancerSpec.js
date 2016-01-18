describe("sizeDancer", function() {

  var sizeDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    sizeDancer = new SizeDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(sizeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should change colors", function() {
    sinon.spy(sizeDancer.$node, 'css');
    sizeDancer.step();
    expect(sizeDancer.$node.css.called).to.be.true;
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(sizeDancer, "step");
      expect(sizeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(sizeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(sizeDancer.step.callCount).to.be.equal(2);
    });
  });
});
