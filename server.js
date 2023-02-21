// ALL REQUIRES STARTS
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// IMPORT ROUTES
const sectorRoutes = require('./routes/sectorRoutes');
const userDataRoutes = require('./routes/userDataRoutes');

// CREATING APP
const app = express();
app.use(
    cors({
        origin: '*',
    })
);

// DECLARING PORT
const PORT = process.env.PORT || 8000;

// MONGODB URI
const mongoDBURI = `mongodb+srv://testskil01:AqrlV6PruXeruMtb@cluster0.uqmceaf.mongodb.net/sectorsdatadb`; //live

// MIDDLEWARES
const middlwares = [
    express.urlencoded({ extended: true }),
    express.json({ limit: '10mb' })
];

app.use(middlwares);

// ROUTE DECLARATION
app.use('/sectors', sectorRoutes);
app.use('/userdata', userDataRoutes);

// ROOT API
app.get('/', async (req, res) => {
    try {
        res.json({
            message: "Server Running!!!"
        });
    } catch (e) {
        res.send({ e: e });
    }
});


// CONNECT DB WITH MONGOOSE
mongoose.set("strictQuery", false);
mongoose
    .connect(mongoDBURI, { useNewUrlParser: true })
    .then(() => {
        // LISTENING SERVER
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING ON PORT: ${PORT} ❤️`);
            console.log('DB CONNECTED');
        });
    })
    .catch((err) => {
        console.log(`SERVER ERROR: ${err}`);
    });
