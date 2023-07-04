import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./reduxToolkit";
import Table from "./Table";

function PostList() {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state: any) => state.posts);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchPosts());
  }, [dispatch]);

  return isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Something went wrong</p>
  ) : (
    <Table data={posts} />
  );
}

export default PostList;
