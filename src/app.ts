import dotenv from "dotenv";
import express from "express";
import path from "path";
import connectDB from "./config/db";
import studentRoutes from "./routes/studentRoutes";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/students');
});

app.use('/students', studentRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
