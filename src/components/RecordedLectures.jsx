import React from "react";

const RecordedLectures = () => {
  return (
    <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <div className="flex justify-center px-2 sm:px-4">
          <img
            src="https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Recorded-Lecture-4.webp"
            alt="Recorded lectures"
            className="w-full h-auto rounded-lg shadow-lg max-w-full"
          />
        </div>

        {/* Right Icon + Text */}
        <div className="space-y-6 text-gray-800 text-left max-w-full md:max-w-[90%] px-2 sm:px-4">
          <div className="flex md:justify-start">
            <img
              src="https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Artboard-16@3x.png"
              alt="Artboard Icon"
              className="w-12 h-12"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Recorded Lectures
          </h2>
          <ul className="space-y-2 text-base sm:text-lg text-gray-600 list-disc list-inside">
            <li>
              Diverse collection of recorded lectures, accessible through the Cerebellum Academy app.
            </li>
            <li>Available in English and Hinglish Language Both.</li>
            <li>
              Recorded lectures for all 19 subjects are designed for efficient review, helping you to maximize your study time.
            </li>
            <li>Special focus on fruitful areas and Previous Year Questions (PYQs).</li>
            <li>Enhances test-taking skills and familiarity with exam formats.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecordedLectures;
