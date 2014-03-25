var ActiveUserPolicy = require('../examples/06_policy');
var expect = require('chai').expect;
var moment = require('moment');



var user;
var isActive;

describe('Policy', function() {

  it('fails if the policy is not satisfied', function() {
    user = {
      emailConfirmed: true,
      lastLoginAt: moment().subtract('days', 18)
    }
    isActive = new ActiveUserPolicy( user ).isActive();

    expect( isActive ).to.equal(false);
  })

  it('succeeds if the policy is satisfied', function() {
    user = {
      emailConfirmed: true,
      lastLoginAt: moment().subtract('days', 10)
    }
    isActive = new ActiveUserPolicy( user ).isActive();

    expect( isActive ).to.equal(true);
  })

})
