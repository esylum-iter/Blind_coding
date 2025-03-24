
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/user.route.js";
import connectDB from "./db/db.js";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/user",userRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});