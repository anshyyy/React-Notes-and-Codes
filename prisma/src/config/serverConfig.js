const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.PORT);

module.exports = {
    PORT : process.env.PORT,
    DATABASE_URL : process.env.DATABASE_URL,
    SECRET : process.env.SECRET
}