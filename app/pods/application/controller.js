import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  modules: computed('model.@each.parent', function() {
    return this.get('model').filter(itm => {
      let p = itm.belongsTo('parent').id();
      return !p;
    });
  })
});
