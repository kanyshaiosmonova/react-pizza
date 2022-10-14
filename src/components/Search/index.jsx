import React from 'react';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import { SearchContext } from '../../App';

const Search = () => {
  const { value, setValue } = React.useState('');
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();
  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    [],
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        data-name="Layer 1"
        id="Layer_1"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title />
        <path d="M16.57,16.15A9,9,0,1,0,15,17.46h0l6.25,6.25,1.42-1.42Zm-3-.14a7.07,7.07,0,1,1,1.56-1.28A6.88,6.88,0,0,1,13.59,16Z" />
      </svg>

      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
          <path d="M0 0h48v48H0z" fill="none" />
        </svg>
      )}
    </div>
  );
};
export default Search;
