import Controller from '@ember/controller';
import {
  getOwner
} from '@ember/application';

export default Controller.extend({
  error: null,
  actions: {
    destroyDb() {
      let store = this.store;
      let adapter = store.adapterFor('project');
      let url = getOwner(this).resolveRegistration('config:environment').rootURL;

      if(adapter.get('db._destroyed')) {
        document.location.assign(url);
        return;
      }

      adapter.destroyDb().then(function () {
        // database destroyed
        document.location.assign(url);
      }).catch(function (err) {
        adapter.set('lastError', err);
      })
    }
  }
});
