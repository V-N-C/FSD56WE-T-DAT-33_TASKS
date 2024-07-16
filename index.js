import express from "express";
import { createFile, readFolder } from "./fs-utils.js";

const app = express();


app.get("/create-file", (req, res) => {
  createFile();

  res.send({ msg: "File created successfully" });
});


app.get("/read-files", (req, res) => {
  const files = readFolder("files");

  res.send(files);
});

app.listen(5200, () => {
  console.log("APIs Listening on 5200");
});