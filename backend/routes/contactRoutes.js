const express = require("express");
const router = express.Router();
const db = require("../db");

// Add Contact
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const sql = `
      INSERT INTO contacts
      (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `;

    await db.execute(sql, [name, email, subject, message]);

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// Get All Contacts (Admin)
router.get("/", async (req, res) => {
  try {

    const [rows] = await db.execute(
      "SELECT * FROM contacts ORDER BY created_at DESC"
    );

    res.json(rows);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete Contact
router.delete("/:id", async (req, res) => {
  try {

    await db.execute(
      "DELETE FROM contacts WHERE id=?",
      [req.params.id]
    );

    res.json({
      success: true,
      message: "Deleted Successfully",
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;