console.log("heelo wordl")

// learing
// console.log("hello my name is deep")
// console.log("I am learning Node.js");
// console.log("node version:",process.version)
// console.log("My file",__dirname)


// export module

// const maths = require('./math')
// console.log(maths.add(23,2))
// console.log(maths.sub(23,12))

// files

// const fs = require("fs")

// fs.writeFileSync('hell.txt',"this is my deep")
// fs.readFileSync('hell.txt','utf-8')
// fs.appendFileSync('hell.txt',"/n i am learning")
// fs.readFileSync('hell.txt','utf-8')


// const fs = require("fs");
// fs.readFile("hell.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err,"nothing there");
//         return
//     }
//      console.log(data)
// })


//   path


// const path = require("path")
// const fs = require("fs")
// const filePath = path.join(__dirname,'hell txt');

// fs.writeFileSync(filePath,"this is not depep")

// console.log(path.basename(filePath))
// console.log(path.extname(filePath))
// console.log(path.dirname(filePath));


// http

// const http = require('http')
// const createserver = http.createServer((req,res)=>{
//     res.end("this my first server")
// })

// createserver.listen(2000)



// const http = require("http");

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.end("Welcome to Home Page");
//     } 
//     else if (req.url === "/about") {
//         res.end("This is About Page");
//     } 
//     else if (req.url === "/contact") {
//         res.end("Contact Us");
//     } 
//     else {
//         res.statusCode = 404;
//         res.end("404 - Page Not Found");
//     }
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });



// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log("URL:", req.url);
//     console.log("Method:", req.method);

//     if (req.url === "/about" && req.method === "GET") {
//         res.end("This is About Page");
//     } else {
//         res.end("Home Page");
//     }
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });