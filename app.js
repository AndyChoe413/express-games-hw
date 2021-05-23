const express = require("express");
const logger = require("morgan");

const gameRouter = require("./routes/gameRouter");
const indexRouter = require("./routes/indexRouter");
const app = express();


app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/api/game", gameRouter);


// app.listen(3000, function () {
//   console.log(`Server is running on PORT: ${3000}!`);
// });

module.exports = app;