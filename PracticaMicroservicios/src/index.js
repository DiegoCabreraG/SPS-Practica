const express = require("express");
const app = express();
const morgan = require("morgan");

//settings
app.set("port", process.env.PORT || 8090);
app.set("json spaces", 2);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require("./routes/index"));
app.use('/api/sps/helloword/v1/movies',require("./routes/movies"));

//Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${8090}`);
});
