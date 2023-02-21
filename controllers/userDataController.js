// All Requires
const UserData = require("../models/userData");


// GET ALL USER DATA CONTROLLER
exports.getAllUserDataController = async (req, res, next) => {
    try {

        let list = await UserData.find({});
        res.json(list);

    } catch (error) {
        console.log(error)
        res.json(error);

    }
};

// CREATE USER DATA CONTROLLER
exports.createUserDataController = async (req, res, next) => {
    try {
        const insertData = req.body;
        const data = await new UserData(insertData).save();
        res.json(data)

    } catch (error) {
        console.log(error)
        res.json(error);

    }
};

// UPDATE USER CONTROLLER
exports.updateUserController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const filter = { _id: id };
        const options = { upsert: true };

        const updateDoc = {
            $set: {
                name: req.body.name,
                sector: req.body.sector,
                termsagree: req.body.termsagree
            }
        }
        const updateTemplate = await UserData.updateOne(filter, updateDoc, options);

        res.json(updateTemplate)

    } catch (error) {
        console.log(error)
        res.json(error);

    }
};
