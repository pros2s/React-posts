import loading from '../../../media/loading.gif';


const PostLoader = () => {
  return (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={ loading } alt='loading gif'/>
    </div>
  );
};


export default PostLoader;
