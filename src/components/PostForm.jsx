import React, { useState, useRef } from "react";

import AddNewButton from './UI/button/AddNewButton';
import PostInput from './UI/input/PostInput';


const PostForm = ({ create }) => {
  const [ post, setNewPost ] = useState({ title: '', body: '' });
  const inputRef = useRef();

  const postNewPost = (e) => {
    e.preventDefault();

    const newPost = { ...post, id: Date.now() };
    create(newPost);

    setNewPost({ title: '', body: '' });
    inputRef.current.focus();
  };


  return (
    <form style={{
      'display': 'flex',
      'flexDirection': 'column',
      'marginTop': '20px',
      'maxWidth': '400px'
    }}>
      <PostInput
        ref={ inputRef }
        value={ post.title }
        onChange={ (event) => setNewPost({ ...post, title: event.target.value }) }
        type='text'
        placeholder='Name'/>

      <PostInput
        value={ post.body }
        onChange={ (event) => setNewPost({ ...post, body: event.target.value }) }
        type='text'
        placeholder='Description'/>
      <AddNewButton onClick={ postNewPost }>New post</AddNewButton>
    </form>
  );
};


export default PostForm;
