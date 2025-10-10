import React, { useEffect, useState } from "react";
import { AddCommentForm } from "./AddComment";
import { CommentsList } from "./CommentsList";
import { getComments } from "./fetchApi";

export const CommentsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getComments();
      if (!ignore && response.ok) {
        const newData = await response.json();
        setComments(newData);
        setIsLoading(false);
      }
    }

    let ignore = false;
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else {
    content = <CommentsList comments={comments} setComments={setComments} />;
  }

  return (
    <div>
      <h1>Comments</h1>
      <AddCommentForm setComments={setComments} />
      {content}
    </div>
  );
};
