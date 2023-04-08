import { useState } from "react";
import Header from "../../components/Header";
import Content from "./Content";
import SideBar from "./SideBar";

function MarketPlace() {
  const [searchItem, setSearchItem] = useState("");

  return (
    <>
      <Header searchItem={searchItem} setSearchItem={setSearchItem} />
      <main className="max-w-7xl mx-2 flex flex-wrap sm:flex-nowrap xl:mx-auto">
        <SideBar />
        <Content searchItem={searchItem} />
      </main>
    </>
  );
}

export default MarketPlace;
