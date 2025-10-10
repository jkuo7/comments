import React, { useState } from "react";
import { CommentForm } from "./CommentForm";
import { editComment } from "./fetchApi";

export const EditCommentForm = ({ comment, setIsEdit }) => {
  const [text, setText] = useState(comment.text);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await editComment(comment.id, text);
    if (response.ok) {
      let newData = await response.json();
      comment.text = newData.text;
      setIsEdit(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CommentForm text={text} setText={setText} />
        <button type="submit">Edit</button>{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsEdit(false);
          }}
        >
          Cancel
        </a>
      </form>
    </div>
  );
};
