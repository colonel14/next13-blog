import { defineField, defineType } from "sanity";

export default defineType({
  name: "translation",
  title: "translation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "enText",
      title: "English Text",
      type: "blockContent",
    }),
    defineField({
      name: "arText",
      title: "Arabic Text",
      type: "blockContent",
    }),
  ],
});
