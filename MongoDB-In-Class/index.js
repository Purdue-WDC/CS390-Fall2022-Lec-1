// // MONGODB: DEFAULT CLIENT

// const CLUSTER_URL = 'mongodb+srv://390:VdC6EtAHJfDV7VSz@cluster0.8hjdpc0.mongodb.net/?retryWrites=true&w=majority';
// const DB_NAME = 'sample_restaurants';
// const DB_COLLECTION = 'restaurants';

// const { MongoClient, ObjectId } = require('mongodb');
// const client = new MongoClient(CLUSTER_URL);

// async function insert(newDoc) {
//   try {
//     const db = client.db(DB_NAME);
//     const collection = db.collection(DB_COLLECTION);
//     const res = await collection.insertOne(newDoc);
//     console.log("INSERTION_RES: ", res);
//   } catch (e) {
//     console.log(e);
//   }
// }

// // async function get() {
// //   try {
// //     const db = client.db(DB_NAME);
// //     const collection = db.collection(DB_COLLECTION);
// //     const res = await collection.findOne({_id: ObjectId('636013b96980b2a0ebe8eefc')});
// //     console.log("INSERTION_RES: ", res);
// //   } catch (e) {
// //     console.log(e);
// //   }
// // }

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected to server.");

//     // await insert({
//     //   "address": {
//     //     "building": "hihi",
//     //     "coord": [
//     //       { "$numberDouble": "-73.98241999999999" },
//     //       { "$numberDouble": "40.579505" }
//     //     ],
//     //     "street": "hello world avenue",
//     //     "zipcode": "11111"
//     //   },
//     //   "borough": "WALC",
//     //   "cuisine": "CS390-WAP",
//     //   "grades": []
//     // });

//     // await insert({
//     //   "im_not_the_same_as_the_other_kids": "X("
//     // });


//   } catch (err) {
//     console.log(err.stack);
//   } finally {
//     await client.close();
//   }
// }

// run();



// MONGODB + MONGOOSE

const DB_URL = 'mongodb+srv://390:VdC6EtAHJfDV7VSz@cluster0.8hjdpc0.mongodb.net/db_ex?retryWrites=true&w=majority';
const DB_COLLECTION = 'collection_ex';
const mongoose = require('mongoose');

// // creating a model
const studentSchema = new mongoose.Schema({
  // name: String
  name: {
    type: String,
    required: true
  }
});
const Student = mongoose.model(DB_COLLECTION, studentSchema);



async function run() {
  try {
    await mongoose.connect(DB_URL);
    console.log("connected!");

    // insertion
    const stud = new Student({
      //name: 'cs390'
    })
    const res = await stud.save();
    console.log("inserted!", res);

    await mongoose.connection.close();
  } catch (e) {
    console.log(e);
  }
}

run();