const { Thought, User } = require("../Models")

// //thought functions (all thoughts), (one thought), (create thought), (update thought), (delete thought), (add a reaction), (remove a reaction)
const thoughtController = {

    getThoughts(req, res) {
        Thought.find({})
        .select('-__v')
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
};

//     getThought(req, res) {

//     },

//     addThought(req, res) {

//     },

//     updateThought(req, res) {

//     },

//     deleteThought(req, res) {

//     },

//     addReaction(req, res) {

//     },

//     removeReaction(req, res) {

//     }
// };

module.exports = thoughtController;
