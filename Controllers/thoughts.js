const { Thought, User } = require("../Models")

// //thought functions (all thoughts), (one thought), (create thought), (update thought), (delete thought), (add a reaction), (remove a reaction)
const thoughtController = {

    getThoughts(req, res) {
        Thought.find({})
        .select('-__v')
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    getThought(req, res) {
        Thought.findById(req.params.id)
            .select('__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID!'})
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    addThought(req, res) {
        Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thought } },
                { new: true }
            );
        })
        .catch((err) => res.status(400).json(err));
    },

    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought with that ID!' })
                }
                Thought.deleteMany({ _id: { $in: dbThoughtData.thoughts } });
                res.json(dbThoughtData)
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = thoughtController;
