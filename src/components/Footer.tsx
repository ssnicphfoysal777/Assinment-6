import React from 'react';

const Footer = () => {
  return (
    <div className='container mx-auto'>
      <footer className="w-full bg-[#101114] border-t border-[#25272c] px-6 py-5">
        <div className="max-w-300 mx-auto flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="FitLog Logo"
              className="w-7 h-7 object-contain"
            />
            <span className="text-white text-xs font-bold tracking-wider">
              FITLOG
            </span>
          </div>

          {/* Copyright */}
          <p className="text-[#858891] text-[10px]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>

        </div>
      </footer>
    </div>
  );
};

export default Footer;