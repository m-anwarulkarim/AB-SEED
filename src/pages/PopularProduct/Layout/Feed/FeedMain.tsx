// src/components/Feed/FeedMain.tsx

import PostCard from "@/PostCard/PostCard";
import CreatePostBox from "./CreatePos/CreatePostBox";

export default function FeedMain() {
  const posts = [
    {
      id: 1,
      author: { name: "John Doe", avatar: "https://placekitten.com/80/80" },
      time: "2h ago",
      content: {
        text: "Just chilling with friends 😎",
        mediaUrl: "https://placekitten.com/500/300",
      },
      stats: { likes: 20, comments: 5, shares: 2 },
    },
    {
      id: 2,
      author: { name: "Jane Smith", avatar: "https://placekitten.com/81/81" },
      time: "5h ago",
      content: {
        text: "Loving this new project 🚀",
        mediaUrl: "",
      },
      stats: { likes: 45, comments: 12, shares: 5 },
    },
    {
      id: 3,
      author: {
        name: "Michael Brown",
        avatar: "https://placekitten.com/82/82",
      },
      time: "1d ago",
      content: {
        text: "Nature walk 🌿🍃",
        mediaUrl: "https://placekitten.com/600/400",
      },
      stats: { likes: 120, comments: 30, shares: 15 },
    },
    {
      id: 4,
      author: { name: "Sophia Lee", avatar: "https://placekitten.com/83/83" },
      time: "2d ago",
      content: {
        text: "Coffee + Code = Perfect Morning ☕💻",
      },
      stats: { likes: 75, comments: 10, shares: 4 },
    },
    {
      id: 5,
      author: { name: "Chris Evans", avatar: "https://placekitten.com/84/84" },
      time: "3d ago",
      content: {
        text: "Throwback to my vacation trip! 🌴",
        mediaUrl: "https://placekitten.com/502/302",
      },
      stats: { likes: 200, comments: 40, shares: 25 },
    },
    {
      id: 6,
      author: { name: "Emma Watson", avatar: "https://placekitten.com/85/85" },
      time: "4d ago",
      content: {
        text: "Reading a new book 📚",
      },
      stats: { likes: 60, comments: 8, shares: 2 },
    },
    {
      id: 7,
      author: { name: "David Miller", avatar: "https://placekitten.com/86/86" },
      time: "5d ago",
      content: {
        text: "My first React project! 🤩",
        mediaUrl: "https://placekitten.com/503/303",
      },
      stats: { likes: 150, comments: 22, shares: 10 },
    },
  ];

  return (
    <div className="space-y-6">
      {/* ✅ CreatePost Box সব পোস্টের আগে */}
      <CreatePostBox />

      {/* ✅ ডেমো পোস্ট লিস্ট */}
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          author={post.author}
          // time={post.time}
          content={post.content}
          stats={post.stats}
        />
      ))}
    </div>
  );
}
