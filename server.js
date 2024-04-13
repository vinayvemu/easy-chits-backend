const express = require("express");
require("./db");
const cors = require("cors");

var bodyParser = require("body-parser");
// CORS options
const corsOptions = {
  origin: "http://localhost:3000", // Allow only localhost:3000
};
const app = express();
const PORT = 8080;

const userController = require("./controllers/userscontroller");
const chitsController = require("./controllers/chitController");
const paymentsController = require("./controllers/paymentsController");
const organizationController = require("./controllers/organizationController");
const chitSchemeController = require("./controllers/chitSchemeController");
app.use(cors(corsOptions));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use("/users", userController);
app.use("/chits", chitsController);
app.use("/payments", paymentsController);
app.use("/organizations", organizationController);
app.use("/chitschemes", chitSchemeController);

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});
app.get("/hello", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).send("<h1>Hello GFG Learner!</h1>");
});
app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
