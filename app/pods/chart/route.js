import Route from '@ember/routing/route';

const header = [{
    type: 'string',
    label: 'Task ID'
  },
  {
    type: 'string',
    label: 'Task Name'
  },
  // {
  //   type: 'string',
  //   label: 'Resource'
  // },
  {
    type: 'date',
    label: 'Start Date'
  },
  {
    type: 'date',
    label: 'End Date'
  },
  // {
  //   type: 'number',
  //   label: 'Duration'
  // },
  // {
  //   type: 'number',
  //   label: 'Percent Complete'
  // },
  // {
  //   type: 'string',
  //   label: 'Dependencies'
  // }
];

export default Route.extend({
  model() {
    return this.get('store').findAll('component', {
      include: 'children,parent,requirements,fulfills'
    }).then(data => {
      let rows = data.filterBy('parent.id').filterBy('chartable').map(itm => {
        let parents = itm.get('fullpath.length') ? itm.get(
          'fullpath').compact().reverse() : null;
        let title = parents ? parents.map(id => data.findBy('id',
          id).get('title')) : [itm.get('title')]

        return {
          title: title.length <=2  ? title.join('.') : title.slice(0, title.length - 1).join('.'),
          date: itm.get('startDate') || itm.get('minDate'),
          depth: title.length,
          data: [
            // itm.get('id'),
            title[0],
            title.slice(1).join('::'),
            //itm.get('title'),
            //null,
            //itm.get('parent.title'),
            itm.get('startDate') || itm.get('minDate'),
            itm.get('endDate') || itm.get('maxDate'),
            // itm.get('duration'),
            // itm.get('progress'),
            // itm.get('parent.id')
          ]
        };

      }).sortBy('title', 'date','depth').map(row => row.data);

      let table = [];

      if(rows.length) {

        table.pushObject(header);

        table.pushObjects(rows);
      }
      return table;

      // return [
      //   header, ['Research', 'Find sources', null,
      //     new Date(2014, 0, 1), new Date(2015, 0, 5), null, 100, null
      //   ],
      //   ['Write', 'Write paper', 'write',
      //     null, new Date(2015, 0, 9), daysToMilliseconds(3), 25,
      //     'Research,Outline'
      //   ],
      //   ['Cite', 'Create bibliography', 'write',
      //     null, new Date(2015, 0, 7), daysToMilliseconds(1), 20,
      //     'Research'
      //   ],
      //   ['Complete', 'Hand in paper', 'complete',
      //     null, new Date(2015, 0, 10), daysToMilliseconds(1), 0,
      //     'Cite,Write'
      //   ],
      //   ['Outline', 'Outline paper', 'write',
      //     null, new Date(2015, 0, 6), daysToMilliseconds(10), 100,
      //     'Research'
      //   ]
      // ];
    });
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('options', {
        // width: 800,
        height: (model.length + 1) * 45,
        timeline: {
          groupByRowLabel: false,
          colorByRowLabel: true
        }
    })
  },

});
