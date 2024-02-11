const express=require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const spawner = require('child_process').spawn


const app=express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.post('/',async (req,res) => {
    console.log(req.body.query);
    let result = await calculateSaftey(req.body.query)
    console.log('rs',result);
    res.json({result})
})

async function calculateSaftey (query) {
  try {
    console.log(query)
      const result = await new Promise((res,rej) => {
          const process = spawner('python',['./suggestions.py',query])
          let temp = null

          process.stdout.on('data',(data) => {
              temp = data.toString()
              res(temp)
          })  
      })
      return result        
  } catch (err) {
      console.log(new Error(err).message)
  }    
}

app.listen('3010',(req,res)=>{
  console.log("Im running on port 3010");
})