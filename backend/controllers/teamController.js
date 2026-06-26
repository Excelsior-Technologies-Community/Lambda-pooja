const Team = require("../models/teamModel");

exports.getTeamMembers = async (req, res) => {

    try {

        const data = await Team.getTeamMembers();

        res.json(data);

    } catch (err) {

        console.log(err);

        res.status(500).json(err);

    }

};