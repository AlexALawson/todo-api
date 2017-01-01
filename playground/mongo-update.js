// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('unable to connect to db server')
	}
	console.log('connected to mongodb server!'); 
	
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID("5868040c05ba875dc0d883f8"), 
	// 	},{
	// 		$set: {
	// 			completed: true
	// 		}
	// 	}, {
	// 		returnOriginal: false
	// 	}).then((result) => {
	// 	console.log(result)
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("5867eff705ba875dc0d883f3")
	}, {
		$set: {
			name: "Alexis Lawson"
		},
		$inc: {
			age: 5
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result)
	})

}) 

