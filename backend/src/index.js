import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyparser from "body-parser";
import morgan from "morgan";
import fs from "fs";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/adwa", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("You have successfully connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(morgan("dev"));
app.use(bodyparser.json({ limit: "2mb" }));

app.use(express.urlencoded({ extended: false }));
app.use(cors());
//app.use("/api", require("./routes/auth"));

fs.readdirSync("./src/routes").map((r) => {
  app.use("/api", require(`./routes/${r}`));
});
app.get("/*", (req, res) => {
  res.send("Wrong API");
});

app.listen(3000, () => {
  console.log(`App is listening on port 3000`);
});
