import Controller from '@ember/controller';
import {
  observer
} from '@ember/object';
import {
  saveSvgAsPng,
  saveSvg
} from 'save-svg-as-png';

import $ from 'jquery';

export default Controller.extend({
  onExpand: observer('isExpanded', function () {
    window.dispatchEvent(new Event('resize'));
  }),
  actions: {
    onGoogleLoad() {
      this.set('loaded', true);
    },
    chartDidRender(chart) {
      this.set('chart', chart);
    },
    saveSvg() {
      saveSvg($('.google-chart svg')[0], 'chart.png');
      // let svgEl = $('.google-chart svg')[0];
      // let name = 'chart';
      // svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      // let svgData = svgEl.outerHTML;
      // let preface = '<?xml version="1.0" standalone="no"?>\r\n';
      // let svgBlob = new Blob([preface, svgData], {
      //   type: "image/svg+xml;charset=utf-8"
      // });
      // let svgUrl = URL.createObjectURL(svgBlob);
      // let downloadLink = document.createElement('a');
      // downloadLink.href = svgUrl;
      // downloadLink.download = name;
      // document.body.appendChild(downloadLink);
      // downloadLink.click();
      // document.body.removeChild(downloadLink);
    },
    savePng() {
      saveSvgAsPng($('.google-chart svg')[0], 'chart.png');
    }
  }
});
