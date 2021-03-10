import React from "react";
import "./style.css";

function CommentSection() {
  return (
    <div class="container justify-content-center mt-5 border-left border-right comments">
      <div class="d-flex justify-content-center pt-3 pb-2">
        {" "}
        <input
          type="text"
          name="text"
          placeholder="+ Add a Comment"
          className="form-control addtxt"
        />
      </div>
      <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2">
          {" "}
          <span className="text1">UserComment</span>
          <div className="d-flex justify-content-between py-1 pt-2">
            <div>
              <img src="https://i.imgur.com/AgAC1Is.jpg" width="18" />
              <span className="text2">UserName</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
