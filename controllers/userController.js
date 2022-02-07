const User = require("../model/userModel");



module.exports={

    CreateUser: function (req, res) {

        const newuser = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            city: req.body.city,
            street: req.body.street
})
        //save user fi database
        
        newuser.save((err, user) => {
            if (err)
                res.status(500).json({
                    message: err,
                    status: 500
                })
            else
                res.status(201).json({
                    message: 'user added',
                    status: 201,
                    data: user
                })
        })
    },

//get all users
GetALLUser: function (req, res) {

    User.find({}).exec((err, listusers) => {
        if (err)
            res.status(500).json({
                message: err,
                status: 500
            })
        else
            res.status(200).json({
                message: 'user find',
                status: 200,
                data: listusers
            })
    })
},
 //Delete user
 DeleteUser: function (req, res) {


    User.deleteOne({ _id: req.params.id }).exec((err, user) => {

        if (err)
            res.status(500).json({
                message: err,
                status: 500
            })
        else
            res.status(200).json({
                message: 'user deleted',
                status: 200,
                data: user
            })
    })

},
//Update user
UserUpdate: function (req, res) {


    User.updateOne({ _id: req.params.id }, req.body).exec((err, userupdated) => {

        if (err)
            res.status(500).json({
                message: err,
                status: 500
            })
        else
            res.status(200).json({
                message: 'user update',
                status: 200,
                data: userupdated
            })

    })
},


//get user by id for 

GetUserById: function (req, res) {
    User.findById({ _id: req.params.id }).exec((err, user) => {

        if (err)
            res.status(500).json({
                message: err,
                status: 500
            })
        else
            res.status(200).json({
                message: 'user find By Id',
                status: 200,
                data: user
            })
    })
},



//search

SearchUser: function(req,res){
    User.find({
        $or: [ {name: { $regex: req.params.keyWord, $options: 'i' }}, 
        { username: { $regex: req.params.keyWord, $options: 'i' } } ,
        { email: { $regex: req.params.keyWord, $options: 'i' } } ,
        { city: { $regex: req.params.keyWord, $options: 'i' } } ,
        { street: { $regex: req.params.keyWord, $options: 'i' } } ,
    ]
    } , (err , users )=> {
        if (err)
        res.status(500).json({
            message: err,
            status: 500
        })
    else
        res.status(200).json({
            message: 'all users found',
            status: 200,
            data: users
        })
    });

}

}





