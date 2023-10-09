import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Tokentrans from "./Tokentransition/Tokentrans";
import Assets from "./AssetsInfo/Assets";
import NFTs from "./NFTsInfo/NFTs";
import TransHistory from "./History/TransHistory";
import Info from "./WalletInfo/Info";

const InfoTab = () => {
  return (
    <>
    <div className="">
       <div className="mt-[2rem] mb-3">
      <Info />
      </div>  
     
    <Tabs padding={"0.5rem"}>
        <TabList style={{ fontWeight: "bold", color: "white" }}>
          <Tab>Token</Tab>
          <Tab>NFts</Tab>
          <Tab>History</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Tokentrans />
            <Assets />
          </TabPanel>
          <TabPanel>
            <NFTs />
          </TabPanel>
          <TabPanel>
            <TransHistory />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    
    </>
  );
};

export default InfoTab;
