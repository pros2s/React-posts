import React, { useState } from 'react';

import PostList from './components/PostList';
import PostForm from './components/PostForm';


function App() {
  const [ posts, setPosts ] = useState([
    { id: 1, title: 'JS', description: 'Description 1' },
    { id: 2, title: 'JS', description: 'Description 2' },
    { id: 3, title: 'JS', description: 'Description 3' }
  ]);

  const createPost = (newPost) => {
    setPosts([ ...posts, newPost ]);
  }


  return (
    <div className='container'>
      <PostList posts={ posts } title='JS list'/>
      <PostForm create={ createPost }/>
    </div>
  );
}

export default App;
