import React, { createContext, useContext, useState, ReactNode } from 'react';
import { fraudData, SearchResult } from '@/lib/fraud-data';

interface SearchContextType {
  searchResults: SearchResult[];
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  handleSearch: (term: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const handleSearch = (term: string) => {
    if (term.length <= 2) {
      setSearchResults([]);
      return;
    }

    const filteredResults = fraudData.filter(
      item => 
        item.title.toLowerCase().includes(term.toLowerCase()) || 
        item.content.toLowerCase().includes(term.toLowerCase()) ||
        item.category.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return React.createElement(
    SearchContext.Provider,
    { value: { searchResults, isSearchOpen, openSearch, closeSearch, handleSearch } },
    children
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}