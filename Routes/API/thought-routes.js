const router = require('express').Router();
//express and controllers

const {
    getThoughts,
    getThought,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require("../../Controllers/thoughts");

// /api/thoughts
router
    .route(`/`)
    .get(getThoughts);

// /api/thoughts/:id
router
    .route(`/:id`)
    .get(getThought)
    // .put(updateThought)
    // .delete(deleteThought);

// /api/thoughts/:userId
router
    .route(`/:userId`)
    .post(addThought);

// /api/thoughts/:id/reactions
// router
//     .route(`/:id/reactions`)
//     .post(addReaction);

// /api/thoughts/:id/reactions/:reactionId
// router
//     .route(`/:id/reactions/:reactionId`)
//     .delete(deleteReaction);

module.exports = router