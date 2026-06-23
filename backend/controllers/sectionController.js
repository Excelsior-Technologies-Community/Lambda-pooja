const sectionModel = require("../models/sectionModel");


const getSections = (req, res) => {

    sectionModel.getSections((err, result) => {

        if(err){
            return res.status(500).json(err);
        }

        res.json(result[0]);
    });

};


module.exports = {
    getSections
};