const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

// environment variables
const port = process.env.PORT || 5000;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

// app initialization
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

const mongo_conn_uri = `mongodb+srv://${dbUsername}:${dbPassword}@techasyncmain.bey4qfo.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(mongo_conn_uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    console.log("finally block");
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to TechAsync project");
});

app.listen(port, () => {
  console.log(`TechAsync Server-side app listening on port ${port}`);
});
