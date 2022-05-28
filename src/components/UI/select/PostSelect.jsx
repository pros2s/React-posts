import React from 'react';
import classes from './PostSelect.module.scss';


const PostSelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={ classes.select }
      value={ value }
      onChange={ (event) => onChange(event.target.value) }>

        <option disabled value=''>{ defaultValue }</option>
        {
          options.map((option) =>
            <option key={ option.name } value={ option.value }>
              { option.name }
            </option>
          )
        }
    </select>
  );
};

export default PostSelect;
