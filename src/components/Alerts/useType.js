import { useState } from "react";

export default function useType() {
  const [type, setType] = useState("");
  return {
    setType,
    type,
  };
}
