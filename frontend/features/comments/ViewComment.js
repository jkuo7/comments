import React from "react";
import { deleteComment } from "./fetchApi";

export const ViewComment = ({ comment, setIsEdit, setComments }) => {
  const date = new Date(comment.date);

  async function handleDelete(e) {
    e.preventDefault();
    const response = await deleteComment(comment.id);
    if (response.ok) {
      setComments((comments) => comments.filter((c) => c.id !== comment.id));
    }
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsEdit(true);
  }

  return (
    <div>
      <div>
        {comment.author} on {date.toLocaleDateString()} at{" "}
        {date.toLocaleTimeString()}:
      </div>

      <div style={{ whiteSpace: "pre-line" }}>{comment.text}</div>

      <div>
        &#x2665;{comment.likes}{" "}
        <a href="#" onClick={handleEdit}>
          Edit
        </a>{" "}
        <a href="#" onClick={handleDelete}>
          Delete
        </a>
      </div>
    </div>
  );
};
