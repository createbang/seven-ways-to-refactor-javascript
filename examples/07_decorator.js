var Facebook = { post: function( params ) { return params; } } //mocked no-op



var FacebookCommentNotifier = function( comment ) {
  this.comment = comment;
}

FacebookCommentNotifier.prototype.save = function() {
  if ( this.comment.save() && this.postToWall() ) {
    return true;
  } else {
    return false;
  }
}

FacebookCommentNotifier.prototype.postToWall = function() {
  return Facebook.post({ title: this.comment.title, user: this.comment.author });
}

module.exports = FacebookCommentNotifier;