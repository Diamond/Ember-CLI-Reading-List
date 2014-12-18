import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createReview: function() {
      var controller = this;
      this.get('book').save().then(function() {
        controller.transitionToRoute('index');
      });
    }
  },
  ratings: function() {
    return [5, 4, 3, 2, 1];
  }.property()
});
