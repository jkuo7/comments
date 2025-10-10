import React, { useState } from "react";
import { EditCommentForm } from "./EditComment";
import { ViewComment } from "./ViewComment.js";

export function SingleComment({ comment, setComments }) {
  const [isEdit, setIsEdit] = useState(false);

  if (isEdit) {
    return <EditCommentForm comment={comment} setIsEdit={setIsEdit} />;
  } else {
    return (
      <ViewComment
        comment={comment}
        setIsEdit={setIsEdit}
        setComments={setComments}
      />
    );
  }
}
