import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "../../public/assets/images/logo.png";

const Header = () => {
  return (
    <header className="text-gray-700 h-full w-full bg-purple">
      <div className="border-b border-gray-200">
        <nav className="flex items-center justify-between px-12 h-16">
          <Link href="/">
            <Image
              src={Logo}
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </Link>
          {/* Menu Items */}
          <div className="absolute top-[64px] w-full left-0 right-0 flex flex-col gap-6 items-center bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <ul className="flex flex-col gap-5 items-center text-center">
              <li>Home</li>
              <li>About</li>
              <li>Event</li>
              <li>Create Event</li>
            </ul>
            {/* Authentication Button */}
            <div className="flex flex-col gap-5 items-center text-center">
              <button className="before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40 rounded-sm">
                <span className="relative z-10">Login</span>
              </button>
              <button>SignUp</button>
            </div>
          </div>
          {/* Mobile Menu */}
          <CiMenuBurger />
        </nav>
      </div>
    </header>
  );
};

export default Header;
