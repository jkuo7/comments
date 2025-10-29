const COMMENTS_URL = "comments/";

export async function getComments(searchParams) {
  const response = await fetch(
    `${COMMENTS_URL}?${new URLSearchParams(searchParams)}`
  );
  return response;
}

export async function addComment(data) {
  const response = await fetch(COMMENTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

export async function editComment(id, text) {
  const response = await fetch(`${COMMENTS_URL}${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: text }),
  });
  return response;
}

export async function deleteComment(id) {
  const response = await fetch(`${COMMENTS_URL}${id}/`, {
    method: "DELETE",
  });
  return response;
}
