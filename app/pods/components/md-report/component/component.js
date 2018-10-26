import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import { once } from '@ember/runloop';

export default Component.extend({
  tagName: 'li',
  // classNameBindings: ['over:drag-over'],

  over: false,
  requirementsOnly: false,
  hideRequirements: false,
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

  hidden: computed('requirementsOnly','model.descendants.requirement.[]', function() {
    return this.get('requirementsOnly') && !this.get('model.descendants.requirement.length');
  }),

  didReceiveAttrs() {
    this._super(...arguments);

    //console.log(this.get('sections'));
    once(this, () => this.set('sections.' + this.get('model.id'), this.get(
      'levelText')));
  }

});
