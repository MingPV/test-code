// fetch on server

export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  return (
    <ul>
      {(posts as any)?.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
