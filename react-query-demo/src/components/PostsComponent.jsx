// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const PostsComponent = () => {
  // Use the useQuery hook to fetch data with advanced options
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(['posts'], fetchPosts, {
    cacheTime: 1000 * 60 * 10, // 10 minutes
    staleTime: 1000 * 60 * 5,  // 5 minutes
    refetchOnWindowFocus: false, // Disable refetching on window focus
    keepPreviousData: true,     // Keep displaying previous data while fetching new data
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      {isFetching && <p>Updating...</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
