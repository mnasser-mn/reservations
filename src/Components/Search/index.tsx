import { useState, useEffect } from "react";
import styles from "./search.module.css";
type Props = {
  onSearch: (keyword: string) => void;
};
export const Search = ({ onSearch }: Props) => {
  const [keyword, setKeyword] = useState<string>("");
  const [debouncedKeyword, setDebouncedKeyword] = useState<string>("");
  const isValidInput = (input: string) => /^[A-Za-z\s]*$/.test(input);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [keyword]);

  useEffect(() => {
    onSearch(debouncedKeyword);
  }, [debouncedKeyword, onSearch]);

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search"
      value={keyword}
      onChange={(e) => {
        const value = e.target.value;
        if (isValidInput(value)) {
          setKeyword(value);
        }
      }}
    />
  );
};
