import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PostService } from '../API/PostService';
import useFetch from '../hooks/useFetch';

import PostLoader from '../components/UI/loader/PostLoader';
import PostError from '../components/UI/errorer/PostError';
import PostInfo from '../components/PostInfo';

const Post = () => {
  const params = useParams();
  const [ postInfo, setPostInfo ] = useState({});

  const [ fetchData, isLoading, isError ] = useFetch(async () => {
    const postById = await PostService.getById(params.id);
    setPostInfo(postById.data);
  });

  useEffect(() => {
    fetchData();
  }, []);// eslint-disable-line


  return (
    <div className='postInfo'>
      { isLoading ? <PostLoader/> : <PostInfo postInfo={ postInfo } postId={ params.id }/> }
      { isError && <PostError/> }
    </div>
  );
};


export default Post;
