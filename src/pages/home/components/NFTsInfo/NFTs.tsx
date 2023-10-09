import React from "react";

const NFTs = () => {
  return (
    <>
      <div className="h-screen w-screen md:w-full">
        <p className="text-sm font-medium text-[#fff]">Total value by floor price</p>
        <h1 className="font-bold text-[30px] text-[#fff]">
          $0.00
        </h1>
        <div className="flex justify-center items-center mx-auto text-white">
          <div>
            <div className="flex justify-center">
              <span className="text-4xl">🎨</span>
            </div>
            <div className="text-[#fff] font-medium">
              <h1 className="text-3xl">No NFTs yet</h1>
            </div>
            <div className="flex justify-center text-[#fff] font-medium">
              <span>Show All Networks</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTs;
