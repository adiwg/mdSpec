import Service from '@ember/service';
import { inject as service } from '@ember/service';
import MemoryStream from 'memorystream';
import FileSaver from 'file-saver';
import moment from 'moment';
import {
  set
} from '@ember/object';

export default Service.extend({
  store: service(),

  saveDb() {
    let db = this.store.adapterFor('project').db;
    let dumpedString = '';
    let stream = new MemoryStream();

    stream.on('data', function (chunk) {
      dumpedString += chunk.toString();
    });

    db.dump(stream, {
      filter: function (doc) {
        return doc._deleted !== true;
      }
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
  loadDb(file) {
    //console.log(file);
    let db = this.store.adapterFor('project').db;

    file.readAsText().then((fs) => {
      db.loadIt(JSON.parse(fs)).then(() => {
        set(file, 'state', 'uploaded');
      });
    })
  }
});
