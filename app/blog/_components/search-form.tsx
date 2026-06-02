import Image from "next/image";

export default function SearchForm() {
  return (
    <form className="mt-20 md:mt-25 md:mx-25 mx-5 flex justify-center">
      <div className="bg-linear-to-r from-primary from-30% to-accent h-10 w-60 md:w-150 rounded-xl p-[1.5px] flex justify-center items-center">
        <label
          htmlFor="search"
          className="h-full w-full rounded-xl bg-bg-light flex items-center justify-around"
        >
          <Image
            width={450}
            height={450}
            src="/images/icons/search.svg"
            alt="Search Icon"
            className="ms-1 sm:w-5"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-45 md:w-130 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none"
          />
        </label>
      </div>
    </form>
  );
}
