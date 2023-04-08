import { useState } from "react";
import { Col, Row } from "antd";
import ContentItem from "./ContentItem";
import { useSelector } from "react-redux";

function Content({ searchItem = "" }) {
  const products = useSelector((store) => store?.products?.results);
  const filterItem = useSelector((store) => store?.filterItem ?? {});
  console.log(filterItem);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  // Filter items based on search query
  let filteredProducts = products;
  if (searchItem !== "") {
    filteredProducts = products?.filter((item) => {
      return item?.name.toLowerCase().includes(searchItem.toLowerCase());
    });
  }
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Determine which items to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = filteredProducts.slice(startIndex, endIndex);

  // Update current page when clicking "Prev" or "Next" buttons
  function handleFirstClick() {
    setCurrentPage(1);
  }
  function handlePrevClick() {
    setCurrentPage(currentPage - 1);
  }
  function handleNextClick() {
    setCurrentPage(currentPage + 1);
  }
  function handleLastClick() {
    setCurrentPage(totalPages);
  }

  return (
    <div className="p-4">
      <Row gutter={[8, 8]}>
        {visibleProducts?.map((item, index) => (
          <Col key={index} xs={12} sm={12} md={8} lg={6}>
            <ContentItem data={item} />
          </Col>
        ))}
      </Row>
      <nav className="flex py-2 mt-4 text-xs">
        <button
          className={`w-full py-2 button ${
            currentPage === 1 ? "invisible" : ""
          }`}
          onClick={handleFirstClick}
        >
          First
        </button>
        <button
          className={`w-full py-2 button ${
            currentPage === 1 ? "invisible" : ""
          }`}
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <input
          className="w-16 px-2 py-0 mx-4"
          type="number"
          value={currentPage}
          onChange={(e) => setCurrentPage(parseInt(e.target.value))}
        />
        <button
          className={`w-full py-2 button ${
            currentPage === totalPages ? "invisible" : ""
          }`}
          onClick={handleNextClick}
        >
          Next
        </button>
        <button
          className={`w-full py-2 button ${
            currentPage === totalPages ? "invisible" : ""
          }`}
          onClick={handleLastClick}
        >
          Last
        </button>
      </nav>
    </div>
  );
}

export default Content;
