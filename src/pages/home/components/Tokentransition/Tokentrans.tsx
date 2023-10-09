import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Graph from "./Graph";
import { AiOutlineFile } from "react-icons/ai";

const Tokentrans = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        {/* Card 1 */}

        <div className="w-full">
          <h1 className="text-[#DCDCDC] font-bold text-xl mb-2">Performance</h1>
          <Box
            flex={{ base: "1", md: "2" }}
            p={4}
            boxShadow="xs"
            padding="6"
            rounded="lg"
            borderWidth="1px"
            borderColor={"#555555"}
          >
          <Graph />
          </Box>
        </div>

        {/* Card 2 */}
        <div>
          <h1 className="text-[#DCDCDC] font-bold text-xl mb-2">History</h1>
          <div className="w-full md:w-[340px] border border-[#555555] rounded-lg">
            <Box
              flex={{ base: "1", md: "1" }}
              p={4}
              // width={"350px"}
              padding="6"
              // rounded="md"
              // borderWidth='1px'
            >
              <div className="">
                <div className="w-[400px] md:w-full flex justify-between text-[#fff]">
                  <div className="flex gap-2">
                    <div className="h-[24px] w-[24px] relative">
                      <img
                        style={{ borderRadius: "4px" }}
                        src="https://token-icons.s3.amazonaws.com/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
                      />
                      <img
                        style={{
                          position: "absolute",
                          bottom: "-2px",
                          right: "-2px",
                          borderRadius: "4px",
                          height: "12px",
                          width: "12px",
                          overflow: "hidden",
                        }}
                        src="https://chain-icons.s3.amazonaws.com/ethereum.png"
                      />
                    </div>
                    <div className="-mt-[5px]">
                      <h2 className="font-medium">Send</h2>
                      <p className="text-[#fff] text-[10px]">Sep25</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p>-0.009 WETH</p>
                  </div>
                </div>

                <div className="w-[400px] md:w-full flex justify-between text-[#fff] mt-5">
                  <div className="flex gap-2">
                    <div className="h-[24px] w-[24px] relative">
                      <img
                        style={{ borderRadius: "4px" }}
                        src="https://token-icons.s3.amazonaws.com/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
                      />
                      <img
                        style={{
                          position: "absolute",
                          bottom: "-2px",
                          right: "-2px",
                          borderRadius: "4px",
                          height: "12px",
                          width: "12px",
                          overflow: "hidden",
                        }}
                        src="https://chain-icons.s3.amazonaws.com/ethereum.png"
                      />
                    </div>
                    <div className="-mt-[5px]">
                      <h2 className="font-medium">Deposite</h2>
                      <p className="text-[#fff] text-[10px]">Sep25</p>
                    </div>
                  </div>
                  <div className="text-right flex">
                    <p>-0.009</p>
                    <p className="text-[#8db2e5]"> WRAPPEDETHER...</p>
                  </div>
                </div>

                <div className="w-[400px] md:w-full flex justify-between text-[#fff] mt-5">
                  <div className="flex gap-2">
                    <div className="h-[24px] w-[24px] relative border border-2 border-[#CA801F] rounded-full">
                      {/* <img
                        style={{ borderRadius: "4px" }}
                        src="https://token-icons.s3.amazonaws.com/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
                      /> */}

                   <AiOutlineFile size={"20px"} color={"#CA801F"} />
                      <img
                        style={{
                          position: "absolute",
                          bottom: "-2px",
                          right: "-2px",
                          borderRadius: "4px",
                          height: "12px",
                          width: "12px",
                          overflow: "hidden",
                        }}
                        src="https://chain-icons.s3.amazonaws.com/ethereum.png"
                      />
                    </div>
                    <div className="-mt-[5px]">
                      <h2 className="font-medium">Execute</h2>
                      <p className="text-[#fff] text-[10px]">Sep25</p>
                    </div>
                  </div>
                 
                </div>
                <div className="flex justify-center mt-2">
                <button className=" w-[150px] bg-[#1049D5] font-base p-1 rounded-lg pointer border-2 border-[#555555] text-[#dcdcdc]">See All</button>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Tokentrans;
