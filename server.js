const express = require('express')
const app = express() //app midellware contient toutes les fonctionalité  et les méthodes qui offre express
//appel votre base de donée
const cors = require('cors') //pour lire les api front-end

//appel votre base de donée
const db = require('./config/database')



 //définir les routes

 const userRouter = require("./routes/userRouter")
 app.use(function(err, req, res, next) {
    console.log(err);
    if (err.status === 404)
        res.status(404).json({ message: "Path Not found " });
    else
        res.status(500).json({ message: "Something looks wrong !!" + err })
});


app.use(cors({
    origin: "http://localhost:3000",
  
}))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())




//routes

app.use('/api/user',userRouter)


app.listen(5000, () => {
    console.log('server is runing on port 5000');
})