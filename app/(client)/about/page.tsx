import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div dir="ltr" className="gap-x-12 lg:flex py-8 px-10">
      <div className="relative block w-full lg:w-[579px] h-[600px]">
        <Image
          src="/about.jpg"
          className="rounded-lg  object-cover object-right-top"
          alt="Personal Image"
          fill
        />
      </div>
      <div className="text-right flex-1 mt-9 lg:mt-0 ">
        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          السيد صميدة السيد فليفل
        </h2>
        <p className="mt-3 text-gray-600">طالب بكلية الطب بجامعة الأزهر</p>
      </div>
    </div>
  );
}
