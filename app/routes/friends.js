import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(){
    },
    cancel: function(){
    },
    delete: function(friend){
      friend.destroyRecord().then( () => {
        this.transitionTo('friends.index');
      });
    }
  }
});
