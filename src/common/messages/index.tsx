import React from "react";
import { MessageProps } from "./Message.types";

const MessageComponent: React.FC<MessageProps> = ({ message }) => {
  if (!message) return null;

  return <p className="text-colorRed text-xs font-normal">{message}</p>;
};

export default MessageComponent;
