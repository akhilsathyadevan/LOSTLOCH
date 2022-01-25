const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@akhilprojectfiles.wnbnw.mongodb.net/LOSTLOCH?retryWrites=true&w=majority');
const schema=mongoose.Schema;
const productSchema=new schema({
    productId: String,
    batchId: String,
    distillerName:String,
    bottlingTime:String
})
var productData=mongoose.model('productdatas',productSchema);
module.exports=productData;