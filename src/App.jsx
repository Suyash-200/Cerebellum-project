import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AnnouncementBar from './components/Header/AnnouncementBar';
import TopBar from "./components/Header/TopBar";
import MobileHeader from "./components/Header/MobileHeader";
// import DesktopHeader from './components/Header/DesktopHeader';
import MegaMenu from "./components/MegaMenu/MegaMenu";
import ImageCarousel from "./components/ImageCarousel";
import HeroSection from "./components/Enroll/HeroSection";
import TopScorersSection from "./components/TopScorersSection";
import FacultyCarousel from "./components/FacultyCarousel";
import LiveSessionSection from "./components/LiveSessionSection";
import ExamSimulationSection from "./components/ExamSimulationSection";
import RecordedLectures from "./components/RecordedLectures";
import QBankSection from "./components/QBankSection";
import PrintedNotesSection from "./components/PrintedNotesSection";
import BTRSection from "./components/BTRSection";
import SuccessStoriesCarousel from "./components/SuccessStoriesCarousel";
import TopRankersCarousel from "./components/TopRankersCarousel";
import TopScorersCarousel from "./components/TopScorersCarousel";
import PreparationSection from "./components/PreparationSection";
import Footer from "./components/Footer";
import RankersSection from "./components/RankersSection";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <TopBar />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MegaMenu />
                </>
              }
            />
          </Routes>
          <ImageCarousel />
          <HeroSection />
          <TopScorersSection />
          <FacultyCarousel />
          <LiveSessionSection />
          <ExamSimulationSection />
          <RecordedLectures />
          <QBankSection />
          <PrintedNotesSection />
          <BTRSection />
          <SuccessStoriesCarousel />
          <TopRankersCarousel />
          <RankersSection />
          <TopScorersCarousel />
          <PreparationSection />
        </main>

        <footer className="bg-[#1F305E] text-white py-0">
          <div className="container mx-auto px-4 flex">
            <Footer />
          </div>
          <section className="w-full relative">
            {/* Image */}
            <img
              src="https://www.cerebellumacademy.com/wp-content/uploads/2023/10/footer-banner-2-1-vf-1.webp"
              alt="footer banner"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </section>
          <section className="w-full bg-[#1F305E] text-center py-1">
            <div className="container mx-auto px-4">
              <h2 className="text-sm text-white">
                © COPYRIGHT CEREBELLUM ACADEMY 2024
              </h2>
            </div>
          </section>
        </footer>
      </div>
    </Router>
  );
};

export default App;
