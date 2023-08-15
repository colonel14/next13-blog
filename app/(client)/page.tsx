import { getAllPosts } from "@/lib/client";
import Image from "next/image";
import BlogList from "./BlogList";

export const dynamic = 'force-dynamic';


export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
