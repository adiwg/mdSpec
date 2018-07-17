import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  router: service(),

  redirect() {
    var url = this.get('router').location.formatURL('/not-found');

    if(window.location.pathname !== url) {
      this.transitionTo('/not-found');
    }
  }
});
