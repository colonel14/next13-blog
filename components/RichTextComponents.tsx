import urlFor from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
    table: ({ value }: any) => {
      if (!value || !value.rows || value.rows.length === 0) {
        return null; // Handle empty tables or invalid data
      }

      return (
        <table className="table">
          <tbody>
            {value.rows.map((row: any, rowIndex: number) => (
              <tr key={rowIndex}>
                {row.map((cell: any, cellIndex: number) => (
                  <td key={cellIndex} className="px-2 py-1 border">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    },
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    paragraph: ({ children }: any) => <p className="text-base">{children}</p>,
  },
  blockquote: ({ children }: any) => (
    <blockquote className="border-r-yellow border-l-4 pr-5 py-5 my-5">
      {children}
    </blockquote>
  ),
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-yellow hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
