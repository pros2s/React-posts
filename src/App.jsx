import React, { useEffect, useState } from 'react';

import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostModal from './components/UI/modal/PostModal';
import PostLoader from './components/UI/loader/PostLoader';

import { usePosts } from './hooks/usePosts';
import AddNewButton from './components/UI/button/AddNewButton';
import { PostService } from './API/PostService';

function App() {
  const [ posts, setPosts ] = useState([]);
  const [ filter, setFilter ] = useState({ search: '', selectedSort: '' });
  const [ showModal, setShowModal ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const filteredPosts = usePosts(posts, filter.selectedSort, filter.search);

  useEffect(() => { fetchData() }, []);


  const createPost = (newPost) => {
    setPosts([ ...posts, newPost ]);
    setShowModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  async function fetchData() {
    setIsLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsLoading(false);
    }, 10000);
  };


  return (
    <div className='container'>
      <h1 style={{ 'textAlign': 'center' }}>JS list</h1>

      <PostFilter filter={ filter } setFilter={ setFilter }/>
      { isLoading
        ? <PostLoader/>
        : <PostList remove={ removePost } posts={ filteredPosts }/>
      }

      <AddNewButton onClick={ () => setShowModal(true) }>Add new post</AddNewButton>
      <PostModal showModal={ showModal } setShowModal={ setShowModal }>
        <PostForm create={ createPost }/>
      </PostModal>
    </div>
  );
}


export default App;
