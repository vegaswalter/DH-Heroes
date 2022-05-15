//Requerimientos de Servidor

const express = require("express");
const path = require("path")
const app = express();

// Servidor
app.listen(3000, () => {
    console.log("El servidor esta funcionando")
});

// Rutas

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/view/home.html"))
});

app.get("/lovelace", (req, res) => {
    res.sendFile(path.join(__dirname, "/view/lovelace.html"))
});

app.get("/turing", (req, res) => {
    res.sendFile(path.join(__dirname, "/view/turing.html"))
});

app.get("/hopper", (req, res) => {
    res.sendFile(path.join(__dirname, "/view/hopper.html"))
});

app.get("/hamilton", (req, res) => {
    res.sendFile(path.join(__dirname, "/view/hamilton.html"))
});

app.get("/clarke", (req, res) => {
    res.sendFile(path.join(__dirname, "/view/clarke.html"))
});

app.get("/berners-lee", (req, res) => {
    res.sendFile(path.join(__dirname, "/view/berners-lee.html"))
});

app.get("/babbage", (req, res) => {
    res.sendFile(path.join(__dirname, "/view/babbage.html"))
});

// Archivos static
app.use(express.static(path.join(__dirname, '/public')));
