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
const teamRoutes = require("./routes/teamRoutes");
const contactRoutes = require("./routes/contactRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const faqRoutes = require("./routes/faqRoutes");
const authRoutes = require("./routes/authRoutes");
const themeCoreRoutes = require("./routes/themeCoreRoutes");
const builtInComponentsRoutes = require("./routes/builtInComponentsRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/api/sliders", sliderRoutes);
app.use("/api/sections", sectionRoutes);
app.use("/api/features", featureRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/admin", adminRoutes);
app.get("/", (req, res) => {res.send("Lambda Backend Running");});
app.use("/api/announcements",announcementRoutes);
app.use("/api", teamRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/allcourses", require("./routes/allcourseRoutes"));
app.use("/api/theme-core", themeCoreRoutes);
app.use("/api/built-in-components", builtInComponentsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
