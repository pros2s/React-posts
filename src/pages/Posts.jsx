import React, { useEffect, useRef, useState } from 'react';

import PostUpperMenu from '../components/PostUpperMenu';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostModal from '../components/UI/modal/PostModal';
import PostLoader from '../components/UI/loader/PostLoader';
import PostError from '../components/UI/errorer/PostError';
import PostPagination from '../components/UI/pagination/PostPagination';

import { usePosts } from '../hooks/usePosts';
import { useObserver } from '../hooks/useObserver';
import useFetch from '../hooks/useFetch';

import AddNewButton from '../components/UI/button/AddNewButton';
import { PostService } from '../API/PostService';
import { getTotalPages } from '../utils/getTotalPages';

import '../styles/footer.scss';

const Posts = () => {
  //hooks
  const [ posts, setPosts ] = useState([]);
  const [ filter, setFilter ] = useState({ search: '', selectedSort: '' });
  const [ showModal, setShowModal ] = useState(false);

  const [ totalPages, setTotalPages ] = useState(0);
  const [ totalCount, setTotalCount ] = useState(0);
  const [ limit, setLimit ] = useState(5);
  const [ page, setPage ] = useState(1);

  const loadRef = useRef();

  const filteredPosts = usePosts(posts, filter.selectedSort, filter.search);

  const [ fetchData, isLoading, isError ] = useFetch(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([ ...posts, ...response.data ]);

    const total = showModal ? totalCount : response.headers['x-total-count'];
    setTotalCount(total);
    setTotalPages(getTotalPages(total, limit));
  });

  useEffect(() => {
    setPage(1);
    fetchData();
  }, [ limit ]);// eslint-disable-line

  useEffect(() => {
    fetchData();
  }, [ page ]);// eslint-disable-line

  useObserver(loadRef, isLoading, (page < totalPages) , () => { setPage(page + 1); }, filter.search);


  //functions
  const createPost = (newPost, total) => {
    setPosts([ newPost, ...posts ]);
    setShowModal(false);
    setTotalCount(total);
  };

  const removePost = (post, e) => {
    e.stopPropagation();
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const currentPage = (curPage) => {
    setPage(curPage);
  };


  //render
  return (
    <>
      { isError && <PostError/> }
      { isLoading && <PostLoader/> }

      <PostUpperMenu
        filter={ filter }
        setFilter={ setFilter }
        limit={ limit }
        setLimit={ setLimit }/>

      <div className='footer'>
        <AddNewButton
          disabled={ isError }
          onClick={ () => setShowModal(true) }>
            Add new post
        </AddNewButton>

        {/* <PostPagination
          page={ page }
          totalPages={ totalPages }
          currentPage={ currentPage }/> */}
      </div>

      <PostList err={ isError } remove={ removePost } posts={ filteredPosts }/>

      <PostModal showModal={ showModal } setShowModal={ setShowModal }>
        <PostForm total={ totalCount } create={ createPost }/>
      </PostModal>

      <div className="loadMore" ref={ loadRef }/>
    </>
  );
};


export default Posts;
