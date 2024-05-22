const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "task_app";

async function main() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("Connected successfully to mongoDB");

    const db = client.db(dbName);
    console.log(`Database: ${dbName} connected`);

    const collection = db.collection("tasks");

    // const insertData = await collection.insertOne({
    //   title: "ir al doctor",
    //   description: "check up",
    //   user: {
    //     name: "Dario",
    //     lastname: "Salazar",
    //   },
    // });
    // console.log("Inserted document: ", insertData);
    // const findResult = await collection
    //   .find({
    //     user: {
    //       name: "Dario",
    //       lastname: "Salazar",
    //     },
    //   })
    //   .toArray();
    // console.log("Found Documents: ", findResult);

    const remove = await collection.deleteOne({_id: new ObjectId("65d40389dbbe8e8fc4b0b073")});
    console.log("removed document: ", remove);
  } catch (err) {
    console.error("Connection to mongoDB failed: ", err);
  } finally {
    await client.close;
  }
}

main().catch(console.error);
