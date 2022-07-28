import mongoose from 'mongoose'

const connection = {};

async function dbConnect() {
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
}

export default dbConnect

// onst client = await MongoClient.connect(`mongodb+srv://xterminator:${DATABASE_PASSWORD}@testdb.a8dgn.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`);
//     const db = client.db()
//     const users = db.collection('users');
//     await users.insertOne(req.body);
//     client.close();
//     res.status(201).send({'message': 'Users inserted'});