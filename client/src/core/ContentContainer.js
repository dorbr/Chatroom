import TopNavigation from "./TopNavigation";
import { BsPlusCircleFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";

import axios from "axios";

const sendMessage = async (username, message) => {
  return await axios.post("http://localhost:443/sendMsg", {
    body: {
      msg: message,
      username: username,
    },
  });
};

const ContentContainer = (props) => {
  return (
    <div className="content-container">
      <TopNavigation />
      <div className="content-list">
        {console.log(props)}
        {props.messages.messages ? props.messages.messages.map((msg) => <li>{msg.msg}</li>) : <></>}
      </div>
      <BottomBar username={props.user} />
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
        onKeyDown={async (e) => {
          if (e.key === "Enter") {
            const msgs = await sendMessage(props.username, e.target.value);
            return msgs;
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
