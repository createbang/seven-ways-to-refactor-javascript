var Rating = function( letter ) {
  this.letter = letter;
}

Rating.fromCost = function( cost ) {
  if ( cost <= 2 ) {
    return new this( 'A' );
  } else if ( cost <= 4 ) {
    return new this( 'B' );
  } else if ( cost <= 8 ) {
    return new this( 'C' );
  } else if ( cost <= 16 ) {
    return new this( 'D' );
  } else {
    return new this( 'F' );
  }
}

Rating.prototype.isBetterThan = function( other ) {
  return this.letter < other.letter;
}

Rating.prototype.isWorseThan = function( other ) {
  return this.letter > other.letter;
}

Rating.prototype.isEqual = function( other ) {
  return this.letter === other.letter;
}

Rating.prototype.toString = function() {
  return this.letter;
}

module.exports = Rating;