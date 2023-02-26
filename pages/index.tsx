import Blog from "@/components/Blog";
import findPosts from "../scripts/find-mongo-posts";

export default function Home({ posts }: any) {
  return (
    <>
      <Blog posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await findPosts();
  // Props returned will be passed to the page component
  console.log("posts", posts);

  return { props: { posts } };
}
