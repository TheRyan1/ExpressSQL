const userRepository  = require('../repository/usersRepository') 

// Services is where your business logic goes. 
// Example : This is where data is processed before it gets put into the db or after it's fetched from the db


const GetUsers =  async()=>{ 
    return await userRepository.GetAllUsers()
}
const GetSingleUser =  async(id)=> {
    return await userRepository.GetSingleUser(id)
}
const CreateUser = async (userObject)=>{
    return await userRepository.CreateUser(userObject)
}
const updateUser = async (userObject)=>{
    return await userRepository.updateUser(userObject)
}
const deleteUser = async (id)=>{
    return await userRepository.deleteUser(id)
}

// Export all these functions 
module.exports = {GetUsers,CreateUser,updateUser,GetSingleUser,deleteUser}