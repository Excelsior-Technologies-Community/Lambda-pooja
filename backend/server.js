require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const sliderRoutes = require("./routes/sliderRoutes");
const sectionRoutes = require("./routes/sectionRoutes");
app.use("/api/sliders", sliderRoutes);
app.use("/api/sections", sectionRoutes);

app.get("/", (req, res) => {
  res.send("Lambda Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});