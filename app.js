const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');

const app = express();
app.use(express.json());
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use(cors());
const router = express.Router();
router.get('/data', (req, resp, next) => {
    
    resp.status(200).json([
        {
            "id": 1,
            "name": "User1",
            "src": "/public/images/avatars/1.jpg"
        },
        {
            "id": 2,
            "name": "User2",
            "src": "/public/images/avatars/2.jpg"
        },
        {
            "id": 3,
            "name": "User3",
            "src": "/public/images/avatars/3.jpg"
        },
        {
            "id": 4,
            "name": "User4",
            "src": "/public/images/avatars/4.jpg"
        }]
    );
});

app.use(router);
app.use(function(err, req, res, next) {
    console.log(err);
    // render the error page
    res.status(err.status || 500).json({
        message: err.message
    });
});
const normalizePort = val => {
    const port = parseInt(val, 10);
    if (isNaN(port)) return val;
    if (port >= 0) return port;
    return false;
  }
var port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

const server = http.createServer(app);
server.listen(port);