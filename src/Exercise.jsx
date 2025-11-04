import React from "react";
import PostCard from "./PostCard";
import { staticPosts } from "./Service";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#b83016]">
        Post Cards
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {staticPosts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}

export default Exercise;
