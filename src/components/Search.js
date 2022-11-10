import { Input } from 'antd';
import { Divider } from 'antd';
function SearchBar({ keyWord, setKeyWord }) {
  function handleChange(e) {
    console.log(e.target.name, 'e.target.name ----');

    setKeyWord(e.target.value);
  }

  //setFoods(filteredFoods);

  return (
    <div className="search">
      <Input
        placeholder="search"
        name="search"
        value={keyWord}
        type="text"
        onChange={handleChange}
      />
      <Divider dashed />
    </div>
  );
}

export default SearchBar;
