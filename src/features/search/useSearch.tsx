import { useState, useEffect, ChangeEvent } from 'react';
import Fuse from 'fuse.js';
import { IUser } from '@entities/user-card';
import { useDebouncedCallback } from 'use-debounce';

interface SearchOptions {
  keys: string[];
  threshold?: number;
}

export const useSearch = (data: IUser[], options: SearchOptions) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<IUser[]>([]);
  const fuse = new Fuse(data, options);

  const debouncedOnChangeValue = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.trim());
  }, 500);

  useEffect(() => {
    if (searchValue) {
      const results = fuse.search(searchValue);
      setSearchResults(results.map((result) => result.item));
    } else {
      setSearchResults([]);
    }
  }, [searchValue]);

  return {
    searchValue,
    searchResults,
    debouncedOnChangeValue
  };
};
