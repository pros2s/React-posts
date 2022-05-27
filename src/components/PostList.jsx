import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PostItem from './PostItem';

import './styles.css';
import './postAnimation.css';


const PostList = ({ posts, remove }) => {
  if (!posts.length) {
    return (
      <h1>Post list is empty! :{'('}</h1>
    );
  };

  return (
    <div>
      <div className='post__list'>
        <TransitionGroup>
          {
            posts.map((post, i) => (
              <CSSTransition
                key={ post.id }
                timeout={ 450 }
                classNames='post__animation'
              >
                <PostItem remove={ remove } number={ i + 1 } post={ post }/>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </div>
    </div>
  );
};


export default PostList;
