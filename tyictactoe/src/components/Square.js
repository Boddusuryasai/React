import React from "react";

export default function Square(props) {
   return (
      <button className="w-16 h-16 border bg-cyan-600" onClick={props.onClick}>
         {props.value}
      </button>
   );
}
