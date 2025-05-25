const ProgramCard = ({ title, highlightText, link, buttonText }) => (
  <div className="relative px-2 py-4 bg-[#1F305E] flex flex-col justify-between rounded-lg shadow-lg">
    <h2 className="text-lg sm:text-xl font-semibold text-white text-start">
      {title} <br />
      <span
        className={
          buttonText === "Enrol Now" ? "text-[#ffff00]" : "text-[#7FDCFF]"
        }
      >
        {highlightText}
      </span>
      <span className="flex justify-end">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-blue-900 px-4 py-1 rounded-sm transition font-bold text-sm"
      >
        {buttonText}
      </a>
    </span>
    </h2>
    
  </div>
);

export default ProgramCard;
