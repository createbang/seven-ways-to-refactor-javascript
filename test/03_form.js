var Signup = require('../examples/03_form');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
chai.use(require('sinon-chai'));



var signup;
var params;

describe('UserAuthenticator', function() {

  beforeEach( function() {
    params = { name: 'John Smith', email: 'foo@bar.com', companyName: 'Acme Inc.' };
    signup = new Signup( params );
  });

  it('saves the form', function() {
    expect( signup.save() ).to.equal(true);
  });

  it('runs validation on the parameters', function() {
    var spy = sinon.spy( signup, 'validate' );
    signup.save();
    expect(spy).to.have.been.called;
    spy.restore();
  });

  it('respects validation failure', function() {
    // install failing validation function;
    signup.validate = function() {
      return this.params.companyName === 'fakeCompanyName';
    }
    expect( signup.save() ).to.equal(false);
  });

  it('creates a company object', function() {
    signup.save();
    expect( signup.company ).to.have.property('name');
  });

  it('creates a user object', function() {
    signup.save();
    expect( signup.user ).to.have.property('name', 'John Smith');
    expect( signup.user ).to.have.property('email', 'foo@bar.com');
    expect( signup.user ).to.have.property('company', signup.company);
  });

})
