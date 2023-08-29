import { useAddPostMutation, useGetPostsQuery } from "./Redux/Slices/PostApi";
import React from "react";

function App() {
  const [newPost, setNewPost] = React.useState("");
  const { data } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();

  const handleAddPost = async () => {
    if (newPost) {
      await addPost({
        title: newPost,
        body: "lorem ipsum dolor sit amet",
        id: Date.now(),
      });
      setNewPost("");
    }
  };

  return (
    <div className="App">
      <div className="form">
        <input type="text" placeholder="Введите название поста" value={newPost} onChange={(e) => setNewPost(e.target.value)} />
        <button onClick={handleAddPost}>Доабвить</button>
      </div>
      <ul>
        {data &&
          data.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
