import DS from 'ember-data';

var Book = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  review: DS.attr('string'),
  rating: DS.attr('number'),
  amazon_id: DS.attr('number'),
  genre: DS.belongsTo('genre', { async: true }),
  url: function() {
    return 'http://www.amazon.com/gp/product/' + this.get('amazon_id');
  }.property('amazon_id'),
  image: function() {
    return 'http://images.amazon.com/images/P/' + this.get('amazon_id') + '.01.ZTZZZZZZ.jpg';
  }.property('amazon_id')
});

export default Book;
