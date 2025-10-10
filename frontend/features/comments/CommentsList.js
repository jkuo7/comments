import React from "react";
import { SingleComment } from "./SingleComment.js";

export const CommentsList = ({ comments, setComments }) => {
  let content;
  if (!comments.length) {
    content = (
      <div>
        <br />
        No comments yet!
      </div>
    );
  } else {
    content = comments.map((comment) => (
      <div key={comment.id}>
        <br />
        <SingleComment comment={comment} setComments={setComments} />
      </div>
    ));
  }

  return <div>{content}</div>;
};
