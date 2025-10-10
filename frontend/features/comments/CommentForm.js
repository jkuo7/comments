import React from "react";

export const CommentForm = ({ text, setText }) => {
  return (
    <div>
      <textarea
        id="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        required
      />
    </div>
  );
};
