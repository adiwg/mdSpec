import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';
import config from 'mdspec/config/environment';
import { inject as service } from '@ember/service';

export default Controller.extend({
  database: service(),

  rootURL: config.rootURL,
  modules: computed('model.@each.parent', function () {
    return this.get('model').filter(itm => {
      let p = itm.belongsTo('parent').id();
      return !p;
    });
  }),
  actions: {
    saveDb() {
      this.get('database').saveDb();
    },
    loadDb(file) {
      //console.log(file);
      this.get('database').loadDb(file);
    }
  }

});
