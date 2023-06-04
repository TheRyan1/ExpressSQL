const express = require("express");
const database = require("./data/db");
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const app = express();

// Middleware
app.use(express.json())
app.use(cors())

// All user routes 
// Eg: users/getAllUsers
app.use('/users',userRoutes)


const PORT = 3001;

const syncDnAndStartServer = async () => {
  try {

    await database.sync();
    
    app.listen(PORT, () => {
      console.log("Db Synced and Server started");
    });

  } catch (error) {
    console.log(error);
  }
};

syncDnAndStartServer();
