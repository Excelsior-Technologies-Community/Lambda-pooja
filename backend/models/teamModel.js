const db = require("../db");

exports.getTeamMembers = async () => {

    const [rows] = await db.query(
        "CALL sp_GetTeamMembers()"
    );

    return rows[0];
};