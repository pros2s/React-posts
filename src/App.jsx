import React, { useState } from "react";

import PostList from "./components/PostList";
import AddNewButton from './components/UI/button/AddNewButton';

function App() {
  const [ posts, setPosts ] = useState([
    { id: 1, title: '1. JS', description: 'Description 1' },
    { id: 2, title: '2. JS', description: 'Description 2' },
    { id: 3, title: '3. JS', description: 'Description 3' }
  ]);

  return (
    <div className="container">
      <form>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Description"/>
        <AddNewButton>New post</AddNewButton>
      </form>
      <PostList posts={ posts } title='JS list'/>
    </div>
  );
}

export default App;
