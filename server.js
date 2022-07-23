const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended : true }))

app.get("/" , (req,res) => {
    res.sendFile(__dirname + "/index.html")
})
app.post("/", (req,res)=>{
    var num1  = Number(req.body.num1);
    var num2  = Number(req.body.num2);

    res.send("The result of the calculation is :" + (num1 + num2) );
})

app.get("/bmiCal" ,(req,res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCal", (req,res)=>{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / ( height * height);

    res.send("Yout BMI is :" + bmi)


})

// app.get("/contact", (req,res)=>{
//     res.send("Contact me at arun36824@gmail.com")
// })

// app.get("/about", (req,res)=>{
//     res.send("Contact me at arun36824@gmail.com")
// })
app.listen(3000, function(){
    console.log("server started at 3000");
});


