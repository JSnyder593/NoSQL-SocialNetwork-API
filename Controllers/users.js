const { User, Thought } = require("../Models");

// //user functions (get all), (get one), (create user), (update user), (delete user), (add friend), (delete friend)
const userController = {

    getUsers(req, res) {
        User.find({})
            .select('-__v')
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    getUser(req, res) {
        User.findById(req.params.id)
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    addUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(400).json(err));
    },
                
    updateUser(req, res) {
        User.findOne(req.body)
            .then(() => {
                return User.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    { new: true }
                )
            })
            .then((user) =>
                user
                    ? res.status(201).json({ message: "Updated user!" })
                    : res.json("Updated user")
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            })
    },

    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: `No user with that ID!` });
                    return;
                }
                Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
};


module.exports = userController;