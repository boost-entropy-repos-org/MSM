const express = require('express');
const app = express();
const cors = require('cors');
const log4js = require('log4js');
const config = require('config');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Logger Configuration----------------------------------------------------
let date = new Date();
let today = date.toDateString();
log4js.configure({
    appenders: {
        fileAppender: { 
            type: 'file', 
            filename: `./logs/${today}.log`,
            maxLogSize: 5000000,
            keepFileExt: true
        }
    },
    categories: {
        default: {
            appenders: ['fileAppender'],
            level: 'info'
        }
    }
});

const logger = log4js.getLogger();
logger.level = 'info';
//Log Configuration End -----------------------------------------------------

var corsOptions = {
    origin: ['http://localhost:4200', 'http://localhost:4300'],
    credentials: true
}

app.use(cors(corsOptions));

// Database 
const db = require('./config/db');
const dbName = config.get("dbName");

db.authenticate()
    .then(() => {
        logger.info(`Connected to Database: ${dbName}`);
        console.log(`Connected to Database: ${dbName}`)
    })
    .catch(err => {
        logger.error(`Failed to connect to Database: ${dbName}`);
        console.log(`Failed to connect to Database: ${dbName}`);
    })

require('./models/modelInit');

// Routes
app.use("/", express.static(path.join("")));
app.use('/api/customer', require('./routes/customer'));



// Build
// app.use(express.static(path.join(__dirname, 'dist/EDL')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/EDL/index.html'));
// })


// Server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`);
})