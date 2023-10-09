import React from "react";
import ProfileImage from "@/src/assets/profile.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { PiShareFatBold } from "react-icons/pi";
import { BsSendFill } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";


const Info = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 justify-between md:flex-row">
        <div>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  fontSize=""
                  width={"15rem"}
                  textAlign={"left"}
                  paddingX={"1rem"}
                  paddingY={"0.5rem"}
                  color={"#fff"}
                  background={"transparent"}
                  isActive={isOpen}
                  as={Button}
                  leftIcon={
                    <Image
                      className="w-[5rem] h-[5rem] mt-[55px] rounded-lg"
                      alt="None"
                      src={ProfileImage}
                    />
                  }
                  rightIcon={<ChevronDownIcon />}
                >
                  <div>
                    <Box as="p" fontSize={"16px"}>
                      0x1ae1....6c1c
                    </Box>
                  </div>
                </MenuButton>
                <div>
                  <MenuList
                    fontSize=""
                    marginX={"2rem"}
                    color={"#44444e"}
                    zIndex={"1"}
                  >
                    <MenuItem>
                      <div className="flex items-center font-medium gap-2 text-[#dcdcdc]">
                        <BsQrCodeScan />
                        Show Qr Code
                      </div>
                    </MenuItem>

                    <MenuItem onClick={() => alert("Kagebunshin")}>
                      <div className="flex gap-2 font-medium items-center bg-[#292929] text-[#dcdcdc]">
                        <div>
                          <AiOutlineCopy size={"20px"} />
                        </div>
                        <div className="flex flex-col ">
                          <div>Copy Address</div>
                          <div>
                            <span>
                              0x8080d452F6220441585370213b6B03d05EadD24e
                            </span>
                          </div>
                        </div>
                      </div>
                    </MenuItem>
                  </MenuList>
                </div>
                <div>
                  <Menu>
                    {({ isOpen }) => (
                      <>
                        <MenuButton
                          fontSize=""
                          width={"10rem"}
                          marginLeft={"5.5rem"}
                          textAlign={"left"}
                          paddingX={"1rem"}
                          paddingY={"0.5rem"}
                          color={"#fff"}
                          borderRadius={"15px"}
                          background={"transparent"}
                          isActive={isOpen}
                          as={Button}
                          rightIcon={<BsThreeDots />}
                        >
                          <div>
                            <p className="font-bold">$1522.27</p>
                          </div>
                        </MenuButton>
                        <MenuList
                          fontSize=""
                          marginX={"2rem"}
                          color={"#44444e"}
                          zIndex={"1"}
                        >
                          <MenuItem>
                            <div className="flex gap-2 font-medium items-center bg-[#292929] text-[#dcdcdc]">
                              <div>
                                {/* < size={"20px"} /> */}
                              </div>
                              <div className="flex flex-col ">
                                <div className="text-[#dcdcdc]">
                                  <span>Includes Nfts total</span>
                                </div>
                              </div>
                            </div>
                          </MenuItem>
                        </MenuList>
                      </>
                    )}
                  </Menu>
                </div>
              </>
            )}
          </Menu>
        </div>

        <div className="flex gap-2 items-center">
          <div className="bg-[#1049D5] rounded-full p-2 flex items-center border-2 border-[#555555]">
            <PiShareFatBold size={"20px"} cursor={"pointer"} />
          </div>
          <div className="rounded bg-[#1049D5] rounded-full p-2 flex items-center border-2 border-[#555555] ">
            <BsSendFill size="20px" cursor={"pointer"} color={"#dcdcdc"} />
          </div>
          <div>
            <button className=" bg-[#1049D5] font-medium p-2 rounded-lg pointer border-2 border-[#555555] text-[#dcdcdc]">
              Add wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
