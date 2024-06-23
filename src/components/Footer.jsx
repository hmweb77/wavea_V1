import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-gray-900  pt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-semibold text-white-200 mb-8 underline-yellow">About Us</h3>
              <p className="text-gray-400 text-2xl">Bring your ideas,</p>
              <p className="text-gray-400 text-2xl mb-12">We will take care of the rest.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-yellow-400 w-10 hover:text-white-200">
                <FaLinkedin size={40} />
                </Link>
                <Link href="#" className="text-yellow-400 hover:text-white-200">
                <FaInstagram size={40}  />
                </Link>
              </div> 
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white-200 mb-4 underline-yellow">Quick Links</h3>
              <ul className="text-gray-400 space-y-4">
                <li><Link href="#about" className="text-lg">About Company</Link></li>
                <li><Link href="#services" className="text-lg">Our Services</Link></li>
                <li><Link href="#projects" className="text-lg">Popular Works</Link></li>
                <li><Link href="/" className="text-lg">Contact us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white-200  underline-yellow mb-2">Services</h3>
              <ul className="text-gray-400 space-y-4">
                <li className="text-lg">UX/UI Strategy</li>
                <li className="text-lg">Design</li>
                <li className="text-lg">Development</li>
                <li className="text-lg">Marketing</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-white-200  ">
            <p>&copy; Copyright. All rights reserved. Terms & Conditions</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
