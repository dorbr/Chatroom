const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("client/build"));

let chatData = {
  connections: [],
  messages: [],
};

const fetchChat = async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
  });
  setInterval(async () => {
    chatData.messages = await fetchData();
    console.log(chatData);
    let data = JSON.stringify(chatData);
    
    res.write(`data: ${data}\n\n`);
    
    req.on('close', () => {
      const { user } = req.params;
      chatData.connections = chatData.connections.filter(connection => connection === user);
    });
  }, 3000);
};

const fetchData = async () => {
  try {
    return chatData.messages;
  } catch (error) {
    return error;
  }
};

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.get("/chat/:user", fetchChat);

app.post("/sendMsg", (req, res) => {
  const { body } = req.body;
  chatData.messages.push(body);
  res.send(chatData.messages);
});
app.post("/addUser", (req, res) => {
  chatData.connections.push(req.body.username);
  console.log(chatData.connections);
  res.send(chatData.connections);
});



module.exports = app;
