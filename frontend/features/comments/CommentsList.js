import React from "react";
import { SingleComment } from "./SingleComment.js";

export const CommentsList = ({ comments, setIsStale }) => {
  let content;
  if (!comments) {
    content = <div></div>;
  } else {
    content = comments.map((comment) => (
      <div key={comment.id}>
        <br />
        <SingleComment comment={comment} setIsStale={setIsStale} />
        <div style={{ paddingLeft: `20px` }}>
          <CommentsList comments={comment.children} setIsStale={setIsStale} />
        </div>
      </div>
    ));
  }

  return <div>{content}</div>;
};
