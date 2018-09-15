import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';

export default Route.extend({
  // database: service(),

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('previewing', false);
  },

});
