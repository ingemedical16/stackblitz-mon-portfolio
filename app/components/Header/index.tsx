import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo.png"
            alt="X-Dev - Innovative Development Solutions"
            width={40}
            height={40}
            className="h-10 w-10 "
          />
          <h1 className="text-2xl font-bold text-black">
            <Link href="/">Mon Portfolio</Link>
          </h1>
        </div>

        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
