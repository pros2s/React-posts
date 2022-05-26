import React, { useState } from 'react';

import PostSelect from './components/UI/select/PostSelect';
import PostList from './components/PostList';
import PostForm from './components/PostForm';


function App() {
  const [ posts, setPosts ] = useState([
    { id: 1, title: 'b', description: 'a 1' },
    { id: 2, title: 'a', description: 'b 2' },
    { id: 3, title: 'c', description: 'c 3' }
  ]);
  const [ selectedSort, setSelectedSort ] = useState('');

  const createPost = (newPost) => {
    setPosts([ ...posts, newPost ]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([ ...posts ].sort((a, b) => a[sort].localeCompare(b[sort])));
  };


  return (
    <div className='container'>
      <h1 style={{ 'textAlign': 'center' }}>JS list</h1>
      <div>
        <PostSelect
          value={ selectedSort }
          onChange={ sortPosts }
          defaultValue='Sort'
          options={[
            { value: 'title', name: 'By title' },
            { value: 'description', name: 'By description' }
          ]}/>
      </div>
      {
        posts.length
          ?
        <PostList remove={ removePost } posts={ posts }/>
          :
        <h1>Post list is empty! :{'('}</h1>
      }
      <PostForm create={ createPost }/>
    </div>
  );
}

export default App;
