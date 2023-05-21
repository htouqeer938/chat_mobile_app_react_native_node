const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = 5000;

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
    console.log("a user connected");
    socket.on("chat message", function (msg) {
        console.log("message: " + msg);
        io.emit("chat message", msg);
    });
});

server.listen(PORT, function () {
    console.log(`Server listening on *:${PORT}`);
});
