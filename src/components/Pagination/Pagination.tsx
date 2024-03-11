import { FC } from 'react';
import styles from './Pagination.module.scss';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: FC<PaginationProps> = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((pageNumber: number) => (
          <li key={pageNumber} className={currentPage === pageNumber ? styles.active_page_item : styles.page_item}>
            <span onClick={() => paginate(pageNumber)} className={styles.number_item}>
              {pageNumber}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
