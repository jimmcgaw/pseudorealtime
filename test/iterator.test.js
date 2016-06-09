(function() {
  'use strict';

  var assert = require('chai').assert;
  var iterator = require('../iterator.js');

  describe("#createIterator", function(){
    var myIterator;

    beforeEach(function(){
      myIterator = iterator.createIterator();
    });

    it("the iterator is an object with a 'next' key that has a function", function(){
      assert.equal(typeof(myIterator.next), "function");
    });

    it("takes an array of values that will be returned by next until hasNext is false", function(){
      myIterator = iterator.createIterator(['hello', 'there', 'world']);

      var firstIteration = myIterator.next()
      assert.equal(firstIteration.value, "hello");
      assert.equal(firstIteration.hasNext, true);
    });

    it("takes an array of values that will be returned by next until hasNext is false", function(){
      myIterator = iterator.createIterator(['hello', 'there', 'world']);

      myIterator.next();
      myIterator.next();
      var lastIteration = myIterator.next();
      assert.equal(lastIteration.value, "world");
      assert.equal(lastIteration.hasNext, false);
    });
  });
  
}());
