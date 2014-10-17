var expect = require('chai').expect;
var CurrentlyPassingStudentsQuery = require('../examples/04_query');

describe('CurrentlyPassingStudentsQuery', function(){
  var currentlyPassingStudents;
  var err;

  before(function( done ){
    // first build all records in the necessary 
    // tables for testing (steps not shown)
    // then run the Query Object
    var currentlyPassingStudents = new CurrentlyPassingStudentsQuery()
    currentlyPassingStudents.run()
      .then( function( _currentlyPassingStudents ) {
        currentlyPassingStudents = _currentlyPassingStudents;
        done();
      })
      .fail( function( _err ) {
        err = _err;
        done();
      });
  });

  it('returns the correct set of records', function(){
    expect( currentlyPassingStudents ).to.have.length( expectedLength ); // however many you are expecting
  });

});