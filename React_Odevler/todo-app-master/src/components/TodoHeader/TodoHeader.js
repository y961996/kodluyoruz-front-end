import React from 'react';

function TodoHeader(props){
  return (
    <h1 className="text-center">{props.baslik}</h1>
  );
}

export default TodoHeader;