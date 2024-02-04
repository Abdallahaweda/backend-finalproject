import dotenv from "dotenv";
dotenv.config();
import mongoos from "mongoose";
import express from "express";
import ReportRoute from "./public/routes/ReportRoute.mjs";
// let session = require("express-session");
// import userRoutes from "./public/routes/UserRoute.mjs";
let app = express();
let port = 8080;
// let blogRoutes = require("./public/routes/BlogRoutes");
//!db connection
mongoos
  .connect(process.env.DB_API)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((e) => {
    console.log(e);
  });
//*startClean :)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//!Routes
// app.use("/users", userRoutes);
// app.use("/blogs", blogRoutes);
//*session set up
// app.use(
//   session({
//     secret: "aweda-secret-key",
//     resave: false,
//     saveUninitialized: true,
//   })
// );
//!listening on 8080

app.use("/report", ReportRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
