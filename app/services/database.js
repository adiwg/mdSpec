import Service from '@ember/service';
import {
  inject as service
} from '@ember/service';
import MemoryStream from 'memorystream';
import FileSaver from 'file-saver';
import moment from 'moment';
import {
  set,
  computed
} from '@ember/object';
import {
  alias
} from '@ember/object/computed';
import {
  all
} from 'rsvp';

export default Service.extend({
  store: service(),
  adapter: computed('store', function () {
    return this.get('store').adapterFor('component');
  }),
  db: alias('adapter.db'),

  saveDb(ids) {
    let db = this.store.adapterFor('component').db;
    let dumpedString = '';
    let stream = new MemoryStream();

    stream.on('data', function (chunk) {
      dumpedString += chunk.toString();
    });

    db.dump(stream, {
      filter: function (doc) {
        return doc._deleted !== true;
      },
      doc_ids: ids && ids.length ? ids : null
    }).then(function () {
      //console.log('Yay, I have a dumpedString: ' + dumpedString);
      FileSaver.saveAs(
        new Blob([JSON.stringify(dumpedString)], {
          type: 'application/json;charset=utf-8'
        }),
        `mdspec-${moment().format('YYYYMMDD-HHMMSS')}.json`
      );
    }).catch(function (err) {
      console.log('Error saving db!', err);
    });
  },
  replicateDb(source, destination, opts) {
    let stream = new MemoryStream();

    return all([
      source.dump(stream, opts),
      destination.load(stream)
    ]);
  },

  loadDb(file) {
    //console.log(file);
    let db = this.store.adapterFor('component').db;

    return file.readAsText().then((fs) => {
      return db.loadIt(JSON.parse(fs)).then(() => {
          set(file, 'state', 'uploaded');
        })
        .catch(function (err) {
          console.log('Error loading file!', err);

          throw err;
        });
    })
  },
  destroyImportDb() {
    return this.get('adapter').destroyImportDb();
  },
  resetDb() {
    let adapter = this.get('adapter');
    let mainDb = adapter.get('mainDb');

    if(adapter.get('db.name') === 'importSpecs') {
      adapter.changeDb(mainDb);
    }

    return this.get('store').findAll('component', {
      include: 'children,parent,requirements,fulfills'
    });
  },
  convertIds(ids) {
    let types = Object.keys(ids);
    let rel = this.get('db.rel');
    let converted = [];

    types.forEach(type => {
      converted.pushObjects(ids[type].map(id => {
        return rel.makeDocID({
          "type": type,
          "id": id
        });
      }));
    });

    return converted;
  }
});
