import Model from 'ember-pouch/model';
import DS from 'ember-data';
import {
  validator,
  buildValidations
} from 'ember-cp-validations';
import {
  v4
} from 'ember-uuid';

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

const {
  attr,
  hasMany,
  belongsTo
} = DS;

export default Model.extend(Validations,{
  uuid: attr('string', {
    defaultValue: v4()
  }),
  title: attr('string'),
  purpose: attr('string'),
  description: attr('string'),
  use: attr('string'),
  contact: attr('string'),
  presence: attr('string'),
  mapping: attr('string'),
  isProperty: attr('boolean', { defaultValue: false }),


  children: hasMany('component', { inverse: 'parent' }),
  parent: belongsTo('component', { inverse: 'children' }),
  requirements: hasMany('requirement'),
});
