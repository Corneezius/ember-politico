
import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=75f5ef47dddf4964b6f8da1ae9e22721&zip=' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON.results);
     return responseJSON.results;
   });
  }
});

// http://congress.api.sunlightfoundation.com/legislators/locate?zip=97204&apikey=75f5ef47dddf4964b6f8da1ae9e22721
