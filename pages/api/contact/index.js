import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const dbName = "blog-contact";
  const url = `mongodb://aidedn:mpKZGI6SibJ2JSMy@cluster0-shard-00-00.4lj4l.mongodb.net:27017,cluster0-shard-00-01.4lj4l.mongodb.net:27017,cluster0-shard-00-02.4lj4l.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-q1n2xs-shard-0&authSource=admin&retryWrites=true&w=majority`;

  // connect to client
  let client;
  try {
    client = new MongoClient(url);
    await client.connect();
  } catch (error) {
    res.status(500).json({ message: "Unable to connect to the database." });
    return;
  }

  // post contact_message data to db
  if (req.method === "POST") {
    const { email, name, message, date } = req.body;

    // check if email, name, message is valid
    if (
      !email ||
      !email.includes("@") || // check if it has @
      !name ||
      name.trim() === "" || // check if not empty
      !message ||
      message.trim() === "" // check if not empty
    ) {
      res.status(422).json({ message: "Invalid input." });
      client.close();
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
      date,
    };

    try {
      const db = client.db(dbName);
      const result = await db
        .collection("contact_message")
        .insertOne(newMessage);
      newMessage._id = result.insertedId;

      res.status(201).json({
        message: "Added comment.",
        contact_message: newMessage,
      });
    } catch (error) {
      res.status(500).json({ message: "Not able to add to database." });
    }

    client.close();
  }
};

export default handler;
