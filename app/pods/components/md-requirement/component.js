import Component from '@ember/component';
import { or } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: [
    'list-group-item',
    'list-group-item-action',
    'flex-column',
    'align-items-start'
  ],
  isEditing: or('model.isNew', 'editing'),
  submitDisabled: computed('model.{validations.isValid,hasDirtyAttributes}',
    function () {
      let model = this.get('model');

      return !(model.get('validations.isValid') && (model.get('isNew') || model.get(
        'hasDirtyAttributes')));
    }),
  actions: {
    submit(){
      this.get('model').save().then(()=>{
        this.set('editing', false);
      })
    },
    delete(){
      this.get('model').destroyRecord();
    }
  }
});
