import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | module/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:module/new');
    assert.ok(route);
  });
});
