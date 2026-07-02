const Course=require("../models/allcourseModel");

exports.getCourses=async(req,res)=>{

try{
const data=await Course.getCourses();

res.json(data);
}catch(err){
console.log(err);
res.status(500).json({message:err.message});
}

}

exports.getCategories=async(req,res)=>{

try{
const data=await Course.getCategories();

res.json(data);
}catch(err){
console.log(err);
res.status(500).json({message:err.message});
}

}

exports.filterCourse=async(req,res)=>{

try{
const data=await Course.getCourseByCategory(req.params.category);

res.json(data);
}catch(err){
console.log(err);
res.status(500).json({message:err.message});
}

}
