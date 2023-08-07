import BlogList from '../BlogList'
import { getAllPosts } from '@/lib/client';

async function Articles() {
  const posts = await getAllPosts();
  return (
    <BlogList posts={posts} />
  )
}

export default Articles