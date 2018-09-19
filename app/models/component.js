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
import {
  and, alias
} from '@ember/object/computed';

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

const getDescendants = (item, acc) => {
  let descendants = acc || {
    component: [],
    requirement: []
  };
  let requirements = item.get('requirements');

  descendants.component.pushObject(item.get('id'));

  if(requirements && requirements.length) {
    descendants.requirement.pushObjects(requirements.mapBy('id'));
  }

  if(!item.get('children.length')) {
    return descendants;
  }

  item.get('children').forEach((child) => {
    getDescendants(child, descendants);
  })

  return descendants;
}

export default Model.extend(Validations, {
  uuid: attr('string', {
    defaultValue: () => v4()
  }),
  title: attr('string'),
  purpose: attr('string'),
  description: attr('string'),
  use: attr('string'),
  contact: attr('string'),
  presence: attr('string'),
  mapping: attr('string'),
  order: attr('string', {
    //defaultValue: () => v4().substring(0,7)
  }),
  startDate: attr('date', {
    defaultValue: null
  }),
  endDate: attr('date', {
    defaultValue: null
  }),
  progress: attr('number'),
  completed: attr('boolean', {
    defaultValue: false
  }),
  isProperty: attr('boolean', {
    defaultValue: false
  }),
  notMappable: attr('boolean', {
    defaultValue: false
  }),
  chartable: and('minDate', 'maxDate'),

  parentId: alias('parent.id'),
  // childStartDates: mapBy('children', 'startDate'),
  childStartDates: computed('children.@each.startDate', function () {
    return this.get('children').mapBy('startDate').compact();
  }),

  minDate: computed('childStartDates', function () {
    return this.get('childStartDates.length') ? new Date(Math.min.apply(
      null, this.get('childStartDates'))) : this.get('startDate');
  }),

  //childEndDates: mapBy('children', 'endDate'),
  childEndDates: computed('children.@each.endDate', function () {
    return this.get('children').mapBy('endDate').compact();
  }),

  maxDate: computed('childEndDates', function () {
    return this.get('childEndDates.length') ? new Date(Math.max.apply(
      null, this.get('childEndDates'))) : this.get('endDate');
  }),

  fullpath: computed('parent', function () {
    return getParents(this);
  }),

  descendants: computed('children.[]','requirements', function() {
    return getDescendants(this);
  }),

  deletable: computed('children.[]', 'fulfills.[]', function () {
    return !this.get('children.length'); // && !this.get('fulfills.length');
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
  }),

  didLoad() {
    if(!this.get('order')) {
      this.set('order', v4().substring(0, 7));
      this.save();
    }
  }
});
