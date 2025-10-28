import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./db";
import favourite from "./routes/favourite";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("favourite API is running"));
app.use("/api/favourite", favourite);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
