import React, { useState } from "react";
import { CommentForm } from "./CommentForm";
import { addComment } from "./fetchApi";

export const AddCommentForm = ({ setIsStale }) => {
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await addComment(text);
    if (response.ok) {
      setText("");
      setIsStale((value) => !value);
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
