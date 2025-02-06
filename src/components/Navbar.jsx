import logo from './../assets/images/HooBank.png';
import logoImg from './../assets/images/logo.png';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ toggle, setToggle }) => {
  const items = [
    { item: 'Home', path: '#home' },
    { item: 'About', path: '#about' },
    { item: 'Contact', path: '#contact' },
    { item: 'Services', path: '#services' },
  ];

  return (
    <nav className="fixed top-0 sm:block bg-primary w-full sm:bg-[#0b041a] z-50 lg:px-16 px-6 py-4 sm:py-6 mx-auto max-w-7xl xl:max-w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logoImg} alt="" />
          <img src={logo} alt="" />
        </div>
        <ul className="md:flex hidden">
          {items.map((item, index) => (
            <li
              key={index}
              className={`text-white hover:text-dimWhite  ${
                index === items.length - 1 ? 'mr-0' : 'mr-12'
              }`}
            >
              <a href={item.path}>{item.item}</a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex text-white cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
        </button>
      </div>

      <nav
        className={`absolute top-20 bg-black-gradient rounded-xl  transition-all ease-linear duration-300 z-50 shadow-sm shadow-cyan-800 ${
          toggle ? 'right-3 ' : 'hidden'
        }`}
      >
        <ul className="block p-4 leading-[60px] text-lg ">
          {items.map((item, index) => (
            <li
              key={index}
              className={`text-white hover:text-dimWhite  ${
                index === items.length - 1 ? 'mr-0' : 'mr-12'
              }`}
            >
              <a onClick={() => setToggle(!toggle)} href={item.path}>
                {item.item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
