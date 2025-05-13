import { Link, useLocation } from "wouter";
import { Search } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ text: string; path: string }>;
  onSearchClick: () => void;
}

export default function MobileMenu({ isOpen, onClose, navItems, onSearchClick }: MobileMenuProps) {
  const [location] = useLocation();

  if (!isOpen) return null;

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <Link href={item.path} key={item.path}>
            <a
              className={`${
                isActive(item.path)
                  ? "bg-primary-50 text-primary-700"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              } block pl-3 pr-4 py-2 text-base font-medium w-full text-left`}
              onClick={onClose}
            >
              {item.text}
            </a>
          </Link>
        ))}
      </div>
      <div className="pt-2 pb-3 border-t border-gray-200">
        <div className="flex px-4">
          <div className="relative w-full">
            <button
              onClick={onSearchClick}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:border-primary-500 focus:ring-primary-500 text-sm text-left"
            >
              Caută informații...
            </button>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
