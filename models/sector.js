// Sector Model
const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;

const sectorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            default: null,
            unique: true
        },
        parent: {
            type: Schema.Types.ObjectId,
            required: false,
            default: null
        }
    },
    {
        collection: "sectordata",
        timestamps: true,
    }
);

sectorSchema.plugin(mongoosePaginate);

const Sector = mongoose.model("Sector", sectorSchema);

module.exports = Sector;