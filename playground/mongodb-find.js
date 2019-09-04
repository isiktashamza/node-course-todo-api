const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');

    }
    console.log('Connected to mongodb server');

    const db = client.db('TodoApp');


    db.collection('Todos').find().count().then((count) =>{
        console.log(count);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Todos')

    client.close();
});