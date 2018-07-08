import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addRequirement(){
      let model = this.get('model');

      this.store.createRecord('requirement', {
        parent: model
      });
    }
  }
});
