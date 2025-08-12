"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import FeaturedPost from "@/components/FeaturedPost";
import CardPost from "@/components/CardPost";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      thumbnail: "/thumbnail-2.png",
      category: "IVE",
      date: "Aug 11, 2025",
      title: "In my opinion, Jang Wonyoung is the most beautiful member of IVE",
      shortDescription:
        "A personal statement expressing admiration for Jang Wonyoung’s beauty among the members of the K-pop group IVE",
      authorName: "santuy",
      authorRole: "admin",
      authorAvatar: "/author.png",
    },
    {
      id: 2,
      thumbnail: "/thumbnail-3.png",
      category: "IVE",
      date: "Aug 11, 2025",
      title: "In my opinion, Jang Wonyoung is the most beautiful member of IVE",
      shortDescription:
        "A personal statement expressing admiration for Jang Wonyoung’s beauty among the members of the K-pop group IVE",
      authorName: "santuy",
      authorRole: "admin",
      authorAvatar: "/author.png",
    },
    {
      id: 3,
      thumbnail: "/thumbnail-4.png",
      category: "IVE",
      date: "Aug 11, 2025",
      title: "In my opinion, Jang Wonyoung is the most beautiful member of IVE",
      shortDescription:
        "A personal statement expressing admiration for Jang Wonyoung’s beauty among the members of the K-pop group IVE",
      authorName: "santuy",
      authorRole: "admin",
      authorAvatar: "/author.png",
    },
    {
      id: 4,
      thumbnail: "/thumbnail-5.png",
      category: "IVE",
      date: "Aug 11, 2025",
      title: "In my opinion, Jang Wonyoung is the most beautiful member of IVE",
      shortDescription:
        "A personal statement expressing admiration for Jang Wonyoung’s beauty among the members of the K-pop group IVE",
      authorName: "santuy",
      authorRole: "admin",
      authorAvatar: "/author.png",
    },
    {
      id: 5,
      thumbnail: "/thumbnail-6.png",
      category: "IVE",
      date: "Aug 11, 2025",
      title: "In my opinion, Jang Wonyoung is the most beautiful member of IVE",
      shortDescription:
        "A personal statement expressing admiration for Jang Wonyoung’s beauty among the members of the K-pop group IVE",
      authorName: "santuy",
      authorRole: "admin",
      authorAvatar: "/author.png",
    },
    {
      id: 6,
      thumbnail: "/thumbnail-7.png",
      category: "IVE",
      date: "Aug 11, 2025",
      title: "In my opinion, Jang Wonyoung is the most beautiful member of IVE",
      shortDescription:
        "A personal statement expressing admiration for Jang Wonyoung’s beauty among the members of the K-pop group IVE",
      authorName: "santuy",
      authorRole: "admin",
      authorAvatar: "/author.png",
    },
  ]);
  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-900 min-h-screen text-white">
      <Navbar />
      <Container>
        <FeaturedPost />
        <div className="flex -mx-4 flex-wrap mt-6">
          {posts.map((post) => (
            <div key={post.id} className="w-4/12 px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
