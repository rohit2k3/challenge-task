import React from "react";

const BubbleChat = ({ type, text }) => {
  return (
    <div>
      {type === "SYSTEM" ? (
        <div className="m-1 flex justify-start w-full">
          <div className="sm:w-2/4 ml-2 w-2/4  py-3 px-4 bg-bgColor text-textColor rounded-br-3xl rounded-tr-3xl rounded-tl-xl ">
            {text}
          </div>
        </div>
      ) : (
        <div className="flex justify-end">
          <div className="sm:w-2/4 mt-2 w-2/4 mr-2 py-3 px-4 bg-textColor text-bgColor rounded-bl-3xl rounded-tl-3xl rounded-tr-xl ">
          {text}</div>
        </div>
      )}
    </div>
  );
};

export default BubbleChat;
