import Image from "next/image";
import React from "react";

const Certificate = () => {
  return (
    <div id="certificate" className="bg-gradient-to-br from-red-800 via-gray-400 to-teal-600
">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Certificates
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* CERTIFICATES */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 rounded-2xl w-full h-full object-cover object-center "
                  src={"/assets/images/next.jpeg"}
                  width={150}
                  height={150}

                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                   NEXT.JS CERTIFICATE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  NEXT.JS
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  This is about a "Certificate of Achievement" awarded to Zakia Bashir for successfully completing the "Internship Ready: Next.js Course" on August 19, 2024. The certificate is signed by Najaf Ali, Founder, and GIAIC GPT as the issuer.                  </p>
                
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 rounded-2xl w-full h-full object-cover object-center"
                  src={"/assets/images/type1.jpeg"}
                  width={150}
                  height={150}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    TYPESCRIPT CERTIFICATE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                 TYPESCRIPT
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  TypeScript Certification
                  Delivering High-Performance Web Solutions with Advanced Type Safety and Best Practices                  </p>
                
                </div>
              </div>
            </div>
            {/* certificate */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 rounded-2xl w-full h-full object-cover object-center"
                  src={"/assets/images/html.jpeg"}
                  width={150}
                  height={150}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                   CSS CERTIFICATE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  CSS
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  This is about my certificate awarded to Zakia Bashir for successfully completing the CSS course with a perfect score of 100% from Infinity Code, signed by Muhammad Arif, Founder.                  </p>
                  
                </div>
              </div>
            </div>
            {/* certificate */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0  w-full h-full object-cover object-center"
                  src={"/assets/images/css.jpeg"}
                  width={150}
                  height={150}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    HTML CERTIFICATE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  HTML
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  This description is about my certificate awarded to Zakia Bashir for successfully completing the HTML course with a perfect score of 100% from Infinity Code, signed by Muhammad Arif, Founder.                  </p>
                  
                </div>
              </div>
            </div>
            {/* CERTIFICATE */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={"/assets/images/type.jpeg"}
                  width={150}
                  height={150}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    TYPESCRIPT CERTIFICATE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  TYPESCRIPT
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  TypeScript Certification
                  Delivering High-Performance Web Solutions with Advanced Type Safety and Best Practices                  </p>
                
                </div>
              </div>
            </div>
            {/* CERTIFICATE */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={"/assets/images/house.jpeg"}
                  width={150}
                  height={150}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Housekeeping certificate
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Housekeeping
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The certificate acknowledges the recipient for successfully completing the Basic Housekeeping course, demonstrating proficiency in essential cleaning, organization, and maintenance skills.                  </p>
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificate;

      