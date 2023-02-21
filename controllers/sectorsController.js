// All Requires
const Sector = require("../models/sector");
const { nestedSectors } = require("../utils/nestedSectors");

// GET ALL SECTORS CONTROLLER
exports.getAllSectorsController = async (req, res, next) => {
    try {

        let sector = await Sector.find({});
        const data = nestedSectors(sector);
        res.json(data);

    } catch (error) {
        console.log(error)
        res.json(error);

    }
};


// CREATE SECTOR CONTROLLER
exports.createSectorController = async (req, res, next) => {
    try {
        const insertData = req.body;
        const data = await new Sector(insertData).save();
        res.json(data)

    } catch (error) {
        console.log(error)
        res.json(error);

    }
};
