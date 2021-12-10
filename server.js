///////////////////////////////
// DEPENDENCIES
////////////////////////////////


require("dotenv").config();
const { PORT, DATABASE_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////

mongoose.connect(DATABASE_URL);
mongoose.connection
  .on("open", () => console.log("You are connected to MongoDB"))
  .on("close", () => console.log("You are disconnected from MongoDB"))
  .on("error", (error) => console.log(error));

///////////////////////////////
// MODELS
////////////////////////////////

const ProjectsSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  URL: String,
});

const Projects = mongoose.model("Projects", ProjectsSchema);

///////////////////////////////
// MiddleWare
////////////////////////////////

app.use(cors());
app.use(express.json());

///////////////////////////////
// ROUTES
////////////////////////////////

app.get("/", (req, res) => {
  res.send("Home Page");
});


app.get("https://gracious-benz-9d3548.netlify.app//projects", async (req, res) => {
  try {
    res.json(await Projects.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});


///////////////////////////////
// LISTENER
////////////////////////////////

app.listen(process.env.PORT, () => console.log(`listening on PORT ${PORT}`));