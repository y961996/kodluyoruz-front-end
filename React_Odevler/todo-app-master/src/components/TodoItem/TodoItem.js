import React, {useState} from "react";
import "./TodoItem.css";

function Todo(props) {
  const [done, setDone] = useState(false);

  const onClickItem = () => {
    setDone(!done);
  };

  const { content, id } = props;
  return (
  <div className={`todo-item ${done ? 'done': ''}`} onClick={onClickItem}>
    {content}
    <button style={{cursor:"pointer"}} onClick={() => props.removeItem(id)} className="btn btn-danger float-right my-auto">Sil</button>
  </div>
  );
}

export default Todo;
