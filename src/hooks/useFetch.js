import { useState } from 'react';


const useFetch = (callback) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isError, setIsError ] = useState(false);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      await callback();
    }
    catch(e) {
      setIsError(true);
      throw new Error(e.message);
    }
    finally {
      setIsLoading(false);
    };
  }

  return [ fetchPosts, isLoading, isError ];
};


export default useFetch;
