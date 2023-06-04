const express = require('express');
const userController = require('../controllers/userController')
const router = express.Router();

router.get('/getUsers' , userController.getAllUsers);

router.get('/getUser/:id"' , userController.getSingleUser);

router.post('/createUser' , userController.createUser);

router.post('/updateUser' , userController.updateUser);

router.delete('/deleteUser/:id' , userController.deleteUser);

module.exports = router;