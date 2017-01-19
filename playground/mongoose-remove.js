const {ObjectID} = require('mongodb'); 


const {mongoose} = require('./../server/db/mongoose'); 
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user'); 

Todo.remove({}).then((result) => {
	console.log(result)
});

//Todo.findOneAndRemove()

Todo.findByIdAndRemove("5873f61b05ba875dc0d883fb").then((todo) => {})

