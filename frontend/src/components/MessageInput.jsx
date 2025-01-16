import { useRef, useState } from "react";

const MessageInput = () => {
  const [text, setText] = useState();
  const [imagePreview, setImagePreview] = useState();
  const fileInputRef = useRef(null);

  return(
    <div>MessageInput</div>
  )
};

export default MessageInput;
