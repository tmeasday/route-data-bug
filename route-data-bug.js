Posts = new Meteor.Collection('posts')

if (Meteor.isClient) {
  Router.map(function() {
    this.route('one', {
      path: '/',
      data: function() { return Posts.findOne(); }
    });
    this.route('two');
  });
  
  Template.one.events({
    'click': function() {
      Posts.update(this._id, {$set: {foo: Random.id()}});
      Router.go('two');
    }
  });
}
