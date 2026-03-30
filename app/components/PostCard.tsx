import { Link } from "react-router";
import type { Post } from "~/types";

const PostCard = ({
  post,
  showImages,
}: {
  post: Post;
  showImages?: boolean;
}) => {
  return (
    <article className="bg-gray-800 p-6 mb-4 rounded-lg shadow">
      <Link
        to={`/blog/${post.slug}`}
        className="text-blue-300 text-sm hover:underline"
      >
        <h3 className="text-2xl font-semibold text-blue-400 mb-2">
          {post.title}
        </h3>
      </Link>
      <p className="text-sm text-gray-400 mb-4">
        {new Date(post.date).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </p>
      {post.image && showImages && (
        <img
          className="w-full h-48 object-cover rounded mb-4"
          src={post.image}
          alt={post.title}
        />
      )}
      <p className="text-gray-300">{post.excerpt}</p>
    </article>
  );
};

export default PostCard;
