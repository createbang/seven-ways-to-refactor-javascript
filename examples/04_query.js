var _ = require('underscore');



var AbandonedTrialQuery = function( collection ) {
  this.collection = collection;
}

AbandonedTrialQuery.prototype.findEach = function( callback ) {
  _( this.collection ).chain().where({ plan: null, invitesCount: 0 }).each( callback ).value();
}

module.exports = AbandonedTrialQuery;