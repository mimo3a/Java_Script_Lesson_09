var express = require('express');
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();
server.use(jsonParser);

server.use(express.static(__dirname));

server.get("/", function (req, res) {
    
    console.log("Start page requested.");
    res.send("hallo");
});

server.get("/formGet", function (req, res) {
    console.log("Form receipted by GET.");
   // console.log(JSON.parse(req.query));
    var obj = req.query;
    
    // console.log("my objeckt =" + obj.query);
    console.log(obj.lName += ".ValidatedByGET");
    console.log(obj.fName += ".ValidatedByGET");
    console.log(obj.age +=".ValidatedByGET");
    console.log(obj.address += ".ValidatedByGET");
	
    res.status(200).send(obj);
    
});

server.post("/formPost", function (req, res) {
    console.log("Form receipted by POST.");
    // console.log(JSON.parse(req.query));
    
    var obj = req.body;
    console.log(obj);
    console.log(obj.lName += ".ValidatedByPOST");
    console.log(obj.fName += ".ValidatedByPOST");
    console.log(obj.age += ".ValidatedByPOST");
    console.log(obj.address += ".ValidatedByPOST");
    res.send(obj);
});

 server.listen(3000, ()=>{
     console.log("server is listen on port 3000");
 });
   

 //the server object listens on port 8080