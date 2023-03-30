const fs=require ('fs');
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html',)
})
app.get('/server', (req, res) => {
    res.sendFile((__dirname+'/server.html'))
  })


// Route for contact us page
app.get('/contact', (req, res) => {
  res.sendFile((__dirname+'/contact.html'))})

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
