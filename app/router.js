import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('book', { path: 'books/:book_id' }, function() {});
  this.resource('genre', { path: 'genres/:genre_id' }, function() {});
  this.resource('reviews', function() {
    this.route('new');
  });
  this.route('reviews/new');
});

export default Router;
