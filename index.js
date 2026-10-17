const express = require("express");
const app = express();
const student = require("./modal/student-modal");
const connectDB = require("./dbs/database");

app.set('view engine', 'ejs')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// router

connectDB();


app.get('/',async (req,res)=>{
  
    const students =await student.find({})   
    res.render("index",{students})
})

app.post('/add-student',async(req,res)=>{
    await student.create(req.body)
    res.redirect("/")
})

app.get('/add-student',(req,res)=>{
    res.render("add-student")
})

app.get('/show-student/:id', async (req, res) => {
    const studentData = await student.findById(req.params.id);

    res.render("show-student", { student: studentData });
});


app.get('/update/:id',async(req,res)=>{
    const studentData = await student.findById(req.params.id);
    res.render("update",{student:studentData});
})

app.post('/update/:id',async(req,res)=>{
    const updata = await student.findByIdAndUpdate(req.params.id,req.body);
    res.redirect("/");
})

app.get('/delete-student/:id',async(req,res)=>{
     await student.findByIdAndDelete(req.params.id);
    res.redirect("/")
})

// Port
app.listen(2000,()=>{
console.log("Run the server");

})