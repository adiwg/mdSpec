import GoogleChart from 'ember-google-charts/components/google-chart';
import renderClassicChart from 'ember-google-charts/utils/render-classic-chart';

export default GoogleChart.extend({
  type: 'timeline',

  renderChart: renderClassicChart
});
