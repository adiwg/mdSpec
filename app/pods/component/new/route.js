import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.createRecord('component', {
      parent: this.get('store').peekRecord('component', params.parent_id)
    });
  }
});
