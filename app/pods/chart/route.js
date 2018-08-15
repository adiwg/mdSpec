import Route from '@ember/routing/route';

const daysToMilliseconds=function(days) {
      return days * 24 * 60 * 60 * 1000;
    };

export default Route.extend({
  model() {
    return [
  [{type:'string',label:'Task ID'},
  {type:'string',label:'Task Name'},
  {type:'string',label:'Resource'},
  {type:'date',label:'Start Date'},
  {type:'date',label:'End Date'},
  {type:'number',label:'Duration'},
  {type:'number',label:'Percent Complete'},
  {type:'string',label:'Dependencies'}],
   ['Research', 'Find sources', null,
       new Date(2014, 0, 1), new Date(2015, 0, 5), null,  100,  null],
      ['Write', 'Write paper', 'write',
       null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
      ['Cite', 'Create bibliography', 'write',
       null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
      ['Complete', 'Hand in paper', 'complete',
       null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
      ['Outline', 'Outline paper', 'write',
       null, new Date(2015, 0, 6), daysToMilliseconds(10), 100, 'Research']
];
    return this.get('store').findAll('component', {
      include: 'children,parent,requirements,fulfills'
    });
  }
});
