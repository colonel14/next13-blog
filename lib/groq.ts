import { groq } from "next-sanity";

export const postquery = groq`
*[_type == 'post'] {
  ..., 
  author->,
  categories[]->
 } | order(_createdAt desc)
`;

export const singlequery = groq`
    *[_type == 'post' && slug.current == $slug][0] {
    ..., 
    author->,
    categories[]->
    }

`;

export const translationsquery = groq`
*[_type == 'translation'] {
  ...
 } | order(_createdAt desc)
`;


export const singletranslationquery = groq`
    *[_type == 'translation' && slug.current == $slug][0] {
    ..., 
    author->,
    categories[]->
    }

`;