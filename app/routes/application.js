import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.get('store').findAll('requirement', {
      include: 'fulfilledBy'
    });

    return this.get('store').findAll('component', {
      include: 'children,parent,requirements,fulfills'
    });
    // return this.get('store').query('component', {
    //   filter:{
    //   parent: null}
    // });
  },
  actions: {
    error(error) {
      //Logger.error(error);

      if(error.status === 404) {
        return this.transitionTo('not-found');
      }

      return this.replaceWith('error')
        .then(function(route) {
          route.controller.set('lastError', error);
        });
    },
    didTransition() {
      this.controller.set('currentRoute', this.router.get('currentRouteName'));
    }
  }
});
