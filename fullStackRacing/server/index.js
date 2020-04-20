const express = require('express');
const path = require('path');

const distPath = path.join(__dirname, '..', 'client/dist')

const PORT = "4321"
const app = express();

app.use(express.static(distPath));
console.log(distPath);
app.listen(PORT, ()=> {
  console.log(`App is listening on port ${PORT}`)
})