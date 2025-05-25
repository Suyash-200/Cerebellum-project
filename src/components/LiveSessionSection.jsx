import React from 'react';

const LiveSessionSection = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 gap-12">
        
        <div className="w-full lg:w-1/2">
          <img
            src="https://www.cerebellumacademy.com/wp-content/uploads/2024/06/live-session.webp"
            alt="Live Session"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
         
          <img
            src="https://www.cerebellumacademy.com/wp-content/uploads/2024/06/Artboard-1-copy-7@3x.png"
            alt="Artboard Icon"
            className="w-12 h-12 object-contain rounded-full"
          />

          <h2 className="text-3xl font-bold text-gray-800">Live Sessions</h2>

          <div className="text-gray-600 space-y-3 text-base leading-relaxed">
            <p>• Engage in interactive live sessions that cover all 19 subjects.</p>
            <p>• These sessions are created to prepare you for exams like NEET PG, INI-CET, and FMGE.</p>
            <p>• Tailor-made schedules and well-structured content help you complete the course on time.</p>
            <p>• High-yielding sessions like the Marathon Series give an extra edge before the exam.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSessionSection;
