import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import PostsList from './components/PostsList/PostsList';
import DetailPost from './components/DetailPost/DetailPost';
import { IPOST } from './types/IPost';

function useFetchPosts() {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<IPOST[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<IPOST[]>('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, posts };
}

function App() {
  const { loading, posts } = useFetchPosts();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Routes>
      <Route path="/" element={<PostsList posts={currentPosts} loading={loading} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage} />} />
      <Route path="/:id" element={<DetailPost />} />
    </Routes>
  );
}

export default App;
