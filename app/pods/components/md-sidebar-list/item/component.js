import Component from '@ember/component';
import {
  computed
} from '@ember/object';
//import { filterBy } from '@ember/object/computed';
import {
  htmlSafe
} from '@ember/string';

export default Component.extend({
  tagName: 'li',
  classNames: ['list-group-item'],
  classNameBindings: ['over:drag-over'],

  over: false,
  type: computed('parentItem', function () {
    let parent = this.get('parentItem');

    return parent ? 'component' : 'module';
  }),

  level: computed('parent.level', function () {
    let parent = this.get('parentItem');

    return parent ? parent.get('level') + 1 : 0;
  }),

  levelText: computed('index', 'parentItem.index', function () {
    let parent = this.get('parentItem.levelText');
    let level = this.get('index') + 1;

    return parent ? `${parent}.${level}` : level;
  }),

  padding: computed('level', function () {
    let pad = this.get('level') + 1;

    return htmlSafe('padding-left: ' + pad + 'rem;');
  }),

  //fulfilled: filterBy('model.requirements.@each.isFulfilled','model.requirements','isFulfilled')
  actions: {
    dropIt(item) {
      let model = item.get('model');

      // if(this.get('level') <= item.get('level') && topItem != top) {
      if(!this.get('model.allParents').includes(model.get('id'))) {
        model.get('fulfills').forEach((req)=>{
            req.get('fulfilledBy').removeObject(model);
            req.save();
        });

        model.set('fulfills', []);
        model.set('parent', this.get('model'));


        model.save();
      }
    },
    dragOver() {
      this.toggleProperty('over');
    },
    dragOut() {
      this.toggleProperty('over');
    }
  }
});
