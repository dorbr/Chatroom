import TopNavigation from "./TopNavigation";
import { BsPlusCircleFill } from "react-icons/bs";
import React from "react";

import axios from "axios";

const sendMessage = (username, message) => {
  axios.post("http://localhost:443/sendMsg", {
    body: {
      msg: message,
      username:username
    },
  });
};

const ContentContainer = (props) => {

  return (
    <div className="content-container">
      <TopNavigation />
      <div className="content-list"></div>
      <BottomBar username={props.username}/>
    </div>
  );
};

const BottomBar = (props) => {
  const input = React.useRef(null);

  return (
    <div className="bottom-bar">
      <PlusIcon />
      <input
        ref={input}
        type="text"
        placeholder="Enter message..."
        className="bottom-bar-input"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage(props.username, e.target.value);
          }
        }}
      />
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size="22"
    className="text-green-500 dark:shadow-lg mx-2 dark:text-primary hover:text-red-800 cursor-pointer"
  />
);

export default ContentContainer;
