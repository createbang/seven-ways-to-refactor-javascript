var createCompany = function( params ) { return params; }; //no-op
var createUser =    function( params ) { return params; }; //no-op

var Signup = function( params ) {
  this.params = params;
}

Signup.prototype.validate = function() {
  return true;
}

Signup.prototype.save = function() {
  if ( this.validate && this.validate() ) {
    this.persist();
    return true;
  } else {
    return false;
  }
}

Signup.prototype.persist = function() {
  this.company = createCompany({ name: this.params.companyName });
  this.user = createUser({ company: this.company, name: this.params.name, email: this.params.email });
}

module.exports = Signup;