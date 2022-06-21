//Now we have to connect our express with our database file//
const mongoose = require("mongoose");
//We can easily connect using function connect//
mongoose.connect("mongodb://localhost:27017/discussion_forum",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true //writing to avoid depricating warnings//
}).then(() => {
    console.log('connection successful');
}).catch((e) => {
    console.log('no connection');
})
//Express connected to mongoDB//