import searchBoxStyles from './searchBoxStyles.module.scss';
import {useState, useEffect} from 'react';

const SearchBox = ({searchTerm}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if(searchTerm) setInputValue(searchTerm)
  }, [searchTerm]);

  const onChangeValue = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <form className={ searchBoxStyles.searchbox } action='/items' method="get">
      <input
        name="search"
        className={searchBoxStyles.searchbox__input}
        type="text"
        placeholder="Nunca dejes de buscar"
        value={inputValue}
        onChange={onChangeValue}
      />
      <button type="submit" className={searchBoxStyles.searchbox__button}>
        <i className="material-icons">search</i>
      </button>
    </form>
  );
}

export default SearchBox;