const express = require("express");
const bodyParser = require('body-parser')

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }))

var inputs = [];
var popList = [];

app.get("/", (req, res) => {
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindOfDay: day, newListItems : inputs , deleteListItems : popList});

});
app.post("/", (req, res) => {
    var input =  req.body.inputText;
    inputs.push(input);
    res.redirect("/");
})

app.post("/deleteLast", (req,res)=>{
    var popInput = inputs.pop();
    popList.push(popInput);
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("Server started at port 3000");
});
