import Controller from '@ember/controller';

export default Controller.extend({
  options:{
    width: 3000
  },
  actions: {
    onGoogleLoad(){
      this.set('loaded', true);
    }
  }
});
