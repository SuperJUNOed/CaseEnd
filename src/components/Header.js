import { setFilterItem } from "../pages/MarketPlace/marketplace.action";
import { useDispatch } from "react-redux";

function Header({ searchItem = "", setSearchItem = () => {} }) {
  const dispatch = useDispatch();
  const handleSearch = (val) => {
    setSearchItem(val);
    dispatch(
      setFilterItem({
        name: val,
      })
    );
  };
  return (
    <>
      <header className="p-2 mx-2 max-w-7xl flex items-center border-b border-gray-800 xl:mx-auto">
        <h1 className="text-2xl font-bold">
          <a href="/">CaseEnd</a>
        </h1>
        <input
          className="ml-4 mr-auto p-1 shadow text-xs"
          type="search"
          placeholder="search..."
          value={searchItem}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </header>
    </>
  );
}

export default Header;
