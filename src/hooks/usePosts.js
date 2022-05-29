import { useMemo } from 'react';


export const useSortedPosts = (posts, selectedSort) => {
  const sortedPosts = useMemo(() => {
    if (selectedSort === 'all') return posts;
    
    return selectedSort
      ? [ ...posts ].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
      : posts
  }, [ selectedSort, posts ]);

  return sortedPosts;
};

export const usePosts = (posts, selectedSort, search) => {
  const sortedPosts = useSortedPosts(posts, selectedSort);
  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(search));
  }, [ search, sortedPosts ]);

  return filteredPosts;
};
