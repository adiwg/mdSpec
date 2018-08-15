import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('module', function() {
    this.route('new');
    this.route('edit', {
      path: '/:module_id'
    }, function() {});
  });
  this.route('component', function() {
    this.route('new', {
      path: 'new/:parent_id'
    });
    this.route('edit', {
      path: '/:component_id'
    }, function() {});
  });
  this.route('not-found', {
    path: '/*path'
  });
  this.route('error');
  this.route('report');
  this.route('settings');
  this.route('chart');
});

export default Router;
