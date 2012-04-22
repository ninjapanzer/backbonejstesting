/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


window.MiddleView = Backbone.View.extend({
  el:$("#middle"),
  person1 : new Person({ name: "Thomas", age: 69}),
  initialize: function(){
    var person1 = this.person1;
    var person2 = new Person({ name: "John", age: 68});
    var person3 = new Person({ name: "Paul", age: 70});
    var persons = new People();
    persons.add(person1);
    persons.add(person2);
    persons.add(person3);
  },
  render: function() {
    $(this.el).html(this.template(this.person1.toJSON()));
    return this;
  }
});