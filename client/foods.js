Foods = new Mongo.Collection('foods');

Session.setDefault('searching', false);

Tracker.autorun(function() {
  if (Session.get('query')) {
    var searchHandle = Meteor.subscribe('foodsSearch', Session.get('query'));
    Session.set('searching', ! searchHandle.ready());
  }
});

Template.body.events({
  'submit form': function(event, template) {
    event.preventDefault();
    var query = template.$('input[type=text]').val();
    console.log('fire');
    if (query)
      Session.set('query', query);
  }
});

Template.body.helpers({
  foods: function() {
    return Foods.find();
  },
  searching: function() {
    return Session.get('searching');
  }
});
