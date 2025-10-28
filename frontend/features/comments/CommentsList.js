import React from "react";
import { SingleComment } from "./SingleComment.js";

export const CommentsList = ({ comments, refreshData }) => {
  let content;
  if (!comments) {
    return <div></div>;
  }
  content = comments.map((comment) => (
    <div key={comment.id}>
      <br />
      <SingleComment comment={comment} refreshData={refreshData} />
    </div>
  ));

  return <div>{content}</div>;
};
