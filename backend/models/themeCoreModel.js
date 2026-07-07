const pool = require("../db");

const getThemeCore = async () => {
    const [rows] = await pool.query("CALL sp_GetThemeCoreFeatures()");
    return rows[0];
};

module.exports = {
    getThemeCore
};