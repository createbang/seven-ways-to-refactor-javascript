var _ = require('underscore');

var DetermineStudentPassingStatus = function( student ) {
  this.student = student;
}

DetermineStudentPassingStatus.prototype = _.extend( DetermineStudentPassingStatus.prototype, {

  minimumPassingPercentage: 0.6,

  fromAssignments: function( assignments ) {
    return _.compose(
      this.determinePassingStatus.bind( this ),
      this.averageAssignmentGrade,
      this.extractAssignmentGrades
    )( assignments );
  },

  extractAssignmentGrades: function( assignments ) {
    return _.pluck( assignments, 'grade' );
  },

  averageAssignmentGrade: function( grades ) {
    return _.reduce(grades, function( memo, grade ) {
      return memo + grade.letter;
    }, 0) / grades.length;
  },

  determinePassingStatus: function( averageGrade ) {
    return averageGrade >= this.minimumPassingPercentage;
  }

});

module.exports = DetermineStudentPassingStatus;