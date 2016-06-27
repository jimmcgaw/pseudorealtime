(function() {
  'use strict';
  var assert = require('chai').assert;
  var generator = require('../generator.js');

  describe("#fibonacci", function(){
    var fibo,
      firstValue = 1,
      secondValue = 1;
    beforeEach(function(){
      fibo = generator.fibonacci(firstValue, secondValue);
    });

    it("returns a function when initialized", function(){
      assert.equal(typeof(fibo.next), "function");
    });

    it("generates fibonacci values", function(){
      var value1 = fibo.next().value;
      var value2 = fibo.next().value;
      assert.equal(firstValue, value1);
      assert.equal(secondValue, value2);

      var nextValue;

      for (var i = 0; i < 10; i++){
        nextValue = value1 + value2;
        value1 = value2;
        value2 = nextValue;
        assert.equal(fibo.next().value, nextValue);
      }
    });
  });

  describe('#add', function() {
    it('calling generator next returns object with "value" prop with result', function () {
      var gen = generator.add(6, 7);
      var result = gen.next();
      assert.equal(result.value, 13);
    });
  });

}());
