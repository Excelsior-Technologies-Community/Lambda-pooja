const ThemeCore = require("../models/themeCoreModel");

const getThemeCore = async (req, res) => {
    try {
        const data = await ThemeCore.getThemeCore();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getThemeCore
};