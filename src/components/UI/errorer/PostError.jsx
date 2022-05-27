import error from '../../../media/error.gif';


const PostError = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>
      <img src={ error } alt='error gif'/>
    </div>
  );
};


export default PostError;
