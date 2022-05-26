import React, { useState, useMemo } from 'react';

import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';


function App() {
  const [ posts, setPosts ] = useState([
    { id: 1, title: 'b', description: 'a 1' },
    { id: 2, title: 'a', description: 'b 2' },
    { id: 3, title: 'c', description: 'c 3' }
  ]);
  const [ filter, setFilter ] = useState({ search: '', selectedSort: '' });


  const sortedPosts = useMemo(() => {
    return filter.selectedSort
      ? [ ...posts ].sort((a, b) => a[filter.selectedSort].localeCompare(b[filter.selectedSort]))
      : posts
  }, [ filter.selectedSort, posts ]);

  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.search));
  }, [ filter.search, sortedPosts ])


  const createPost = (newPost) => {
    setPosts([ ...posts, newPost ]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };


  return (
    <div className='container'>
      <h1 style={{ 'textAlign': 'center' }}>JS list</h1>

      <PostFilter filter={ filter } setFilter={ setFilter }/>
      <PostList remove={ removePost } posts={ filteredPosts }/>
      <PostForm create={ createPost }/>
    </div>
  );
}


export default App;
