import type { Post } from "~/types";
import PostCard from "./PostCard";

type LatestPostsProps = {
  posts: Post[];
  limit?: number;
};

const LatestPosts = ({ posts, limit = 3 }: LatestPostsProps) => {
  const latestPosts = posts
    .sort((a: Post, b: Post) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);

  return (
    <section className="max-w-6xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-200">🌟 Latest Post</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {latestPosts.map((post) => (
          <PostCard key={post.slug} post={post} showImages={false} />
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
