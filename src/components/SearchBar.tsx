import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onClear,
  placeholder = 'Buscar productos...',
}) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-neutral-400">
          <Search className="w-4 h-4" strokeWidth={1.7} />
        </div>
        <input
          id="search-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-white text-neutral-900 text-xs sm:text-sm pl-11 pr-10 py-3 rounded-full border border-neutral-200 shadow-2xs placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
        />
        {value.length > 0 && (
          <button
            id="btn-clear-search"
            type="button"
            onClick={onClear}
            aria-label="Limpiar búsqueda"
            className="absolute right-3.5 p-1 rounded-full text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-3.5 h-3.5" strokeWidth={2} />
          </button>
        )}
      </div>
    </div>
  );
};
