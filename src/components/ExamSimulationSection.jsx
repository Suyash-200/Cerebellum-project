import React from "react";

const ExamSimulationSection = () => {
  return (
    <section className=" py-12 bg-[#1F305E]">
      <div className="container max-w-[1200px] mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <img
            src="https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Artboard-1-copy-5@3x.png"
            alt="Artboard Icon"
            className="w-12 mb-6"
          />
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-medium text-white mb-4">
            Original Exam Simulated E&Ds and Grand Tests
          </h2>
          <h3 className="text-base sm:text-lg text-white leading-relaxed">
            <span>
              - Experience a unique exam simulation with in-app live E&Ds and Grand Tests <br />
              - This unique feature simulates the environment under which NEET PG, INI-CET, and FMGE exams are set.
            </span>
          </h3>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
  <img
    src="https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Mock-test-4.webp"
    alt="Mock test"
    className="w-full max-w-[600px] rounded-lg shadow-lg"
  />
</div>

      </div>
    </section>
  );
};

export default ExamSimulationSection;
