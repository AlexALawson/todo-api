var mongoose = require('mongoose');


var Todo = mongoose.model('Todo', {
	text: {
		type: String, 
		required: true,
		minlength: 1, 
		trim: true
	}, 
	completed: {
		type: Boolean, 
		default: false
	}, 
	completedAt: {
		type: Number, 
		default: null
	}
}); 

// var newTodo = new Todo({
// 	text: 'Cook dinner'
// })

// newTodo.save().then((doc) => {
// 	console.log('Save todo', doc);
// }, (e) => {
// 	console.log('unable to save todo')
// }); 

// var newTodo = new Todo({
// 	text: 'Go shopping',
// 	completed: 'True'
// })
// newTodo.save().then((doc) => {
// 	console.log('todo added', doc)
// }, (err) => {
// 	console.log('unable to add todo', err)
// }); 

module.exports = {Todo};