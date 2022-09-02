const express = require('express')
const app = express()
app.use(express.json());
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({ extended: true }));

const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
dotenv.config({path:".env"})

const cors=require('cors');
app.use(cors());

const {connectdb} = require('./Db/connect_db.js')
const web = require('./routes/web.js');

app.use(bodyParser.json())

app.use(express.static('public'))

connectdb();

app.use("/api/digital",web)



  
app.get("/",(req,res)=>{
    res.send('hello i am api')

})

app.listen(process.env.PORT,()=>{
    console.log(`server is running : ${process.env.PORT}`)
})