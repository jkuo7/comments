import React, { useState } from "react";
import { EditCommentForm } from "./EditComment";
import { ViewComment } from "./ViewComment.js";
import { AddReplyForm } from "./AddReply.js";
import { CommentsList } from "./CommentsList.js";

export function SingleComment({ comment, refreshData }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);

  let replyForm;
  if (isReply) {
    replyForm = (
      <AddReplyForm
        refreshData={refreshData}
        parent={comment.id}
        setIsReply={setIsReply}
      />
    );
  } else {
    replyForm = <div></div>;
  }

  let content;
  if (isEdit) {
    content = <EditCommentForm comment={comment} setIsEdit={setIsEdit} />;
  } else {
    content = (
      <ViewComment
        comment={comment}
        setIsEdit={setIsEdit}
        refreshData={refreshData}
        setIsReply={setIsReply}
      />
    );
  }
  return (
    <div>
      {content}
      <div style={{ marginLeft: `20px` }}>
        {replyForm}
        <CommentsList comments={comment.children} refreshData={refreshData} />
      </div>
    </div>
  );
}
