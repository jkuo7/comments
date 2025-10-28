import React, { useEffect, useState } from "react";
import { AddCommentForm } from "./AddComment";
import { CommentsList } from "./CommentsList";
import { getComments } from "./fetchApi";

export const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [isStale, setIsStale] = useState(false);
  const refreshData = () => {
    setIsStale((value) => !value);
  };

  useEffect(() => {
    let active = true;

    async function fetchData() {
      const response = await getComments();
      if (active && response.ok) {
        const newData = await response.json();
        setComments(newData);
      }
    }

    fetchData();
    return () => {
      active = false;
    };
  }, [isStale]);

  let content;
  if (!comments.length) {
    content = (
      <div>
        <br />
        No comments yet!
      </div>
    );
  } else {
    content = <CommentsList comments={comments} refreshData={refreshData} />;
  }

  return (
    <div>
      <h1>Comments</h1>
      <AddCommentForm refreshData={refreshData} />
      {content}
    </div>
  );
};
