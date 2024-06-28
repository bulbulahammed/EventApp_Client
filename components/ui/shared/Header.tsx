import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/images/logo.png";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src={Logo} width={128} height={38} alt="Event App Logo" />
        </Link>
        <div className="flex w-32 justify-end gap-3"></div>
      </div>
    </header>
  );
};

export default Header;
