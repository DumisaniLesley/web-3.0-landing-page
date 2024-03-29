import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaHome,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-10 lg:max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:flex justify-between items-center gap-6 py-10">
        <div>
          <div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent uppercase mb-2">
              WEB 3.0
            </h2>
          </div>
          <p className="max-w-[350px] text-sm">
            Elevate your digital experience with decentralized power, enhanced
            security, and limitless possibilities. Embrace the evolution of the
            internet.
          </p>
          <div className="flex gap-2 py-4">
            <div>
              <FaFacebookF className="text-2xl bg-blue-800 p-1 rounded-full" />
            </div>
            <div>
              <FaXTwitter className="text-2xl bg-blue-500 p-1 rounded-full" />
            </div>
            <div>
              <FaInstagram className="text-2xl bg-pink-600 p-1 rounded-full" />
            </div>
            <div>
              <FaYoutube className="text-2xl bg-red-600 p-1 rounded-full" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">Useful Links</h2>
          <ul className="text-sm py-3">
            <li className="my-1">Home</li>
            <li className="my-1">Services</li>
            <li className="my-1">Products</li>
            <li className="my-1">Testimonials</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">Contact Us</h2>
          <ul className="text-sm py-3">
            <li className="my-1 flex items-center gap-2">
              <FaPhoneAlt />
              <span>+260 978 123 456</span>
            </li>
            <li className="my-1 flex items-center gap-2">
              <MdOutlineMail />
              <span>cryto@web.io</span>
            </li>
            <li className="my-1 flex items-center gap-2">
              <FaHome />
              <span>Somewhere Wild</span>
            </li>
          </ul>
        </div>
      </div>
      <hr className="" />
      <div className="text-center text-[10px] py-4">
        <p className="bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">All Rights Reserved @Dumisani {currentYear} </p>
      </div>
    </footer>
  );
};

export default Footer;
