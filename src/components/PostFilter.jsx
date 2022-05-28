import React from 'react';

import PostInput from './UI/input/PostInput';
import PostSelect from './UI/select/PostSelect';


const PostFilter = ({ filter, setFilter }) => {
  const { search, selectedSort } = filter;

  return (
    <div style={{ 'position': 'relative' }}>
      <PostInput
        value={ search }
        onChange={ (event) => setFilter({ ...filter, search: event.target.value}) }
        placeholder='Search'/>

      <PostSelect
        value={ selectedSort }
        onChange={ (selected) => setFilter({ ...filter, selectedSort: selected }) }
        defaultValue='Sort'
        options={[
          { value: 'title', name: 'By title' },
          { value: 'body', name: 'By description' }
        ]}/>
    </div>
  );
};


export default PostFilter;
