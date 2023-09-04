import { RichTextComponents } from "@/components/RichTextComponents";
import { getPostBySlug, getTranslationBySlug } from "@/lib/client";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};
async function Post({ params: { slug } }: Props) {
  const translation = await getTranslationBySlug(slug);

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border-t-2  border-yellow text-white">
        <div className="relative min-h-[30vh] ">
          <Image
            className="object-cover object-center mx-auto"
            src="/translation-text.jpg"
            alt={translation.title}
            fill
          />
        </div>
      </section>
      <section>
        <div className="mt-10">
          <h1 className="text-4xl font-extrabold">{translation.title}</h1>
          <p className="text-sm text-gray-500">
            {new Date(translation._createdAt).toLocaleDateString("en-Us", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </section>
      <div>
        <PortableText
          value={translation.body}
          components={RichTextComponents}
        />
      </div>
      {translation.table}
    </article>
  );
}

export default Post;
