// Create web server using Express.js
const express = require('express');
const bodyParser = require('body-parser');
// Create server
const app = express();
// Create port
const port = 3000;
// Use body-parser
app.use(bodyParser.urlencoded({extended: true}));
// Set view engine
app.set('view engine', 'ejs');
// Create list of comments
const comments = [
    {
        name: 'John',
        comment: 'Hello World!'
    },
    {
        name: 'Mary',
        comment: 'Hello World!'
    },
    {
        name: 'Bob',
        comment: 'Hello World!'
    }
];
// Home page
app.get('/', (req, res) => {
    res.render('home');
});
// Comments page
app.get('/comments', (req, res) => {
    res.render('comments', {comments});
});
// Post comments
app.post('/comments', (req, res) => {
    const {name, comment} = req.body;
    comments.push({name, comment});
    res.redirect('/comments');
});
// Listen on port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


