const router = require('express').Router();

const {
    getUsers
} = require("../../Controllers/users");

// // routes (api/users), (api/users/:id), (api/users/friends/:friendID) 
router.get('/', getUsers);

module.exports = router
