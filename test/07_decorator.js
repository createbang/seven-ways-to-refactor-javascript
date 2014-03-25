var FacebookCommentNotifier = require('../examples/07_decorator');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
chai.use(require('sinon-chai'));



var comment;
var spy;
var Comment = function( params ) {
  this.params = params;
}

Comment.prototype.save = function( params ) {
  return true;
}

describe('Decorator', function() {

  beforeEach( function() {
    comment = new Comment({ title: 'My Comment', author: 'John Smith' });
    comment = new FacebookCommentNotifier( comment );
  })

  describe('#save', function() {

    it('saves', function() {
      expect( comment.save() ).to.equal(true);
    })

    it('calls #postToWall', function() {
      spy = sinon.spy( comment, 'postToWall');
      comment.save();
      expect( spy ).to.have.been.calledOnce;
      spy.restore();
    })

  })

})
