/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var Person = Backbone.Model.extend({
  initialize: function(){
    alert("Welcome to this world");
    People
    this.bind("set:name", function(){
      alert(this.get("name"));
    });
  }
});

var People = Backbone.Collection.extend({
  model : Person,
  initialize: function (models, options) {
    this.bind("add", function(model){alert(model.get("name"))});
    this.bind("list", function(){console.log(models.toString())});
  //Listen for new additions to the collection and call a view function if so
  }
});