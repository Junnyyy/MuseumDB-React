import { useState } from "react";

export default function useMessage() {
  const [message, setMessage] = useState("Error message not found");
  return {
    setMessage,
    message,
  };
}
