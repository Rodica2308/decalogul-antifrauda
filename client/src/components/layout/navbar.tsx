import { Link, useLocation } from "wouter";
import MobileMenu from "./mobile-menu";
import { Search, ShieldCheck } from "lucide-react";
import { useSearch } from "@/hooks/use-search";

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) {
  const [location] = useLocation();
  const { openSearch } = useSearch();

  const navItems = [
    { text: 'Acasă', path: '/' },
    { text: 'Tipuri de Fraudă', path: '/tipuri-frauda' },
    { text: 'Cum să te Protejezi', path: '/protectie' },
    { text: 'Testează-ți Cunoștințele', path: '/quiz' }
  ];

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary-700 hidden sm:block">CEFCA Secure</span>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8" aria-label="Global">
              {navItems.map((item) => (
                <Link href={item.path} key={item.path}>
                  <a
                    className={`${
                      isActive(item.path)
                        ? "text-primary border-primary"
                        : "border-transparent text-gray-700 hover:text-primary-700"
                    } inline-flex items-center px-1 pt-1 border-b-2 font-medium`}
                  >
                    {item.text}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button 
                onClick={openSearch} 
                className="p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navItems={navItems}
        onSearchClick={() => {
          setIsMobileMenuOpen(false);
          openSearch();
        }}
      />
    </header>
  );
}
