import React, { useState } from "react";
import { CommentForm } from "./CommentForm";
import { addComment } from "./fetchApi";

export const AddCommentForm = ({ setComments }) => {
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await addComment(text);
    if (response.ok) {
      setText("");
      let newData = await response.json();
      setComments((comments) => [newData, ...comments]);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CommentForm text={text} setText={setText} />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};
