const User = require("../models/users");

// Repository is where you only making database calls 

const GetAllUsers = async()=>{
    let allUsers = await User.findAll()
    return allUsers
}

const GetSingleUser = async(id)=>{

    let user = await User.findByPk(id)
    return user
    
}

const CreateUser = async({name,surname})=>{
    let res = await User.create({name:name,surname:surname})
    return res
}

const updateUser = async({id,name,surname})=>{
    let res = await User.update(
        { name: name, surname:surname },
        { where: { id: id } })
    return res
}

const deleteUser = async(id)=>{
    let res = await User.destroy(
        { where: { id: id } })
    return res
}

// Export all these methods
module.exports = {GetAllUsers,CreateUser,updateUser,GetSingleUser,deleteUser}