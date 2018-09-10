import Component from '@ember/component';

export default Component.extend({
  tagName: 'ul',
  classNames: ['list-group', 'list-group-flush', 'w-100'],
  dragging: null
});
