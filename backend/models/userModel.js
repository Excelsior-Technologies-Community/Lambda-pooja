const db = require("../db");

exports.findUserByLogin = async (login, password) => {
  const [rows] = await db.query(
    `SELECT id, username, email, created_at
     FROM users
     WHERE (username = ? OR email = ?)
       AND password_hash = SHA2(?, 256)
     LIMIT 1`,
    [login, login, password]
  );

  return rows[0];
};

exports.findExistingUser = async (username, email) => {
  const [rows] = await db.query(
    `SELECT id
     FROM users
     WHERE username = ?
        OR (? IS NOT NULL AND email = ?)
     LIMIT 1`,
    [username, email || null, email || null]
  );

  return rows[0];
};

exports.createUser = async ({ username, email, password }) => {
  const [result] = await db.query(
    `INSERT INTO users (username, email, password_hash)
     VALUES (?, ?, SHA2(?, 256))`,
    [username, email || null, password]
  );

  return {
    id: result.insertId,
    username,
    email: email || null,
  };
};
