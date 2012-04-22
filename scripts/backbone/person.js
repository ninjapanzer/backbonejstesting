/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var Person = Backbone.Model.extend({
  initialize: function(){
    this.bind("set:name", function(){
      console.log(this.get("name"));
    });
  }
});

var People = Backbone.Collection.extend({
  model: Person,
  url: "People.php",
  initialize: function (models, options) {
    this.bind("add", function(model){console.log(model.get("name"))});
  }
});