import express from "express";
import {randomUUID} from "crypto";
import cors from "cors";

const app = express();

const feedbacks = [];
app.use(express.json());
app.use(cors());

app.post("/save-feedback", (req, res) => {
  const newFeedback = {
    id: randomUUID(),
    text: req.body.text,
  }
  feedbacks.push(newFeedback)
  res.status(201).json(newFeedback)
})

app.listen(3100, () => {
  console.log("Server is Running!")
})
