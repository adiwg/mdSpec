import Model from 'ember-pouch/model';
import DS from 'ember-data';
import {
  validator,
  buildValidations
} from 'ember-cp-validations';
import {
  v4
} from 'ember-uuid';
import { bool } from '@ember/object/computed';

const {
  attr,
  belongsTo,
  hasMany
} = DS;

const Validations = buildValidations({
  // password: [
  //   validator('presence', true),
  //   validator('length', {
  //     min: 4,
  //     max: 8
  //   }),
  //   validator('length', {
  //     isWarning: true,
  //     min: 6,
  //     message: 'Password is weak'
  //   })
  // ],
  title: [
    validator('presence', true)
  ]
});

export default Model.extend(Validations, {
  uuid: attr('string', {
    defaultValue: ()=>v4()
  }),
  title: attr('string'),
  description: attr('string'),
  contact: attr('string'),
  order: attr('number', {
    defaultValue: 0
  }),

  isFulfilled: bool('fulfilledBy.length'),

  parent: belongsTo('component'),
  fulfilledBy: hasMany('component', {
    inverse: 'fulfills',
    save: true
  })

});
