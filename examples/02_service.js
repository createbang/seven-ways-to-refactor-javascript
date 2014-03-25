var UserAuthenticator = function( user ) {
  this.user = user;
}

UserAuthenticator.prototype.authenticate = function( unencryptedPassword ) {
  if ( !unencryptedPassword ) return false;

  if ( this.user.unencryptedPassword === unencryptedPassword ) {
    return this.user;
  } else {
    return false;
  }
}

module.exports = UserAuthenticator;