// const MongoClient = require('mongodb').MongoClient;

//it can be done this way. it is called destructing
const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
       return console.log('Unable to connect to mongodb server');

    }
    console.log('Connected to mongodb server');

    const db = client.db('TodoApp');
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.collection('Users').insertOne({
        name: 'Muhittin',
        age: '35',
        location: 'Kazlıçeşme'
    }, (err, res) => {
        if(err) {
            return console.log('unable to insert user');
        }
        console.log(JSON.stringify(res.ops[0]._id, undefined,2));
    });

    client.close();
});