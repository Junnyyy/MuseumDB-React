import { useState } from "react";

export default function useValid() {
  const [valid, setValid] = useState(true);
  return {
    setValid,
    valid,
  };
}
