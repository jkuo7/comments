const COMMENTS_URL = "comments/";

export async function getComments() {
  const response = await fetch(COMMENTS_URL);
  return response;
}

export async function addComment(text) {
  const response = await fetch(COMMENTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: text }),
  });
  return response;
}

export async function editComment(id, text) {
  const response = await fetch(`${COMMENTS_URL}${id}/`, {
    method: "PUT",
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
