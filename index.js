const express = require('express');
const { resolve } = require('path');
const {connection} =require("./connection")
const {Model} =require('./Model')
const bcrypt=require('bcrypt');
const { error } = require('console');

const app = express();
const port = 3010;
app.use(express.json())

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});


app.post('/signup',async(req,res)=>{

  const {username,mail,password}=req.body;
  
  bcrypt.hash(password,6,async(error,hash)=>{

    if (error){
      res.status(500).json({message:"Server Error"})
    }

    let newuser=new Model({username,mail,password:hash})

    await newuser.save()
    res.status(200).json({ status: true, message: "registration sucessfull" })
    
  })

})



app.listen(port, () => {

  try {


    console.log(`Example app listening at http://localhost:${port}`);

    connection
    
  } catch (error) {
    console.log(error)
  }
  
});
