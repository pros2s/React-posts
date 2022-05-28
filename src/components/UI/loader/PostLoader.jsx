import loading from '../../../media/loading.gif';
import classes from './PostLoader.module.scss';


const PostLoader = () => {
  return (
  <div className={ classes.loading }>
    <img src={ loading } alt='loading gif'/>
    </div>
  );
};


export default PostLoader;
