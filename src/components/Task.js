import React, {useState} from "react";

function Task({text,category}) {
  const [deleteText,setDeleteText] = useState(false)

  function handleDelete() {
   setDeleteText(true);
  }
  if(deleteText) {
    return null;
  }
   
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
