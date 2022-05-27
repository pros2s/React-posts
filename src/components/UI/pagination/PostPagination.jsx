import { usePagination } from '../../../hooks/usePagination';


const PostPagination = ({ page, totalPages, currentPage }) => {
  const pagesArr = usePagination(totalPages);

  return (
    <div className='footer__pages'>
      {
        pagesArr.map((pagE) => {
          return (
              <span
                onClick={ () => currentPage(pagE) }
                className={ pagE === page ? 'footer__pages-number active' : 'footer__pages-number' }
                key={ pagE }>
                  { pagE }
              </span>
          );
        })
      }
    </div>
  );
};

export default PostPagination;
