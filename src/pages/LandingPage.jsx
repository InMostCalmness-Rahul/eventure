
import React from 'react';
import full_logo from '../assets/full_logo.png';

const LandingPage = ({ onLogin, onRegister }) => {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-fest-blue via-fest-blue-light to-fest-cream">
      <header className="w-full flex flex-col items-center px-4 ">
        <img
          src={full_logo}
          alt="Eventure Logo"
          className="w-50 h-50 md:w-28 md:h-28 drop-shadow-lg animate-bounce-slow mb-0"
        />
      </header>
      <section className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-lg bg-white/90 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <span className="inline-block bg-fest-yellow text-fest-blue font-bold px-4 py-1 rounded-full text-sm md:text-base shadow">
              Explore. Scan. Compete. Win!
            </span>
            <p className="text-gray-700 text-center text-base md:text-lg mt-2">
              Discover booths, scan QR codes, track your progress, and climb the leaderboard. Make your fest experience unforgettable!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full mt-2">
            <button
              className="flex-1 py-3 rounded-xl bg-fest-blue text-white font-semibold text-lg shadow-lg hover:bg-fest-blue-light focus:ring-2 focus:ring-fest-blue transition-all duration-150 focus:outline-none focus:ring-offset-2"
              onClick={onLogin}
              aria-label="Login"
            >
              Login
            </button>
            <button
              className="flex-1 py-3 rounded-xl bg-fest-yellow text-fest-blue font-semibold text-lg shadow-lg hover:bg-fest-cream focus:ring-2 focus:ring-fest-yellow transition-all duration-150 focus:outline-none focus:ring-offset-2"
              onClick={onRegister}
              aria-label="Register"
            >
              Register
            </button>
          </div>
        </div>
      </section>
      <footer className="w-full mt-8 mb-4 flex flex-col items-center text-xs text-gray-500 text-center opacity-80 px-4">
        <div className="flex flex-wrap gap-2 justify-center mb-1">
          <span className="inline-block bg-fest-blue-light text-white px-2 py-1 rounded-full">Mobile-friendly</span>
          <span className="inline-block bg-fest-yellow text-fest-blue px-2 py-1 rounded-full">Accessible</span>
          <span className="inline-block bg-fest-cream text-fest-blue px-2 py-1 rounded-full">Gamified</span>
        </div>
        &copy; {new Date().getFullYear()} Eventure Fest
      </footer>
      <style>{`
        @media (max-width: 640px) {
          .max-w-lg { max-width: 95vw; }
        }
      `}</style>
    </main>
  );
};

export default LandingPage;
