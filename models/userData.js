// User Data Model
const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;

const userDataSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            default: null,
            unique: false
        },
        sector: {
            type: String,
            required: true,
            default: null
        },
        termsagree: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    {
        collection: "userData",
        timestamps: true
    }
);

userDataSchema.plugin(mongoosePaginate);

const UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;