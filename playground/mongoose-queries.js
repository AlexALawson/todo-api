const {ObjectID} = require('mongodb'); 


const {mongoose} = require('./../server/db/mongoose'); 
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user'); 
// var id = '586e992afd25ea5ae81a7d9e11'; 

var id = '586d3387df661e1ff4c7698211'; 

if(!ObjectID.isValid(id)){
	console.log("ObjectID not valid")
};

User.findById(id).then((user) => {
	if(!user){
		return console.log('id not found')
	}
	console.log('User By Id', user )
}).catch((e) => console.log(e));

// if(!ObjectID.isValid(id)){
// 	console.log('ObjectID is not valid')
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos)
// }); 

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo)
// }); 

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('id not found!')
// 	}
// 	console.log('Todo By Id', todo)
// }).catch((e) => console.log(e))