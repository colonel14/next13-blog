import ClientSideRoute from "@/components/ClientSideRoute";
import { ArrowUpLeftIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

type Props = {
  translations: Translation[];
};

function TranslationList({ translations }: Props) {
  return (
    <div>
      <hr className="border-yellow mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {translations.map((translation) => (
          <ClientSideRoute key={translation._id} route={`/translations/${translation.slug.current}`}>
            <div className="group cursor-pointer flex flex-col">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  className="object-cover object-left lg:object-center"
                  src="/translation-text.jpg"
                  alt={translation.title}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{translation.title}</p>
                    <p>
                      {new Date(translation._createdAt).toLocaleDateString("en-Us", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{translation.title}</p>
              </div>
              <p className="mt-5 font-bold flex items-center group-hover:underline gap-3">
                قراة المزيد <ArrowUpLeftIcon className="h-4 w-4" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default TranslationList;
