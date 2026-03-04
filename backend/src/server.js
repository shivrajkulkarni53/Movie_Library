import express from "express";
import dotenv from "dotenv";
import cors from "cors";        
import MovieRoutes from "./routes/MovieRoutes.js";
import { connectDB } from "./config/db.js";
import n from "node:dns/promises";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

n.setServers(["1.1.1.1", "8.8.8.8"]);


app.use(cors());

app.use(express.json());
app.use("/movie", MovieRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}/movie`);
  });
});