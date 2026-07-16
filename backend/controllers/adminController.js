const db = require("../db");


const ALLOWED_TABLES = [
  "sliders",
  "sections",
  "features",
  "courses",
  "announcements",
  "team_members",
  "contacts",
  "image_gallery",
  "faqs",
  "allcourses",
  "theme_core_features",
  "built_in_components",
  "users"
];

const isValidTable = (table) => ALLOWED_TABLES.includes(table);


exports.getAll = async (req, res) => {
  const { table } = req.params;
  if (!isValidTable(table)) {
    return res.status(400).json({ success: false, message: "Invalid table name" });
  }

  try {
    
    const [rows] = await db.query(`SELECT * FROM \`${table}\` ORDER BY id DESC`);
    res.json(rows);
  } catch (err) {
    console.error(`Error fetching all from ${table}:`, err);
    res.status(500).json({ success: false, message: "Database Error", error: err.message });
  }
};


exports.getOne = async (req, res) => {
  const { table, id } = req.params;
  if (!isValidTable(table)) {
    return res.status(400).json({ success: false, message: "Invalid table name" });
  }

  try {
    const [rows] = await db.query(`SELECT * FROM \`${table}\` WHERE id = ?`, [id]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: "Record not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(`Error fetching record from ${table}:`, err);
    res.status(500).json({ success: false, message: "Database Error", error: err.message });
  }
};

exports.create = async (req, res) => {
  const { table } = req.params;
  if (!isValidTable(table)) {
    return res.status(400).json({ success: false, message: "Invalid table name" });
  }

  const data = req.body;
  try {
    const [result] = await db.query(`INSERT INTO \`${table}\` SET ?`, [data]);
    res.status(201).json({
      success: true,
      message: "Record created successfully",
      id: result.insertId
    });
  } catch (err) {
    console.error(`Error inserting into ${table}:`, err);
    res.status(500).json({ success: false, message: "Database Error", error: err.message });
  }
};


exports.update = async (req, res) => {
  const { table, id } = req.params;
  if (!isValidTable(table)) {
    return res.status(400).json({ success: false, message: "Invalid table name" });
  }

  const data = req.body;
  try {
    await db.query(`UPDATE \`${table}\` SET ? WHERE id = ?`, [data, id]);
    res.json({
      success: true,
      message: "Record updated successfully"
    });
  } catch (err) {
    console.error(`Error updating ${table}:`, err);
    res.status(500).json({ success: false, message: "Database Error", error: err.message });
  }
};


exports.delete = async (req, res) => {
  const { table, id } = req.params;
  if (!isValidTable(table)) {
    return res.status(400).json({ success: false, message: "Invalid table name" });
  }

  try {
    await db.query(`DELETE FROM \`${table}\` WHERE id = ?`, [id]);
    res.json({
      success: true,
      message: "Record deleted successfully"
    });
  } catch (err) {
    console.error(`Error deleting from ${table}:`, err);
    res.status(500).json({ success: false, message: "Database Error", error: err.message });
  }
};
