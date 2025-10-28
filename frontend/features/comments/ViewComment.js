import React from "react";
import { deleteComment } from "./fetchApi";

export const ViewComment = ({
  comment,
  setIsEdit,
  refreshData,
  setIsReply,
}) => {
  const date = new Date(comment.date);

  async function handleDelete(e) {
    e.preventDefault();
    const response = await deleteComment(comment.id);
    if (response.ok) {
      refreshData();
    }
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsEdit(true);
  }

  function handleReply(e) {
    e.preventDefault();
    setIsReply(true);
  }

  let image;
  if (comment.image) {
    image = <img src={comment.image} style={{ maxHeight: 150 }} />;
  } else {
    image = <span></span>;
  }

  return (
    <div>
      <div>
        {comment.author} on {date.toLocaleDateString()} at{" "}
        {date.toLocaleTimeString()}:
      </div>
      <div>{image}</div>
      <div style={{ whiteSpace: "pre-line" }}>{comment.text}</div>
      <div>
        &#x2665;{comment.likes}{" "}
        <a href="#" onClick={handleEdit}>
          Edit
        </a>{" "}
        <a href="#" onClick={handleReply}>
          Reply
        </a>{" "}
        <a href="#" onClick={handleDelete}>
          Delete
        </a>
      </div>
    </div>
  );
};
