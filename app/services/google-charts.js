import GoogleChartsService from 'ember-google-charts/services/google-charts';

export default GoogleChartsService.extend({
  init() {
    this._super(...arguments);
    this.googlePackages=['corechart', 'gantt'];
  }
});
