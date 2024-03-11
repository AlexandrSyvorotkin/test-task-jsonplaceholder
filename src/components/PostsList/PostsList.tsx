import { FC } from 'react';
import { IPOST } from '../../types/IPost';
import PostItem from '../PostItem/PostItem';
import Pagination from '../Pagination/Pagination';
import styles from './PostsList.module.scss';

interface PostsListProps {
  posts: IPOST[];
  loading: boolean;
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const PostsList: FC<PostsListProps> = ({ posts, loading, totalPosts, postsPerPage, paginate, currentPage }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (posts.length === 0) {
    return <h2>No posts found.</h2>;
  }

  return (
    <div className={styles.posts}>
      <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate} currentPage={currentPage} />
      {posts.map((post: IPOST) => (
        <PostItem key={post.id} postItem={post} />
      ))}
    </div>
  );
};

export default PostsList;
