import "./App.css";
import React from "react";
import Channelbar from "./core/ChannelBar";
import ContentContainer from "./core/ContentContainer";
import SideBar from "./core/Sidebar";
import { Router, Routes, Route } from "react-router-dom";
import Sidebar from "./core/Sidebar";

function App() {
  let username = "";
  const [myMsg, setMyMsg] = React.useState(null);
  React.useEffect(() => {
    console.log("EFFECTED");
    const source = new EventSource("http://localhost:443/chat");

    source.onopen = function logEvents(event) {
      console.log("CONNECTION OPENED");
      console.log(event);
    };
    source.onmessage = function logEvents(event) {
      console.log(JSON.parse(event.data));
    };
  }, [myMsg]);

  return (
    <Router>
      <Routes>
        <Route
         exect path="/"
          element={
            <div>
              <div
                className="flex"
                onClick={() => {
                  setMyMsg(1);
                }}
              >
                <SideBar />
                <Channelbar />
                <ContentContainer username={username} />
                <div></div>
              </div>
            </div>
          }
        />
      </Routes>
      
    </Router>
  );
}

export default App;
