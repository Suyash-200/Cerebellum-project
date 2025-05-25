import React from "react";

const QBankSection = () => {
  return (
    <section className="w-full bg-[#1F305E] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col lg:items-start lg:text-left px-2 sm:px-4">
          <img
            src="https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Artboard-1-copy-8@3x.png"
            alt="Q-bank"
            className="w-12 mb-6"
          />
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4">QBanks</h2>
            <h3 className="text-sm sm:text-base text-white leading-relaxed space-y-2">
              <p>- A vast Q. Bank for NEET PG, INI-CET, and FMGE preparation.</p>
              <p>- Q. Bank is regularly updated to reflect the latest exam.</p>
              <p>- Curated by expert faculty, includes over 50000+ questions.</p>
              <p>- Enhances test-taking skills and familiarizes students with exam formats.</p>
            </h3>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 px-2 sm:px-4">
          <img
            src="https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Qbank-3.webp"
            alt="Q-bank large"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default QBankSection;
