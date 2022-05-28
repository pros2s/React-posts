import React, { useEffect, useState } from 'react';

import { PostService } from '../API/PostService';
import useFetch from '../hooks/useFetch';


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
      <h2> Post { postInfo.id }</h2>
      {
        commentsList.map((com) => {
          return (
            <div key={ com.email }>
              <p>{ com.name }</p>
              <hr />
              <p>{ com.email }</p>
              <hr />
              <p>{ com.body }</p>
              <br />
            </div>
          );
        })
      }
    </div>
  );
};


export default PostInfo;
