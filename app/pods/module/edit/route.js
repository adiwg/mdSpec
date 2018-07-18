import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    if(this.modelFor('application').length === 0) {
        this.transitionTo('/not-found');
        return;
    }

    return this.store.findRecord('component', params.module_id,{
        include: 'children,parent,requirements,fulfills'
    });
  }
});
