/* *|MARKER_CURSOR|* */
const express = require("express");
const app = express();
const User = require("./models/User");
const dotenv = require("dotenv").config();
require("./configs/db");
require("./models/generateRole");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Route
const authRoute = require("./routes/authRoutes");

const userRoute = require("./routes/userRoutes");
const adminRoute = require("./routes/adminRouter");
const categorieRoute = require("./routes/CategorieRoute");
const productRouter = require("./routes/ProductRoutes");
const statisticRoute = require("./routes/statisticRoutes");
app.use(require("./routes/livreurRoute"));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/categorie", categorieRoute);
app.use("/api/product", productRouter);
app.use("/api/statistic", statisticRoute);

app.use(require("./routes/CategorieRoute"));
app.use(require("./routes/ProductRoutes"));

const PORT = process.env.PORT || 4000;



/* Listening to the port and logging the message to the console. */
app.listen(PORT, () => {
  console.log(`server is running at PORT ${PORT}`);
});
