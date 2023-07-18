const express = require('express');
const app =express();
const path = require('path');

app.use(express.static('public'))

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'view','index.html'))
})
app.use((req,res)=>{
  res.status(404).sendFile(path.join(__dirname,'view','error.html'))
})

app.listen(4000);

