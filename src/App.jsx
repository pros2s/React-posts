import React, { useState } from 'react';

import PostList from './components/PostList';
import AddNewButton from './components/UI/button/AddNewButton';
import PostInput from './components/UI/input/PostInput';


function App() {
  const [ posts, setPosts ] = useState([
    { id: 1, title: 'JS', description: 'Description 1' },
    { id: 2, title: 'JS', description: 'Description 2' },
    { id: 3, title: 'JS', description: 'Description 3' }
  ]);
  const [ newPosts, setNewPosts ] = useState({ title: '', description: '' });


  const postNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title: newPosts.title,
      description: newPosts.description
    }

    setPosts([ ...posts, newPost ]);
    setNewPosts({ title: '', description: '' });
  }


  return (
    <div className='container'>
      <PostList posts={ posts } title='JS list'/>
      <form style={{
        'display': 'flex',
        'flexDirection': 'column',
        'marginTop': '20px',
        'maxWidth': '400px'
      }}>
        <PostInput
          value={ newPosts.title }
          onChange={ (event) => setNewPosts({ ...newPosts, title: event.target.value }) }
          type='text'
          placeholder='Name'/>

        <PostInput
          value={ newPosts.description }
          onChange={ (event) => setNewPosts({ ...newPosts, description: event.target.value }) }
          type='text'
          placeholder='Description'/>
        <AddNewButton onClick={ postNewPost }>New post</AddNewButton>
      </form>
    </div>
  );
}

export default App;
