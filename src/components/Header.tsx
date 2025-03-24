import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Ibra <span className="text-blue-400">&lt;&gt;</span> AI
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="/publications" className="hover:text-blue-400 transition-colors">
            Publications
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>
        <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
