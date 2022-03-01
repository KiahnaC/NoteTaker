const fs = require('fs');
const path = require('path');
const express = require("express");
const app = express();

module.exports = app => {


    fs.readFile("db/db.json", "utf8", (err, data) => {

        if (err) throw err;

        var userNotes = JSON.parse(data);

    app.get("/api/notes", function (req, res) {

            res.json(notes);
        })
    })
};

app.post("/api/userNotes", function (req, res) {

    let addedNote = req.body;
    userNotes.push(addedNote);
    updateDb();
    return console.log("Added new note: " + addedNote.title);
});

app.get("/api/userNotes/:id", function (req, res) {

    res.json(userNotes[req.params.id]);
});

app.delete("/api/userNotes/:id", function (req, res) {
    userNotes.splice(req.params.id, 1);
    updateDb();
    console.log("Deleted note with id " + req.params.id);
});
        app.get('/userNotes', function(req,res) {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });
        
        app.get('*', function(req,res) {
            res.sendFile(path.join(__dirname, "../Develop/index.html"));
        });

        function updateDb() {
            fs.writeFile("db/db.json",JSON.stringify(userNotes,'\t'),err => {
                if (err) throw err;
                return true;
            });
        };