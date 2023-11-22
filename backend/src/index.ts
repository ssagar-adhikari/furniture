import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db";


const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;
//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req,res) => {
    console.log('hello krites');
})

//db connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log("MONGO DB Connection failed");
  });