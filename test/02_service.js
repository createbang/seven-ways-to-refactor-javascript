var expect = require('chai').expect;
var DetermineStudentPassingStatus = require('../examples/02_service');
var Grade = require('../examples/01_value');

describe('DetermineStudentPassingStatus', function(){
  var student = {};
  var assignments = [
    {grade: new Grade(0.5)},
    {grade: new Grade(0.8)},
    {grade: new Grade(0.9)},
    {grade: new Grade(0.6)},
  ];
  var determineStudentPassingStatus = new DetermineStudentPassingStatus( student );

  describe('#extractAssignmentGrades', function(){

    it('returns an array of grade value objects', function(){
      var grades = determineStudentPassingStatus.extractAssignmentGrades( assignments );
      expect( grades[0] ).to.be.an.instanceof( Grade );
    });

  });

  describe('#averageAssignmentGrade', function(){

    it('returns the average of all of the grades', function(){
      var grades = determineStudentPassingStatus.extractAssignmentGrades( assignments );
      var averageGrade = determineStudentPassingStatus.averageAssignmentGrade( grades );
      expect( averageGrade ).to.equal( ( (0.5 + 0.8 + 0.9 + 0.6) / 4 ) );
    });

  });

  describe('#determinePassingStatus', function(){

    it('returns whether or not the student is passing', function(){
      var grades = determineStudentPassingStatus.extractAssignmentGrades( assignments );
      var averageGrade = determineStudentPassingStatus.averageAssignmentGrade( grades );
      var passing = determineStudentPassingStatus.determinePassingStatus( averageGrade );
      expect( passing ).to.be.true;
    });

  });

  describe('#fromAssignments', function(){
    var passing;

    it('returns the correct passing state', function(){
      passing = determineStudentPassingStatus.fromAssignments( assignments );
      expect( passing ).to.be.true;

      // overwrite to test false return
      assignments = [
        {grade: new Grade(0.5)},
        {grade: new Grade(0.4)},
        {grade: new Grade(0.8)},
        {grade: new Grade(0.6)},
      ];
      passing = determineStudentPassingStatus.fromAssignments( assignments );
      expect( passing ).to.be.false;
    });

  });

});