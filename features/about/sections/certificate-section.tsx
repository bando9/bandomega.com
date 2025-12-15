import Image from "next/image";

export default function CertificateSection() {
  return (
    <section id="certificate" className="w-full overflow-hidden mt-15">
      <div className="flex animate-scroll-mobile md:animate-scroll space-x-3 md:space-x-6">
        <div className="max-w-2xs bg-white shadow rounded">
          <Image
            width={450}
            height={450}
            src="/images/certificates/certificate-reactjs.jpg"
            alt="Certificate 1"
            className="w-full h-auto rounded"
          />
        </div>

        <div className="min-w-80 bg-white shadow rounded">
          <Image
            width={450}
            height={450}
            src="/images/certificates/certificate-reactjs.jpg"
            alt="Certificate 2"
            className="w-full h-auto rounded"
          />
        </div>

        <div className="min-w-80 bg-white shadow rounded">
          <Image
            width={450}
            height={450}
            src="/images/certificates/certificate-reactjs.jpg"
            alt="Certificate 3"
            className="w-full h-auto rounded"
          />
        </div>

        <div className="min-w-80 bg-white shadow rounded">
          <Image
            width={450}
            height={450}
            src="/images/certificates/certificate-reactjs.jpg"
            alt="Certificate 4"
            className="w-full h-auto rounded"
          />
        </div>

        <div className="min-w-80 bg-white shadow rounded">
          <Image
            width={450}
            height={450}
            src="/images/certificates/certificate-reactjs.jpg"
            alt="Certificate 1"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </section>
  );
}
