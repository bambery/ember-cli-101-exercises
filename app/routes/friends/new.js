import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('friend');
  },
  actions: {
    save: function(){
    },
    cancel: function(){
    }
  },
  deactivate: function() {
    this.currentModel.destroyRecord();
  }
});
