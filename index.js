const express = require('express')
const server = require('serve-index')
const multer  = require('multer')
const path = require('path')
const fs= require('fs')

const port  = process.env.PORT || 80


var ip = require("ip");

const host = ip;
const app = express()

app.use(express.urlencoded())
app.use(express.static(path.join(__dirname,"/public")))
app.use('/abhi', express.static('public/abhi') , server('public/abhi' ,{icons: true}))



app.set('view-engine',"ejs")


email = fs.readFileSync('id.txt', {encoding: 'utf8'})
pass = fs.readFileSync('pass.txt', {encoding: 'utf8'})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/abhi')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname +  new Date().getTime() + path.extname(file.originalname))
    }
  })
   
    var upload = multer({ storage: storage })

app.post('/upload', upload.single('zrffile'), function (req, res, next) {

    res.render('uploaded.ejs')
})



app.get('/', (req, res) =>{





  res.render('login.ejs')





})



app.get("/ihyibobwvojbwobvo" , (req, res) =>{
  res.render('index.ejs')
})

app.post('/login', (req, res) =>{

  var new_email = req.body.loginid;
  var password = req.body.password;


  if(email == new_email && pass==password){
    
    console.log(email, password);
    res.render("index.ejs")
  
  

  }

  else{
    console.log("error login and pasword")
    res.render("login.ejs")
  }

  

  

})


app.listen(port  =>{
    console.log("started")
})