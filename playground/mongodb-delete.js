const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');

    }
    console.log('Connected to mongodb server');

    const db = client.db('TodoApp');

    //deleteOne
    //findAndDeleteOne

    db.collection('Todos').deleteMany({text:'Eat lunch'}).then((count) =>{
        console.log(count);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    client.close();
});