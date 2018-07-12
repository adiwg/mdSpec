import Model from 'ember-pouch/model';
import DS from 'ember-data';
import {
  validator,
  buildValidations
} from 'ember-cp-validations';
import {
  v4
} from 'ember-uuid';
import {
  computed
} from '@ember/object';

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
  ],
  description: [
    validator('presence', true)
  ]
});

const {
  attr,
  hasMany,
  belongsTo
} = DS;

const getParents = (item, acc) => {
  let parents = acc || [];

  parents.pushObject(item.get('id'));

  if(!item.get('parent')) {
    return parents;
  }

  return getParents(item.get('parent'), parents);
}

export default Model.extend(Validations, {
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
  isProperty: attr('boolean', {
    defaultValue: false
  }),
  notMappable: attr('boolean', {
    defaultValue: false
  }),

  allParents: computed('parent', function () {
    return getParents(this);
  }),

  fulfilled: computed('requirements.@each.isFulfilled', function () {
    return this.get('requirements').filterBy('isFulfilled');
  }),
  fulfilledStyle: computed('fulfilled.[]', function () {
    let fulfilled = this.get('fulfilled.length');
    let total = this.get('requirements.length');

    return fulfilled === total ? 'success' : 'warning';

  }),
  children: hasMany('component', {
    inverse: 'parent'
  }),
  parent: belongsTo('component', {
    inverse: 'children'
  }),
  requirements: hasMany('requirement'),
  fulfills: hasMany('requirement', {
    inverse: 'fulfilledBy',
    save: true
  })
});
