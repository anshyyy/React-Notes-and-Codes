const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/serverConfig');

const getJwtToken = (userId) => {
    //secret key is open just for testing 
    return jwt.sign({ userId: userId },'SALT', { expiresIn: "1 day" });
}

module.exports = getJwtToken;