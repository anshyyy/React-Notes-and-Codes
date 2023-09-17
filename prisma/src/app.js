const {PORT}  = require('./config/serverConfig');
const express = require('express');
const ApiRoutes = require('./routes/index');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//cookie middleware
app.use(cookieParser());



const setUpAndStartServer = ()=> {

    app.use(ApiRoutes);
        
    app.listen(PORT,()=>{
          console.log(`server started on ${PORT}`);
    });
}

setUpAndStartServer();
