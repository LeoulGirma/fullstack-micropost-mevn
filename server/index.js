const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express()

//Middle ware

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/post')

app.use('/api/posts', posts)

// Handel Production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'))
    
    // Handel SPA
    app.get(/.*/,(req,res)=> res.sendFile(__dirname + '/public/index.html'))
} else {
    
}


const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));