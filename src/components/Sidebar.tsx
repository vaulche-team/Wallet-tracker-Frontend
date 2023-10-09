import ProfileImage from "@/src/assets/profile.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { BiWalletAlt } from "react-icons/bi";
import { BsCheck2 } from "react-icons/bs";
// BsCheck2

import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [Show, setShow] = useState(false);

  const toggleDiv = () => {
    setShow(!Show);
  };

  return (
    <div className="">
      <div className="bg-[#292929] p-2 min-h-screen">
        <div className="w-full relative">
          <div className="flex gap-2 p-3">
            <div>
              <Image className="w-8 h-8" alt="None" src={ProfileImage} />
            </div>
            <div className="text-[#DCDCDC] font-bold">
              <p>0x648233..34</p>
              <p>$0.00</p>
            </div>
            <div>
              {Show ? (
                <MdKeyboardArrowUp
                  color="#fff"
                  size="25px"
                  onClick={toggleDiv}
                />
              ) : (
                <MdOutlineKeyboardArrowDown
                  color="#fff"
                  size="25px"
                  onClick={toggleDiv}
                />
              )}
            </div>
          </div>
          <div
            className="flex gap-2 text-[#dcdcdc] font-bold p-2"
            style={{ position: "relative", zIndex: 1 }} // Set a lower z-index and position relative
          >
            <div>
              <IoEyeSharp color={"#2962EF"} size={"25px"} />
            </div>
            <div>Overview</div>
          </div>
          <div>
            {Show && (
              <div
                className="w-[280px] h-auto bg-[#ffffff] absolute top-0 pt-[12px] pb-[12px] h-full mt-[4rem] rounded-lg"
                style={{ zIndex: 2 }} // Set a higher z-index
              >
                <div className="flex gap-2 items-center border-b-2 border-[#DCDCDC]">
                  <div className="ml-2">
                    <Image
                      className="rounded-lg w-8 h-8"
                      alt="None"
                      src={ProfileImage}
                    />
                  </div>
                  <div className="text-[#DCDCDC] font-bold text-sm flex-grow">
                    <p>0x648233..34</p>
                    <p>Metamask</p>
                  </div>
                  <div className="text-end mr-2">
                    <BsCheck2 color={"#2962ef"} size={"20px"} />
                  </div>
                </div>
                <div className="font-bold text-[#DCDCDC] text-sm">
                  <div className="flex gap-2 p-2">
                    <AiOutlinePlus size={"25px"} color={"#DFADE8"} />
                    Connect another wallet
                  </div>
                </div>
                <div className="font-bold text-[#DCDCDC] text-sm flex gap-2 ml-2">
                  <BiWalletAlt size={"25px"} color={"#1049D5"} />
                  <p>Manage wallet</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
