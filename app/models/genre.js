import DS from 'ember-data';

var Genre = DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('books', { async: true })
});

Genre.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Science Fiction', books: [2] },
    { id: 2, name: 'Fiction', books: [] },
    { id: 3, name: 'Non-Fiction', books: [1, 3] }
  ]
});

export default Genre;
