const router = require('express').Router();

const {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require("../../Controllers/users");

// /api/users
router
    .route(`/`)
    .get(getUsers)
    .post(addUser);

// /api/users/:id
router
    .route(`/:id`)
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId
// router
//     .route(`/:id/friends/:friendId`)
//     .post(addFriend)
//     .delete(removeFriend);

module.exports = router
