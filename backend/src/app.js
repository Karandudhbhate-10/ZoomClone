import express from "express";
import { createServer } from "node:http";

import cors from "cors";

import mongoose from "mongoose";
import { connectTosocket } from "./controller/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectTosocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ Limit: "40kb" }));
app.use(express.urlencoded({ Limit: "40kb", extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.use("/api/v1/users", userRoutes);

const start = async () => {
  app.set("mongo_user");
  const connectionDb = await mongoose.connect(
    "mongodb+srv://karandudhbhate2_db_user:70pNM28cuYw9Bj6u@zoomcluster.yratb07.mongodb.net/?appName=ZoomCluster"
  );

  console.log(`MONGO Connected DB host:${connectionDb.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("Listening on port 8000");
  });
};

start();
