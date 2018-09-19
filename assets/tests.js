'use strict';

define('mdspec/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/get-property.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/get-property.js should pass ESLint\n\n');
  });

  QUnit.test('models/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/component.js should pass ESLint\n\n');
  });

  QUnit.test('models/requirement.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/requirement.js should pass ESLint\n\n');
  });

  QUnit.test('pods/application/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/chart/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/chart/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/chart/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/chart/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/component/edit/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/component/edit/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/component/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/component/edit/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/component/new/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/component/new/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/component/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/component/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/gantt-chart/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/gantt-chart/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/md-component-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/md-component-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/md-mask/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/md-mask/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/md-report/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/md-report/component.js should pass ESLint\n\n2:20 - \'getWithDefault\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('pods/components/md-report/component/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/md-report/component/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/md-requirement-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/md-requirement-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/md-requirement/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/md-requirement/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/md-sidebar-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/md-sidebar-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/md-sidebar-list/item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/md-sidebar-list/item/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/md-spec-form/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/md-spec-form/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/md-splitter/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/md-splitter/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/timeline-chart/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/timeline-chart/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/error/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/error/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/import/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/import/controller.js should pass ESLint\n\n32:13 - Unexpected console statement. (no-console)\n42:9 - Unexpected console statement. (no-console)\n66:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('pods/import/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/import/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/module/edit/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/module/edit/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/module/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/module/edit/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/module/new/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/module/new/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/module/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/module/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/not-found/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/not-found/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/report/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/report/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/save/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/save/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/save/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/save/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/settings/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/settings/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/settings/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/settings/route.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('services/database.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/database.js should pass ESLint\n\n49:7 - Unexpected console statement. (no-console)\n70:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('services/google-charts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/google-charts.js should pass ESLint\n\n');
  });
});
define('mdspec/tests/helpers/data-transfer', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var c = Ember.Object.extend({
    getData: function () {
      return this.get('payload');
    },

    setData: function (dataType, payload) {
      this.set("data", { dataType: dataType, payload: payload });
    }
  });

  c.reopenClass({
    makeMockEvent: function (payload) {
      var transfer = this.create({ payload: payload });
      var res = { dataTransfer: transfer };
      res.originalEvent = res;
      res.originalEvent.preventDefault = function () {
        console.log('prevent default');
      };
      res.originalEvent.stopPropagation = function () {
        console.log('stop propagation');
      };
      return res;
    },

    createDomEvent: function (type) {
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent(type, true, true, null);
      event.dataTransfer = {
        data: {},
        setData: function (type, val) {
          this.data[type] = val;
        },
        getData: function (type) {
          return this.data[type];
        }
      };
      return event;
    }
  });

  exports.default = c;
});
define('mdspec/tests/helpers/drag-drop', ['exports', 'ember-native-dom-helpers', 'mdspec/tests/helpers/mock-event'], function (exports, _emberNativeDomHelpers, _mockEvent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.drag = drag;


  async function dragOver(dropSelector, moves) {
    moves = moves || [[{ clientX: 1, clientY: 1 }, dropSelector]];
    return moves.forEach(async ([position, selector]) => {
      let event = new _mockEvent.default(position);
      await (0, _emberNativeDomHelpers.triggerEvent)(selector || dropSelector, 'dragover', event);
    });
  }

  async function drop(dragSelector, dragEvent, options) {
    let { drop: dropSelector, dropEndOptions, dragOverMoves } = options;

    let dropElement = await (0, _emberNativeDomHelpers.find)(dropSelector);
    if (!dropElement) {
      throw `There are no drop targets by the given selector: '${dropSelector}'`;
    }

    await dragOver(dropSelector, dragOverMoves);

    if (options.beforeDrop) {
      await options.beforeDrop.call();
    }

    let event = new _mockEvent.default().useDataTransferData(dragEvent);
    await (0, _emberNativeDomHelpers.triggerEvent)(dropSelector, 'drop', event);

    return await (0, _emberNativeDomHelpers.triggerEvent)(dragSelector, 'dragend', dropEndOptions);
  }

  async function drag(dragSelector, options = {}) {
    let dragEvent = new _mockEvent.default(options.dragStartOptions);

    await (0, _emberNativeDomHelpers.triggerEvent)(dragSelector, 'mouseover');

    await (0, _emberNativeDomHelpers.triggerEvent)(dragSelector, 'dragstart', dragEvent);

    if (options.afterDrag) {
      await options.afterDrag.call();
    }

    if (options.drop) {
      await drop(dragSelector, dragEvent, options);
    }
  }
});
define('mdspec/tests/helpers/ember-drag-drop', ['exports', 'mdspec/tests/helpers/data-transfer'], function (exports, _dataTransfer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.drag = drag;


  function drop($dragHandle, dropCssPath, dragEvent) {
    let $dropTarget = Ember.$(dropCssPath);

    if ($dropTarget.length === 0) {
      throw `There are no drop targets by the given selector: '${dropCssPath}'`;
    }

    Ember.run(() => {
      triggerEvent($dropTarget, 'dragover', _dataTransfer.default.makeMockEvent());
    });

    Ember.run(() => {
      triggerEvent($dropTarget, 'drop', _dataTransfer.default.makeMockEvent(dragEvent.dataTransfer.get('data.payload')));
    });

    Ember.run(() => {
      triggerEvent($dragHandle, 'dragend', _dataTransfer.default.makeMockEvent());
    });
  } /* global triggerEvent , andThen */
  function drag(cssPath, options = {}) {
    let dragEvent = _dataTransfer.default.makeMockEvent();
    let $dragHandle = Ember.$(cssPath);

    Ember.run(() => {
      triggerEvent($dragHandle, 'mouseover');
    });

    Ember.run(() => {
      triggerEvent($dragHandle, 'dragstart', dragEvent);
    });

    andThen(function () {
      if (options.beforeDrop) {
        options.beforeDrop.call();
      }
    });

    andThen(function () {
      if (options.drop) {
        drop($dragHandle, options.drop, dragEvent);
      }
    });
  }
});
define('mdspec/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, { until: '1.11.0', id: `ember-power-select-test-support-${name}` }));

      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('mdspec/tests/helpers/mock-event', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createDomEvent = createDomEvent;
  class DataTransfer {
    constructor() {
      this.data = {};
    }

    setData(type, value) {
      this.data[type] = value;
      return this;
    }

    getData(type = "Text") {
      return this.data[type];
    }

    setDragImage() {}
  }

  class MockEvent {
    constructor(options = {}) {
      this.dataTransfer = new DataTransfer();
      this.dataTransfer.setData('Text', options.dataTransferData);
      this.originalEvent = this;
      this.setProperties(options);
    }

    useDataTransferData(otherEvent) {
      this.dataTransfer.setData('Text', otherEvent.dataTransfer.getData());
      return this;
    }

    setProperties(props) {
      for (let prop in props) {
        this[prop] = props[prop];
      }
      return this;
    }

    preventDefault() {}

    stopPropagation() {}
  }

  exports.default = MockEvent;
  function createDomEvent(type) {
    let event = document.createEvent("CustomEvent");
    event.initCustomEvent(type, true, true, null);
    event.dataTransfer = new DataTransfer();
    return event;
  }
});
define('mdspec/tests/helpers/upload', ['exports', 'ember-file-upload/test-helpers'], function (exports, _testHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'upload', {
    enumerable: true,
    get: function () {
      return _testHelpers.upload;
    }
  });
});
define('mdspec/tests/integration/helpers/get-property-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Helper | get-property', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "R4Kx1w74",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"get-property\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define('mdspec/tests/integration/pods/components/gantt-chart/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | gantt-chart', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "KtDxxm2i",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"gantt-chart\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "r0vOR1f0",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"gantt-chart\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('mdspec/tests/integration/pods/components/md-component-list/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | md-component-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "aVEeNWWb",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"md-component-list\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "NDInqhUV",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"md-component-list\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('mdspec/tests/integration/pods/components/md-mask/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | md-mask', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "AwOnBaur",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"md-mask\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Xl8BsqfO",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"md-mask\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('mdspec/tests/integration/pods/components/md-report/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | md-report', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "WYBSgjrw",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"md-report\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "asQ8KPXX",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"md-report\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('mdspec/tests/integration/pods/components/md-report/component/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | md-report/component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "HGQZn2pN",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"md-report/component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "CZnV9Nze",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"md-report/component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('mdspec/tests/integration/pods/components/md-requirement-list/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | md-requirement-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3yhVsc2x",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"md-requirement-list\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "BpfCHtcR",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"md-requirement-list\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('mdspec/tests/integration/pods/components/md-requirement/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | md-requirement', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "yVPHy8kO",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"md-requirement\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ovUADq1e",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"md-requirement\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('mdspec/tests/integration/pods/components/md-sidebar-list/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | md-sidebar-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "L4cuYKxT",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"md-sidebar-list\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "5U8ZYzku",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"md-sidebar-list\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('mdspec/tests/integration/pods/components/md-sidebar-list/item/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | md-sidebar-list/item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "v2jZIZr1",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"md-sidebar-list/item\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "7/DlH09f",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"md-sidebar-list/item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('mdspec/tests/integration/pods/components/md-spec-form/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | md-spec-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "+/tweswu",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"md-spec-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "mfS0/uuW",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"md-spec-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('mdspec/tests/integration/pods/components/md-splitter/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | md-splitter', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "riN26BL1",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"md-splitter\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "n5sBW5iU",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"md-splitter\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('mdspec/tests/integration/pods/components/timeline-chart/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | timeline-chart', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "4tm5wP4j",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"timeline-chart\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "iyW+gF8P",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"timeline-chart\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('mdspec/tests/test-helper', ['mdspec/app', 'mdspec/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('mdspec/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/helpers/get-property-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/get-property-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/gantt-chart/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/gantt-chart/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/md-component-list/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/md-component-list/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/md-mask/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/md-mask/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/md-report/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/md-report/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/md-report/component/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/md-report/component/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/md-requirement-list/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/md-requirement-list/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/md-requirement/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/md-requirement/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/md-sidebar-list/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/md-sidebar-list/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/md-sidebar-list/item/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/md-sidebar-list/item/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/md-spec-form/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/md-spec-form/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/md-splitter/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/md-splitter/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/timeline-chart/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/timeline-chart/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/application/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/application/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/chart/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/chart/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/chart/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/chart/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/component/edit/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/component/edit/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/component/edit/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/component/edit/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/component/new/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/component/new/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/component/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/component/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/error/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/error/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/import/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/import/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/import/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/import/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/module/edit/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/module/edit/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/module/edit/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/module/edit/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/module/new/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/module/new/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/module/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/module/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/not-found/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/not-found/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/report/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/report/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/save/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/save/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/save/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/save/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/settings/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/settings/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/settings/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/settings/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/database-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/database-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/google-charts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/google-charts-test.js should pass ESLint\n\n');
  });
});
define('mdspec/tests/unit/pods/application/controller-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define('mdspec/tests/unit/pods/chart/controller-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | chart', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:chart');
      assert.ok(controller);
    });
  });
});
define('mdspec/tests/unit/pods/chart/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | chart', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:chart');
      assert.ok(route);
    });
  });
});
define('mdspec/tests/unit/pods/component/edit/controller-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | component/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:component/edit');
      assert.ok(controller);
    });
  });
});
define('mdspec/tests/unit/pods/component/edit/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | component/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:component/edit');
      assert.ok(route);
    });
  });
});
define('mdspec/tests/unit/pods/component/new/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | component/new', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:component/new');
      assert.ok(route);
    });
  });
});
define('mdspec/tests/unit/pods/component/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | component', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:component');
      assert.ok(route);
    });
  });
});
define('mdspec/tests/unit/pods/error/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | error', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:error');
      assert.ok(route);
    });
  });
});
define('mdspec/tests/unit/pods/import/controller-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | import', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:import');
      assert.ok(controller);
    });
  });
});
define('mdspec/tests/unit/pods/import/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | import', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:import');
      assert.ok(route);
    });
  });
});
define('mdspec/tests/unit/pods/module/edit/controller-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | module/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:module/edit');
      assert.ok(controller);
    });
  });
});
define('mdspec/tests/unit/pods/module/edit/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | module/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:module/edit');
      assert.ok(route);
    });
  });
});
define('mdspec/tests/unit/pods/module/new/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | module/new', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:module/new');
      assert.ok(route);
    });
  });
});
define('mdspec/tests/unit/pods/module/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | module', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:module');
      assert.ok(route);
    });
  });
});
define('mdspec/tests/unit/pods/not-found/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | not-found', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:not-found');
      assert.ok(route);
    });
  });
});
define('mdspec/tests/unit/pods/report/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | report', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:report');
      assert.ok(route);
    });
  });
});
define('mdspec/tests/unit/pods/save/controller-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | save', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:save');
      assert.ok(controller);
    });
  });
});
define('mdspec/tests/unit/pods/save/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | save', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:save');
      assert.ok(route);
    });
  });
});
define('mdspec/tests/unit/pods/settings/controller-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | settings', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:settings');
      assert.ok(controller);
    });
  });
});
define('mdspec/tests/unit/pods/settings/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | settings', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:settings');
      assert.ok(route);
    });
  });
});
define('mdspec/tests/unit/routes/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define('mdspec/tests/unit/services/database-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | database', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:database');
      assert.ok(service);
    });
  });
});
define('mdspec/tests/unit/services/google-charts-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | google-charts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:google-charts');
      assert.ok(service);
    });
  });
});
define('mdspec/config/environment', [], function() {
  var prefix = 'mdspec';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('mdspec/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
