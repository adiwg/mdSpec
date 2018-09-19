import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  database: service(),
actions: {
  saveSelected(selected){
    let ids = [];
    let db = this.get('database');

    selected.forEach(itm => {
      ids.pushObjects(db.convertIds(itm.get('descendants')));
    });

    this.get('database').saveDb(ids);
  }
}
});
