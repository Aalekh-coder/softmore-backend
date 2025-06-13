import cookieParser from "cookie-parser";
import express, { json, urlencoded } from "express"
import userRouter from "./Routes/formRoute.js"
import { PORT } from "./Config/env.js";
import cors from "cors"
import connectDB from "./Config/db.js";

const app = express()

const PORTNO = PORT || 5000;



app.use(json());
app.use(urlencoded({extended:true}));
app.use(cookieParser());
app.use(
    cors({
      origin:"*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
    })
  );

  app.use("/api",userRouter)

  app.get("/", (req, res) => {
    res.send("hello to the skechkingston")
})

  app.listen(PORTNO, () => {
     connectDB()
     console.log(`server running on port http://localhost:${PORT}`); 
  })