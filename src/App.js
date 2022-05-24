import React, { useState } from "react";

import PostList from "./components/PostList";

function App() {
  const [ posts, setPosts ] = useState([
    { id: 1, title: '1. JS', description: 'Description 1' },
    { id: 2, title: '2. JS', description: 'Description 2' },
    { id: 3, title: '3. JS', description: 'Description 3' }
  ]);

  return (
    <div className="App">
      <PostList posts={ posts } title='Title'/>
    </div>
  );
}

export default App;
