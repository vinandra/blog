"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import FeaturedPost from "@/components/FeaturedPost";
import CardPost from "@/components/CardPost";

export default function Home() {
  const [posts, setPosts] = useState([
    {
      thumbnail: "/thumbnail-2.png",
      category: "IVE",
      date: "Aug 11, 2025",
      title: "In my opinion, Jang Wonyoung is the most beautiful member of IVE",
      shortDescripton:
        "A personal statement expressing admiration for Jang Wonyoung’s beauty among the members of the K-pop group IVE",
      authorName: "santuy",
      authorRole: "admin",
      authorAvatar: "/author.png",
    },
  ]);
  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto">
        <FeaturedPost />
        <div className="flex -mx-4">
          {posts.map((post) => (
            <div className="w-4/12 px-4">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
