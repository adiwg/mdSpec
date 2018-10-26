import {
  Adapter
} from 'ember-pouch';
import PouchDB from 'pouchdb';
import replicationStream from 'pouchdb-replication-stream';
import config from 'mdspec/config/environment';
import {
  assert
} from '@ember/debug';
import {
  isEmpty
} from '@ember/utils';
import load from 'pouchdb-load';

const console = window.console;

PouchDB.plugin({
  loadIt: load.load
});
PouchDB.plugin(replicationStream.plugin);
PouchDB.adapter('writableStream', replicationStream.adapters.writableStream);

function createDb() {
  let localDb = config.emberPouch.localDb;

  assert('emberPouch.localDb must be set', !isEmpty(localDb));

  let db = new PouchDB(localDb);

  if(config.emberPouch.remoteDb) {
    let remoteDb = new PouchDB(config.emberPouch.remoteDb);

    db.sync(remoteDb, {
      live: true,
      retry: true
    });
  }

  return db;
}

export default Adapter.extend({
  init() {
    this._super(...arguments);

    let db = createDb();
    this.set('mainDb', db);
    this.set('db', db);
    this.destroyImportDb();

    //console.log(this.get('db').allDocs({include_docs: true, attachments: true}));
  },

  unloadedDocumentChanged: function (obj) {
    let store = this.get('store');
    let recordTypeName = this.getRecordTypeName(store.modelFor(obj.type));
    this.get('db').rel.find(recordTypeName, obj.id).then(function (doc) {
      store.pushPayload(recordTypeName, doc);
    });
  },

  destroyDb() {
    return this.get('db').destroy();
  },

  destroyImportDb() {
    let db = this.get('importDb');
    let self = this;

    if(!db) {
      this.set('importDb', new PouchDB('importSpecs'));
      return;
    }

    return this.get('importDb').destroy().then(function () {
      self.set('importDb', new PouchDB('importSpecs'));
    }).catch(function (err) {
      console.log(err);
    });
  }
});
