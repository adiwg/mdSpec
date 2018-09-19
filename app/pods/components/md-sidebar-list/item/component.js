import Component from '@ember/component';
import {
  computed
} from '@ember/object';
// import {
//   not,
//   bool
// } from '@ember/object/computed';
import {
  htmlSafe
} from '@ember/string';
import Mudder from 'mudder';

export default Component.extend({
  tagName: 'li',
  classNames: ['list-group-item'],
  classNameBindings: ['isOver:drag-over', 'notDroppable'],

  over: false,
  order: false,
  isDragging: false,
  collapsed: false,
  isOver: computed('isDragging', 'over', function () {
    return !this.get('isDragging') && this.get('over');
  }),
  draggable: computed('model.{parent.children.length,fulfills.length}',
    function () {
      return !this.get('model.fulfills.length') || this.get(
        'model.parent.children.length') > 1;
      //return true;
    }),
  collapsible: computed('type', 'model.children.[]', function () {
    return this.get('type') === 'module' && this.get(
      'model.children.length');
  }),
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
      // let notParent = !this.get('model.fullpath').includes(model.get('id'));
      // let draggable = !model.get('fulfills.length');

      // if(this.get('level') <= item.get('level') && topItem != top) {
      //if(notParent && draggable) {
      model.get('fulfills').forEach((req) => {
        req.get('fulfilledBy').removeObject(model);
        req.save();
      });

      model.set('fulfills', []);
      model.set('parent', this.get('model'));

      model.save();
      //}
    },
    validateDragEvent() {
      let name = this.get('dragging.model.constructor.modelName');

      if(name !== 'component') return false;

      let model =  this.get('dragging.model');
      let notParent = !this.get('model.fullpath').includes(model.get('id'));
      let draggable = !this.get('dragging.model.fulfills.length');

      return notParent && draggable;
    },
    dragOver() {
      //console.info(this.get('dragging'));
      // let model = this.get('dragging.model');
      // let notParent = !this.get('model.fullpath').includes(model.get('id'));
      // let draggable = !this.get('dragging.model.fulfills.length');
      //
      //if(notParent && draggable) {
      this.set('over', true);
      // }
      // console.info([this.get('model.fullpath'), model.get('id')]);
    },
    dragOut() {
      this.set('over', false);
    },
    orderIt(item) {
      let models = this.get('parentItem.model.children') || this.get(
        'modules');
      let siblings = models.sortBy('order');
      let idx = siblings.indexOf(this.get('model'));

      if(idx === siblings.length - 1) {
        //add to end
        let num = Mudder.base36.stringToNumber(this.get('model.order'));

        item.set('model.order', Mudder.base36.numberToString(num + 1000));
      } else {
        //insert between
        let newOrder = Mudder.base36.mudder(this.get('model.order'),
          siblings.objectAt(idx + 1).get('order'));

        //console.log(this.get('model.order'));
        //console.log(siblings.objectAt(idx + 1).get('order'));

        item.set('model.order', newOrder[0]);
      }
      item.get('model').save();
    },
    orderOver() {
      let model = this.get('dragging.model');

      if(!model || model.constructor.modelName !== 'component') return false;

      let notParent = !this.get('model.fullpath').includes(model.get('id'));
      let isSibling = this.get('model.parent.id') === model.get('parent.id');

      if(notParent && isSibling) {
        this.set('order', true);
      }
    },
    orderOut() {
      this.set('order', false);
    },
    dragStartAction(item) {
      this.set('isDragging', true);
      this.set('dragging', item);
    },
    dragEndAction() {
      this.set('isDragging', false);
      this.set('dragging', null);
    },
    toggleCollapse(event) {
      event.stopPropagation();
      this.toggleProperty('collapsed');
    }
  }
});
