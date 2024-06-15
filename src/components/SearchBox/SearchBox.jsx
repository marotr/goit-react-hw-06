
import { useId } from "react";
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice"; // Ensure this import path is correct

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);
  const searchBoxId = useId();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p className={css.searchLabel}>Find contacts by name</p>
      <input 
        className={css.searchBox} 
        type="text" 
        value={filterValue} 
        onChange={handleFilterChange} 
        id={searchBoxId} 
      />
    </div>
  );
};

export default SearchBox;
