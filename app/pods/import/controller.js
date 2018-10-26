import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  database: service(),
  fileQueue: service(),
  disableImport: computed('selected.length', 'model.length', function () {
    return !this.get('selected.length') || !this.get('model.length');
  }),
  actions: {
    loadDb(file) {
      let self = this;

      this.set('error', null);

      if(this.get('showPreview')) {
        let adapter = this.get('database.adapter');

        adapter.destroyImportDb().then(() => {
          adapter.changeDb(adapter.get('importDb'));
          // change the current database to importSpecs.
          this.set('previewing', true);

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
console.log('loading');
      this.get('database').loadDb(file).then(()=>{
        console.log('done loading');
      }).catch(function (err) {
        console.log('Error loading file!', err);

        self.set('error', 'Error loading file!');
        self.get('fileQueue.queues').forEach(itm => {
          itm.set('files', []);
        });
      });
    },

    loadSelected(selected) {
      let ids = [];
      let db = this.get('database');
      let source = db.get('adapter.importDb');
      let dest = db.get('adapter.mainDb');

      selected.forEach(itm => {
        ids.pushObjects(db.convertIds(itm.get('descendants')));
      });

      db.replicateDb(source, dest, {
        doc_ids: ids
      }).then(() => {
        db.resetDb().then(() => this.set('previewing', false));
      }).catch(function (err) {
        console.log('Error loading data!', err);

        self.set('error', 'Error loading data!');
      });

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
