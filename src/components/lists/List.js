import React from "react";
import "./List.css";

const List = (props) => {
  const showList = function () {
    props.onShowList(this);
  };

  return (
    <li className={"todo-list-item m-2" + (props.active ? " active" : "")}>
      <button onClick={showList.bind(props.title)} className="list-btn">
        {props.title}
      </button>
    </li>
  );
};

export default List;
