import React from "react";


const PostSelect = ({ options, defaultValue, value, onChange, style }) => {
  return (
    <select
      style={ style }
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
