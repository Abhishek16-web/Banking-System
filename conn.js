const mongoose = require("mongoose");

const Db = "mongodb+srv://hpskill:@Bhikoshta16@cluster0.pwwrg.mongodb.net/SparkFoundation?retryWrites=true&w=majority"
 
mongoose.connect(Db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log("no connection");
})