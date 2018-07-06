import Component from '@ember/component';
import {
  computed
} from '@ember/object';

const presenceOpts = ['optional', 'recommended', 'mandatory'];

export default Component.extend({
  presenceOpts: presenceOpts,
  submitDisabled: computed('model.{validations.isValid,hasDirtyAttributes}',
    function () {
      let model = this.get('model');

      return !(model.get('validations.isValid') && model.get(
        'hasDirtyAttributes'));
    }),
  actions: {
    submit() {
      this.get('model').save();
    },
    delete() {
      this.get('model').delete();
    }
  }
});
