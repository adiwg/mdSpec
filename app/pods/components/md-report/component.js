import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'ol',
  classNames: ['list-unstyled', 'w-100'],

  modules: computed('model.@each.parent', function () {
    return this.get('model').filter(itm => {
      let p = itm.belongsTo('parent').id();
      return !p;
    });
  }),
});
