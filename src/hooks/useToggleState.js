import { useState } from "react";

const useToggleState = () => {
  const [isEditing, setIsEditing] = useState(true);

  function toggleState() {
    setIsEditing((prev) => !prev);
  }

  return { isEditing, toggleState };
};

export default useToggleState;
