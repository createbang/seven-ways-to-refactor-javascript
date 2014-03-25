var UserAuthenticator = require('../examples/02_service');
var expect = require('chai').expect;



var user;

describe('Service', function() {

  beforeEach( function() {
    user = { unencryptedPassword: 'f00b4r' };
  })

  it('#authenticate', function() {
    expect( new UserAuthenticator( user ).authenticate('foobar') ).to.equal( false );
    expect( new UserAuthenticator( user ).authenticate('f00b4r') ).to.equal( user );
  })

})
