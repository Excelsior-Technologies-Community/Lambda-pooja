const db = require("../db");

const getGalleryImages = async () => {
    const [rows] = await db.query("CALL GetGalleryImages()");
    return rows[0];
};

module.exports = {
    getGalleryImages
};
