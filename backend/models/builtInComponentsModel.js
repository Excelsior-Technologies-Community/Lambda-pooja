const db = require("../db");

const getBuiltInComponents = async () => {
    const [rows] = await db.query("CALL sp_GetBuiltInComponents()");
    return rows[0];
};

module.exports = {
    getBuiltInComponents,
};