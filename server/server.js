const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
//database connection
mongoose.connect(
    'mongodb+srv://ahmedgodhbeni:u1MXzNWmiUFKmt20@mern.fyqma.mongodb.net/'
).then(()=>console.log("MongoDB connected successfully.")).catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

//cors config 
app.use(
    cors({
        origin : 'http://localhost:5173/',
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
);

//cookies config
app.use(cookieParser());
//json
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

