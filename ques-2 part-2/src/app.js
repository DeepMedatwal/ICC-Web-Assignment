const express = require("express"); //configuring express//
const path = require("path");
const app = express(); //creating variable with name app//
//Now we have to include the mongodb file here//

const hbs = require("hbs");

require("./db/conn");
const Register = require("./admin/Register");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
//Setting the view engine//
app.set("views", template_path);//instead of looking for views nam ka folder use this and run what is there//
hbs.registerPartials(partials_path);

app.get("/",(req,res) => {
    res.render("ques-2")
});  //render is used to see main wording on directly writing local host 3000//

app.get("/register", (req, res) => {
    res.render("register");    
})

//create a new user in our database
app.post("/register", (req, res) => {
    try{
        console.log(req.body.name);
        res.send(req.body.name);
    }catch(error){
        res.status(400).send(error);
    }   
})

app.listen(port, () => { //callback function for telling what i am doin //
    console.log('server is running at port no 3000');
})