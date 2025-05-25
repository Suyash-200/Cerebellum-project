import React from "react";

const PrintedNotesSection = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://www.cerebellumacademy.com/wp-content/uploads/2024/12/Books-Page-.webp"
            alt="Books Page"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col lg:items-start lg:text-left">
          <img
            src="https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Artboard-16@3x.png"
            alt="Artboard Icon"
            className="w-12 mb-6"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Printed Hard Copy Notes
            </h2>
            <h3 className="text-sm text-gray-700 leading-relaxed space-y-2">
              <p>
                - Comprehensive Set: 15 printed books covering all 19 subjects
              </p>
              <p>
                - Expertly Derived: From our Main Video Lectures for in-depth
                understanding
              </p>
              <p>
                - High-Yield Focus: Covers all essential topics for NEET PG,
                INI CET, and FMGE
              </p>
              <p>
                - Curated by Legends: Prepared by the renowned faculties of
                Cerebellum Academy
              </p>
              <p>
                - Grasp complex topics in the most memorable way
              </p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintedNotesSection;
