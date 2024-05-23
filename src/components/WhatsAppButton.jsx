// components/WhatsAppButton.jsx
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/+351929345644"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 mr-8 bg-white hover:bg-green-400 p-3 rounded-full shadow-lg transition-colors duration-300 sm:bottom-6 sm:right-6"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-green-500 h-12 w-12"/>
    </Link>
  );
};

export default WhatsAppButton;
