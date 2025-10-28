import React, { useState } from "react";
import { CommentForm } from "./CommentForm";
import { addComment } from "./fetchApi";

export const AddReplyForm = ({ refreshData, parent, setIsReply }) => {
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await addComment({ text, parent });
    if (response.ok) {
      setText("");
      refreshData();
      setIsReply(false);
    }
  }

  function handleCancel(e) {
    e.preventDefault();
    setIsReply(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CommentForm text={text} setText={setText} />
        <button type="submit">Add Reply</button>{" "}
        <a href="#" onClick={handleCancel}>
          Cancel
        </a>
      </form>
    </div>
  );
};
