import type { Route } from "./+types/index";
import type { Post, StrapiResonse, StrapiPost } from "~/types";
import { useState } from "react";
import PostCard from "~/components/PostCard";
import Pagination from "~/components/Pagination";
import Filter from "~/components/Filter";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: Post[] }> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/posts?populate=image&sort=date:desc`,
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  const json: StrapiResonse<StrapiPost> = await res.json();

  const posts = json.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    body: item.body,
    date: item.date,
    image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
  }));

  return { posts };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const { posts } = loaderData;

  // Filtered Posts
  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLocaleLowerCase();
    return (
      post.title.toLocaleLowerCase().includes(query) ||
      post.excerpt.toLocaleLowerCase().includes(query)
    );
  });

  // Pagination
  const postsPerPage = 10;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexLastPage = currentPage * postsPerPage;
  const indexFirstPage = indexLastPage - postsPerPage;
  const currentPosts = filteredPosts.slice(indexFirstPage, indexLastPage);

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-white mb-8">📝 Blog</h2>
      <Filter
        searchQuery={searchQuery}
        onSearchChange={(query) => {
          setSearchQuery(query);
          setCurrentPage(1);
        }}
      />

      <div className="space-y-8">
        {currentPosts.length === 0 ? (
          <p className="text-gray-400 text-center">No posts found</p>
        ) : (
          currentPosts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BlogPage;
