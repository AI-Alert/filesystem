const express = require('express')
const router = require('./routes')
const dbConnect = require ('./modules/FileStorage/dbConnect')
const PORT = process.env.PORT || 5000
const app = express();
require('dotenv').config()


app.use(express.json());
app.use('/api', router);

const start = async () => {
    try {
        await dbConnect()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}


start();