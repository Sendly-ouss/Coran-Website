import "./Reciter.css";
import React from "react";
import { Link } from "react-router-dom";

function Reciter(props) {
  return (
    <Link to={`/reciters/${props.identifier}`} className="Reciter-link">
      <div className="Reciter">{props.name}</div>
    </Link>
  );
}

export default Reciter;
