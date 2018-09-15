import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  database: service(),
actions: {
  loadDb(file){
    this.get('database').loadDb(file);
  }
}
});
