var mysql = require("mysql")
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "nba02whlntki5w2p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "aypb6bbrqtinaaya",
        password: "vab7dam0wvnu88z8",
        database: "xx6dse619w3mlvq5"

    
    })
}

connection.connect();

module.exports = connection;