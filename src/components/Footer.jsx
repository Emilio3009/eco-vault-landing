import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          {['Twitter','Discord','Telegram','GitHub'].map((network, i) => (
            <a key={i} href="#" className="hover:text-green-600">{network}</a>
          ))}
        </div>
        <div className="flex space-x-4">
          {['Whitepaper','Privacy','TOS'].map((link, i) => (
            <a key={i} href="#" className="hover:underline">{link}</a>
          ))}
        </div>
      </div>
      <div className="text-center mt-4 text-sm">© 2025 EcoVault. All rights reserved.</div>
    </footer>
  );
}
