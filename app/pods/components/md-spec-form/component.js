import Component from '@ember/component';
import {
  computed
} from '@ember/object';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

const presenceOpts = ['optional', 'recommended', 'mandatory'];

export default Component.extend({
  router: service(),
  presenceOpts: presenceOpts,
  submitDisabled: computed('model.{validations.isValid,hasDirtyAttributes}',
    function () {
      let model = this.get('model');

      return !(model.get('validations.isValid') && (model.get('isNew') || model.get(
        'hasDirtyAttributes')));
    }),
  actions: {
    submit() {
      let router = this.get('router');
      let model = this.get('model');

      model.save().then(function() {
        let routeName =router.currentRouteName.split('.');
        if(routeName.pop() === 'new') {
          router.transitionTo(routeName.pop() + '.edit', model)
        }
      }, function() {
        // Error callback
      });
    },
    delete() {
      let router = this.get('router');
      let comp = this.get('model');

      //collect the promises for deletion
      let promises = [];
      //get and destroy the component requirements
      comp.get('requirements').then((requirements) => {
        requirements.map((req) => {
          promises.push(req.destroyRecord());
        });
      });

      //remove the req from components
      comp.get('fulfills').then((fulfills) => {
        fulfills.map((req) => {
          req.get('fulfilledBy').removeObject(comp);
          promises.pushObject(req.save());
        });
      });

      RSVP.all(promises).then(() => {
        comp.destroyRecord().then(function() {
          router.transitionTo('index');
        });
      });

    },
    updateFufills(value, isSelected) {
      let fulfills = this.get('model.fulfills');

      if(!isSelected) {
        fulfills.addObject(value);
      } else {
        fulfills.removeObject(value);
      }

      this.get('model').save().then(function() {
        value.save();
      });
    },

    setDate(prop, dates){
      this.set('model.' + prop, dates[0]);
    }
  }
});
