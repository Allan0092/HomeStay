import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-screen bg-black text-white text-center py-4">
      &copy; {new Date().getFullYear()} Allan Gautam. All rights reserved.
    </footer>
  );
};

export default Footer;
