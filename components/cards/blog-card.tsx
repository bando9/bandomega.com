import Image from "next/image";

export default function BlogCard() {
  return (
    <div className="card-blog text-text flex flex-col md:flex-row cursor-pointer gap-6 items-start md:items-start md:justify-between mt-8 md:mt-12 group">
      <div className="order-2 md:order-1">
        <h4 className="caption-500-14 mb-2 md:mb-4">September 24, 2025</h4>
        <h1 className="subtitle-600-20 md:subtitle-600-24 mb-1 group-hover:underline">
          List Animation using Motion for React
        </h1>
        <p className="body-small-400-14 mb-3">
          An in-depth guide on how to animate enter and exit animation for list
          using Motion for React (previously Framer Motion).
        </p>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="icon flex gap-5">
            <div className="flex gap-1 md:gap-1.5 items-center">
              <Image
                width={450}
                height={450}
                src="/images/icons/book-1.svg"
                className="w-4 md:w-5"
                alt="Book Icon"
              />
              <p className="caption-500-14">1,200 views</p>
            </div>
            <div className="flex gap-1.5 items-center">
              <Image
                width={450}
                height={450}
                src="/images/icons/time.svg"
                alt="Clock Icon"
                className="w-4 md:w-5"
              />
              <p className="caption-500-14">6 min read</p>
            </div>
          </div>
          <div className="tag flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-0">
            <h4 className="block body-extra-small-400-12 bg-card py-2 px-3 md:py-2 md:px-4 rounded-xl md:rounded-2xl hover:bg-bg-light">
              React
            </h4>
            <h4 className="inline-block body-extra-small-400-12 bg-card py-2 px-3 md:py-2 md:px-4 rounded-xl md:rounded-2xl hover:bg-bg-light">
              Animation
            </h4>
          </div>
        </div>
      </div>
      <div className="order-1 w-full md:w-2/5 md:max-w-sm">
        <Image
          width={450}
          height={450}
          src="/images/blog-image.jpg"
          alt="Blog Image"
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
}
