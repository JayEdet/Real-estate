import { Link } from "react-router-dom";
/* pictures */
import logo from "/elitedreams logo1.jpg";

/* icons */
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
export default function Footer() {
  const quickLinks = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "properties", path: "/properties" },
    { name: "contact", path: "/contact" },
  ];
  const footerIcons = [
    { id: "call", icon: <IoCall /> },
    { id: "mail", icon: <IoMdMail /> },
    { id: "whatsapp", icon: <RiWhatsappFill /> },
    { id: "facebook", icon: <FaFacebook /> },
  ];
  return (
    <div className="flex flex-col gap-3 w-full bg-deepNavy justify-center items-center p-4 border-none">
      <div className="logo hidden md:flex max-w-40">
        <img
          src={logo}
          alt="EliteDreams Realty Logo"
          className="W-full h-full"
        />
      </div>
      <div className="bottom-links flex flex-col gap-3 p-4 w-11/12  md:flex-row justify-between">
        {/* quick links */}
        <div className="">
          <h3 className="bg-offBlue bg-clip-text text-transparent text-center md:text-2xl">
            Quick links
          </h3>
          <ul className="flex gap-3 justify-center md:gap-6">
            <li className="text-white flex gap-6">
              {quickLinks.map((myLink) => (
                <Link to={myLink.path} key={myLink.name}>
                  {myLink.name}
                </Link>
              ))}
            </li>
          </ul>
        </div>
        {/* social icons */}
        <div className="flex flex-col gap-2">
          <h3 className="bg-offBlue bg-clip-text text-transparent text-center md:text-2xl">
            Stay Connected
          </h3>
          <div className="iconDiv flex gap-12 justify-center">
            {footerIcons.map((socials) => (
              <span className="text-white inline-block" key={socials.id}>
                {socials.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
      <h3 className="text-center text-sm text-gray-500">
        &copy; 2024,Elitedreams Realty. All rights reserved
      </h3>
    </div>
  );
}
