const { query } = require('express');
const express = require('express');
const app = express();

// app.use((request, response) => {
//     console.log("new request")
//     response.send("Woah wht up hey wht up its me got you on my server")
// })

app.get('/', (req, res) => {
    res.send('home page');
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.send(`this is the ${subreddit} subreddit`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params;
    res.send(`viewing post ID: ${postId} on the ${subreddit} subreddit`)
})

app.post('/cats', (req, res) => {
    res.send('made a post request')
})

app.get('/cats', (req, res) => {
    res.send('cats');
})

app.get('/dogs', (req, res) => {
    res.send('woof');
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q){
        res.send('nothing was found when y ou tried to search SENPAI!!!!!')
    }
    res.send(`hello senpai you have just searched for ${q}`)
})

app.get('*', (req, res) => {
    res.send(`I dont know that path!~!!!!!`)
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})

