const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
})
var url = "mongodb://localhost:27017/vue_express"


//add posts
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
})

//delete post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    //mogodb id is obj type so we need to specify as it is an object id
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) })

    res.status(200).send();
});

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(
        url, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    return client.db('vue_express').collection('posts');
}

module.exports = router;

