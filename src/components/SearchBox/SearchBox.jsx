import { useId } from "react";
import css from './SearchBox.module.css'


const SearchBox = ({ value, onFilter }) => {
  
  const searchBoxId = useId();
  

  return (
    <div>
      <p className={css.searchLabel}>Find contacts by name</p>
      <input className={css.searchBox }type="text" value={value} onChange={(e) =>onFilter (e.target.value)} id ={searchBoxId} />
    </div>
);
}

export default SearchBox