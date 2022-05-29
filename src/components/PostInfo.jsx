import React, { useEffect, useState } from 'react';

import { PostService } from '../API/PostService';
import useFetch from '../hooks/useFetch';

import '../styles/comments.scss';
import '../styles/post.scss';


const PostInfo = ({ postInfo, postId }) => {
  const [ commentsList, setCommentsList ] = useState([]);
  const [ fetchData ] = useFetch(async () => {
    const commentsListById = await PostService.getCommentsById(postId);
    setCommentsList(commentsListById.data);
  });

  useEffect(() => {
    fetchData();
  }, []);// eslint-disable-line

  return (
    <div className='post'>
      <h2 className='post__title'>
        Comments about <span className='post__number'>post { postInfo.id }</span>
      </h2>
      {
        commentsList.map((com) => {
          return (
            <div className='comments' key={ com.email }>
              <h3 className='comments__name'>{ com.name }</h3>
              <p className='comments__email'>{ com.email }</p>
              <p className='comments__body'>{ com.body }</p>
            </div>
          );
        })
      }
    </div>
  );
};


export default PostInfo;
