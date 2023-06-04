const userService = require('../services/userService')

const getAllUsers  = async (req, res) => {
    try {
      const allUsers = await userService.GetUsers()
      res.send(allUsers);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

const getSingleUser  = async (req, res) => {
    try {
      let id = req.params.id
      const allUsers = await userService.GetSingleUser(id)
      res.send(allUsers);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

const createUser  = async (req,res)=>{
    try{
        let userObject = req.body
        let result = await  userService.CreateUser(userObject)
        res.send("Succesfully Created")
    }catch(err){
        res.status(500).json(err.message);
    }

}

const updateUser  = async (req,res)=>{
    try{
        let userObject = req.body
        let result = await  userService.updateUser(userObject)
        res.send("Succesfully Updated")
    }catch(err){
        res.status(500).json(err.message);
    }
  
  }

const deleteUser  = async (req,res)=>{
    try{
        let id = req.params.id
        let result = await  userService.deleteUser(id)
        res.send("Succesfully Deleted")
    }catch(err){
        res.status(500).json(err.message);
    }
  
  }

  module.exports = {getAllUsers,getSingleUser,createUser,updateUser,deleteUser}