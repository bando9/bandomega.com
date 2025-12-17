import Image from "next/image";
import photoMakassar from "@/public/images/photo-makassar.png";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="mt-15 md:mt-40 flex gap-4 md:gap-10 h-55 md:h-120 py-10 overflow-hidden"
    >
      <div className="max-w-60 md:max-w-75 max-h-10 md:max-h-75">
        <Image
          width={450}
          height={450}
          className="rotate-2 rounded-xl h-35 w-45 md:h-100 md:w-100"
          src="https://images.unsplash.com/photo-1625967445189-d35d49a37501?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Semarang City"
        />
      </div>

      <div className="max-w-60 md:max-w-72 max-h-10 md:max-h-75">
        <Image
          width={450}
          height={450}
          className="rotate-2 rounded-xl h-35 w-45 md:h-100 md:w-100"
          src="https://images.unsplash.com/photo-1625967445155-bf8cc0412e9b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="semarang-city"
        />
      </div>

      <div className="max-w-60 md:max-w-72 max-h-10 md:max-h-75">
        <Image
          width={450}
          height={450}
          className="-rotate-2 rounded-xl h-35 w-45 md:h-100 md:w-100"
          src="https://images.unsplash.com/photo-1672281699269-86a871c5b2c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="makassar-city"
        />
      </div>

      <div className="max-w-60 md:max-w-72 max-h-10 md:max-h-75">
        <Image
          width={450}
          height={450}
          className="-rotate-2 rounded-xl h-35 w-45 md:h-100 md:w-100"
          src={photoMakassar}
          alt="makassar-city"
        />
      </div>
    </section>
  );
}
