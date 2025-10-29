import React from "react";
import { SingleComment } from "./SingleComment.js";

export const SearchedCommentsList = ({ comments, refreshData }) => {
  let content;
  if (!comments) {
    return <div></div>;
  }
  content = comments.map((comment) => {
    if (comment.parent) {
      comment.parent.children = [comment];
      return (
        <div key={comment.id}>
          <br />
          <SingleComment comment={comment.parent} refreshData={refreshData} />
        </div>
      );
    } else {
      return (
        <div key={comment.id}>
          <br />
          <SingleComment comment={comment} refreshData={refreshData} />
        </div>
      );
    }
  });

  return <div>{content}</div>;
};
