import React, { useEffect, useState } from 'react';

import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostModal from './components/UI/modal/PostModal';
import PostLoader from './components/UI/loader/PostLoader';
import PostError from './components/UI/errorer/PostError';

import { usePosts } from './hooks/usePosts';
import useFetch from './hooks/useFetch';

import AddNewButton from './components/UI/button/AddNewButton';
import { PostService } from './API/PostService';

function App() {
  const [ posts, setPosts ] = useState([]);
  const [ filter, setFilter ] = useState({ search: '', selectedSort: '' });
  const [ showModal, setShowModal ] = useState(false);
  const [ fetchData, isLoading, isError ] = useFetch(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });
  const filteredPosts = usePosts(posts, filter.selectedSort, filter.search);

  useEffect(() => { fetchData() }, []);// eslint-disable-line


  const createPost = (newPost) => {
    setPosts([ ...posts, newPost ]);
    setShowModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };


  return (
    <div className='container'>
      <h1 style={{ 'textAlign': 'center' }}>JS list</h1>

      <PostFilter filter={ filter } setFilter={ setFilter }/>
      { isError && <PostError/> }
      { isLoading
        ? <PostLoader/>
        : <PostList err={ isError } remove={ removePost } posts={ filteredPosts }/>
      }

      <AddNewButton disabled={ isError } onClick={ () => setShowModal(true) }>Add new post</AddNewButton>
      <PostModal showModal={ showModal } setShowModal={ setShowModal }>
        <PostForm create={ createPost }/>
      </PostModal>
    </div>
  );
}


export default App;
