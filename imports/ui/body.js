import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks';
import './task';
import './body.html';

Template.body.helpers({
    // tasks: [
    //     {text: 'This is task 1'},
    //     {text: 'This is task 2'},
    //     {text: 'This is task 3'},
    // ],
    tasks () {
        return Tasks.find({}, { sort: { createdAt: -1 }});
    },
});

Template.body.events({
    'submit .new-task'(event) {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;

        Tasks.insert({
            text,
            createdAt: new Date(),
        });

        target.text.value = '';
    }
});