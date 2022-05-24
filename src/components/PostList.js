import React from "react";
import PostItem from "./PostItem";

import '../styles.css';

const PostList = ({ posts }) => {
  return (
    <div className="container">
      <div className="post__list">
        { posts.map((post) => <PostItem post={ post } key={ post.id }/>) }
      </div>
    </div>
  )
}

export default PostList;
