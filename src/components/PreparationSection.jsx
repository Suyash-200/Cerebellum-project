import React from "react";

const PreparationSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4">
      {/* Icon List & Heading */}
      <div className="text-center mb-10">
        <ul className="inline-flex items-center space-x-2 mb-4 justify-center">
          <li className="flex items-center space-x-1 text-lg font-semibold">
            <span>
              <svg
                aria-hidden="true"
                className="w-3 h-3 fill-current text-black"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="4" />
              </svg>
            </span>
            <span>Get Set Ready</span>
          </li>
        </ul>
        <h2 className="text-5xl font-semibold">Start Your Preparation Today</h2>
      </div>

      {/* Inner Section with Text */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <div className="w-full md:w-2/4 text-center">
          <p className="text-base text-gray-700">
            Our platform is your ultimate solution for NEET PG, INI-CET, and FMGE
            success. With tailored resources and expert guidance, we’re here to help
            you achieve your dreams.
          </p>
        </div>
      </div>

      {/* Modern Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-xl font-bold">
          Join us and take the first step towards a brilliant medical career.
        </h2>
        <div className="w-20 h-1 bg-black mx-auto mt-2"></div>
      </div>

      {/* App Store Links Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
        {/* Android */}
        <div className="flex flex-col items-center space-y-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.cerebellummobileapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.cerebellumacademy.com/wp-content/uploads/2024/06/gplay-1.png"
              alt="Android Play Store"
              width={198}
              height={56}
              className="hidden md:block"
            />
            <img
              src="https://www.cerebellumacademy.com/wp-content/uploads/2024/10/gplay-1.webp"
              alt="Android Play Store"
              width={195}
              height={55}
              className="block md:hidden"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.cerebellummobileapp&hl=en_IN"
            className="text-black"
          >
            NEET PG Preparation Android app
          </a>
        </div>

        {/* iOS */}
        <div className="flex flex-col items-center space-y-2">
          <a
            href="https://apps.apple.com/in/app/cerebellum/id1662462131"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.cerebellumacademy.com/wp-content/uploads/2024/06/appstore-1.png"
              alt="IOS Play Store"
              width={175}
              height={56}
              className="hidden md:block"
            />
            <img
              src="https://www.cerebellumacademy.com/wp-content/uploads/2024/10/appstore-1.webp"
              alt="IOS Play Store"
              width={161}
              height={52}
              className="block md:hidden"
            />
          </a>
          <a
            href="https://apps.apple.com/in/app/cerebellum-neet-pg-inicet-fmge/id1662462131"
            className="text-black"
          >
            NEET PG Preparation iOS app
          </a>
        </div>
      </div>

      {/* Additional iPhone app link */}
      <div className="text-center mb-10">
        <a
          href="https://apps.apple.com/in/app/cerebellum-neet-pg-inicet-fmge/id1662462131"
          className="text-black"
        >
          NEET PG Preparation iphone app
        </a>
      </div>

      {/* Mockup Images */}
      <div className="hidden md:block max-w-[50%] mx-auto">
        <img
          src="https://www.cerebellumacademy.com/wp-content/uploads/2024/06/iPhone-Mockup-1.webp"
          alt="Mock Up Class"
          width={1253}
          height={1400}
          loading="lazy"
        />
      </div>
      <div className="block md:hidden max-w-[430px] mx-auto">
        <img
          src="https://www.cerebellumacademy.com/wp-content/uploads/2024/10/iPhone-Mockup-1-1.webp"
          alt="Mock Up Class"
          width={430}
          height={480}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default PreparationSection;
