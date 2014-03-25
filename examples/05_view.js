var moment = require('moment');




var Review = function( review ) {
  this.review = review;
}

Review.prototype.authorFullName = function() {
  return [ this.review.author.firstName, this.review.author.lastName ].join(' ');
}

Review.prototype.asteriskRating = function() {
  return '*****'.substr( 0, this.review.rating );
}

Review.prototype.ratedOn = function() {
  return moment( this.review.ratedOn ).format('L');
}

Review.prototype.data = function() {
  return {
    authorFullName: this.authorFullName(),
    asteriskRating: this.asteriskRating(),
    ratedOn: this.ratedOn()
  }
}

module.exports = Review;