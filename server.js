const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
const app = express();
// connect mongoDB
connectDB();
app.use(cors());
// Init Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// app.use('/api/profile', require('./routes/api/profile'));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
