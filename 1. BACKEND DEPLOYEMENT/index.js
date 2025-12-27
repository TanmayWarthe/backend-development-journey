// console.log("Backend deployment script running...");

const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
  res.send('Hello World! Backend is deployed successfully.');
});

app.get('/:username',(req,res)=>{
  let {username} = req.params;
  res.send(`Heyy this is the post request ${username}`);
});



app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`);
});


