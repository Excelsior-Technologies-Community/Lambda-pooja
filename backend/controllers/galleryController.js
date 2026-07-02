const galleryModel = require("../models/galleryModel");

const getGallery = async (req, res) => {
    try {
        const data = await galleryModel.getGalleryImages();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Database Error"
        });
    }
};

module.exports = {
    getGallery
};