import { FC, useEffect, useState } from 'react';
import styles from './DetailPost.module.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IPOST } from '../../types/IPost';
import BackBtn from '../../ui/BackBtn';

interface DetailPostProps {}

const DetailPost: FC<DetailPostProps> = () => {
  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<IPOST>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios.get<IPOST>(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
      setPost(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.detail_post_wrapper}>
      <BackBtn />
      <div className={styles.detail_post}>
        <div>
          <h2>Single Post {id}</h2>
          <div className={styles.post_content}>
            <span>{post?.title}</span>
            <p>{post?.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
