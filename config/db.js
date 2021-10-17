//connection with mongoo
const mongoose = require('mongoose');

const connectDB = ()=>{
   mongoose.connect('mongodb+srv://rashid:rashiddb@cluster0.2hdaa.mongodb.net/db',{ useNewUrlParser: true ,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connected');
}).catch((err)=>{
    console.log(err)
})

}



module.exports = connectDB;