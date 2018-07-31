import Controller from '@ember/controller';

export default Controller.extend({
  error: null,
  actions: {
    destroyDb() {
      let store = this.store;
      let adapter = store.adapterFor('project');

      adapter.destroyDb().then(function () {
        // database destroyed
        document.location.assign('/');
      }).catch(function (err) {
        this.set('error', err);
      })
    }
  }
});
