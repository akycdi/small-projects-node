const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine' , 'ejs');

app.get("/" , (req,res)=>{
    
    var today  = new Date();
    var currentDay = today.getDay();
    var day ="";
        if(currentDay ==1 ){
            day = "Monday";
        }
        if(currentDay ==2 ){
            day = "tuesday";
        }if(currentDay ==3 ){
            day = "Wedneday";
        }if(currentDay ==4 ){
            day = "Thursday";
        }if(currentDay ==5 ){
            day = "Friday";
        }
        if(currentDay ==6 ){
            day = "Saturday";
        }if(currentDay ==0){
            day = "Sunday";
        }
        res.render('list' , {
            kindOfDay : day
        });

})

app.listen(3000 , ()=>{
    console.log("Server started at port 3000");
})