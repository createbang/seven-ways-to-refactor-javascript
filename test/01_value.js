var Rating = require('../examples/01_value');
var expect = require('chai').expect;



var rating1;
var rating2;

describe('Rating', function() {

  describe('by direct constructor', function() {

    beforeEach( function() {
      rating1 = new Rating('B');
      rating2 = new Rating('C');
    })

    it('#toString', function() {
      expect(rating1.toString()).to.equal('B');
    })

    it('#isBetterThan', function() {
      expect(rating1.isBetterThan(rating2)).to.equal(true);
    })

    it('#isWorseThan', function() {
      expect(rating1.isWorseThan(rating2)).to.equal(false);
    })

    it('#isEqual', function() {
      expect(rating1.isEqual(rating2)).to.equal(false);
      expect(rating1.isEqual(rating1)).to.equal(true);
    })

  })

  describe('by #fromCost', function() {

    beforeEach( function() {
      rating1 = Rating.fromCost(5);
    })

    it('#toString', function() {
      expect(rating1.toString()).to.equal('C');
    })

  })

})
