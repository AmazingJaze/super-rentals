import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByCity(param) {
      //this.model

      //rs_onecore_webplat

      var filteredResults;      

       if (param !== '') {
         //return Promise.resolve(this.model);
         filteredResults = this.model.filter(rental => {
           return rental.city.toLowerCase().includes(param.toLowerCase())
         })
      //   return this.get('store').query('rental', { city: param });
       } else {
         filteredResults = this.model;
      //   return this.get('store').findAll('rental');
       }

       return Promise.resolve(filteredResults);
    }
  }
});