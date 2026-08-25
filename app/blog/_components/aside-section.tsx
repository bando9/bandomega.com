import Link from "next/link";
import Image from "next/image";

export default function AsideSection() {
  return (
    <aside className="w-full md:w-60 flex pt-2 md:border-l md:border-text-muted md:h-50 order-1 mb-10">
      <div className="ms-3">
        <div className="flex items-center gap-5">
          <p className="caption-500-14">Select date</p>
          <Link href="#">
            <Image
              width={450}
              height={450}
              src="/images/icons/three-dots.svg"
              alt="Three Dots Icon"
              className="w-5"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <p className="caption-500-14">Choose topics</p>
          <div>
            <div className="tag grid grid-cols-3 gap-2">
              <h4 className="body-extra-small-400-12 bg-card py-2 px-2 rounded-2xl flex justify-center hover:bg-bg-light cursor-pointer">
                React
              </h4>
              <h4 className="flex justify-center body-extra-small-400-12 bg-card py-2 px-2 rounded-2xl hover:bg-bg-light cursor-pointer">
                Animation
              </h4>
              <h4 className="flex justify-center body-extra-small-400-12 bg-card py-2 px-2 rounded-2xl hover:bg-bg-light cursor-pointer">
                JavaScript
              </h4>
              <h4 className="flex justify-center body-extra-small-400-12 bg-card py-2 px-2 rounded-2xl hover:bg-bg-light cursor-pointer">
                GitHub
              </h4>
              <h4 className="flex justify-center body-extra-small-400-12 bg-card py-2 px-2 rounded-2xl hover:bg-bg-light cursor-pointer">
                Tailwind
              </h4>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
