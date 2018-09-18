import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({
  database: service(),
  fileQueue: service(),
  actions: {
    loadDb(file) {
      let self = this;

      this.set('error', null);

      if(this.get('showPreview')) {
        let adapter = this.get('database.adapter');

        // change the current database to importSpecs.
        this.set('previewing', true);

        adapter.destroyImportDb().then(() => {
          adapter.changeDb(adapter.get('importDb'));

          this.get('database').loadDb(file).then(() => {
            this.set('model', this.get('store').findAll('component', {
              include: 'children,parent,requirements,fulfills'
            }));
          }).catch(function (err) {
            console.log('Error loading file!', err);

            self.set('error', 'Error loading file!');
          });
        });

        return;
      }

      this.get('database').loadDb(file).catch(function (err) {
        console.log('Error loading file!', err);

        self.set('error', 'Error loading file!');
        self.get('fileQueue.queues').forEach(itm => {
          itm.set('files', []);
        });
      });
    },
    loadSelected(ids) {
      let adapter = this.store.adapterFor('component');

      adapter.changeDb(adapter.get('db'));
    },

    cancel() {
      this.get('database').resetDb();
      this.get('fileQueue.queues').forEach(itm => {
        itm.set('files', []);
      });
      this.set('previewing', false);

    }
  }
});
