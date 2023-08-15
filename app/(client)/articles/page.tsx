import BlogList from '../BlogList'
import { getAllPosts } from '@/lib/client';

export const dynamic = 'force-dynamic';


async function Articles() {
  const posts = await getAllPosts();
  return (
    <BlogList posts={posts} />
  )
}

export default Articles