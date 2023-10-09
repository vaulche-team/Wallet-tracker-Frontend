import Sidebar from "@/src/components/Sidebar";
import WalletData from "@/src/pages/home/components/WalletData";
import InfoTab from "./components/InfoTab";

const Home = () => {
  return (
    <div className="min-h-screen flex">
      <div className="hidden md:block fixed ">
        <Sidebar />
      </div>
    
        <WalletData />
    
    </div>
  );
};

export default Home;
