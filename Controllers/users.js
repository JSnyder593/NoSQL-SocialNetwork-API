const { User } = require("../Models")

// //user functions (get all), (get one), (create user), (update user), (delete user), (add friend), (delete friend)
const userController = {

    getUsers(req, res) {
        User.find({})
        .select('-__v')
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
};
//     getUser(req, res) {

//     },

//     addUser(req, res) {

//     },

//     updateUser(req, res) {

//     },

//     deleteUser(req, res) {

//     },

//     addFriend(req, res) {

//     },

//     removeFriend(req, res) {

//     }
// };

module.exports = userController;