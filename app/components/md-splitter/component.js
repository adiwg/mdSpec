import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  classNames: ['splitter'],

  didInsertElement() {
    this._super(...arguments);

    let target = this.get('target');

    //really should check if target is rendered
    $(target).resizable({
      handleSelector: '.splitter',
      resizeHeight: false
    });
  }
}).reopenClass({
  positionalParams: ['text', 'target']
});
