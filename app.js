const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("client/build"));

const Connections = [];
const MESSAGES = [];

const fetchChat = async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
  });
  Connections.push(res);
  setInterval(async () => {
    const messages = await fetchData();
    console.log(messages);
    let data = JSON.stringify(messages);
    res.write(`data: ${data}\n\n`);
  }, 3000);
};

const fetchData = async () => {
  try {
    return MESSAGES;
  } catch (error) {
    return error;
  }
};

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.get("/chat", fetchChat);

app.post("/sendMsg", (req, res) => {
  MESSAGES.push(req.body);
  res.send(MESSAGES);
})



module.exports = app;
