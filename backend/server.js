const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/admin", require("./routes/univAdminRoutes"));
app.use("/api/admin/department", require("./routes/departmentRoutes"));
app.use("/api/student", require("./routes/studentRoutes"));
app.use("/api/student", require("./routes/certificateRoutes"));
app.use("/api/admin/certificate", require("./routes/certificateRoutes"));
app.use("/api/admin/course", require("./routes/courseRoutes"));
app.use("/api/admin/exam", require("./routes/examRoutes"));
app.use("/api/enrollment", require("./routes/enrollmentRoutes"));
app.use("/api/admin/result", require("./routes/resultRoutes"));
app.use("/api/admin/program", require("./routes/programRoutes"));
app.use("/api/admin/organization", require("./routes/organizationRoutes"));
app.use("/api/admin/institution", require("./routes/institutionRoutes"));
app.use("/api/organization", require("./routes/organizationRoutes"));
// Serve Frontend
if (process.env.NODE_ENV === "production") {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // FIX: below code fixes app crashing on refresh in deployment
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
} else {
  app.get("/", (_, res) => {
    res.status(200).json({ message: "Welcome to the University Registry API" });
  });
}

app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));
