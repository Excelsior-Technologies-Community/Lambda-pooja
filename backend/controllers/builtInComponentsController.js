const model = require("../models/builtInComponentsModel");

const getBuiltInComponents = async (req, res) => {
    try {
        const data = await model.getBuiltInComponents();
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    getBuiltInComponents,
};