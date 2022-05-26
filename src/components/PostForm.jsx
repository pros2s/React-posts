import React, { useState } from "react";

import AddNewButton from './UI/button/AddNewButton';
import PostInput from './UI/input/PostInput';


const PostForm = ({ create }) => {
  const [ post, setNewPost ] = useState({ title: '', description: '' });

  const postNewPost = (e) => {
    e.preventDefault();

    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setNewPost({ title: '', description: '' });
  }


  return (
    <form style={{
      'display': 'flex',
      'flexDirection': 'column',
      'marginTop': '20px',
      'maxWidth': '400px'
    }}>
      <PostInput
        value={ post.title }
        onChange={ (event) => setNewPost({ ...post, title: event.target.value }) }
        type='text'
        placeholder='Name'/>

      <PostInput
        value={ post.description }
        onChange={ (event) => setNewPost({ ...post, description: event.target.value }) }
        type='text'
        placeholder='Description'/>
      <AddNewButton onClick={ postNewPost }>New post</AddNewButton>
    </form>
  )
}


export default PostForm;