var http = require("http");
var fs = require("fs");
var os = require("os");
var ip = require('ip');

var cpus = os.cpus();
var cpuCount = cpus.length;
var uptime = os.uptime();
var Days = ("Days: "+ Math.floor(uptime/86400));
var Hours = ("Hours: "+ Math.floor(uptime % 86400/3600));
var Minutes = ("Minutes: "+ Math.floor(((uptime % 86400) % 3600)/60));
var Seconds = ("Seconds: "+ Math.floor((uptime % 86400) %3600) %60);

http.createServer(function(req, res){
    
    if(req.url === "/"){
        fs.readFile("./Public/index.html","UTF-8", function(err, body){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(body);
        })
    }
    else if(req.url.match("/sysinfo")){
        myHostName=os.hostname();
        html=`
        <!DOCTYPE html>
        <html>
        <head>
        <title> Node JS Response </title>
        </head>
        <body>
        <p> Hostname : ${myHostName}</p>
        <p> IP : ${ip.address()}</p>
        <p> Server Uptime: Days: ${Days}, Hours: ${Hours}, Minutes: ${Minutes}, Seconds: ${Seconds} </p>
        <p> Total Memory: ${(os.totalmem()/1000000)} MB </p>
        <p> Free Memory: ${(os.freemem()/1000000)} MB</p>
        <p> Number of CPUs: ${cpuCount} </p>
        </body>
        </html>
        `
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(html);
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end(`404 File Not Found at ${req.url}`)
    }
}).listen(3000)

console.log("Server listening on port 3000")