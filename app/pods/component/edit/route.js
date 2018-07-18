import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    if(this.modelFor('application').length === 0) {
        this.transitionTo('/not-found');
        return;
    }

    return this.store.findRecord('component', params.component_id, {
        include: 'parent,requirements'
    });
  }
});
