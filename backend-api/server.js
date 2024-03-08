
const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const app = express();

dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT || 9000;
app.use(express.json());
const cors = require ('cors');
const morgan = require  ("morgan");

app.use(cors());
app.use(morgan("dev"));

const userRouter = require("./routes/userRouter");
const productsRoute = require("./routes/productsRoute");
app.use("/api/v1", userRouter);
app.use("/api/v1", productsRoute);

app.get("/", (req, res) => {
  console.log("hi");
  res.send("Hi");
});

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});

/* DB Connection */
const DBConfig = require("./config/dbconfig");
DBConfig();
