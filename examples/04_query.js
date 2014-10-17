var _ = require('underscore');
var async = require('async');
var Q = require('q');

var CurrentlyPassingStudentsQuery = function() {};

CurrentlyPassingStudentsQuery.prototype = _.extend( CurrentlyPassingStudentsQuery.prototype, {

  run: function() {
    this.deferred = Q.defer();

    _.bindAll( this, 'fetchCurrentStudents', 'fetchAssignmentsForCurrentStudents', 'compilePassingStudentIds', 'filterAllPassingStudents', 'result' );
    async.waterfall([
      this.fetchCurrentStudents,
      this.fetchAssignmentsForCurrentStudents,
      this.filterAllPassingStudents
    ], this.result );

    return this.deferred.promise;
  },

  fetchCurrentStudents: function( next ) {
    studentCollection.findAll({ isCurrent: true }, function( currentStudents ) {
      next( null, currentStudents );
    });
  },

  fetchAssignmentsForCurrentStudents: function( currentStudents, next ) {
    var currentStudentIds = _( currentStudents ).pluck('_id');

    assignmentsCollection.findAll({ studentId: { $in: studentIds }}, function( assignments ) {
      next( null, currentStudents, assignments );
    });
  },

  compilePassingStudentIds: function( currentStudents, assignments, next ) {
    var passingStudentIds = [];

    _( assignments ).chain()
      .groupBy('studentId')
      .each( function( assignments, studentId ) {
        var passingStatus = new DetermineStudentPassingStatus( studentId ).run( assignments );
        if ( passingStatus === true )
          passingStudentIds.push( studentId );
      })
      .value();

    next( null, passingStudentIds );
  },

  filterAllPassingStudents: function( passingStudentIds, next ) {
    var currentlyPassingStudents = _( students ).filter( function( student ) {
      return passingStudentIds.indexOf( student._id ) !== -1;
    });
    next( null, currentlyPassingStudents );
  },

  result: function( err, currentlyPassingStudents ) {
    if ( err ) {
      this.deferred.reject( err );
    } else {
      this.deferred.resolve( currentlyPassingStudents );
    }
  }

});

module.exports = CurrentlyPassingStudentsQuery;