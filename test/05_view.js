var Review = require('../examples/05_view');
var expect = require('chai').expect;



var review;

describe('Review', function() {

  beforeEach( function() {
    data = {
      author: {
        firstName: 'John',
        lastName: 'Smith'
      },
      rating: 3,
      status: 'active',
      ratedOn: new Date('2/8/2013')
    }
    review = new Review( data ).data();
  })

  it('has the formatted authorFullName', function() {
    expect( review.authorFullName ).to.equal('John Smith');
  })

  it('has the formatted asteriskRating', function() {
    expect( review.asteriskRating ).to.equal('***');
  })

  it('has the formatted ratedOn', function() {
    expect( review.ratedOn ).to.equal('02/08/2013');
  })

  it('only exposes view object properties', function() {
    expect( review ).to.not.have.property('status');
  })

})
