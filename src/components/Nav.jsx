import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Nav() {
  /* show links on click */
  const [show, setShowLinks] = useState(false);

  const links = [
    { name: "home", path: "/" },
    { name: "about", path: "/About" },
    { name: "properties", path: "/Properties" },
    { name: "contact", path: "/Contact" },
  ];

  return (
    /* Nav/header */
    <div className="relative bg-myGradient">
      <div className="overlay"></div>
      <div className="relative flex flex-wrap header px-3 md:px-8 z-10 justify-between">
        <div className="logo w-60 cursor-pointer md:w-52">
          <img
            src="./elitedreams logo1.jpg"
            className="w-full h-full z-20"
            alt="elitedreams realty"
          />
        </div>
        {/* Menu Icon */}
        <div
          className="icon flex items-end lg:hidden"
          onClick={() => setShowLinks(!show)}
        >
          <AiOutlineMenu className="text-yellow-600 text-3xl" />
        </div>
        {/* Links */}
        <div
          className={`links w-full mt-4 lg:mt-0 lg:w-4/12 ${
            show ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row items-center lg:items-end`}
        >
          <ul className="w-full lg:flex justify-between">
            {links.map((link, index) => (
              <li
                className="text-white my-2 lg:my-0 "
                key={`${link.name}-${index}`}
              >
                <Link
                  to={link.path}
                  className="w-full flex justify-between uppercase"
                  onClick={() => setShowLinks(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
