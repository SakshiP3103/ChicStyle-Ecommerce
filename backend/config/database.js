const mongoose=require("mongoose");

//
const connectDatabase=()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true}).then((data)=>{
        console.log(`mongodb connected with server : ${data.connection.host}`)
    })
}

module.exports=connectDatabase

// .catch((err)=>{
//     console.log(err)
// })