import { getAllPosts } from "@/lib/client";
import Image from "next/image";
import BlogList from "./BlogList";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
