import React from "react";

const BTRSection = () => {
  return (
    <section className="bg-[#1F305E] py-12">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row-reverse items-center gap-12">

        {/* Right Image (BTR-1.webp) */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://www.cerebellumacademy.com/wp-content/uploads/2024/06/BTR-1.webp"
            alt="Online BTR by Dr Zainab Vora"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Left Content */}
       <div className="w-full lg:w-1/2 flex flex-col lg:items-start lg:text-left px-4 sm:px-6">
  <img
    src="https://www.cerebellumacademy.com/wp-content/uploads/2024/06/BlueIcons-02-20.png"
    alt="Artboard Icon"
    className="w-12 mb-6"
  />
  <div>
    <h2 className="text-2xl font-bold text-white mb-4">BTR</h2>
    <h3 className="text-md text-white leading-relaxed space-y-2">
      <p>
        - Buri Tarha Ratto AKA Belief Toh Rakho by Dr. Zainab Vora focuses on fruitful topics & PYQs across all 19 subjects.
      </p>
      <p>
        - You will always be ready to answer the questions in the NEET PG, INI-CET, and FMGE tests if you follow this Strategy.
      </p>
    </h3>
  </div>
</div>

      </div>
      <p className="text-md text-white leading-relaxed space-y-2 text-center max-w-[1200px] mx-auto px-4 py-4">
  All these programs are tailored to suit our students, so every learner will get something of their choice based on the preferences and goals set. With your dedication and guidance by experts, succeeding in exams is within your reach. You are welcome to be part of us and embark on an academic voyage leading to excellence!
</p>

    </section>
  );
};

export default BTRSection;
