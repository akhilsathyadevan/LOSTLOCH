const express=require('express');
const app= new express();
const cors= require('cors');
const bodyparser=require('body-parser');
const ProductData=require('./src/models/productdata');
const port=process.env.PORT || 3000;
app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();
});
app.get('/products',function(req,res){
    console.log("entered");
    ProductData.find()
    .then(function(product){
    console.log(product);
    res.send(product);
   
    })
    .catch((err)=>{
        console.log(err);
        res.send(false);
    })

});

app.listen(port,()=>{console.log('server at '+port)});
