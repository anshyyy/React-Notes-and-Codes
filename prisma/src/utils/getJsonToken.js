const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/serverConfig');

const getJwtToken = (userId) => {
    return jwt.sign({ userId: userId }, SECRET, { expiresIn: "1 day" });
}

module.exports = getJwtToken;