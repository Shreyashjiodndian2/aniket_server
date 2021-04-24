var express = require("express");
var path = require("path");
var app = express();
// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';


const port = process.env.PORT || 3000;

// admin.initializeApp(functions.config().firebase);



app.get("/", (req, res) => {
    res.sendFile("/assets/" + req.query["filename"], {
        root: __dirname
    })
});
// export const webApi = functions.https.onRequest(app);
app.listen(port, () => console.log(`Aniket your server is running on ${port}`));