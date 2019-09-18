// require('dotenv').config();

var production= false;

const base ={
    API_URL:production? 'http://http://128.199.156.110:8080/':'http://localhost:8080/api/v1'
}
// console.log(`API => \n ${production? 'http://http://128.199.156.110:8080/':'http://localhost:8080/api/v1'}`)

module.exports = {
    base,
    production
}