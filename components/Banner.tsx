function Banner() {
  return (
    <div
      dir="ltr"
      className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10"
    >
      <div>
        <h1 className=" text-6xl sm:text-7xl">
          Flaifl&lsquo;s Translation Blog
        </h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-yellow">
            Every Developers
          </span>{" "}
          favourite blog in the Devvosphere
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New Medical Translated Articles
      </p>
    </div>
  );
}

export default Banner;
