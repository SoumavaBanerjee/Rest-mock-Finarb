import express from "express";
import { homeRouter, nameRouter } from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(homeRouter);
app.use("/name", nameRouter);

app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.listen(PORT, () => {
  console.info(`app running at port ${PORT} `);
});
