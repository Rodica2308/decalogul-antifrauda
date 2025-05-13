import { useRef, useState } from "react";
import { useSearch } from "@/hooks/use-search";
import { Search as SearchIcon, X, Link, CreditCard, User, MonitorSmartphone } from "lucide-react";
import { useLocation } from "wouter";

export default function SearchDialog() {
  const { searchResults, isSearchOpen, closeSearch, handleSearch } = useSearch();
  const [, navigate] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState("");

  if (!isSearchOpen) return null;

  const handleItemClick = () => {
    closeSearch();
    navigate("/tipuri-frauda");
  };

  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'phishing':
        return <Link className="text-amber-500 h-5 w-5 mr-3 mt-1" />;
      case 'banking':
        return <CreditCard className="text-primary h-5 w-5 mr-3 mt-1" />;
      case 'identity':
        return <User className="text-red-500 h-5 w-5 mr-3 mt-1" />;
      case 'remote':
        return <MonitorSmartphone className="text-red-500 h-5 w-5 mr-3 mt-1" />;
      default:
        return <SearchIcon className="text-gray-500 h-5 w-5 mr-3 mt-1" />;
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'phishing':
        return 'bg-amber-50 text-amber-600';
      case 'banking':
        return 'bg-primary-50 text-primary-600';
      case 'identity':
      case 'remote':
        return 'bg-red-50 text-red-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-start justify-center pt-16 px-4">
      <div ref={searchRef} className="bg-white w-full max-w-2xl rounded-lg shadow-xl max-h-[80vh] overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              ref={inputRef}
              autoFocus
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                if (e.target.value.length > 2) {
                  handleSearch(e.target.value);
                }
              }}
              type="search"
              placeholder="Caută informații despre fraude bancare..."
              className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:border-primary-500 focus:ring-primary-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <button 
              onClick={() => {
                setSearchTerm("");
                closeSearch();
              }} 
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          </div>
        </div>
        <div className="p-4">
          {searchTerm.length <= 2 && (
            <p className="text-gray-500 text-center py-4">Introdu cel puțin 3 caractere pentru a începe căutarea</p>
          )}
          
          {searchTerm.length > 2 && searchResults.length === 0 && (
            <p className="text-gray-500 text-center py-4">
              Nu am găsit rezultate pentru "<span>{searchTerm}</span>"
            </p>
          )}
          
          {searchResults.length > 0 && (
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                <span>{searchResults.length}</span> rezultate pentru "<span>{searchTerm}</span>"
              </p>
              
              {searchResults.map((result, index) => (
                <div 
                  key={index}
                  onClick={handleItemClick}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start">
                    <div>
                      {getIconForCategory(result.category)}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{result.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{result.content}</p>
                      <div className="mt-2">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getCategoryStyles(result.category)}`}>
                          {result.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}