"use client";

import Link from "next/link";
import {useState} from "react";

function Header() {
  
  const [isOpen, setIsOpen] = useState(false)
   const navigation = [
        { name: "About", href: "/about" },
        { name: "Articles", href: "/articles" },
        { name: "Translation Texts", href: "/translations" },
    ]

    
  return (
    <header
      dir="ltr"
      className="relative flex items-center justify-between  font-bold p-10 py-5"
    >
      <Link href="/">
        <h1 className="text-2xl text-yellow">Flaifl</h1>
      </Link>
      <button role="button" aria-label="Open the menu" className={`md:hidden p-2 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 text-gray-500 hover:bg-gray-50`}
          onClick={() => setIsOpen(!isOpen)}
      >
          {
              isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
              ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
              )
          }
      </button>
      <div className={` flex-1 md:py-0 md:block md:static md:z-0 ${isOpen ? "absolute z-20 inset-x-0 top-full px-4 py-6 w-full bg-white dark:bg-gray-900" : "hidden"}`}>
         <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:font-medium">
           {
            navigation.map((item, idx) => {
                return (
                  <li key={idx} className={`text-gray-700 hover:text-yellow md:text-gray-600 dark:text-gray-200 dark:hover:text-sky-500 duration-150`}>
                      <Link
                          href={item.href}
                          className="block"
                          scroll={false}
                      >
                          {item.name}
                      </Link>
                  </li>
                )
            })
          }
         </ul>
      </div>
    </header>
  );
}

export default Header;
