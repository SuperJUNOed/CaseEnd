import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import DetailContent from "./DetailContent";
import DetailSideBar from "./DetailSideBar";
import { useSelector } from "react-redux";

function MarketPlaceDetail() {
  const { id } = useParams();
  const data = useSelector((store) =>
    store?.products?.results?.find((item) => item?.id === Number(id))
  );
  const fileData = useSelector((fileStore) => fileStore?.files?.results);
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-2 flex flex-wrap sm:flex-nowrap xl:mx-auto">
        <DetailSideBar data={data} />
        <DetailContent data={data} fileData={fileData} />
      </main>
    </>
  );
}

export default MarketPlaceDetail;
