import error from '../../../media/error.gif';
import classes from './PostError.module.scss';


const PostError = () => {
  return (
    <div className={ classes.error_posts }>
      <img className={ classes.error_posts__image } src={ error } alt='error gif'/>
      <p className={ classes.error_posts__message }>Error with post fetch <span>(check your url)</span></p>
    </div>
  );
};


export default PostError;
