import "./App.css";
import React from "react";
import Channelbar from "./core/ChannelBar";
import ContentContainer from "./core/ContentContainer";
import SideBar from "./core/Sidebar";
import axios from "axios";

function App() {
  let [messages, setMessages] = React.useState([]);
  let [username, setUsername] = React.useState(null);
  
  React.useEffect(() => {
    console.log("EFFECTED");
    if (username === null)
      setUsername(window.prompt("Please Enter Your Name."));
    if (username !== null) {
      const source = new EventSource(`http://localhost:443/chat/${username}`);

      source.onopen = function logEvents(event) {
        console.log("CONNECTION OPENED");
        axios.post("http://localhost:443/addUser", {
          username: username,
        });
      };
      source.onmessage = function logEvents(event) {
        setMessages(JSON.parse(event.data));
      };
    }
  }, [username]);
  
  return (
    
    <div>
      {console.log("RENDERING...")}
      <div className="flex">
        <SideBar />
        <Channelbar messages={messages} />
        {console.log(messages)}

        <ContentContainer messages={messages} user={username}/>
        <div></div>
      </div>
    </div>
  );
}

export default App;
