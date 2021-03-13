import searchBoxStyles from './searchBoxStyles.module.scss';

const SearchBox = () => {
  return (
    <form className={ searchBoxStyles.searchbox }>
      <input
        className={searchBoxStyles.searchbox__input}
        type="text"
        placeholder="Nunca dejes de buscar"
      />
      <button className={ searchBoxStyles.searchbox__button}>
        <i className="material-icons">search</i>
      </button>
    </form>
  );
}

export default SearchBox;