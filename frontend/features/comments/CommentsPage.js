import React, { useEffect, useState } from "react";
import { AddCommentForm } from "./AddComment";
import { CommentsList } from "./CommentsList";
import { getComments, searchComments } from "./fetchApi";
import { SearchForm } from "./SearchForm";
import { SearchedCommentsList } from "./SearchedCommentsList";

export const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [isStale, setIsStale] = useState(false);
  const [search, setSearch] = useState("");

  const refreshData = () => {
    setIsStale((value) => !value);
  };

  useEffect(() => {
    let active = true;

    async function fetchData() {
      const response = await getComments({ search });
      if (active && response.ok) {
        const newData = await response.json();
        setComments(newData);
      }
    }

    fetchData();
    return () => {
      active = false;
    };
  }, [isStale, search]);

  let content;
  if (!comments.length) {
    content = (
      <div>
        <br />
        No comments yet!
      </div>
    );
  } else if (search) {
    content = (
      <SearchedCommentsList comments={comments} refreshData={refreshData} />
    );
  } else {
    content = (
      <CommentsList
        comments={comments.filter((comment) => comment.parent === null)}
        refreshData={refreshData}
      />
    );
  }

  return (
    <div>
      <h1>Comments</h1>
      <AddCommentForm refreshData={refreshData} />
      <SearchForm setSearch={setSearch} />
      {content}
    </div>
  );
};
