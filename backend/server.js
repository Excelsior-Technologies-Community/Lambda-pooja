require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const sliderRoutes = require("./routes/sliderRoutes");
const sectionRoutes = require("./routes/sectionRoutes");
const featureRoutes = require("./routes/featureRoutes");
const courseRoutes = require("./routes/courseRoutes");
const announcementRoutes = require("./routes/announcementRoutes");

app.use("/api/sliders", sliderRoutes);
app.use("/api/sections", sectionRoutes);
app.use("/api/features", featureRoutes);
app.use("/api/courses", courseRoutes);
app.get("/", (req, res) => {res.send("Lambda Backend Running");});
app.use("/api/announcements",announcementRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});