
const userController = require ("../controllers/userController")

const route = require('express').Router()


route.post('/',userController.CreateUser)
route.get('/list',userController.GetALLUser)
route.delete('/delete/:id',userController.DeleteUser)
route.put('/update/:id',userController.UserUpdate)
route.get('/search/:keyWord',userController.SearchUser)
route.get('/getone/:id',userController.GetUserById)




module.exports = route