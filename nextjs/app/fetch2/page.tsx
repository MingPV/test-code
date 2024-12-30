// fetch on client
"use client";

import useSWR from "swr";

interface Post {
  test: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Posts() {
  const { data, error, isLoading } = useSWR("/api/posts", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      {data.map((post: Post) => (
        <li key={post.test}>{post.test}</li>
      ))}
    </ul>
  );
}
