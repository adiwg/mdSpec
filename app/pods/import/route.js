import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';

export default Route.extend({
  model() {
    return null;
  },
  database: service(),

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('previewing', false);
    controller.set('showPreview', false);
    controller.set('error', false);
    controller.set('selected', []);
  },

  deactivate() {
    this.get('database').resetDb();
  }
});
