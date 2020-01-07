let appModule = require("./app");
appModule.appInit();

let handlers = require("./requestHandler");

const express = require('express')
const app = express();
app.use(express.static(__dirname));
app.get("/", handlers.root_get);
app.get("/", function(req,res){
});


//app.get("/userAdminDashboard.html", function(req,res){
//   res.send("Response to useradmin");
//});


//app.get('/', (req, res) => {
// res.send('Hello World!')
//});

// app.use("/", function(req,res,next){
//     console.log("Middleware 3");
//     next();
// });

// app.use("/", function(req,res,next){
//     console.log("Middleware 1");
//     next();
// });

// app.use("/", function(req,res,next){
//     console.log("Middleware 2");
//     res.send("Response to Middleware 2");
// });
app.listen(8000, appModule.appInit); // callback