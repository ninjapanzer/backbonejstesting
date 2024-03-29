/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


window.MiddleView = Backbone.View.extend({
  person1: new Person({ name: "Thomas", age: 69}),
  something: function(){
    alert(JSON.stringify(this.person1));
  },
  initialize: function(){
    this.persons = new People(null,{view: this});
    var person1 = this.person1;
    var person2 = new Person({ name: "John", age: 68});
    var person3 = new Person({ name: "Paul", age: 70});
    this.persons.add(person1);
    this.persons.add(person2);
    this.persons.add(person3);
    this.render();
    //this.$el.show();
  },
  render: function() {
    console.log("render");
    console.log($(this.el));
    //var template = _.template( $("#search_template").html(), {} );
    //$(this.el).html(template);
    $(this.el).html(JSON.stringify(this.persons));
    return this;
  },
  updateFromFetch: function(){
    var that = this;
    this.persons.fetch({success: function(){that.render();}});
  }
});