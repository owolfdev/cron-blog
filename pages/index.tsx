import Blog from "@/components/Blog";
import findPosts from "../scripts/find-mongo-posts";
import getPosts from "../scripts/get-subpabase-posts";

export default function Home({ posts }: any) {
  return (
    <>
      <Blog posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  // Props returned will be passed to the page component
  //console.log("posts", posts);

  return { props: { posts } };
}
