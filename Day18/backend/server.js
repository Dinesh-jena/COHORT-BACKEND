require('dotenv').config();
const app = require('./src/app');
const connectToDB = require('./src/db/db');

connectToDB();

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log (`Port is running at ${PORT}`)
})