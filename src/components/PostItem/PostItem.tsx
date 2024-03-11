import { FC } from 'react';
import { IPOST } from '../../types/IPost';
import { Link } from 'react-router-dom';
import styles from './PostItem.module.scss';

interface PostItemProps {
  postItem: IPOST;
}

const PostItem: FC<PostItemProps> = ({ postItem }) => {
  return (
    <Link to={`/${postItem.id}`} className={styles.post_item_wrapper}>
      <span className={styles.title}>{postItem.title}</span>
      <p>{postItem.body}</p>
    </Link>
  );
};

export default PostItem;
