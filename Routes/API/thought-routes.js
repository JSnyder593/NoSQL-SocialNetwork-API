const router = require('express').Router();
//express and controllers

const {
    getThoughts
} = require("../../Controllers/thoughts");
//routes (api/thoughts), (api/thoughts/:id), (api/thoughts/:thoughtid/reactions), (api/thoughts/:thoughtid/reactions/:reactionid) 
router.get('/', getThoughts)

module.exports = router