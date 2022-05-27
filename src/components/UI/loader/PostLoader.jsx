import loading from '../../../media/loading.gif';


const PostLoader = () => {
  return (
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>
    <img src={ loading } alt='loading gif'/>
    </div>
  );
};


export default PostLoader;
