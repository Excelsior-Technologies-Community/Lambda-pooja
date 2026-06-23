const db = require("../db");


const getSections = (callback) => {
    db.query("CALL GetSections()", callback);
};


module.exports = {
    getSections
};