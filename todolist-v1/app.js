const express = require("express");
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

let currentDay = date.getDate();

const app = express();

let items = ["Buy food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {


    res.render('list', {
        ListTitle: currentDay,
        newListItems: items
    });

});

app.post('/', function (req, res) {
    let item = req.body.newItem;

    items.push(item);

    res.redirect('/');

})
app.listen(3000, function () {
    console.log("app started on port 3000");
});