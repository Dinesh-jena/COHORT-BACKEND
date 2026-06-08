const app = require('./src/app');
const connectToDB = require('./src/db/db');

connectToDB();

app.listen(3000,()=>{
    console.log("your server is running on 3000 port");
})