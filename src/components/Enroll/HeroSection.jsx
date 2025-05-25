import ProgramCard from "./ProgramCard";

const HeroSection = () => (
  <section className="text-center px-4 py-12 max-w-[990px] mx-auto">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
      <span className="text-gray-500">Join The Biggest </span>
      <span className="text-blue-900">Online Live Programs </span>
      <span className="text-gray-500">that have helped many </span>
      <span className="text-blue-900">PG Aspirants </span>
      <span className="text-gray-500">achieve </span>
      <span className="text-blue-900">BETTER Ranks</span>
    </h1>

    <div className="text-center my-6">
      <a
        href="https://dashboard.cerebellumacademy.com/login"
        className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        rel="nofollow"
      >
        Take the first step
      </a>
    </div>

    <p className="text-[#E30002] text-2xl sm:text-3xl font-medium mt-4">
      Conceptual. Comprehensive. Structured. Complete
    </p>

    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-10">
      <ProgramCard
        title="Mission NEET PG / INI CET 2.O"
        highlightText="Crash Course Batch"
        link="https://dashboard.cerebellumacademy.com/login"
        buttonText="Enrol Now"
      />
      <ProgramCard
        title="Mission 200+ FMGE"
        highlightText="To Know Program Details"
        link="https://www.cerebellumacademy.com/fmge-study-plan/"
        buttonText="Click Here"
      />
      <ProgramCard
        title="Mission NEET PG / INI CET 3.O"
        highlightText="To Know Program Details"
        link="https://www.cerebellumacademy.com/mission-plan-3-0-neet-pg-ini-cet/"
        buttonText="Click Here"
      />
      <ProgramCard
        title="Mission 200+ FMGE Crash Course"
        highlightText="New Batch starting from 7th May"
        link="https://dashboard.cerebellumacademy.com/login"
        buttonText="Enrol Now"
      />
      <ProgramCard
        title="BTR by Dr. Zainab Vora"
        highlightText="To Know Program Details"
        link="https://www.cerebellumacademy.com/btr-online-crash-course/"
        buttonText="Click Here"
      />
    </section>

    <div className="text-center py-8">
      <p className="text-[#0F2E7E] text-xl sm:text-2xl font-semibold mb-4">
        Learn From Legendary Faculties at Cerebellum
        <br />
        Where Your Course Completion is Their Responsibility
      </p>
    </div>

    <div className="text-center my-6">
      <a
        href="https://dashboard.cerebellumacademy.com/login"
        className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        rel="nofollow"
      >
        Enroll Now
      </a>
    </div>
  </section>
);

export default HeroSection;
