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
      category: "aespa",
      date: "Aug 12, 2025",
      title: "I Discovered aespa Through Karina’s Charisma",
      shortDescription:
        "Sharing how my journey into the world of aespa began with Karina, whose stunning visuals and captivating stage presence instantly caught my attention.",
      authorName: "santuy",
      authorRole: "admin",
      authorAvatar: "/author.png",
    },
    {
      id: 3,
      thumbnail: "/thumbnail-4.png",
      category: "Heart2Heart",
      date: "Aug 12, 2025",
      title: "Proud to See an Indonesian Member in SM Entertainment",
      shortDescription:
        "A reflection of pride in seeing an Indonesian member in Heart2Heart, who has successfully made it into the K-pop industry under SM Entertainment.",
      authorName: "santuy",
      authorRole: "admin",
      authorAvatar: "/author.png",
    },
    {
      id: 4,
      thumbnail: "/thumbnail-5.png",
      category: "LE SSERAFIM",
      date: "Aug 12, 2025",
      title: "Their Songs Are Amazing, Everyone Loves Them",
      shortDescription:
        "Exploring the charm of LE SSERAFIM’s music, filled with energy and positive messages, making their songs beloved by listeners worldwide.",
      authorName: "santuy",
      authorRole: "admin",
      authorAvatar: "/author.png",
    },
    {
      id: 5,
      thumbnail: "/thumbnail-6.png",
      category: "ILLIT",
      date: "Aug 12, 2025",
      title:
        "Many of Their Songs Have Gone Viral and Are Enjoyable to Listen To",
      shortDescription:
        "Highlighting the popularity of ILLIT’s viral tracks with catchy melodies that make them a favorite among many listeners.",
      authorName: "santuy",
      authorRole: "admin",
      authorAvatar: "/author.png",
    },
    {
      id: 6,
      thumbnail: "/thumbnail-7.png",
      category: "NewJeans",
      date: "Aug 12, 2025",
      title:
        "Personally, Minji is My Favorite NewJeans Member Because of Her Cuteness",
      shortDescription:
        "A personal statement expressing admiration for Minji, the NewJeans member who became a favorite due to her adorable charm and captivating stage presence.",
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
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
