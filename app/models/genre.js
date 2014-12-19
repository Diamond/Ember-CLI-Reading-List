import DS from 'ember-data';

var Genre = DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('books', { async: true })
});

export default Genre;
