import Component from '@ember/component';
import { or } from '@ember/object/computed';
import { computed } from '@ember/object';
import RSVP from 'rsvp';

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
      let req = this.get('model');

      let promises =[];
      //remove the req from components
      req.get('fulfilledBy').then((fulfilledBy) => {
        fulfilledBy.map((comp) => {
          comp.get('fulfills').removeObject(req);
          promises.pushObject(comp.save());
        });
      });

      RSVP.all(promises).then(() => {
        req.destroyRecord();
      });
    }
  }
});
