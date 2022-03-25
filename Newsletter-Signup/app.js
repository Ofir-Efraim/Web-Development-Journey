const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded( { extended: true } ));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html");
})

app.post('/', (req,res) => {
    let firstName = req.body.First;
    let LastName = req.body.Last;
    let Email = req.body.Email;
    console.log(firstName + LastName + Email);
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})

// bca631546521e036a0b3248d65e9431f-us20