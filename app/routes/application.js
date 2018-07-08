import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('component', {
      include: 'parent,requirements'
    });
    // return this.get('store').query('component', {
    //   filter:{
    //   parent: null}
    // });
  }
});
