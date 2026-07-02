const express=require("express");

const router=express.Router();

const controller=require("../controllers/allcourseController");

router.get("/",controller.getCourses);

router.get("/categories",controller.getCategories);

router.get("/category/:category",controller.filterCourse);

module.exports=router;
