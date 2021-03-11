import React from "react";
import "./style.css";

function CommentSection(props) {
  return (
    
      <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2">
          {" "}
          <span className="text2">{props.comment.text}</span>
          <div className="d-flex justify-content-between py-1 pt-2">
            <div>
              <span className="text1">Posted by: {props.comment.owner} </span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CommentSection;
