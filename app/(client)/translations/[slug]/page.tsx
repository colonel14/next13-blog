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
  console.log(translation);
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
      {/* <div>
        <PortableText
          value={translation.table}
          components={RichTextComponents}
        />
      </div> */}
      <div className="mt-10">
        {translation.table && (
          <table>
            <tbody>
              {translation.table.rows.map((row: any, rowIndex: number) => (
                <tr key={rowIndex}>
                  {row.cells.map((cell: any, cellIndex: number) => (
                    <td key={cellIndex} className="px-3 py-3 border">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </article>
  );
}

export default Post;
