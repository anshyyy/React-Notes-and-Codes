const {PORT}  = require('./config/serverConfig');
const express = require('express');

const app = express();


const setUpAndStartServer = ()=> {
        
    app.listen(PORT,()=>{
          console.log(`server started on ${PORT}`);
    });
}

setUpAndStartServer();
