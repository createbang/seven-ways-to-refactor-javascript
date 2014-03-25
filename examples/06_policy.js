var moment = require('moment');




var ActiveUserPolicy = function( user ) {
  this.user = user;
}

ActiveUserPolicy.prototype.isActive = function() {
  return this.user.emailConfirmed === true &&
         Math.abs( moment( this.user.lastLoginAt ).diff( moment(), 'days' ) ) < 14
}

module.exports = ActiveUserPolicy;
