const db = require("../db");

exports.getAllFaq = async () => {
    const [rows] = await db.query("SELECT * FROM faqs");
    return rows;
};