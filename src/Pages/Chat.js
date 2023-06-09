import React, { useEffect, useState } from "react";
import BubbleChat from "../components/BubbleChat";
import { IoSendSharp } from "react-icons/io5";
import {useNavigate } from "react-router-dom"

const Chat = () => {
  const [inputmessage, setinputmessage] = useState("");
  const loginCheck = localStorage.getItem("loginStatus");
  const navigate = useNavigate()
  const [chatData, setchatData] = useState([
    {
      text: "I'm here to understand your concerns and connect you with the best resources available to support you.",
      type: "USER",
    },
    {
      text: "I'm here to understand your concerns and connect you with the best resources available to support you.",
      type: "SYSTEM",
    },
    {
      text: "I'm here to understand your concerns and connect you with the best resources available to support you.",
      type: "SYSTEM",
    },
    {
      text: "I'm here to understand your concerns and connect you with the best resources available to support you.",
      type: "USER",
    },
  ]);

  useEffect(() => {
    if (!loginCheck) {
      navigate("/")
    }
  }, [loginCheck])
  

  const messageHandle = () => {
    setchatData((preData) => [
      ...preData,
      {
        type: "USER",
        text: inputmessage,
      },
    ]);
    setinputmessage("");
  };

  return (
    <div className="flex justify-center m-5">
      {/* <ThemePicker /> */}
      <div className="sm:w-2/4 w-full flex flex-col justify-center relative">
        {chatData.map((chat) => {
          return <BubbleChat type={chat.type} text={chat.text} />;
        })}
        <div className="flex w-full m-2 rounded-md bg-bgColor text-textColor p-3 sticky bottom-1">
          <input
            name="message"
            value={inputmessage}
            onChange={(e) => {
              setinputmessage(e.target.value);
            }}
            placeholder="Enter Message "
            className="w-full bg-transparent text-lg outline-none"
            type="text"
          />
          <button className="text-2xl" onClick={messageHandle}>
            <IoSendSharp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
