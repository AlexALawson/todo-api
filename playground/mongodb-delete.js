// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('unable to connect to db server')
	}
	console.log('connected to mongodb server!'); 
	// db.collection('Todos').deleteOne({completed: false}).then((result) => {
	// 	console.log(result)
	// });
	// db.collection('Todos').deleteMany({completed: false}).then((result) => {
	// 	console.log(result)
	// });
	db.collection('Users').findOneAndDelete({_id: new ObjectID("5867e96c47f106169896b5ca")}).then((result) => {
		console.log(result)
	});

	// db.collection('Users').deleteMany({name: 'Alex Lawson'}).then((result) => {
	// 	console.log(result)
	// })

}) 

