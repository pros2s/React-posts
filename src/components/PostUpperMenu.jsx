import React from 'react';

import PostInput from './UI/input/PostInput';
import PostSelect from './UI/select/PostSelect';

import '../styles/menu.scss';


const PostUpperMenu = ({ filter, setFilter, limit, setLimit }) => {
  const { search, selectedSort } = filter;

  return (
    <div className='menu'>
      <PostInput
        value={ search }
        onChange={ (event) => setFilter({ ...filter, search: event.target.value }) }
        placeholder='Search'/>

      <div className='menu__selects'>
        <PostSelect
          value={ limit }
          onChange={ (selected) => setLimit(selected) }
          defaultValue='Load'
          options={[
            { value: 5, name: 'By 5' },
            { value: 10, name: 'By 10' },
            { value: 25, name: 'By 25' },
            { value: 50, name: 'By 50' },
            { value: -1, name: 'show all' }
        ]}/>

        <PostSelect
          value={ selectedSort }
          onChange={ (selected) => setFilter({ ...filter, selectedSort: selected }) }
          defaultValue='Sort'
          options={[
            { value: 'title', name: 'By title' },
            { value: 'body', name: 'By description' },
            { value: 'all', name: 'without sort' }
        ]}/>
      </div>
    </div>
  );
};


export default PostUpperMenu;
