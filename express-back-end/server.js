require("dotenv").config();
const Express = require("express");
const app = Express();
const BodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Express Configuration
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json({ limit: "50mb" }));
app.use("/static", Express.static("public"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Server,Connection,X-Powered-By,Access-Control-Allow-Origin,Access-Control-Allow-Headers,Access-Control-Allow-Methods,Content-Type,Content-Length,Etag,Date,Via"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH"
  );
  res.header("Access-Control-Allow-Credentials", "false");
  next();
});

// Sample GET route
app.get("/api/users", (req, res) =>
  res.json({
    message: "Seems to work!"
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
