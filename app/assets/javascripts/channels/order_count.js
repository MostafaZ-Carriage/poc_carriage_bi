/**
 * Created by mostafa_carriage on 7/7/17.
 */
// app/assets/javascripts/channels/chatrooms.js

//= require cable
//= require_self
//= require_tree .

this.App = {};

App.cable = ActionCable.createConsumer();

App.messages = App.cable.subscriptions.create('OrderCountChannel', {
    received: function(data) {
        console.log(data);
        return data;
    }
});