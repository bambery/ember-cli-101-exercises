import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('friends/show').get('articles');
  },
  actions: {
    save(model) {
      model.save();
      return false;
    }
  }
});
