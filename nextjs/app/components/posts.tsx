"use client";
import { use } from "react";

export default function Posts({ posts }: any) {
  const posts_content = use(posts);

  return (
    <ul>
      {(posts_content as any).map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
