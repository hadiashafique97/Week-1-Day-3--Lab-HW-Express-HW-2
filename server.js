const express = require ('express')
const app = express()
const port = 3000









//Greeting
app.get('/greeting', (req, res)=>{
    res.send('Hello Stranger')
})




//Take one down and pass it around 


//MAGIC 8 BALL 
const eightBall= ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:WillIbeaMillionaire', (req, res)=>{
    var randomItem = eightBall[Math.floor(Math.random()*eightBall.length)]
    res.send(req.params.WillIbeaMillionaire +'?' + ' '+`<h1>${randomItem}</h1>`)
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