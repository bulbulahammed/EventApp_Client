import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  return (
    <header className="h-full w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <div className="container">
        <nav className="flex items-center justify-between px-12 h-16">
          <Link href="/">Logo</Link>
          {/* Menu Items */}
          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Event</li>
              <li>Create Event</li>
            </ul>
          </div>
          {/* Authentication Button */}
          <div>
            <button>Login</button>
            <button>SignUp</button>
          </div>
          {/* Mobile Menu */}
          <CiMenuBurger />
        </nav>
      </div>
    </header>
  );
};

export default Header;
