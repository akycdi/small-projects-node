const express = require("express");
const bodyParser = require('body-parser')
const date = require(__dirname +"/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));

const items = ["Buy Food", "Cook Food", 'Eat Food'];
const workItems = [];

app.get("/", (req, res) => {
    res.render("list", { listTitle: date.getDate(), newListItems: items });

});
app.post("/", (req, res) => {
    const item = req.body.inputText;

    if (req.body.list == "WorkList") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item)
        res.redirect("/");
    }

})


app.get("/work", (req, res) => {
    res.render("list", { listTitle: "WorkList", newListItems: workItems })
})

app.post("/work", (req, res) => {
    const item = req.body.newItem;
    workItems.push(newItem);
    res.redirect("/");
})

app.get("/about" , (req,res) =>{
    res.render("about");
})

app.listen(3000, () => {
    console.log("Server started at port 3000");
});
