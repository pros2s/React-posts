import React from "react";
import classes from './PostModal.module.css';


const PostModal = ({ children, showModal, setShowModal }) => {
  const modalClasses = [ classes.modal ];
  if (showModal) modalClasses.push(classes.active);

  return (
    <div className={ modalClasses.join(' ') } onClick={ () => setShowModal(false) }>
      <div className={ classes.modal__content } onClick={ (e) => e.stopPropagation() }>
        { children }
      </div>
    </div>
  );
};


export default PostModal;
