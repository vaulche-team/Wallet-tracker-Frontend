import SearchBar from "./SearchBar";
import InfoTab from "./InfoTab";

const WalletData = () => {
  return (
    <div className="min-h-screen grow bg-[#292929]">
      <div className="flex align-items border-b-2 border-[#555555] py-5 justify-center w-full px-8 md:w-[60%] m-auto md:px-0">
        <SearchBar />
      </div>
      <div className="min-h-screen w-full px-8 md:w-[60%] m-auto md:px-0">
        <InfoTab />
      </div>
    </div>
  );
};

export default WalletData;
