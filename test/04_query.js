var AbandonedTrialQuery = require('../examples/04_query');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
chai.use(require('sinon-chai'));


var accounts;
var callback;

describe('Query', function() {

  beforeEach( function() {
    accounts = [
      { plan: 'trial', invitesCount: 2 },
      { plan: null, invitesCount: 0 },
      { plan: 'trial', invitesCount: 1 }
    ];
  });

  it('returns the correct set from the collection', function() {
    var spy = sinon.spy();
    new AbandonedTrialQuery( accounts ).findEach( spy );
    expect( spy ).to.have.been.calledOnce;
  });

})
