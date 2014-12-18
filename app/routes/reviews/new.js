import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      book: this.store.createRecord('book'),
      genres: this.store.find('genre')
    });
  },
  setupController: function(controller, model) {
    controller.set('book', model.book);
    controller.set('genres', model.genres);
  },
  actions: {
    willTransition: function() {
      if (this.currentModel.book.get('isNew')) {
        if (confirm("Are you sure yo want to abandon progress?")) {
          this.currentModel.book.destroyRecord();
        } else {
          transition.abort();
        }
      }
    }
  }
});
