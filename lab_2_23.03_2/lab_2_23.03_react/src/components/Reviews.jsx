import { useEffect, useState } from "react";

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  return (
    <div>
      {comments.map(c => (
        <p key={c.id}>{c.email}: {c.body}</p>
      ))}
    </div>
  );
}

export default Reviews;