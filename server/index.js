//////////////////////////
// Imports
//////////////////////////
const fetch = require("node-fetch").default;
const path = require('path');
const express = require('express');
require('dotenv').config();

const apiKey = process.env.GIPHY_API_KEY;
console.log(apiKey);
//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToFrontend = path.join(__dirname, '../frontend');
const app = express();

function getGifs(req, res, next) {
    fetch("https://api.giphy.com/v1/gifs/trending?limit=3&rating=g&api_key=9q65JJFPUpJYhCd3WSSzeju5aDxacYol")
        .then((response) => response.json())
        .then(data => res.json(data))
        .catch((error) => {
            console.log("FETCH ERROR:", error);
            res.status(503).json({ error: "Error fetching gifs" });
        });
}
// Function gets list of GIFS
app.get('/api/gifs', getGifs); // This registers the API endpoint
//////////////////////////
// Middleware/Controllers
//////////////////////////

const serveStatic = express.static(pathToFrontend);

app.use(serveStatic);

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 