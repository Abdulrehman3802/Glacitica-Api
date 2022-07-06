// const imagem = require('./models/imagemodel')
const create = require ('./models/createproject')
const app = require ('./app')
const multer = require ('multer')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)
mongoose.connect(DB,{
    useNewUrlParser : true
}).then(()=>{
    console.log("DB started")
})
const port = process.env.PORT || 8000

//engine for storing files and image


 //telling multer where to store image


app.listen(port,()=>{
    console.log("listening at port 8000")
})