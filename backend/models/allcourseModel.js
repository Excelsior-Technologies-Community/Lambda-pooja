const db=require("../db");

exports.getCourses=async()=>{

const [rows]=await db.query(`
SELECT id, course_name, category, description, TRIM(image) AS image
FROM allcourses
ORDER BY id
`);

return rows;

}

exports.getCategories=async()=>{

const [rows]=await db.query(`
SELECT category, COUNT(*) AS total
FROM allcourses
GROUP BY category
ORDER BY category
`);

return rows;

}

exports.getCourseByCategory=async(category)=>{

const [rows]=await db.query(
`
SELECT id, course_name, category, description, TRIM(image) AS image
FROM allcourses
WHERE category=?
ORDER BY id
`,
[category]
);

return rows;

}
