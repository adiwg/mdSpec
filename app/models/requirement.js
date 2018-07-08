import Model from 'ember-pouch/model';
import DS from 'ember-data';
import {
  validator,
  buildValidations
} from 'ember-cp-validations';
import {
  v4
} from 'ember-uuid';

const {
  attr,
  belongsTo
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

export default Model.extend(Validations,{
  uuid: attr('string', {
    defaultValue: v4()
  }),
  title: attr('string'),
  description: attr('string'),
  contact: attr('string'),

  parent: belongsTo('component')
});
