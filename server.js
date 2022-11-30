const express = require ('express')
const app = express()
const port = 3000









//Greeting
app.get('/greeting', (req, res)=>{
    res.send('Hello Stranger')
})

//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res)=>{
    const tip = req.params.total * req.params.tipPercentage
   const actualTip = tip/100
    
    res.send('Congrats you earned a tip of $'+ actualTip)
})



//Greeting :name
app.get('/greeting/:name', (req, res)=>{
    res.send('Hello ,' +req.params.name )
})
















app.listen(port,() => {
    console.log('listening on port' , port);
})