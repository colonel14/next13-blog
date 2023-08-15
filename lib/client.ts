import { postquery, singlequery, singletranslationquery, translationsquery } from "./groq";
import { client } from "./sanity.client";

export async function getAllPosts() {
  return (await client.fetch(postquery, { cache: 'no-store' })) || [];
}

export async function getPostBySlug(slug: string) {
  return (await client.fetch(singlequery, { slug })) || {};
}


export async function getAllTranslations() {
  return (await client.fetch(translationsquery, { cache: 'no-store' })) || [];
}

export async function getTranslationBySlug(slug: string) {
  return (await client.fetch(singletranslationquery, { slug })) || {};
}
