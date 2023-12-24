import { useState } from "react";
import userpost from "./Userpost";

function Posts() {
  const [like, setLike] = useState(userpost);

  const likePost = (postIndex) => {
    const newLike = [...like];
    newLike[postIndex].likes = newLike[postIndex].likes + 1;
    setLike(newLike);
  }

  const dislikePost = (postIndex) => {
    const newLike = [...like];
    if(newLike[postIndex].likes > 0) {
      newLike[postIndex].likes = newLike[postIndex].likes - 1;
      setLike(newLike)
    }
  }

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {
          like.map((item, index) => {
            return (
              <div class="post-item">
                <div class="post-header">
                  <h2>{item.title}</h2>
                  <div class="post-social-media-stats">
                    <span class="stats-topic">Likes: </span>
                    <span class="post-likes">{item.likes}</span>
                  </div>
                </div>
                <p class="post-content">{item.content}</p>
                <div class="post-actions">
                  <button 
                    class="like-button" 
                    onClick={() => {
                      likePost(index);
                    }}
                  >Like</button>
                  <button 
                    class="dislike-button"
                    onClick={() => {
                      dislikePost(index);
                    }}
                  >
                  Dislike</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Posts;
